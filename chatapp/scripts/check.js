// Проверка подключения: токены + список лицензий (мессенджеров).
// node scripts/check.js
const { get } = require('../lib/chatapp');

(async () => {
  const licenses = await get('/v1/licenses');
  console.log(JSON.stringify(licenses, null, 2));
})().catch(e => { console.error(e.message); process.exit(1); });
