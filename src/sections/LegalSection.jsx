import { legalPoints } from '../data/services';
import { ShieldIcon, InsuranceIcon, TaxIcon, FraudIcon } from '../components/ui/Icons';

const iconMap = {
  shield: ShieldIcon,
  insurance: InsuranceIcon,
  tax: TaxIcon,
  fraud: FraudIcon,
};

export default function LegalSection() {
  return (
    <section className="relative bg-graphite section-padding overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px rail-line-h opacity-[0.06]" />
        <div className="absolute bottom-0 left-0 w-full h-px rail-line-h opacity-[0.06]" />
        <div className="absolute bottom-0 right-0 w-48 h-48 dot-pattern" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-main relative z-10 reveal-up">
        <div className="text-center mb-12 md:mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Юридический <span className="text-accent">«бронежилет»</span>
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            В условиях нестабильного рынка мы гарантируем чистоту каждой сделки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {legalPoints.map((point, i) => {
            const IconComponent = iconMap[point.icon];
            return (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {point.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
