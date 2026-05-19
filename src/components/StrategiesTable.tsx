const CASINO_URL = 'https://lkiv.cc/dea2';

const strategies = [
  {
    name: 'Консервативная',
    risk: 'Низкий',
    bet: '0.1% банка',
    desc: 'Минимальные ставки в Gates of Olympus для длительной игры. Подходит для новичков.',
    color: 'from-green-500/20 to-green-600/20',
    border: 'border-green-500/30',
    badge: 'bg-green-500/20 text-green-400',
  },
  {
    name: 'Сбалансированная',
    risk: 'Средний',
    bet: '0.5% банка',
    desc: 'Оптимальный баланс риска и потенциального выигрыша в Gates of Olympus.',
    color: 'from-gold-500/20 to-gold-600/20',
    border: 'border-gold-500/30',
    badge: 'bg-gold-500/20 text-gold-400',
  },
  {
    name: 'Агрессивная',
    risk: 'Высокий',
    bet: '1-2% банка',
    desc: 'Крупные ставки в Gates of Olympus для максимальных множителей. Для опытных игроков.',
    color: 'from-red-500/20 to-red-600/20',
    border: 'border-red-500/30',
    badge: 'bg-red-500/20 text-red-400',
  },
];

const tips = [
  'В Gates of Olympus используйте функцию Ante Bet (+25% к ставке) для удвоения шанса на фриспины',
  'Устанавливайте лимиты на выигрыш и проигрыш перед началом сессии в Gates of Olympus',
  'В Gates of Olympus множители суммируются — фриспины дают наибольший потенциал выигрыша',
  'Попробуйте Gates of Olympus в демо-режиме перед игрой на реальные деньги',
];

export default function StrategiesTable() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-olympus-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Стратегии</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-cinzel)] mt-4 mb-6">
            <span className="text-white">Советы для </span>
            <span className="text-gradient-gold">Gates of Olympus</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Подходы к игре в Gates of Olympus для разных стилей и уровней опыта
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {strategies.map((s) => (
            <div key={s.name} className={`card-olympus rounded-2xl p-6 border ${s.border}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-[var(--font-cinzel)] text-white">{s.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${s.badge}`}>
                  {s.risk}
                </span>
              </div>
              <div className="text-gold-400 font-semibold text-lg mb-3">Ставка: {s.bet}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="card-olympus rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-[var(--font-cinzel)] text-gold-400 mb-6 text-center">
            💡 Полезные советы для Gates of Olympus
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={CASINO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-olympus inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-bold text-lg animate-pulse-glow"
          >
            <span>🎯</span>
            Применить стратегию в Gates of Olympus
          </a>
        </div>
      </div>
    </section>
  );
}
