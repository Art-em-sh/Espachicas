// AmoCRM API v4, только чтение (GET). Токен: AMOCRM_LONG_LIVED_TOKEN, адрес: AMOCRM_BASE_URL.
const { need } = require('./env');

async function get(p) {
  const res = await fetch(need('AMOCRM_BASE_URL') + '/api/v4/' + p, {
    headers: { Authorization: 'Bearer ' + need('AMOCRM_LONG_LIVED_TOKEN') },
  });
  if (res.status === 204) return { _embedded: {} };
  const body = await res.json();
  if (res.status >= 400) throw new Error(`amo ${res.status} ${JSON.stringify(body)}`);
  return body;
}

// Забирает все страницы списка (limit 250).
async function getAll(p, key, maxPages = 60) {
  const out = [];
  for (let page = 1; page <= maxPages; page++) {
    const b = await get(p + (p.includes('?') ? '&' : '?') + `limit=250&page=${page}`);
    out.push(...(b._embedded?.[key] ?? []));
    if (!b._links?.next) break;
  }
  return out;
}

// Мадрид (Europe/Madrid, UTC+1 зимой / UTC+2 летом, переход на летнее время учитывается).
// Границы суток и дата по таймстемпу.
const TZ = 'Europe/Madrid';
const dayFmt = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' });
const madridDay = ts => dayFmt.format(new Date(ts * 1000));

// Смещение Мадрида (в секундах) в заданный момент.
function offsetSec(ms) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
    timeZone: TZ, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
  }).formatToParts(new Date(ms)).map(x => [x.type, +x.value]));
  return (Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second) - Math.floor(ms / 1000) * 1000) / 1000;
}
// Таймстемп начала суток YYYY-MM-DD по Мадриду.
const dayStart = d => {
  const utcMidnight = new Date(d + 'T00:00:00Z').getTime();
  let ts = utcMidnight - offsetSec(utcMidnight) * 1000;
  ts = utcMidnight - offsetSec(ts) * 1000; // уточнение на границе перехода
  return Math.floor(ts / 1000);
};

module.exports = { get, getAll, dayStart, madridDay };
