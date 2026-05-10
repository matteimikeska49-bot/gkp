import { CheckIcon, WagonIcon } from '../components/ui/Icons';
import movementPanel from '../assets/sections/movement-panel.png';

const points = [
  'контроль движения груза',
  'слежение и розыск грузов',
  'понятный ответственный по перевозке',
  'документы и отчётность после завершения перевозки',
];

export default function TransparencySection() {
  return (
    <section className="bg-section-alt section-padding relative overflow-hidden">
      {/* Decorative Technical Background for the section */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-[30%] left-0 w-full h-px rail-line-h" />
      </div>

      <div className="container-main relative z-10 reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="lg:pr-6">
            <div className="accent-line mb-5" />
            
            <h2 className="text-3xl md:text-4xl lg:text-[2.25rem] xl:text-[2.75rem] font-bold text-text-dark leading-tight mb-5">
              Цифровая прозрачность:<br className="hidden lg:block"/>{' '}
              <span className="text-accent">вы&nbsp;видите то&nbsp;же, что&nbsp;и&nbsp;мы</span>
            </h2>

            <p className="text-text-dark text-lg md:text-xl font-bold mb-3 leading-relaxed">
              Забудьте про Excel-отчеты вчерашней давности.
            </p>

            <p className="text-text-muted text-base md:text-lg mb-6 leading-relaxed font-medium">
              Мы предоставляем информацию о местонахождении груза в пути следования, сопровождаем перевозку и держим клиента в курсе статуса отправки.
            </p>

            <ul className="space-y-2.5">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3.5 bg-white border border-card-border rounded-xl px-4 py-3 shadow-sm hover:border-accent/30 transition-colors group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <CheckIcon className="w-3 h-3 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-text-dark text-sm md:text-base font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Realistic Status Card (Dark B2B Theme) */}
          <div className="relative mt-6 lg:mt-0 lg:pl-6">
            <div className="bg-graphite rounded-3xl border border-graphite-light overflow-hidden shadow-2xl relative">
              
              {/* Card Background Image (Industrial train moving) */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={movementPanel} 
                  alt="Статус грузового поезда" 
                  className="w-full h-full object-cover opacity-[0.2] mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/90 to-graphite/40" />
              </div>

              {/* Technical Dot Grid */}
              <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none z-0" />

              <div className="relative z-10 p-6 md:p-10">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <h3 className="font-bold text-white text-xl md:text-2xl mb-2">Статус перевозки</h3>
                    <div className="text-xs font-medium text-white/50 flex items-center gap-2">
                      Обновлено: 15 минут назад
                    </div>
                  </div>
                  <div className="bg-accent/20 border border-accent/40 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(215,25,32,0.2)]">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    В пути
                  </div>
                </div>

                {/* Visual Route */}
                <div className="mb-10 relative bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  
                  <div className="flex justify-between text-[10px] text-white/40 mb-3 font-bold uppercase tracking-wider">
                    <span>Отправление</span>
                    <span>Назначение</span>
                  </div>
                  
                  <div className="flex items-center gap-3 md:gap-4 relative">
                    <div className="font-bold text-white text-sm md:text-base">Москва</div>
                    
                    <div className="flex-1 relative flex items-center py-4">
                      {/* Rail Line */}
                      <div className="w-full h-[2px] bg-white/20 border-b border-dashed border-white/10 relative">
                         {/* Passed part of route */}
                         <div className="absolute left-0 top-0 h-full bg-accent w-[60%]" />
                      </div>
                      
                      {/* Moving Train Silhouette */}
                      <div className="absolute left-[60%] -translate-x-1/2 -top-2 text-white opacity-80">
                         <WagonIcon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      
                      {/* Current Point Dot */}
                      <div className="absolute left-[60%] -translate-x-1/2 mt-4">
                        <div className="w-3 h-3 bg-graphite border-[3px] border-accent rounded-full relative shadow-[0_0_10px_rgba(215,25,32,0.5)]">
                           <div className="absolute -inset-2 bg-accent rounded-full animate-ping opacity-30" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="font-bold text-white text-sm md:text-base">Владивосток</div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold mb-1.5 block">Текущая станция</span>
                    <span className="text-xs md:text-sm font-bold text-accent px-4 py-1.5 rounded-lg bg-accent/10 border border-accent/20 inline-block">
                      Новосибирск-Главный
                    </span>
                  </div>
                </div>

                {/* Badges / Status Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/[0.05] transition-colors">
                    <span className="text-white/60 text-sm font-medium">Подвижной состав</span>
                    <span className="font-bold text-white text-sm md:text-base">Полувагон</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/[0.05] transition-colors">
                    <span className="text-white/60 text-sm font-medium">Документы</span>
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-white text-sm md:text-base">Готовы</span>
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-accent" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/[0.05] transition-colors">
                    <span className="text-white/60 text-sm font-medium">Ответственный</span>
                    <span className="font-bold text-white text-sm md:text-base flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      На связи
                    </span>
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
