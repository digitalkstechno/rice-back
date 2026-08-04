const http = require('http');

const endpoints = [
  { name: '1. Languages List (Exact 6 languages)', method: 'GET', path: '/api/bot/menus/languages' },
  { name: '2. Messages in Chinese (zh)', method: 'GET', path: '/api/bot/messages?lang=zh&name=Yashvi' },
  { name: '3. Regions in Chinese (zh)', method: 'GET', path: '/api/bot/menus/regions?lang=zh' },
  { name: '4. Variety Groups in Chinese (zh)', method: 'GET', path: '/api/bot/menus/variety-groups?lang=zh' },
  { name: '5. Calculate Quote in Chinese (zh)', method: 'POST', path: '/api/bot/quote', body: { variety: '1121 Basmati', form: 'Steam', size: '50 kg', lang: 'zh' } }
];

async function run() {
  console.log(`\n========================================`);
  console.log(`TESTING 6 EXACT LANGUAGES LIST & CHINESE API`);
  console.log(`========================================`);

  for (const ep of endpoints) {
    await new Promise((res) => {
      const url = `http://localhost:5000${ep.path}`;
      const parsedUrl = new URL(url);
      
      const payload = ep.body ? JSON.stringify(ep.body) : null;
      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || 5000,
        path: parsedUrl.pathname + parsedUrl.search,
        method: ep.method,
        headers: {
          'Content-Type': 'application/json',
          ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {})
        },
        timeout: 5000
      };

      const req = http.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => data += chunk);
        response.on('end', () => {
          console.log(`\n[${ep.name}] ${ep.method} ${ep.path}`);
          console.log(`Status Code: ${response.statusCode}`);
          try {
            const parsed = JSON.parse(data);
            console.log(`Response:`, JSON.stringify(parsed, null, 2));
          } catch (e) {
            console.log(`Raw Response:`, data.substring(0, 300));
          }
          res();
        });
      });

      req.on('error', (err) => {
        console.log(`\n[${ep.name}] ${ep.method} ${ep.path}`);
        console.log(`ERROR: ${err.message}`);
        res();
      });

      if (payload) req.write(payload);
      req.end();
    });
  }
}

run();
