const express = require('express');
const { getDynamicSizes, getDynamicPackagingTypes, getDynamicVarieties, getDynamicForms, getDynamicRegions, getDynamicCountries, calculateQuote, createLeadBot } = require('../controllers/botController');

const router = express.Router();


// @route   GET /api/bot/menus/sizes
// @desc    Get dynamic sizes grouped
// @access  Public
router.get('/menus/sizes', getDynamicSizes);

// @route   GET /api/bot/menus/packaging-types
// @desc    Get dynamic packaging types grouped (optionally filtered by ?size=)
// @access  Public
router.get('/menus/packaging-types', getDynamicPackagingTypes);

// @route   GET /api/bot/menus/varieties
// @desc    Get dynamic rice varieties grouped by Basmati/Non-Basmati
// @access  Public
router.get('/menus/varieties', getDynamicVarieties);

// @route   GET /api/bot/menus/forms
// @desc    Get dynamic processing forms (optionally filtered by ?variety=)
// @access  Public
router.get('/menus/forms', getDynamicForms);


// @route   GET /api/bot/menus/regions
// @desc    Get dynamic regions
// @access  Public
router.get('/menus/regions', getDynamicRegions);

// @route   GET /api/bot/menus/countries
// @desc    Get dynamic countries (optionally filtered by ?region=)
// @access  Public
router.get('/menus/countries', getDynamicCountries);


// @route   POST /api/bot/quote
// @desc    Calculate quote (EX MILL, FOB, CIF)
// @access  Public
router.post('/quote', calculateQuote);


// @route   POST /api/bot/lead
// @desc    Create lead from bot
// @access  Public
router.post('/lead', createLeadBot);

module.exports = router;
