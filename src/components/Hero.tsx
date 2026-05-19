const CASINO_URL = 'https://lkiv.cc/dea2';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Gates of Olympus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0515]/70 via-[#0a0515]/50 to-[#0a0515]" />
        <div className="absolute inset-0 bg-gradient-to-r from-olympus-950/40 to-transparent" />
      </div>

      {/* Lightning Effect */}
      <div className="absolute inset-0 bg-white/5 animate-lightning pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-400/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24">
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-5 py-2 mb-8">
            <span className="text-gold-400 text-sm font-medium">⚡ Gates of Olympus — Легендарный слот</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-[var(--font-cinzel)] leading-tight mb-6">
            <span className="text-gradient-gold">Gates of</span>
            <br />
            <span className="text-white">Olympus</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            Откройте врата Олимпа и получите благословение Зевса!
            <br className="hidden sm:block" />
            Множители до <span className="text-gold-400 font-bold">x500</span>, фриспины и невероятные выигрыши
          </p>

          <p className="text-base text-olympus-300 mb-10">
            Используйте промокод <span className="text-gold-400 font-bold text-lg">pixelwin</span> для бонуса
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={CASINO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-olympus px-10 py-4 rounded-2xl text-white font-bold text-lg animate-pulse-glow flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <span>🎰</span>
              Играть в Gates of Olympus
            </a>
            <a
              href="#overview"
              className="px-10 py-4 rounded-2xl border-2 border-olympus-500/50 text-olympus-300 font-semibold hover:bg-olympus-500/10 hover:border-olympus-400 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Узнать больше
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {[
              { value: '96.5%', label: 'RTP' },
              { value: 'x5000', label: 'Макс. выигрыш' },
              { value: 'x500', label: 'Множитель' },
              { value: '5000+', label: 'Игроков онлайн' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10">
                <div className="text-gold-400 text-xl sm:text-2xl font-bold font-[var(--font-cinzel)]">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0515] to-transparent" />
    </section>
  );
}
