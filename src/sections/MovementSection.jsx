import { CheckIcon } from '../components/ui/Icons';

const points = [
  'работаем с простоями и «брошенными» поездами',
  'отслеживаем движение груза на пути следования',
  'подключаемся к ситуациям, когда вагон выбивается из планового маршрута',
  'учитываем риски станции отправления, назначения и промежуточных участков',
  'при необходимости задействуем партнёрские маневровые ресурсы',
];

export default function MovementSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Decorative route visualization */}
          <div className="relative">
            <div className="bg-graphite rounded-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Rail route SVG */}
              <svg className="w-full h-auto" viewBox="0 0 400 250" fill="none">
                {/* Track base */}
                <path d="M30 200 Q100 200 150 150 Q200 100 250 100 Q300 100 370 50" stroke="#D71920" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
                <path d="M30 200 Q100 200 150 150 Q200 100 250 100 Q300 100 370 50" stroke="#D71920" strokeWidth="1" opacity="0.8" />
                
                {/* Station dots */}
                <circle cx="30" cy="200" r="8" fill="#D71920" opacity="0.3" />
                <circle cx="30" cy="200" r="4" fill="#D71920" />
                <text x="30" y="225" fill="white" fontSize="10" textAnchor="middle" opacity="0.5">A</text>
                
                <circle cx="150" cy="150" r="6" fill="#D71920" opacity="0.3" />
                <circle cx="150" cy="150" r="3" fill="#D71920" />
                
                <circle cx="250" cy="100" r="6" fill="#D71920" opacity="0.3" />
                <circle cx="250" cy="100" r="3" fill="#D71920" />
                
                <circle cx="370" cy="50" r="8" fill="#D71920" opacity="0.3" />
                <circle cx="370" cy="50" r="4" fill="#D71920" />
                <text x="370" y="75" fill="white" fontSize="10" textAnchor="middle" opacity="0.5">B</text>
                
                {/* Grid lines */}
                <line x1="0" y1="50" x2="400" y2="50" stroke="white" strokeWidth="0.3" opacity="0.1" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="white" strokeWidth="0.3" opacity="0.1" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.3" opacity="0.1" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.3" opacity="0.1" />
                
                {/* Moving indicator */}
                <circle cx="200" cy="120" r="6" fill="#D71920" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="120" r="12" fill="none" stroke="#D71920" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Decorative tech lines */}
              <div className="absolute top-4 right-4 text-white/10 text-xs font-mono">
                ROUTE TRACKING
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="accent-line mb-4" />
            <h2 className="section-title mb-2">
              Когда сеть <span className="text-accent">«стоит»</span>, вы едете
            </h2>

            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              Мы не просто предоставляем вагоны — мы обеспечиваем их прохождение через «узкие места» системы.
            </p>

            <ul className="space-y-4 mb-8">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-text-dark text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="bg-section-light rounded-xl p-4 border border-card-border">
              <p className="text-text-muted text-sm leading-relaxed">
                Груз не остаётся без внимания после отправки, а клиент понимает, что происходит на маршруте.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
