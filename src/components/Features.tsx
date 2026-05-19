const CASINO_URL = 'https://lkiv.cc/dea2';

const features = [
  {
    icon: '⚡',
    title: 'Множители в Gates of Olympus',
    description:
      'В Gates of Olympus случайные множители от x2 до x500 падают на барабаны. Они суммируются во время каскадных выигрышей, создавая невероятные комбинации. Это главная особенность слота Gates of Olympus.',
    image: '/images/feature-multiplier.jpg',
  },
  {
    icon: '🌀',
    title: 'Фриспины Gates of Olympus',
    description:
      'Соберите 4+ символа Scatter в Gates of Olympus и получите 15 бесплатных вращений. Все множители накапливаются в течение раунда, и в конце общий множитель применяется ко всем выигрышам. Фриспины можно продлить!',
    image: '/images/feature-freespins.jpg',
  },
  {
    icon: '🏛️',
    title: 'Каскадные выигрыши (Tumble)',
    description:
      'В Gates of Olympus после каждого выигрыша символы исчезают, а на их место падают новые. Каскады продолжаются, пока есть выигрышные комбинации — это позволяет получить несколько выигрышей за одно вращение.',
    image: '/images/olympus-gates.jpg',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-olympus-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Особенности</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-cinzel)] mt-4 mb-6">
            <span className="text-white">Бонусы </span>
            <span className="text-gradient-gold">Gates of Olympus</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gates of Olympus предлагает три ключевые механики, которые делают каждое вращение захватывающим
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-gold-500/20 to-olympus-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border border-olympus-700/30">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0515]/60 to-transparent" />
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-olympus-500/20 border border-gold-500/30 flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-[var(--font-cinzel)] text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                <a
                  href={CASINO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-olympus inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold"
                >
                  Попробовать в Gates of Olympus →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
