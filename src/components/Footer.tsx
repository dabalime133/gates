const CASINO_URL = 'https://lkiv.cc/dea2';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-olympus-800/30">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-xl">
                ⚡
              </div>
              <span className="text-xl font-bold font-[var(--font-cinzel)] text-gradient-gold">
                Gates of Olympus
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Информационный ресурс, посвящённый обзору слота Gates of Olympus.
              Здесь вы найдёте полный обзор Gates of Olympus, стратегии, советы и эксклюзивные бонусы.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 font-semibold font-[var(--font-cinzel)] mb-4">Навигация</h4>
            <ul className="space-y-2">
              {[
                { label: 'Обзор Gates of Olympus', href: '#overview' },
                { label: 'Особенности', href: '#features' },
                { label: 'Как играть', href: '#howto' },
                { label: 'Промокод', href: '#promo' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-gold-400 font-semibold font-[var(--font-cinzel)] mb-4">Начать играть</h4>
            <p className="text-gray-400 text-sm mb-4">
              Используйте промокод <span className="text-gold-400 font-bold">pixelwin</span> при регистрации
              для получения бонуса в Gates of Olympus.
            </p>
            <a
              href={CASINO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-olympus inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
            >
              ⚡ Играть в Gates of Olympus
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-olympus-800/30 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Gates of Olympus — Обзор слота. Все права защищены.
              Информационный ресурс. 18+
            </p>
            <p className="text-gray-600 text-xs text-center">
              Играйте ответственно. Gates of Olympus — игра для развлечения.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
