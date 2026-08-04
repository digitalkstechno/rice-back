const Lead = require('../models/Lead');
const Exmill = require('../models/Exmill');
const Packaging = require('../models/Packaging');
const Setting = require('../models/Setting');
const Freight = require('../models/Freight');
const mongoose = require('mongoose');
const { SUPPORTED_LANGUAGES, normalizeLang, translateText, getBotMessage, generateQuoteMessage } = require('../utils/i18n');

// Helper to extract language from request or lead preference
const getLangFromReq = async (req) => {
  let lang = req.query.lang || req.query.language || req.body?.lang || req.body?.language || req.headers['x-language'] || req.headers['accept-language'];
  
  if (!lang && (req.body?.leadId || req.body?.id || req.query?.leadId)) {
    const leadId = req.body?.leadId || req.body?.id || req.query?.leadId;
    if (mongoose.Types.ObjectId.isValid(leadId)) {
      const lead = await Lead.findById(leadId).select('language');
      if (lead && lead.language) {
        lang = lead.language;
      }
    }
  }
  return normalizeLang(lang);
};

// Helper function to generate sequential IDs (1, 2, 3...)
const mapWithSequentialId = (items, startId = 1) => {
  return items.map((item, index) => ({ id: String(startId + index), name: item }));
};

// Helper for parsing grams from size string for sorting/grouping
const parseSizeInGrams = (sizeStr) => {
  const s = sizeStr.toLowerCase();
  if (s.includes('g') && !s.includes('kg')) return parseInt(s, 10);
  if (s.includes('kg')) return parseFloat(s) * 1000;
  if (s.includes('lbs')) return parseFloat(s) * 453.592;
  return 0;
};

