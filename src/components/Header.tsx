import { useState, useEffect } from 'react';

const CASINO_URL = 'https://lkiv.cc/dea2';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Обзор', href: '#overview' },
    { label: 'Особенности', href: '#features' },
    { label: 'Как играть', href: '#howto' },
    { label: 'Промокод', href: '#promo' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0515]/95 backdrop-blur-xl shadow-2xl shadow-olympus-900/30 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-xl font-bold text-olympus-950 font-[var(--font-cinzel)]">
              ⚡
            </div>
          </div>
          <span className="text-xl font-bold font-[var(--font-cinzel)] text-gradient-gold hidden sm:block">
            Gates of Olympus
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href={CASINO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-olympus px-6 py-2.5 rounded-xl text-white font-semibold text-sm animate-pulse-glow hidden sm:inline-block"
          >
            Играть сейчас
          </a>
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gold-400 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0515]/98 backdrop-blur-xl border-t border-olympus-800/50 mt-2">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-gold-400 font-medium py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CASINO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-olympus block text-center px-6 py-3 rounded-xl text-white font-semibold mt-4"
            >
              Играть сейчас
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
