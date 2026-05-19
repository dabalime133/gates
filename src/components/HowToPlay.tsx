const CASINO_URL = 'https://lkiv.cc/dea2';

const steps = [
  {
    step: '01',
    icon: '📝',
    title: 'Зарегистрируйтесь',
    description: 'Создайте аккаунт за несколько секунд. Введите промокод pixelwin при регистрации для получения бонуса на Gates of Olympus.',
  },
  {
    step: '02',
    icon: '💰',
    title: 'Пополните счёт',
    description: 'Внесите первый депозит любым удобным способом. Минимальная сумма — всего от 500₽. Получите бонус на Gates of Olympus.',
  },
  {
    step: '03',
    icon: '🎰',
    title: 'Найдите Gates of Olympus',
    description: 'Найдите слот Gates of Olympus в каталоге игр. Используйте поиск по названию «Gates of Olympus» для быстрого доступа.',
  },
  {
    step: '04',
    icon: '⚡',
    title: 'Выигрывайте!',
    description: 'Установите ставку в Gates of Olympus и начинайте играть. Ловите множители и фриспины для максимальных выигрышей!',
  },
];

export default function HowToPlay() {
  return (
    <section id="howto" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-olympus-950/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Инструкция</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-cinzel)] mt-4 mb-6">
            <span className="text-white">Как играть в </span>
            <span className="text-gradient-gold">Gates of Olympus</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Начните играть в Gates of Olympus за 4 простых шага и получите бонус по промокоду
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-gold-500/30 to-olympus-500/30" />
              )}

              <div className="card-olympus rounded-2xl p-6 text-center h-full relative">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-xs font-bold text-olympus-950">
                  {item.step}
                </div>

                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold font-[var(--font-cinzel)] text-gold-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={CASINO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-olympus inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-bold text-lg animate-pulse-glow"
          >
            <span>🎰</span>
            Начать играть в Gates of Olympus
          </a>
        </div>
      </div>
    </section>
  );
}
