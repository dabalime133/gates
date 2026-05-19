import { useState } from 'react';

const CASINO_URL = 'https://lkiv.cc/dea2';

const faqItems = [
  {
    question: 'Что такое Gates of Olympus?',
    answer:
      'Gates of Olympus — это популярный онлайн-слот с тематикой древнегреческой мифологии. Слот Gates of Olympus имеет игровое поле 6x5, механику каскадных выигрышей Tumble и систему выплат Scatter Pays, где для выигрыша достаточно собрать 8+ одинаковых символов в любой позиции.',
  },
  {
    question: 'Какой RTP у Gates of Olympus?',
    answer:
      'RTP (Return to Player) слота Gates of Olympus составляет 96.50%. Это означает, что в долгосрочной перспективе Gates of Olympus возвращает игрокам 96.50% от всех ставок. Волатильность Gates of Olympus — высокая, что означает редкие, но крупные выигрыши.',
  },
  {
    question: 'Как получить фриспины в Gates of Olympus?',
    answer:
      'Для запуска бесплатных вращений в Gates of Olympus необходимо собрать 4 или более символов Scatter (золотой шар). 4 скаттера дают 15 фриспинов. Также в Gates of Olympus доступна функция покупки бонуса за 100x от ставки.',
  },
  {
    question: 'Какой максимальный выигрыш в Gates of Olympus?',
    answer:
      'Максимальный выигрыш в Gates of Olympus составляет x5000 от ставки. Благодаря множителям до x500 и системе накопления множителей во время фриспинов, Gates of Olympus может принести впечатляющие выигрыши.',
  },
  {
    question: 'Как использовать промокод pixelwin?',
    answer:
      'Промокод pixelwin необходимо ввести при регистрации на сайте. После активации промокода вы получите бонус, который можно использовать для игры в Gates of Olympus. Нажмите кнопку «Играть» на нашем сайте для перехода к регистрации.',
  },
  {
    question: 'Можно ли играть в Gates of Olympus на телефоне?',
    answer:
      'Да, Gates of Olympus полностью адаптирован для мобильных устройств. Вы можете играть в Gates of Olympus с любого смартфона или планшета через браузер без скачивания приложений. Качество графики и функционал сохраняются полностью.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Вопросы и ответы</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-cinzel)] mt-4 mb-6">
            <span className="text-white">FAQ по </span>
            <span className="text-gradient-gold">Gates of Olympus</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Ответы на самые частые вопросы о слоте Gates of Olympus
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="card-olympus rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-olympus-600/30 to-transparent mb-4" />
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Остались вопросы? Попробуйте Gates of Olympus прямо сейчас!
          </p>
          <a
            href={CASINO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-olympus inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-bold text-lg animate-pulse-glow"
          >
            <span>⚡</span>
            Играть в Gates of Olympus
          </a>
        </div>
      </div>
    </section>
  );
}
