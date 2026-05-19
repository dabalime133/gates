import { useState } from 'react';

const CASINO_URL = 'https://lkiv.cc/dea2';

export default function PromoCode() {
  const [copied, setCopied] = useState(false);

  const copyPromo = () => {
    navigator.clipboard.writeText('pixelwin').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="promo" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-olympus-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="card-olympus rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold-500/30 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold-500/30 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold-500/30 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold-500/30 rounded-br-3xl" />

          <div className="text-5xl mb-6">🎁</div>

          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Эксклюзивный бонус</span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-cinzel)] mt-4 mb-6">
            <span className="text-white">Промокод для </span>
            <span className="text-gradient-gold">Gates of Olympus</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Активируйте промокод при регистрации и получите бонус для игры в Gates of Olympus.
            Увеличьте свои шансы на крупный выигрыш!
          </p>

          {/* Promo Code Box */}
          <div className="promo-box rounded-2xl p-6 sm:p-8 max-w-md mx-auto mb-8">
            <p className="text-gold-300 text-sm mb-3 font-medium">Ваш промокод:</p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-3xl sm:text-4xl font-black font-[var(--font-cinzel)] text-gold-400 tracking-[0.2em]">
                pixelwin
              </div>
            </div>
            <button
              onClick={copyPromo}
              className={`mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                copied
                  ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                  : 'bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20'
              }`}
            >
              {copied ? '✓ Скопировано!' : '📋 Скопировать промокод'}
            </button>
          </div>

          {/* Bonus list */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
            {[
              { icon: '🎰', text: 'Бонус на депозит' },
              { icon: '🔄', text: 'Фриспины' },
              { icon: '💎', text: 'Кэшбэк' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 justify-center bg-white/5 rounded-xl px-4 py-3">
                <span>{b.icon}</span>
                <span className="text-gray-300 text-sm">{b.text}</span>
              </div>
            ))}
          </div>

          <a
            href={CASINO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-olympus inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-bold text-lg animate-pulse-glow"
          >
            <span>⚡</span>
            Активировать и играть в Gates of Olympus
          </a>

          <p className="text-gray-500 text-xs mt-6">
            * Промокод pixelwin действует для новых игроков. Условия бонуса уточняйте на сайте.
          </p>
        </div>
      </div>
    </section>
  );
}
