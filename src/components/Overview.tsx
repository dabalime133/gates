const CASINO_URL = 'https://lkiv.cc/dea2';

export default function Overview() {
  return (
    <section id="overview" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Обзор игры</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-cinzel)] mt-4 mb-6">
            <span className="text-gradient-gold">Gates of Olympus</span>
            <span className="text-white"> — Слот Зевса</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gates of Olympus — один из самых популярных онлайн-слотов с уникальной механикой Tumble
            и множителями, которые могут привести к колоссальным выигрышам
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/30 to-olympus-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/20">
              <img
                src="/images/zeus-statue.jpg"
                alt="Gates of Olympus — Зевс"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0515]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full px-4 py-2 text-gold-300 text-sm">
                  ⚡ Gates of Olympus — Божественные выигрыши
                </span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="card-olympus rounded-2xl p-6">
              <h3 className="text-xl font-bold font-[var(--font-cinzel)] text-gold-400 mb-3">
                О слоте Gates of Olympus
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Gates of Olympus — это видеослот с игровым полем 6x5 и механикой Tumble (каскадных выигрышей).
                Вместо традиционных линий выплат, в Gates of Olympus символы оплачиваются по системе Scatter Pays —
                достаточно собрать 8 и более одинаковых символов в любой позиции на экране.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎲', title: 'Поле', desc: '6x5 барабанов' },
                { icon: '💎', title: 'Волатильность', desc: 'Высокая' },
                { icon: '🎯', title: 'RTP', desc: '96.50%' },
                { icon: '⚡', title: 'Макс. выигрыш', desc: 'x5000 от ставки' },
              ].map((item) => (
                <div key={item.title} className="card-olympus rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-gold-400 font-semibold text-sm">{item.title}</div>
                  <div className="text-gray-400 text-xs mt-1">{item.desc}</div>
                </div>
              ))}
            </div>

            <a
              href={CASINO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-olympus inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold animate-pulse-glow"
            >
              <span>🎰</span>
              Запустить Gates of Olympus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
