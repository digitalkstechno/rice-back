const Setting = require('../models/Setting');

// @desc    Get a setting by key
// @route   GET /api/settings/:key
// @access  Public (for now)
exports.getSettingByKey = async (req, res, next) => {
  try {
    let setting = await Setting.findOne({ key: req.params.key });

    if (!setting) {
      const defaultValues = {
        'USD_INR_RATE': '93.50',
        'DOLLAR_RATE': '93.50', // legacy
        'INLAND_FREIGHT_INR': '2000',
        'CUSTOMS_THC_INR': '45000'
      };

      if (defaultValues[req.params.key]) {
        setting = await Setting.create({ key: req.params.key, value: defaultValues[req.params.key] });
      } else {
        return res.status(404).json({ success: false, error: 'Setting not found' });
      }
    }

    res.status(200).json({ success: true, data: setting });
  } catch (err) {
    next(err);
  }
};

// @desc    Update or Create a setting
// @route   PUT /api/settings/:key
// @access  Public (for now)
exports.updateSetting = async (req, res, next) => {
  try {
    const { value } = req.body;

    let setting = await Setting.findOne({ key: req.params.key });

    if (setting) {
      setting.value = value;
      await setting.save();
    } else {
      setting = await Setting.create({ key: req.params.key, value });
    }

    res.status(200).json({ success: true, data: setting });
  } catch (err) {
    next(err);
  }
};
