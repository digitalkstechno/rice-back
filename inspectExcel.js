const xlsx = require('xlsx');
const path = require('path');

const filePath = path.join('d:', 'Rice', 'DCS Rice Bot Prices (1) (1).xlsx');
const workbook = xlsx.readFile(filePath);

const exmillSheet = workbook.Sheets['ExMill'];
const exmillData = xlsx.utils.sheet_to_json(exmillSheet, { header: 1 });

console.log('--- ExMill Data ---');
console.log(exmillData.slice(0, 5));

const freightSheet = workbook.Sheets['Freight'];
if (freightSheet) {
  const freightData = xlsx.utils.sheet_to_json(freightSheet, { header: 1 });
  console.log('--- Freight Data ---');
  console.log(freightData.slice(0, 5));
} else {
  console.log('No Freight sheet found');
}
