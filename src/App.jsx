import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import AdvantagesStrip from './sections/AdvantagesStrip';
import PainSection from './sections/PainSection';
import ServicesSection from './sections/ServicesSection';
import MovementSection from './sections/MovementSection';
import EconomySection from './sections/EconomySection';
import TransparencySection from './sections/TransparencySection';
import LegalSection from './sections/LegalSection';
import ProcessSection from './sections/ProcessSection';
import WhyUsSection from './sections/WhyUsSection';
import CTASection from './sections/CTASection';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const revealRef = useReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main ref={revealRef}>
        <HeroSection />
        <AdvantagesStrip />
        <PainSection />
        <ServicesSection />
        <MovementSection />
        <EconomySection />
        <TransparencySection />
        <LegalSection />
        <ProcessSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
