// Supported Languages Configuration - STRICTLY ONLY THE 6 LANGUAGES FROM UI
const SUPPORTED_LANGUAGES = [
  { id: '1', code: 'en', name: 'English', nativeName: 'English' },
  { id: '2', code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { id: '3', code: 'fr', name: 'French', nativeName: 'Français' },
  { id: '4', code: 'es', name: 'Spanish', nativeName: 'Español' },
  { id: '5', code: 'zh', name: 'Chinese', nativeName: '中文' },
  { id: '6', code: 'ru', name: 'Russian', nativeName: 'Русский' }
];

// Helper to normalize language code/name input strictly for the 6 languages
const normalizeLang = (langInput) => {
  if (!langInput) return 'en';
  const str = String(langInput).trim().toLowerCase();
  
  if (str === 'ar' || str.includes('arab') || str.includes('العربية')) return 'ar';
  if (str === 'fr' || str.includes('fren') || str.includes('french') || str.includes('français')) return 'fr';
  if (str === 'es' || str.includes('span') || str.includes('español')) return 'es';
  if (str === 'zh' || str.includes('chin') || str.includes('中文')) return 'zh';
  if (str === 'ru' || str.includes('russ') || str.includes('русский') || str.includes('рус')) return 'ru';
  
  return 'en';
};

// System & Bot Flow Messages (Exclusively for en, ar, fr, es, zh, ru)
const MESSAGES = {
  welcome_intro: {
    en: "🌾 Welcome to DCS!\n\nI am Rice Bot — your sourcing agent for Indian rice requirements.\n\nBefore I share our latest prices, I need a few quick details (takes 20 seconds).",
    ar: "🌾 مرحباً بك في DCS!\n\nأنا Rice Bot — وكيل المشتريات الخاص بك لمتطلبات الأرز الهندي.\n\nقبل أن أشارك أحدث أسعارنا، أحتاج إلى بعض التفاصيل السريعة (تستغرق 20 ثانية).",
    fr: "🌾 Bienvenue chez DCS !\n\nJe suis Rice Bot — votre agent d'approvisionnement pour les exigences de riz indien.\n\nAvant de partager nos derniers prix, j'ai besoin de quelques détails rapides (cela prend 20 secondes).",
    es: "🌾 ¡Bienvenido a DCS!\n\nSoy Rice Bot, su agente de compras para sus requerimientos de arroz indio.\n\nAntes de compartir nuestros últimos precios, necesito algunos detalles rápidos (toma 20 segundos).",
    zh: "🌾 欢迎来到 DCS！\n\n我是 Rice Bot — 您的印度大米采购代理。\n\n在我为您提供最新价格之前，我需要收集一些简要信息（只需 20 秒）。",
    ru: "🌾 Добро пожаловать в DCS!\n\nЯ Rice Bot — ваш агент по закупкам индийского риса.\n\nПрежде чем я поделилюсь нашими последними ценами, мне нужны некоторые детали (это займет 20 секунд)."
  },

  welcome_with_name: {
    en: "🌾 Welcome to DCS, {name}\n\nI am Rice Bot — your sourcing agent for Indian rice requirements.\n\nPlease choose from the following options:",
    ar: "🌾 مرحباً بك في DCS، {name}\n\nأنا Rice Bot — وكيل المشتريات الخاص بك لمتطلبات الأرز الهندي.\n\nيرجى الاختيار من بين الخيارات التالية:",
    fr: "🌾 Bienvenue chez DCS, {name}\n\nJe suis Rice Bot — votre agent d'approvisionnement pour les exigences de riz indien.\n\nVeuillez choisir parmi les options suivantes :",
    es: "🌾 Bienvenido a DCS, {name}\n\nSoy Rice Bot — su agente de compras para sus requerimientos de arroz indio.\n\nPor favor elija de las siguientes opciones:",
    zh: "🌾 欢迎来到 DCS，{name}\n\n我是 Rice Bot — 您的印度大米采购代理。\n\n请选择以下选项之一：",
    ru: "🌾 Добро пожаловать в DCS, {name}\n\nЯ Rice Bot — ваш агент по закупкам индийского риса.\n\nПожалуйста, выберите один из следующих вариантов:"
  },

  select_button: {
    en: "Select",
    ar: "اختر",
    fr: "Sélectionner",
    es: "Seleccionar",
    zh: "选择",
    ru: "Выбрать"
  }
};

// Dictionary for UI Labels, Groups, Categories (Exclusively en, ar, fr, es, zh, ru)
const DICTIONARY = {
  // Groups / Headers
  "Region": {
    en: "Region",
    ar: "المنطقة",
    fr: "Région",
    es: "Región",
    zh: "地区",
    ru: "Регион"
  },
  "REGION": {
    en: "REGION",
    ar: "المنطقة",
    fr: "RÉGION",
    es: "REGIÓN",
    zh: "地区",
    ru: "РЕГИОН"
  },
  "COUNTRY SUB-REGIONS": {
    en: "COUNTRY SUB-REGIONS",
    ar: "المناطق الفرعية للدولة",
    fr: "SOUS-RÉGIONS PAYS",
    es: "SUB-REGIÓN DE PAÍSES",
    zh: "国家子地区",
    ru: "СУБРЕГИОНЫ СТРАН"
  },
  "RETAIL / SMALL PACK": {
    en: "RETAIL / SMALL PACK",
    ar: "التجزئة / حزمة صغيرة",
    fr: "DÉTAIL / PETIT PAQUET",
    es: "VENTA AL POR MENOR / PACK PEQUEÑO",
    zh: "零售 / 小包装",
    ru: "РОЗНИЧНАЯ / МАЛАЯ УПАКОВКА"
  },
  "BULK / EXPORT PACK": {
    en: "BULK / EXPORT PACK",
    ar: "حزمة الجملة / التصدير",
    fr: "EN VRAC / PAQUET D'EXPORTATION",
    es: "A GRANEL / PAQUETE DE EXPORTACIÓN",
    zh: "大宗 / 出口包装",
    ru: "ОПТОВАЯ / ЭКСПОРТНАЯ УПАКОВКА"
  },
  "JUTE BAGS": {
    en: "JUTE BAGS",
    ar: "أكياس الخيش",
    fr: "SACS DE JUTE",
    es: "BOLSAS DE YUTE",
    zh: "黄麻袋",
    ru: "ДЖУТОВЫЕ МЕШКИ"
  },
  "PP / BOPP BAGS": {
    en: "PP / BOPP BAGS",
    ar: "أكياس PP / BOPP",
    fr: "SACS PP / BOPP",
    es: "BOLSAS PP / BOPP",
    zh: "PP / BOPP 袋",
    ru: "МЕШКИ PP / BOPP"
  },
  "2D POUCHES": {
    en: "2D POUCHES",
    ar: "أكياس 2D",
    fr: "POUCHES 2D",
    es: "BOLSAS 2D",
    zh: "2D 立体袋",
    ru: "2D ПАКЕТЫ"
  },
  "3D POUCHES": {
    en: "3D POUCHES",
    ar: "أكياس 3D",
    fr: "POUCHES 3D",
    es: "BOLSAS 3D",
    zh: "3D 立体袋",
    ru: "3D ПАКЕТЫ"
  },
  "CENTRE SEAL POUCHES": {
    en: "CENTRE SEAL POUCHES",
    ar: "أكياس الختم الأوسط",
    fr: "POUCHES SCELLÉES AU CENTRE",
    es: "BOLSAS CON SELLO CENTRAL",
    zh: "中封袋",
    ru: "ПАКЕТЫ С ЦЕНТРАЛЬНЫМ ШВОМ"
  },
  "BASMATI": {
    en: "BASMATI",
    ar: "بسمتي",
    fr: "BASMATI",
    es: "BASMATI",
    zh: "巴斯马蒂香米",
    ru: "БАСМАТИ"
  },
  "NON-BASMATI": {
    en: "NON-BASMATI",
    ar: "غير بسمتي",
    fr: "NON BASMATI",
    es: "NO BASMATI",
    zh: "非巴斯马蒂大米",
    ru: "НЕ БАСМАТИ"
  },
  "PROCESSING METHOD": {
    en: "PROCESSING METHOD",
    ar: "طريقة المعالجة",
    fr: "MÉTHODE DE TRAITEMENT",
    es: "MÉTODO DE PROCESAMIENTO",
    zh: "加工方式",
    ru: "МЕТОД ОБРАБОТКИ"
  },

  // Regions
  "Middle East": {
    en: "Middle East",
    ar: "الشرق الأوسط",
    fr: "Moyen-Orient",
    es: "Oriente Medio",
    zh: "中东",
    ru: "Ближний Восток"
  },
  "EU Europe": {
    en: "EU Europe",
    ar: "أوروبا",
    fr: "Europe",
    es: "Europa",
    zh: "欧洲",
    ru: "Европа ЕС"
  },
  "Africa": {
    en: "Africa",
    ar: "أفريقيا",
    fr: "Afrique",
    es: "África",
    zh: "非洲",
    ru: "Африка"
  },
  "Asia": {
    en: "Asia",
    ar: "آسيا",
    fr: "Asie",
    es: "Asia",
    zh: "亚洲",
    ru: "Азия"
  },
  "Americas": {
    en: "Americas",
    ar: "الأمريكتان",
    fr: "Amériques",
    es: "Américas",
    zh: "美洲",
    ru: "Америка"
  },
  "AU Oceania": {
    en: "AU Oceania",
    ar: "أوقيانوسيا",
    fr: "Océanie",
    es: "Oceanía",
    zh: "大洋洲",
    ru: "Океания"
  },

  // Sub Regions
  "GULF": { en: "GULF", ar: "الخليج", fr: "GOLFE", es: "GOLFO", zh: "海湾国家", ru: "ПЕРСИДСКИЙ ЗАЛИВ" },
  "LEVANT & YEMEN": { en: "LEVANT & YEMEN", ar: "بلاد الشام واليمن", fr: "LEVANT ET YÉMEN", es: "LEVANTE Y YEMEN", zh: "黎凡特和也门", ru: "ЛЕВАНТ И ЙЕМЕН" },
  "NORDICS & RUSSIA": { en: "NORDICS & RUSSIA", ar: "الدول الشمالية وروسيا", fr: "PAYS NORDIQUES ET RUSSIE", es: "NÓRDICOS Y RUSIA", zh: "北欧和俄罗斯", ru: "СКАНДИНАВИЯ И РОССИЯ" },
  "EU & UK": { en: "EU & UK", ar: "الاتحاد الأوروبي والمملكة المتحدة", fr: "UE ET ROYAUME-UNI", es: "UE Y REINO UNIDO", zh: "欧盟和英国", ru: "ЕС И ВЕЛИКОБРИТАНИЯ" },
  "EAST & SOUTH AFRICA": { en: "EAST & SOUTH AFRICA", ar: "شرق وجنوب أفريقيا", fr: "AFRIQUE DE L'EST ET DU SUD", es: "ÁFRICA ORIENTAL Y DEL SUR", zh: "东非和南非", ru: "ВОСТОЧНАЯ И ЮЖНАЯ АФРИКА" },
  "WEST & NORTH AFRICA": { en: "WEST & NORTH AFRICA", ar: "أفريقيا الغربية والشمالية", fr: "AFRIQUE DE L'OUEST ET DU NORD", es: "ÁFRICA OCCIDENTAL Y DEL NORTE", zh: "西非和北非", ru: "ЗАПАДНАЯ И СЕВЕРНАЯ АФРИКА" },
  "SOUTH ASIA & TURKEY": { en: "SOUTH ASIA & TURKEY", ar: "جنوب آسيا وتركيا", fr: "ASIE DU SUD ET TURQUIE", es: "ASIA DEL SUR Y TURQUÍA", zh: "南亚和土耳其", ru: "ЮЖНАЯ АЗИЯ И ТУРЦИЯ" },
  "ASEAN & CHINA": { en: "ASEAN & CHINA", ar: "آسيان والصين", fr: "ANASE ET CHINE", es: "ASEAN Y CHINA", zh: "东盟和中国", ru: "АСЕАН И КИТАЙ" },
  "NORTH AMERICA": { en: "NORTH AMERICA", ar: "أمريكا الشمالية", fr: "AMÉRIQUE DU NORD", es: "AMÉRICA DEL NORTE", zh: "北美洲", ru: "СЕВЕРНАЯ АМЕРИКА" },
  "LATAM & CARIBBEAN": { en: "LATAM & CARIBBEAN", ar: "أمريكا اللاتينية والكاريبي", fr: "AMÉRIQUE LATINE ET CARAÏBES", es: "AMÉRICA LATINA Y EL CARIBE", zh: "拉美和加勒比", ru: "ЛАТИНСКАЯ АМЕРИКА И КАРИБЫ" },
  "OCEANIA": { en: "OCEANIA", ar: "أوقيانوسيا", fr: "OCÉANIE", es: "OCEANÍA", zh: "大洋洲", ru: "ОКЕАНИЯ" }
};

// Translate function
const translateText = (text, langInput) => {
  if (!text) return text;
  const lang = normalizeLang(langInput);
  if (lang === 'en') return text;

  if (DICTIONARY[text] && DICTIONARY[text][lang]) {
    return DICTIONARY[text][lang];
  }

  return text;
};

// Helper for welcome & bot messages
const getBotMessage = (key, langInput, params = {}) => {
  const lang = normalizeLang(langInput);
  const tObj = MESSAGES[key] || {};
  let msg = tObj[lang] || tObj['en'] || '';

  Object.keys(params).forEach(p => {
    msg = msg.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
  });

  return msg;
};

// Quote Message Generator Localized
const generateQuoteMessage = (quoteDetails, langInput) => {
  const lang = normalizeLang(langInput);

  const {
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
  } = quoteDetails;

  if (lang === 'zh') {
    let msg = '';
    if (isStd50kg) {
      msg += `📋 DCS 标准 50 kg PP FOB — 实时报价\n`;
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 规格: ${size} | 包装: ${packType}\n\n`;
      msg += `💵 出厂价 (Ex-Mill): $${exMillUsdPerMt} USD/吨\n`;
      msg += `🚢 FOB 价格: $${fobUsdPerMt} USD/吨\n\n`;
      msg += `FOB 成本明细 (USD/吨):\n`;
      msg += `• 出厂价: $${exMillUsdPerMt}\n`;
      msg += `• 陆运费: $${inlandUsdPerMt}\n`;
      msg += `• 报关 + THC: $${customsUsdPerMt}\n`;
      msg += `• 包装费: $${packagingUsdPerMt}\n`;
      msg += `• FOB 总价: $${fobUsdPerMt}\n\n`;
      msg += `起订量: 1 × 20' FCL\n`;
      msg += `集装箱装载量: ${containerMt} 吨\n\n`;
      msg += `⚠️ 按汇率 USD/INR ${rate} 计算。`;
    } else {
      if (hasFreight) {
        msg += `📋 DCS CIF — ${destName} — 实时报价\n`;
      } else {
        msg += `📋 DCS 出厂 / FOB — 实时报价\n`;
      }
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 规格: ${size} | 包装: ${packType}\n`;
      if (hasFreight) msg += `🌍 目的港: ${destName}\n`;
      msg += `\n`;
      msg += `💵 米厂门价:\n`;
      msg += `• ₹${inrPerMtStr} / 吨 (约 ₹${roundedInrPerKg} / 公斤)\n`;
      msg += `• $${exMillUsdPerMt} USD/吨 (参考汇率 @ USD/INR ${rate})\n\n`;
      msg += `🚢 FOB: $${fobUsdPerMt} USD/吨\n`;
      if (hasFreight) msg += `📦 CIF ${destName}: $${cifUsdPerMt} USD/吨\n`;
      msg += `\n`;
      msg += `FOB 成本明细 (USD/吨):\n`;
      msg += `• 出厂价: $${exMillUsdPerMt}\n`;
      msg += `• 陆运费: $${inlandUsdPerMt}\n`;
      msg += `• 报关 + THC: $${customsUsdPerMt}\n`;
      msg += `• 包装费: $${packagingUsdPerMt}\n`;
      msg += `• FOB 总价: $${fobUsdPerMt}\n\n`;
      if (hasFreight) {
        msg += `CIF 成本明细至 ${destName} (USD/吨):\n`;
        msg += `• FOB: $${fobUsdPerMt}\n`;
        msg += `• 海运费: $${totalSeaAndCocUsdPerMt}\n`;
        msg += `• CIF 总价: $${cifUsdPerMt}\n\n`;
      }
      msg += `起订量: 1 × 20' FCL\n`;
      msg += `集装箱装载量: ${containerMt} 吨\n\n`;
      msg += `⚠️ 按汇率 USD/INR ${rate} 计算。`;
    }
    return msg;
  }

  if (lang === 'ru') {
    let msg = '';
    if (isStd50kg) {
      msg += `📋 DCS Стандарт 50 кг PP FOB — Текущие цены\n`;
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 Размер: ${size} | Упаковка: ${packType}\n\n`;
      msg += `💵 С завода (Ex-Mill): $${exMillUsdPerMt} USD/Тонна\n`;
      msg += `🚢 Цена FOB: $${fobUsdPerMt} USD/Тонна\n\n`;
      msg += `Расчет цены FOB (USD/Тонна):\n`;
      msg += `• С завода: $${exMillUsdPerMt}\n`;
      msg += `• Доставка по суше: $${inlandUsdPerMt}\n`;
      msg += `• Таможня + THC: $${customsUsdPerMt}\n`;
      msg += `• Упаковка: $${packagingUsdPerMt}\n`;
      msg += `• Итого FOB: $${fobUsdPerMt}\n\n`;
      msg += `Мин. заказ: 1 × 20' FCL\n`;
      msg += `Загрузка контейнера: ${containerMt} Тонн\n\n`;
      msg += `⚠️ Рассчитано по курсу USD/INR ${rate}.`;
    } else {
      if (hasFreight) {
        msg += `📋 DCS CIF — ${destName} — Текущие цены\n`;
      } else {
        msg += `📋 DCS С завода / FOB — Текущие цены\n`;
      }
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 Размер: ${size} | Упаковка: ${packType}\n`;
      if (hasFreight) msg += `🌍 Пункт назначения: ${destName}\n`;
      msg += `\n`;
      msg += `💵 Цена с завода (Mill-Gate Price):\n`;
      msg += `• ₹${inrPerMtStr} / Тонна (≈ ₹${roundedInrPerKg} / кг)\n`;
      msg += `• $${exMillUsdPerMt} USD/Тонна (курс @ USD/INR ${rate})\n\n`;
      msg += `🚢 FOB: $${fobUsdPerMt} USD/Тонна\n`;
      if (hasFreight) msg += `📦 CIF ${destName}: $${cifUsdPerMt} USD/Тонна\n`;
      msg += `\n`;
      msg += `Расчет цены FOB (USD/Тонна):\n`;
      msg += `• С завода: $${exMillUsdPerMt}\n`;
      msg += `• Доставка по суше: $${inlandUsdPerMt}\n`;
      msg += `• Таможня + THC: $${customsUsdPerMt}\n`;
      msg += `• Упаковка: $${packagingUsdPerMt}\n`;
      msg += `• Итого FOB: $${fobUsdPerMt}\n\n`;
      if (hasFreight) {
        msg += `Расчет цены CIF до ${destName} (USD/Тонна):\n`;
        msg += `• FOB: $${fobUsdPerMt}\n`;
        msg += `• Морской фрахт (Sea Freight): $${totalSeaAndCocUsdPerMt}\n`;
        msg += `• Итого CIF: $${cifUsdPerMt}\n\n`;
      }
      msg += `Мин. заказ: 1 × 20' FCL\n`;
      msg += `Загрузка контейнера: ${containerMt} Тонн\n\n`;
      msg += `⚠️ Рассчитано по курсу USD/INR ${rate}.`;
    }
    return msg;
  }

  if (lang === 'ar') {
    let msg = '';
    if (isStd50kg) {
      msg += `📋 DCS قياسي 50 كجم PP FOB - عرض سعر مباشر\n`;
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} - ${form}\n`;
      msg += `📦 الحجم: ${size} | التعبئة: ${packType}\n\n`;
      msg += `💵 من المصنع: $${exMillUsdPerMt} USD/MT\n`;
      msg += `🚢 السعر على ظهر السفينة (FOB): $${fobUsdPerMt} USD/MT\n\n`;
      msg += `تفاصيل تكلفة FOB (USD/MT):\n`;
      msg += `• من المصنع: $${exMillUsdPerMt}\n`;
      msg += `• الشحن الداخلي: $${inlandUsdPerMt}\n`;
      msg += `• الجمارك و رسوم THC: $${customsUsdPerMt}\n`;
      msg += `• تكلفة التعبئة والتغليف: $${packagingUsdPerMt}\n`;
      msg += `• إجمالي FOB: $${fobUsdPerMt}\n\n`;
      msg += `الحد أدنى للطلب: 1 × 20' FCL\n`;
      msg += `حمولة الحاوية: ${containerMt} MT\n\n`;
      msg += `⚠️ الأسعار محسوبة عند USD/INR ${rate}.`;
    } else {
      if (hasFreight) {
        msg += `📋 DCS CIF — ${destName} — عرض سعر مباشر\n`;
      } else {
        msg += `📋 DCS من المصنع / FOB — عرض سعر مباشر\n`;
      }
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 الحجم: ${size} | التعبئة: ${packType}\n`;
      if (hasFreight) msg += `🌍 الوجهة: ${destName}\n`;
      msg += `\n`;
      msg += `💵 سعر المصنع:\n`;
      msg += `• ₹${inrPerMtStr} / MT (حوالي ₹${roundedInrPerKg} / كجم)\n`;
      msg += `• $${exMillUsdPerMt} USD/MT (مرجع @ USD/INR ${rate})\n\n`;
      msg += `🚢 FOB: $${fobUsdPerMt} USD/MT\n`;
      if (hasFreight) msg += `📦 CIF ${destName}: $${cifUsdPerMt} USD/MT\n`;
      msg += `\n`;
      msg += `تفاصيل تكلفة FOB (USD/MT):\n`;
      msg += `• من المصنع: $${exMillUsdPerMt}\n`;
      msg += `• الشحن الداخلي: $${inlandUsdPerMt}\n`;
      msg += `• الجمارك و THC: $${customsUsdPerMt}\n`;
      msg += `• التعبئة: $${packagingUsdPerMt}\n`;
      msg += `• إجمالي FOB: $${fobUsdPerMt}\n\n`;
      if (hasFreight) {
        msg += `تفاصيل تكلفة CIF إلى ${destName} (USD/MT):\n`;
        msg += `• FOB: $${fobUsdPerMt}\n`;
        msg += `• الشحن البحري: $${totalSeaAndCocUsdPerMt}\n`;
        msg += `• إجمالي CIF: $${cifUsdPerMt}\n\n`;
      }
      msg += `الحد أدنى للطلب: 1 × 20' FCL\n`;
      msg += `حمولة الحاوية: ${containerMt} MT\n\n`;
      msg += `⚠️ الأسعار محسوبة عند USD/INR ${rate}.`;
    }
    return msg;
  }

  // Default English
  let message = '';
  if (isStd50kg) {
    message += `📋 DCS Std 50 kg PP FOB — Live Price Quote\n`;
    message += `📅 ${dateString}\n\n`;
    message += `🌾 ${variety} — ${form}\n`;
    message += `📦 Size: ${size} | Packaging: ${packType}\n\n`;
    message += `💵 Ex-Mill: $${exMillUsdPerMt} USD/MT\n`;
    message += `🚢 FOB: $${fobUsdPerMt} USD/MT\n\n`;
    message += `FOB build-up (USD/MT):\n`;
    message += `• Ex-Mill $${exMillUsdPerMt}\n`;
    message += `• Inland Freight $${inlandUsdPerMt}\n`;
    message += `• Customs + THC $${customsUsdPerMt}\n`;
    message += `• Packaging cost $${packagingUsdPerMt}\n`;
    message += `• Total FOB $${fobUsdPerMt}\n\n`;
    message += `Min. order: 1 × 20' FCL\n`;
    message += `Container loading: ${containerMt} MT (depends on bag type)\n`;
    message += `All figures rounded to the nearest USD 5 / MT for clarity.\n\n`;
    message += `⚠️ Prices computed at USD/INR ${rate}.\n`;
    message += `Subject to FX, freight & customs fluctuation.\n`;
    message += `For binding quotes, contract terms, or counter-offers, tap Talk to Sales.`;
  } else {
    if (hasFreight) {
      message += `📋 DCS CIF — ${destName} — Live Price Quote\n`;
    } else {
      message += `📋 DCS EX MILL / FOB — Live Price Quote\n`;
    }

    message += `📅 ${dateString}\n\n`;
    message += `🌾 ${variety} — ${form}\n`;
    message += `📦 Size: ${size} | Packaging: ${packType}\n`;
    if (hasFreight) {
      message += `🌍 Destination: ${destName}\n`;
    }
    message += `\n`;

    message += `💵 Mill-Gate Price:\n`;
    message += `• ₹${inrPerMtStr} / MT (≈ ₹${roundedInrPerKg} / kg)\n`;
    message += `• $${exMillUsdPerMt} USD/MT (reference @ USD/INR ${rate})\n\n`;

    message += `🚢 FOB: $${fobUsdPerMt} USD/MT\n`;
    if (hasFreight) {
      message += `📦 CIF ${destName}: $${cifUsdPerMt} USD/MT\n`;
    }
    message += `\n`;

    message += `FOB build-up (USD/MT):\n`;
    message += `• Ex-Mill $${exMillUsdPerMt}\n`;
    message += `• Inland Freight $${inlandUsdPerMt}\n`;
    message += `• Customs + THC $${customsUsdPerMt}\n`;
    message += `• Packaging cost $${packagingUsdPerMt}\n`;
    message += `• Total FOB $${fobUsdPerMt}\n\n`;

    if (hasFreight) {
      message += `CIF build-up to ${destName} (USD/MT):\n`;
      message += `• FOB $${fobUsdPerMt}\n`;
      message += `• Sea Freight $${totalSeaAndCocUsdPerMt}\n`;
      message += `• Total CIF $${cifUsdPerMt}\n\n`;
    }

    message += `Min. order: 1 × 20' FCL\n`;
    message += `Container loading: ${containerMt} MT (depends on bag type)\n`;
    message += `All figures rounded to the nearest USD 5 / MT for clarity.\n\n`;
    message += `⚠️ Prices computed at USD/INR ${rate}`;
  }

  return message;
};

module.exports = {
  SUPPORTED_LANGUAGES,
  normalizeLang,
  translateText,
  getBotMessage,
  generateQuoteMessage
};
