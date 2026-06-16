const mongoose = require('mongoose');
const xlsx = require('xlsx');
const path = require('path');
require('dotenv').config();
require('node:dns').setServers(['1.1.1.1', '8.8.8.8']);

const Exmill = require('./src/models/Exmill');
const Freight = require('./src/models/Freight');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedData = async () => {
  await connectDB();

  const filePath = path.join('d:', 'Rice', 'DCS Rice Bot Prices (1) (1).xlsx');
  const workbook = xlsx.readFile(filePath);

  // Parse ExMill
  const exmillSheet = workbook.Sheets['ExMill'];
  if (exmillSheet) {
    const exmillData = xlsx.utils.sheet_to_json(exmillSheet, { header: 1 });
    // remove header row
    const rows = exmillData.slice(1);
    
    await Exmill.deleteMany(); // Clear old data

    const exmillDocs = [];
    for (const row of rows) {
      if (!row[0] || !row[1] || !row[2]) continue;

      // Make variety robust (e.g. 1121 -> 1121 Basmati)
      let variety = String(row[0]).trim();
      if (['1121', '1509', '1718', '1401', '1885', 'Taj'].includes(variety)) {
        variety = variety + ' Basmati';
      }

      const form = String(row[1]).trim();
      const inrPerKg = Number(row[2]);

      exmillDocs.push({
        variety,
        form,
        inrPerKg,
        inrPerMt: row[4] ? Number(row[4]) : inrPerKg * 1000,
        usdPerMt: row[5] ? Number(row[5]) : 0
      });
    }

    await Exmill.insertMany(exmillDocs);
    console.log(`Seeded ${exmillDocs.length} ExMill records`);
  }

  // Parse Freight
  const freightSheet = workbook.Sheets['Freight'];
  if (freightSheet) {
    const freightData = xlsx.utils.sheet_to_json(freightSheet, { header: 1 });
    const rows = freightData.slice(1);

    await Freight.deleteMany(); // Clear old data

    const freightDocs = [];
    for (const row of rows) {
      if (!row[0] || !row[1]) continue;

      const fullCountryStr = String(row[0]).trim(); // e.g. "UAE — Jebel Ali" or "UAE - Jebel Ali"
      
      let country = fullCountryStr;
      let portName = 'Default';

      if (fullCountryStr.includes('—')) {
        const parts = fullCountryStr.split('—');
        country = parts[0].trim();
        portName = parts[1].trim();
      } else if (fullCountryStr.includes('-')) {
        const parts = fullCountryStr.split('-');
        country = parts[0].trim();
        portName = parts[1].trim();
      } else {
        // If no delimiter found, use the whole string as portName and country
        country = fullCountryStr.trim();
        portName = fullCountryStr.trim();
      }

      const seaFreightUsd = Number(row[1]);
      const cocUsd = row[2] ? Number(row[2]) : 0;

      freightDocs.push({
        country,
        portName,
        seaFreightUsd,
        cocUsd
      });
    }

    await Freight.insertMany(freightDocs);
    console.log(`Seeded ${freightDocs.length} Freight records`);
  }

  process.exit();
};

seedData();
