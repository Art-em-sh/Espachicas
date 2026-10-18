// Лиды воронки Espachicas по дням (Мадрид), только чтение.
// node scripts/leads-report.js 2026-10-02 2026-10-04
const { get, getAll, dayStart, madridDay } = require('../lib/amo');

const PIPELINE = 0; // TODO: ID воронки Espachicas в амо (в Danelya был другой)
const WON = 142;
const LOST = 143;

(async () => {
  const [from, to] = process.argv.slice(2);
  if (!from || !to) { console.log('Использование: node scripts/leads-report.js YYYY-MM-DD YYYY-MM-DD (включительно)'); process.exit(1); }
  const f = dayStart(from), t = dayStart(to) + 86400;

  const created = await getAll(`leads?filter[created_at][from]=${f}&filter[created_at][to]=${t}&with=tags,loss_reason`, 'leads');
  const won = await getAll(`leads?filter[closed_at][from]=${f}&filter[closed_at][to]=${t}&filter[statuses][0][pipeline_id]=${PIPELINE}&filter[statuses][0][status_id]=${WON}&with=tags`, 'leads');
  const tags = l => (l._embedded?.tags ?? []).map(x => x.name);

  const rows = {};
  const row = d => (rows[d] ??= { создано: 0, нелид: 0, лидов_рнп: 0, хл: 0, хл_квал: 0, отказов_хл: 0, продаж_закрыто: 0, из_них_хл: 0, выручка: 0 });
  for (const l of created) {
    const r = row(madridDay(l.created_at)), tg = tags(l);
    r.создано++;
    if (tg.includes('нелид')) r.нелид++;
    if (tg.includes('хл')) {
      r.хл++;
      if (!tg.includes('неквал')) r.хл_квал++;
      if (l.status_id === LOST) r.отказов_хл++;
    }
  }
  for (const l of won) {
    const r = row(madridDay(l.closed_at)), tg = tags(l);
    r.продаж_закрыто++; r.выручка += l.price || 0;
    if (tg.includes('хл')) r.из_них_хл++;
  }
  for (const r of Object.values(rows)) r.лидов_рнп = r.создано - r.нелид;
  console.table(Object.fromEntries(Object.entries(rows).sort()));
})().catch(e => { console.error(e.message); process.exit(1); });
