// Читает ключи из переменных окружения (облако Claude Code).
// Локально, если переменной нет, подхватывает .env из корня репозитория.
const fs = require('fs');
const path = require('path');

function loadDotEnv() {
  const file = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(file)) return {};
  return Object.fromEntries(
    fs.readFileSync(file, 'utf8').split('\n')
      .filter(l => l.includes('=') && !l.trim().startsWith('#'))
      .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, '')]; })
  );
}

const fileEnv = loadDotEnv();

function need(name) {
  const v = process.env[name] ?? fileEnv[name];
  if (!v) throw new Error(`Не задана переменная ${name}. См. .env.example и README.`);
  return v;
}

module.exports = { need };
