import { legalPoints } from '../data/services';
import { ShieldIcon, InsuranceIcon, TaxIcon, FraudIcon } from '../components/ui/Icons';
import legalBg from '../assets/sections/legal-bg.png';

const iconMap = {
  shield: ShieldIcon,
  insurance: InsuranceIcon,
  tax: TaxIcon,
  fraud: FraudIcon,
};

const badges = ['Договор', 'НДС', 'Документы', 'Антифрод'];

export default function LegalSection() {
  return (
    <section className="relative bg-graphite section-padding overflow-hidden">
      {/* Realistic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={legalBg} 
          alt="Скоростной грузовой поезд" 
          className="w-full h-full object-cover opacity-[0.2] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-graphite via-graphite/90 to-graphite/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-px rail-line-h opacity-[0.06]" />
        <div className="absolute bottom-0 left-0 w-full h-px rail-line-h opacity-[0.06]" />
        <div className="absolute bottom-0 right-0 w-48 h-48 dot-pattern" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-main relative z-10 reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center lg:items-start">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-6">
              Юридический <br className="hidden lg:block" />
              <span className="text-accent">«бронежилет»</span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl font-medium mb-6">
              В условиях нестабильного рынка мы гарантируем чистоту каждой сделки.
            </p>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
              <p className="text-white/60 text-base leading-relaxed">
                В ЖД-перевозках риск — это не только простой груза. Не менее опасны непрозрачные счета, посредники-однодневки, ошибки в документах, проблемы с НДС и доплаты, которые появляются после старта.
              </p>
            </div>

            {/* Small protection badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {badges.map((badge, idx) => (
                <div 
                  key={idx} 
                  className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-white/70 text-xs font-medium flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right: 4 Protection Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {legalPoints.map((point, i) => {
                const IconComponent = iconMap[point.icon];
                return (
                  <div
                    key={i}
                    className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(215,25,32,0.05)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                  >
                    {/* Subtle glow effect on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-accent/20">
                      <IconComponent className="w-6 h-6 text-white group-hover:text-accent transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-3">
                      {point.title}
                    </h3>
                    
                    <p className="text-white/50 text-sm leading-relaxed mt-auto">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
