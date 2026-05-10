import { CheckIcon, WagonIcon } from '../components/ui/Icons';
import movementPanel from '../assets/sections/movement-panel.png';

const points = [
  'работаем с простоями и «брошенными» поездами',
  'отслеживаем движение груза на пути следования',
  'подключаемся к ситуациям, когда вагон выбивается из планового маршрута',
  'учитываем риски станции отправления, назначения и промежуточных участков',
  'при необходимости задействуем партнёрские маневровые ресурсы',
];

export default function MovementSection() {
  return (
    <section className="relative bg-section-alt section-padding overflow-hidden">
      {/* Decorative rail atmosphere background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        {/* Distant horizon rails */}
        <div className="absolute top-[20%] left-0 w-full border-t border-dashed border-card-border" />
        <div className="absolute bottom-[20%] left-0 w-full border-t border-dashed border-card-border" />
      </div>

      <div className="container-main relative z-10 reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-6 lg:pr-6 relative">
            <div className="accent-line mb-6" />
            <h2 className="section-title mb-6 leading-tight">
              Когда сеть <span className="text-accent">«стоит»</span>, вы едете
            </h2>

            <p className="text-text-dark text-lg md:text-xl font-semibold mb-8 leading-relaxed">
              Мы не просто предоставляем вагоны — мы обеспечиваем их прохождение через «узкие места» системы.
            </p>

            <ul className="space-y-4 mb-8">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-text-dark text-base font-medium leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white border border-card-border rounded-xl p-5 shadow-sm inline-block">
              <p className="text-text-dark text-sm font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Груз не остаётся без внимания после отправки, а клиент понимает, что происходит на маршруте.
              </p>
            </div>
          </div>

          {/* Right: Realistic Rail Route Visualization */}
          <div className="lg:col-span-6">
            <div className="bg-graphite rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
              {/* Realistic Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={movementPanel} 
                  alt="Грузовой поезд в пути" 
                  className="w-full h-full object-cover opacity-[0.35] mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/80 to-graphite/40" />
              </div>

              {/* Background styling inside the card */}
              <div className="absolute inset-0 dot-pattern opacity-20 z-0" />
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/30 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row gap-8 sm:gap-12 justify-between">
                
                {/* Route Timeline */}
                <div className="flex-1 relative pl-3">
                  
                  {/* Visual double-rail track background */}
                  <div className="absolute left-[3px] top-3 bottom-3 w-[10px]">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20" />
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20" />
                    {/* Ties (шпалы) */}
                    <div className="absolute inset-0 flex flex-col justify-between py-1">
                      {[...Array(16)].map((_, idx) => (
                        <div key={idx} className="w-full h-[1px] bg-white/10" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-8 relative z-10">
                    
                    {/* Step 1: Origin */}
                    <div className="relative pl-8">
                      <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-graphite border-[3px] border-white/40 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                      </div>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider block mb-1 mt-1">Отправление</span>
                      <span className="text-white text-sm font-bold">Станция отправления</span>
                    </div>

                    {/* Step 2: Narrow Point (Active/Alert) */}
                    <div className="relative pl-8">
                      <div className="absolute -left-2 -top-1 w-8 h-8 rounded-full bg-accent/20 animate-ping" />
                      <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-graphite border-[3px] border-accent flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      </div>
                      <span className="text-accent text-[10px] font-bold uppercase tracking-wider block mb-1 mt-1">Узкое место</span>
                      <span className="text-white text-sm font-bold">Брошенные поезда</span>
                    </div>

                    {/* Step 3: Control */}
                    <div className="relative pl-8">
                      <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-graphite border-[3px] border-accent/60 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-accent/60 rounded-full" />
                      </div>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider block mb-1 mt-1">Контроль</span>
                      <span className="text-white text-sm font-bold">Ручное сопровождение</span>
                    </div>

                    {/* Step 4: Destination */}
                    <div className="relative pl-8">
                      <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-graphite border-[3px] border-white/40 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                      </div>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider block mb-1 mt-1">Назначение</span>
                      <span className="text-white text-sm font-bold">Станция назначения</span>
                    </div>

                  </div>
                </div>

                {/* Train Silhouette decorative element */}
                <div className="hidden sm:flex flex-col items-center justify-center opacity-[0.15] relative">
                  <div className="absolute top-0 bottom-0 w-px bg-white/30 border-dashed border-l" />
                  <div className="bg-graphite py-4 relative z-10 transform hover:-translate-y-2 transition-transform duration-700">
                    <WagonIcon className="w-28 h-28 text-white" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
