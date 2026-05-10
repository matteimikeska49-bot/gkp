import { whyUsPoints } from '../data/services';
import { CheckIcon } from '../components/ui/Icons';

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white section-padding">
      <div className="container-main reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="accent-line mb-4" />
            <h2 className="section-title mb-4 leading-tight">
              Не масштаб ради масштаба, а{' '}
              <span className="text-accent">управляемая перевозка</span>{' '}
              для вашего бизнеса
            </h2>

            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
              Для клиента важнее не громкие заявления, а конкретный результат: будет ли подан нужный
              вагон, примут ли груз к перевозке, не встанет ли он на маршруте, сойдутся ли документы
              и будет ли понятно, кто отвечает за результат.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyUsPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 bg-section-light rounded-lg px-4 py-3 border border-card-border hover:border-accent/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <CheckIcon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-text-dark text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decorative element */}
          <div className="relative">
            <div className="bg-graphite rounded-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Abstract rail network */}
              <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none">
                {/* Rail network visualization */}
                <path d="M50 250 L200 150 L350 250" stroke="#D71920" strokeWidth="1.5" opacity="0.3" />
                <path d="M50 200 L200 100 L350 200" stroke="#D71920" strokeWidth="1" opacity="0.2" />
                <path d="M100 250 L200 50 L300 250" stroke="#D71920" strokeWidth="1" opacity="0.15" />
                
                {/* Central hub */}
                <circle cx="200" cy="150" r="20" fill="#D71920" opacity="0.1" />
                <circle cx="200" cy="150" r="10" fill="#D71920" opacity="0.2" />
                <circle cx="200" cy="150" r="4" fill="#D71920" />
                
                {/* Nodes */}
                <circle cx="50" cy="250" r="4" fill="#D71920" opacity="0.5" />
                <circle cx="350" cy="250" r="4" fill="#D71920" opacity="0.5" />
                <circle cx="200" cy="50" r="4" fill="#D71920" opacity="0.5" />
                <circle cx="100" cy="180" r="3" fill="white" opacity="0.2" />
                <circle cx="300" cy="180" r="3" fill="white" opacity="0.2" />
                
                {/* Text labels */}
                <text x="200" y="280" fill="white" fontSize="11" textAnchor="middle" opacity="0.3" fontFamily="Inter">
                  УПРАВЛЯЕМАЯ ПЕРЕВОЗКА
                </text>
              </svg>

              {/* Corner accent */}
              <div className="absolute top-4 left-4 flex flex-col gap-[3px]">
                <div className="w-5 h-[2px] bg-accent rounded-full opacity-40" />
                <div className="w-3 h-[2px] bg-accent rounded-full opacity-40" />
                <div className="w-5 h-[2px] bg-accent rounded-full opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