// @desc    Get supported languages list
// @route   GET /api/bot/menus/languages
// @access  Public
const getLanguages = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: SUPPORTED_LANGUAGES
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get localized bot messages (greetings, options prompt, select button text)
// @route   GET /api/bot/messages
// @access  Public
const getBotMessages = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const name = req.query.name || req.query.fullName || 'User';

    const messages = {
      language: lang,
      welcomeIntro: getBotMessage('welcome_intro', lang),
      welcomeWithName: getBotMessage('welcome_with_name', lang, { name }),
      selectButtonText: getBotMessage('select_button', lang)
    };

    res.status(200).json({
      success: true,
      data: messages
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get just the size groups
// @route   GET /api/bot/menus/size-groups
// @access  Public
const getSizeGroups = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const groups = [
      { id: "1", name: translateText("RETAIL / SMALL PACK", lang) },
      { id: "2", name: translateText("BULK / EXPORT PACK", lang) }
    ];
    res.status(200).json({
      success: true,
      data: groups
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dynamic sizes grouped by Retail vs Bulk
// @route   GET /api/bot/menus/sizes
// @access  Public
const getDynamicSizes = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const distinctSizes = await Packaging.distinct('packSize');
    distinctSizes.sort((a, b) => parseSizeInGrams(a) - parseSizeInGrams(b));

    const retailSizes = [];
    const bulkSizes = [];
    let idCounter = 1;

    distinctSizes.forEach(size => {
      const grams = parseSizeInGrams(size);
      const isLbs = size.toLowerCase().includes('lbs');
      if (isLbs || grams > 25000) {
        bulkSizes.push({ id: String(idCounter++), name: size });
      } else {
        retailSizes.push({ id: String(idCounter++), name: size });
      }
    });

    const keyRetail = translateText("RETAIL / SMALL PACK", lang);
    const keyBulk = translateText("BULK / EXPORT PACK", lang);

    const groups = {
      [keyRetail]: retailSizes,
      [keyBulk]: bulkSizes
    };

    let responseData = groups;
    if (req.query.group) {
      const q = req.query.group.toUpperCase();
      const key = Object.keys(groups).find(k => k.toUpperCase().includes(q));
      if (key) responseData = groups[key];
      else responseData = [];
    }

    res.status(200).json({
      success: true,
      data: responseData
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get just the packaging type groups
// @route   GET /api/bot/menus/packaging-type-groups
// @access  Public
const getPackagingTypeGroups = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const { size, group } = req.query;

    let targetGrams = null;
    if (size) {
      targetGrams = parseSizeInGrams(size);
    }

    const allPackaging = await Packaging.find().select('productName packSize');
    const matchedNames = new Set();

    allPackaging.forEach(doc => {
      if (targetGrams !== null) {
        if (parseSizeInGrams(doc.packSize) === targetGrams) {
          matchedNames.add(doc.productName);
        }
      } else {
        matchedNames.add(doc.productName);
      }
    });

    const groupCounts = {
      "JUTE BAGS": 0,
      "PP / BOPP BAGS": 0,
      "2D POUCHES": 0,
      "3D POUCHES": 0,
      "CENTRE SEAL POUCHES": 0
    };

    matchedNames.forEach(name => {
      const lowerName = name.toLowerCase();
      if (lowerName.includes('jute')) {
        groupCounts["JUTE BAGS"]++;
      } else if (lowerName.includes('2d pouch')) {
        groupCounts["2D POUCHES"]++;
      } else if (lowerName.includes('3d pouch')) {
        groupCounts["3D POUCHES"]++;
      } else if (lowerName.includes('centre seal')) {
        groupCounts["CENTRE SEAL POUCHES"]++;
      } else if (lowerName.includes('pp') || lowerName.includes('bopp') || lowerName.includes('fabric') || lowerName.includes('non-woven')) {
        groupCounts["PP / BOPP BAGS"]++;
      }
    });

    let availableGroups = Object.keys(groupCounts).filter(key => groupCounts[key] > 0);

    if (group) {
      const q = group.toUpperCase();
      availableGroups = availableGroups.filter(g => g.toUpperCase().includes(q));
    }

    const groupsResponse = availableGroups.map((name, index) => ({ 
      id: String(index + 1), 
      name: translateText(name, lang) 
    }));

    res.status(200).json({ success: true, data: groupsResponse });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dynamic packaging types based on size, grouped
// @route   GET /api/bot/menus/packaging-types
// @access  Public
const getDynamicPackagingTypes = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const { size } = req.query;

    let targetGrams = null;
    if (size) {
      targetGrams = parseSizeInGrams(size);
    }

    const allPackaging = await Packaging.find().select('productName packSize');
    const matchedNames = new Set();

    allPackaging.forEach(doc => {
      if (targetGrams !== null) {
        if (parseSizeInGrams(doc.packSize) === targetGrams) {
          matchedNames.add(doc.productName);
        }
      } else {
        matchedNames.add(doc.productName);
      }
    });

    const groups = {
      "JUTE BAGS": [],
      "PP / BOPP BAGS": [],
      "2D POUCHES": [],
      "3D POUCHES": [],
      "CENTRE SEAL POUCHES": []
    };

    let idCounter = 1;
    matchedNames.forEach(name => {
      const lowerName = name.toLowerCase();
      let displayName = name;
      if (displayName.length > 20) {
        displayName = displayName.substring(0, 20) + '..';
      }
      const obj = { id: String(idCounter++), name: displayName };
      if (lowerName.includes('jute')) {
        groups["JUTE BAGS"].push(obj);
      } else if (lowerName.includes('2d pouch')) {
        groups["2D POUCHES"].push(obj);
      } else if (lowerName.includes('3d pouch')) {
        groups["3D POUCHES"].push(obj);
      } else if (lowerName.includes('centre seal')) {
        groups["CENTRE SEAL POUCHES"].push(obj);
      } else if (lowerName.includes('pp') || lowerName.includes('bopp') || lowerName.includes('fabric') || lowerName.includes('non-woven')) {
        groups["PP / BOPP BAGS"].push(obj);
      }
    });

    // Remove empty groups & translate keys
    const translatedGroups = {};
    Object.keys(groups).forEach(key => {
      if (groups[key].length > 0) {
        const translatedKey = translateText(key, lang);
        translatedGroups[translatedKey] = groups[key];
      }
    });

    let responseData = translatedGroups;
    if (req.query.group) {
      const q = req.query.group.toUpperCase();
      const key = Object.keys(translatedGroups).find(k => k.toUpperCase().includes(q));
      if (key) responseData = translatedGroups[key];
      else responseData = [];
    }

    res.status(200).json({
      success: true,
      data: responseData
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get just the variety groups
// @route   GET /api/bot/menus/variety-groups
// @access  Public
const getVarietyGroups = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const groups = [
      { id: "1", name: translateText("BASMATI", lang) },
      { id: "2", name: translateText("NON-BASMATI", lang) }
    ];
    res.status(200).json({ success: true, data: groups });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dynamic rice varieties grouped by Basmati/Non-Basmati
// @route   GET /api/bot/menus/varieties
// @access  Public
const getDynamicVarieties = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const distinctVarieties = await Exmill.distinct('variety');

    const keyBasmati = translateText("BASMATI", lang);
    const keyNonBasmati = translateText("NON-BASMATI", lang);

    const groups = {
      [keyBasmati]: [],
      [keyNonBasmati]: []
    };

    let idCounter = 1;
    distinctVarieties.forEach(v => {
      const obj = { id: String(idCounter++), name: v };
      if (v.toLowerCase().includes('basmati')) {
        groups[keyBasmati].push(obj);
      } else {
        groups[keyNonBasmati].push(obj);
      }
    });

    let responseData = groups;
    if (req.query.group) {
      const q = req.query.group.toUpperCase();
      const key = Object.keys(groups).find(k => k.toUpperCase().includes(q));
      if (key) responseData = groups[key];
      else responseData = [];
    }

    res.status(200).json({
      success: true,
      data: responseData
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get just the form groups
// @route   GET /api/bot/menus/form-groups
// @access  Public
const getFormGroups = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const groups = [
      { id: "1", name: translateText("PROCESSING METHOD", lang) }
    ];
    res.status(200).json({ success: true, data: groups });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dynamic processing forms optionally filtered by variety
// @route   GET /api/bot/menus/forms
// @access  Public
const getDynamicForms = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const { variety } = req.query;
    let filter = {};
    if (variety) {
      filter.variety = { $regex: new RegExp(`^${variety.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`, 'i') };
    }

    const distinctForms = await Exmill.find(filter).distinct('form');
    const mappedForms = mapWithSequentialId(distinctForms);

    const groupKey = translateText("PROCESSING METHOD", lang);
    const groups = {
      [groupKey]: mappedForms
    };

    let responseData = groups;
    if (req.query.group) {
      const q = req.query.group.toUpperCase();
      const key = Object.keys(groups).find(k => k.toUpperCase().includes(q));
      if (key) responseData = groups[key];
      else responseData = [];
    }

    res.status(200).json({
      success: true,
      data: responseData
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new lead from bot
// @route   POST /api/bot/lead
// @access  Public
const createLeadBot = async (req, res, next) => {
  try {
    const { fullName, mobileNumber, companyName, country, contactPerson, phone, language, lang } = req.body;

    const leadLang = normalizeLang(language || lang || req.query.lang || req.query.language);
    const personName = fullName || contactPerson || 'Unknown Contact';

    const lead = await Lead.create({
      contactPerson: personName,
      phone: mobileNumber || phone,
      companyName: companyName || 'Unknown Company',
      country,
      language: leadLang,
      status: 'New'
    });

    const welcomeMessage = getBotMessage('welcome_with_name', leadLang, { name: personName });
    const selectButtonText = getBotMessage('select_button', leadLang);

    res.status(201).json({
      success: true,
      language: leadLang,
      welcomeMessage,
      selectButtonText,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

// Helper to get settings safely
const getSettingsDoc = async () => {
  let settings = await Setting.findOne();
  if (!settings) {
    try {
      settings = await Setting.create({});
    } catch (e) {
      // Ignore unique constraint errors if created concurrently
    }
  }
  return settings || {};
};

// Helper for Region mapping
const getRegionForCountry = (countryStr) => {
  const c = countryStr.toLowerCase();

  const middleEast = ['uae', 'saudi', 'oman', 'qatar', 'kuwait', 'bahrain', 'iraq', 'iran', 'yemen', 'lebanon', 'jordan', 'syria', 'israel', 'palestine', 'dubai', 'abu dhabi'];
  const europe = ['uk', 'germany', 'france', 'italy', 'spain', 'netherland', 'belgium', 'russia', 'sweden', 'norway', 'poland', 'europe', 'ireland', 'portugal', 'greece', 'swiss', 'austria', 'denmark', 'finland'];
  const africa = ['africa', 'nigeria', 'kenya', 'egypt', 'morocco', 'ghana', 'tanzania', 'djibouti', 'somalia', 'senegal', 'ivory coast', 'cameroon', 'sudan', 'uganda', 'algeria', 'angola', 'mozambique', 'madagascar'];
  const asia = ['turkey', 'china', 'malaysia', 'singapore', 'indonesia', 'vietnam', 'philippine', 'bangladesh', 'sri lanka', 'thai', 'korea', 'japan', 'india', 'pakistan', 'nepal', 'myanmar', 'taiwan'];
  const americas = ['usa', 'canada', 'mexico', 'brazil', 'argentina', 'chile', 'colombia', 'peru', 'america', 'caribbean', 'cuba', 'jamaica', 'panama', 'ecuador', 'venezuela', 'uruguay'];
  const oceania = ['australia', 'new zealand', 'fiji', 'png', 'papua', 'samoa'];

  if (middleEast.some(x => c.includes(x))) return "Middle East";
  if (europe.some(x => c.includes(x))) return "EU Europe";
  if (africa.some(x => c.includes(x))) return "Africa";
  if (asia.some(x => c.includes(x))) return "Asia";
  if (americas.some(x => c.includes(x))) return "Americas";
  if (oceania.some(x => c.includes(x))) return "AU Oceania";

  return "Other";
};

// @desc    Get hardcoded regions for CIF
// @route   GET /api/bot/menus/regions
// @access  Public
const getDynamicRegions = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const regions = [
      "Middle East",
      "EU Europe",
      "Africa",
      "Asia",
      "Americas",
      "AU Oceania"
    ];

    const mappedRegions = regions.map((item, index) => ({ 
      id: String(index + 1), 
      name: translateText(item, lang) 
    }));

    const groupKey = translateText("REGION", lang);
    const groups = {
      [groupKey]: mappedRegions
    };

    let responseData = groups;
    if (req.query.group) {
      const q = req.query.group.toUpperCase();
      const key = Object.keys(groups).find(k => k.toUpperCase().includes(q));
      if (key) responseData = groups[key];
      else responseData = [];
    }

    res.status(200).json({
      success: true,
      data: responseData
    });
  } catch (error) {
    next(error);
  }
};

// Sub-region mapping helper
const getSubRegion = (region, countryStr) => {
  const c = countryStr.toLowerCase();
  if (region === 'Middle East') {
    if (['uae', 'saudi', 'qatar', 'bahrain', 'kuwait', 'oman', 'dubai', 'abu dhabi'].some(x => c.includes(x))) return 'GULF';
    return 'LEVANT & YEMEN';
  }
  if (region === 'EU Europe') {
    if (['russia', 'sweden', 'norway', 'denmark', 'finland'].some(x => c.includes(x))) return 'NORDICS & RUSSIA';
    return 'EU & UK';
  }
  if (region === 'Africa') {
    if (['south africa', 'kenya', 'tanzania', 'uganda', 'mozambique', 'madagascar', 'somalia', 'djibouti'].some(x => c.includes(x))) return 'EAST & SOUTH AFRICA';
    return 'WEST & NORTH AFRICA';
  }
  if (region === 'Asia') {
    if (['turkey', 'india', 'pakistan', 'bangladesh', 'sri lanka', 'nepal'].some(x => c.includes(x))) return 'SOUTH ASIA & TURKEY';
    return 'ASEAN & CHINA';
  }
  if (region === 'Americas') {
    if (['usa', 'canada', 'mexico'].some(x => c.includes(x))) return 'NORTH AMERICA';
    return 'LATAM & CARIBBEAN';
  }
  return 'OCEANIA';
};

// @desc    Get just the country sub-regions
// @route   GET /api/bot/menus/country-groups
// @access  Public
const getCountryGroups = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const { region } = req.query;
    const allFreights = await Freight.find().select('country');

    const subRegionsSet = new Set();

    allFreights.forEach(f => {
      const fRegion = getRegionForCountry(f.country);
      if (!region || region === 'Other' || fRegion === region) {
        subRegionsSet.add(getSubRegion(fRegion, f.country));
      }
    });

    const groups = Array.from(subRegionsSet).sort().map((sr, index) => ({ 
      id: String(index + 1), 
      name: translateText(sr, lang) 
    }));

    res.status(200).json({ success: true, data: groups });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dynamic countries/ports grouped by sub-region
// @route   GET /api/bot/menus/countries
// @access  Public
const getDynamicCountries = async (req, res, next) => {
  try {
    const lang = await getLangFromReq(req);
    const { region } = req.query;

    const allFreights = await Freight.find().select('country portName');

    const groups = {};

    allFreights.forEach(f => {
      const fRegion = getRegionForCountry(f.country);
      if (!region || region === 'Other' || fRegion === region) {
        const subRegion = getSubRegion(fRegion, f.country);
        if (!groups[subRegion]) groups[subRegion] = new Set();
        const formatted = `${f.country} — ${f.portName}`;
        groups[subRegion].add(formatted);
      }
    });

    // Convert Sets to Arrays and translate sub-region group titles
    const formattedData = {};
    let idCounter = 1;
    for (const sub in groups) {
      const translatedSubKey = translateText(sub, lang);
      const sortedEntries = Array.from(groups[sub]).sort((a, b) => a.localeCompare(b));
      formattedData[translatedSubKey] = sortedEntries.map(name => {
        let displayName = name;
        if (displayName.length > 20) {
          displayName = displayName.substring(0, 20) + '..';
        }
        return { id: String(idCounter++), name: displayName };
      });
    }

    let responseData = formattedData;
    if (req.query.group) {
      const q = req.query.group.toUpperCase();
      const key = Object.keys(formattedData).find(k => k.toUpperCase().includes(q));
      if (key) responseData = formattedData[key];
      else responseData = [];
    }

    res.status(200).json({
      success: true,
      data: responseData
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Calculate general quote (EX MILL, FOB, CIF based on inputs)
// @route   POST /api/bot/quote
// @access  Public
const calculateQuote = async (req, res, next) => {
  try {
    let { variety, form, size, packType, country, portName, destination, leadId } = req.body;

    const reqLang = await getLangFromReq(req);

    const isStd50kg = size === '50 kg' && !packType;

    let targetCountry = country;
    let targetPort = portName;

    if (destination && (!targetCountry || !targetPort)) {
      const parts = destination.split('—').map(p => p.trim());
      if (parts.length === 2) {
        targetCountry = parts[0];
        targetPort = parts[1];
      }
    }

    if (!variety || !form || !size || (!packType && !isStd50kg)) {
      return res.status(400).json({ success: false, error: 'variety, form, size, and packType are required' });
    }

    const exmillData = await Exmill.findOne({
      variety: { $regex: new RegExp(`^${variety}$`, 'i') },
      form: { $regex: new RegExp(`^${form}$`, 'i') }
    });

    if (!exmillData || !exmillData.inrPerKg) {
      return res.status(404).json({ success: false, error: `ExMill rate not found for ${variety} - ${form}` });
    }

    const inrPerKg = exmillData.inrPerKg;
    const rawInrPerMt = inrPerKg * 1000;

    const settingsDoc = await getSettingsDoc();
    const rate = settingsDoc.usdInrRate || 93.5;
    const inlandInrPerMt = settingsDoc.inlandFreight || 2000;
    const customsInrPerContainer = settingsDoc.customsThc || 45000;

    const roundTo5 = (num) => Math.round(num / 5) * 5;

    let containerMt, packagingUsdPerMt;

    if (isStd50kg) {
      packType = '50 kg PP Bag';
      containerMt = 25;
      packagingUsdPerMt = 10;
    } else {
      const targetGrams = parseSizeInGrams(size);
      const flexiType = packType.replace(/[^a-zA-Z0-9]+/g, '.*');

      const allPacks = await Packaging.find({
        productName: { $regex: new RegExp(flexiType, 'i') }
      });

      const packData = allPacks.find(p => parseSizeInGrams(p.packSize) === targetGrams);

      if (!packData || !packData.mtCapacity || !packData.packagingRate) {
        return res.status(404).json({ success: false, error: `Packaging data not found for ${packType} - ${size}` });
      }

      containerMt = packData.mtCapacity;
      const packInrPerUnit = packData.packagingRate;
      const sizeGrams = parseSizeInGrams(size) || 1000;
      const unitsPerMt = 1000000 / sizeGrams;

      const rawPackUsd = (packInrPerUnit * unitsPerMt) / rate;
      packagingUsdPerMt = roundTo5(rawPackUsd);
    }

    let seaFreightUsdPerContainer = 0;
    let cocUsd = 0;
    let hasFreight = false;

    if (targetCountry && targetPort) {
      const cleanCountry = targetCountry.replace(/\.+$/, '').trim();
      const cleanPort = targetPort.replace(/\.+$/, '').trim();
      const escapeReg = (str) => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

      const freightData = await Freight.findOne({
        country: { $regex: new RegExp(`^${escapeReg(cleanCountry)}`, 'i') },
        portName: { $regex: new RegExp(`^${escapeReg(cleanPort)}`, 'i') }
      });

      if (!freightData) {
        return res.status(404).json({ success: false, error: `Freight data not found for ${targetCountry} - ${targetPort}` });
      }

      seaFreightUsdPerContainer = freightData.seaFreightUsd || 0;
      cocUsd = freightData.cocUsd || 0;
      hasFreight = true;
    }

    const rawExMillUsd = rawInrPerMt / rate;
    const rawInlandUsd = inlandInrPerMt / rate;
    const rawCustomsUsd = (customsInrPerContainer / rate) / containerMt;

    const exMillUsdPerMt = roundTo5(rawExMillUsd);
    const inlandUsdPerMt = roundTo5(rawInlandUsd);
    const customsUsdPerMt = roundTo5(rawCustomsUsd);

    const fobUsdPerMt = exMillUsdPerMt + inlandUsdPerMt + customsUsdPerMt + packagingUsdPerMt;

    let totalSeaAndCocUsdPerMt = 0;
    let cifUsdPerMt = null;

    if (hasFreight) {
      const rawSeaFreightUsd = seaFreightUsdPerContainer / containerMt;
      const rawCocUsd = cocUsd / containerMt;

      const seaFreightUsdPerMt = roundTo5(rawSeaFreightUsd);
      const cocUsdPerMt = roundTo5(rawCocUsd);

      totalSeaAndCocUsdPerMt = seaFreightUsdPerMt + cocUsdPerMt;
      cifUsdPerMt = fobUsdPerMt + totalSeaAndCocUsdPerMt;
    }

    // Format Date
    const today = new Date();
    const dateOpts = { day: 'numeric', month: 'short', year: 'numeric' };
    const dateString = today.toLocaleDateString('en-GB', dateOpts);

    const inrPerMt = Math.round(rawInrPerMt / 100) * 100;
    const roundedInrPerKg = inrPerMt / 1000;
    const inrPerMtStr = inrPerMt.toLocaleString('en-IN');

    const destName = hasFreight ? `${targetCountry} — ${targetPort}` : '';

    const quoteDetails = {
      variety,
      form,
      size,
      packType,
      destName,
      hasFreight,
      isStd50kg,
      dateString,
      inrPerMtStr,
      roundedInrPerKg,
      exMillUsdPerMt,
      inlandUsdPerMt,
      customsUsdPerMt,
      packagingUsdPerMt,
      fobUsdPerMt,
      totalSeaAndCocUsdPerMt,
      cifUsdPerMt,
      containerMt,
      rate
    };

    const message = generateQuoteMessage(quoteDetails, reqLang);

    const quoteData = {
      variety,
      form,
      size,
      packType,
      destination: hasFreight ? destName : null,
      containerMt,
      inrPerMt,
      inrPerKg: roundedInrPerKg,
      exMillUsdPerMt,
      inlandUsdPerMt,
      customsUsdPerMt,
      packagingUsdPerMt,
      fobUsdPerMt,
      ...(hasFreight && {
        seaFreightUsdPerMt: totalSeaAndCocUsdPerMt,
        cifUsdPerMt
      }),
      rate,
      language: reqLang,
      message
    };

    const finalLeadId = leadId || req.body.id;
    if (finalLeadId) {
      await Lead.findByIdAndUpdate(finalLeadId, { quote: quoteData, language: reqLang });
    }

    res.status(200).json({
      success: true,
      leadId: finalLeadId,
      data: quoteData
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Get Lead by ID
// @route   GET /api/bot/lead/:id
// @access  Public
const getLeadById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Lead ID is required' });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: 'Invalid Lead ID format' });
    }

    const lead = await Lead.findById(id);

    if (!lead) {
      return res.status(404).json({ success: false, error: 'Lead not found' });
    }

    res.status(200).json({
      success: true,
      data: lead
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get Lead by Phone Number
// @route   GET /api/bot/lead/phone/:phone
// @access  Public
const getLeadByPhone = async (req, res, next) => {
  try {
    const { phone } = req.params;

    if (!phone) {
      return res.status(400).json({ success: false, error: 'Phone number is required' });
    }

    const lead = await Lead.findOne({ phone: phone });

    if (!lead) {
      return res.status(404).json({ success: false, error: 'Lead not found' });
    }

    res.status(200).json({
      success: true,
      data: lead
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLanguages,
  getBotMessages,
  getSizeGroups,
  getDynamicSizes,
  getPackagingTypeGroups,
  getDynamicPackagingTypes,
  getVarietyGroups,
  getDynamicVarieties,
  getFormGroups,
  getDynamicForms,
  getDynamicRegions,
  getCountryGroups,
  getDynamicCountries,
  calculateQuote,
  createLeadBot,
  getLeadById,
  getLeadByPhone
};
