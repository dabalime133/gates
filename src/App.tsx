import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import HowToPlay from './components/HowToPlay';
import PromoCode from './components/PromoCode';
import StrategiesTable from './components/StrategiesTable';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const CASINO_URL = 'https://lkiv.cc/dea2';

function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 sm:hidden">
      <a
        href={CASINO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-olympus flex items-center gap-2 px-5 py-3 rounded-full text-white font-bold shadow-2xl shadow-gold-500/30 animate-pulse-glow"
      >
        <span>⚡</span>
        Играть
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0515] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <div className="section-divider max-w-2xl mx-auto" />
        <Overview />
        <div className="section-divider max-w-2xl mx-auto" />
        <Features />
        <div className="section-divider max-w-2xl mx-auto" />
        <HowToPlay />
        <div className="section-divider max-w-2xl mx-auto" />
        <PromoCode />
        <div className="section-divider max-w-2xl mx-auto" />
        <StrategiesTable />
        <div className="section-divider max-w-2xl mx-auto" />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
