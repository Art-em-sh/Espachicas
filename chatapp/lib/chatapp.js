// ChatApp API (https://api.chatapp.online). Логин: CHATAPP_EMAIL, CHATAPP_PASSWORD, CHATAPP_APP_ID.
// access-токен живёт 24 ч, refresh — 14 дней. Пара хранится в .tokens.json (в .gitignore)
// и обновляется только по необходимости: до истечения (запас 5 мин) или при ошибке токена.
// Цепочка: access -> refresh (POST /v1/tokens/refresh, refresh-токен в Authorization) -> полный логин.
const fs = require('fs');
const path = require('path');
const { need } = require('./env');

const BASE = 'https://api.chatapp.online';
const CACHE = path.join(__dirname, '..', '.tokens.json');
const SKEW = 300; // сек

let tokens = null; // { accessToken, refreshToken, accessTokenEndTime, refreshTokenEndTime } (unix, сек)

const now = () => Math.floor(Date.now() / 1000);
const alive = (t, endKey) => t && t[endKey] - SKEW > now();

function load() {
  try { return JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch { return null; }
}
function save(t) {
  tokens = t;
  try { fs.writeFileSync(CACHE, JSON.stringify(t), { mode: 0o600 }); } catch {}
}

async function call(method, p, { body, auth } = {}) {
  const res = await fetch(BASE + p, {
    method,
    headers: { 'Content-Type': 'application/json', ...(auth && { Authorization: auth }) },
    body: body && JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.success === false) {
    const e = new Error(`chatapp ${res.status} ${JSON.stringify(json.error ?? json)}`);
    e.code = json.error?.code;
    throw e;
  }
  return json.data ?? json;
}

const login = async () => save(await call('POST', '/v1/tokens', {
  body: { email: need('CHATAPP_EMAIL'), password: need('CHATAPP_PASSWORD'), appId: need('CHATAPP_APP_ID') },
}));

async function refresh() {
  try { save(await call('POST', '/v1/tokens/refresh', { auth: tokens.refreshToken })); }
  catch { await login(); } // refresh истёк/невалиден
}

async function ensureToken(force = false) {
  tokens ??= load();
  if (!tokens || !alive(tokens, 'refreshTokenEndTime')) return login();
  if (force || !alive(tokens, 'accessTokenEndTime')) return refresh();
}

// Запрос с автообновлением: при ошибке токена один раз обновляем и повторяем.
async function api(method, p, body) {
  await ensureToken();
  try { return await call(method, p, { body, auth: tokens.accessToken }); }
  catch (e) {
    if (e.code !== 'ApiInvalidTokenError') throw e;
    await ensureToken(true);
    return call(method, p, { body, auth: tokens.accessToken });
  }
}

module.exports = { get: p => api('GET', p), post: (p, b) => api('POST', p, b) };
