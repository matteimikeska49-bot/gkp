import { useState } from 'react';
import { WagonIcon, DocumentIcon, BlueprintIcon, TerminalIcon, TrackingIcon, TaxIcon } from '../components/ui/Icons';

const features = [
  {
    title: 'Подвижной состав',
    description: 'Подбираем собственный или арендованный состав под тип груза, станцию и сроки отправки.',
    points: ['полувагоны, платформы, цистерны, хопперы', 'подбор под груз и маршрут', 'подача под сроки отправки'],
    icon: WagonIcon,
  },
  {
    title: 'Документы и ЖД-накладные',
    description: 'Оформляем перевозочные документы, схемы погрузки и железнодорожные накладные.',
    points: ['перевозочные документы', 'ЖД-накладные', 'схемы погрузки'],
    icon: DocumentIcon,
  },
  {
    title: 'Схемы МТУ / НТУ',
    description: 'Разрабатываем и согласовываем схемы размещения и крепления для сложных, негабаритных и тяжеловесных грузов.',
    points: ['схемы размещения', 'схемы крепления', 'согласование МТУ / НТУ'],
    icon: BlueprintIcon,
  },
  {
    title: 'Терминальная обработка',
    description: 'Организуем взвешивание, погрузку, выгрузку, упаковку, пломбирование и крепление груза.',
    points: ['погрузка и выгрузка', 'упаковка и пломбирование', 'крепление груза'],
    icon: TerminalIcon,
  },
  {
    title: 'Слежение и розыск груза',
    description: 'Предоставляем информацию о местонахождении груза в пути следования и сопровождаем перевозку до станции назначения.',
    points: ['контроль местонахождения', 'сопровождение в пути', 'работа с отклонениями маршрута'],
    icon: TrackingIcon,
  },
  {
    title: 'НДС и закрывающие документы',
    description: 'Работаем по договору и предоставляем документы для бухгалтерии, внутреннего контроля и вычетов по НДС.',
    points: ['договор', 'закрывающие документы', 'документы для вычетов по НДС'],
    icon: TaxIcon,
  },
];

const leftBadges = [
  '6 этапов в одном контуре',
  'От вагона до закрывающих документов',
  'Один ответственный за перевозку'
];

export default function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why-us" className="bg-section-alt section-padding overflow-hidden">
      <div className="container-main reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
            <div className="accent-line mb-6" />
            <h2 className="section-title mb-6 leading-tight">
              Один партнёр на весь <span className="text-accent">контур ЖД-перевозки</span>
            </h2>

            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6">
              ГК «Параллель» закрывает не отдельную операцию, а весь процесс: подбор подвижного состава, маршрут, документы, схемы крепления, терминальную обработку, погрузку, сопровождение и закрывающие документы.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-white border border-card-border rounded-lg px-4 py-3 shadow-sm w-fit">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-text-dark">
                Выберите этап — покажем, что берём на себя
              </span>
            </div>

            {/* Mini-badges (Polished B2B items) */}
            <div className="mt-8 md:mt-10 flex flex-col gap-3">
              {leftBadges.map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white border border-card-border rounded-lg px-4 py-3 shadow-sm w-fit transition-transform hover:-translate-y-0.5 duration-300">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-text-dark">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Stepper / Accordion */}
          <div className="lg:col-span-7 relative mt-4 lg:mt-0">
            {/* Contour / Route line for desktop */}
            {/* The cards have padding 20px (p-5), icon width is 48px. Center is 20 + 24 = 44px. */}
            <div className="hidden md:block absolute left-[44px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-card-border via-card-border to-transparent z-0" />

            <div className="space-y-3 relative z-10">
              {features.map((feature, i) => {
                const isActive = activeIndex === i;
                const IconComponent = feature.icon;

                return (
                  <div 
                    key={i} 
                    className={`group rounded-2xl border transition-all duration-400 ease-out overflow-hidden relative ${
                      isActive 
                        ? 'border-accent/20 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] -translate-y-0.5' 
                        : 'border-card-border bg-white/80 hover:bg-white hover:border-accent/15 hover:shadow-sm cursor-pointer'
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    {/* Header */}
                    <div className="flex items-center p-4 md:p-5 gap-4 md:gap-5 relative z-10">
                      {/* Current Node Indicator for Route Line */}
                      <div className="relative">
                        {isActive && (
                          <div className="absolute inset-0 bg-accent rounded-xl animate-ping opacity-20" />
                        )}
                        <div 
                          className={`relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-400 ${
                            isActive 
                              ? 'bg-accent text-white shadow-md shadow-accent/20' 
                              : 'bg-section-light text-graphite group-hover:bg-accent/10 group-hover:text-accent border border-card-border'
                          }`}
                        >
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-400 ${isActive ? 'text-accent' : 'text-text-muted'}`}>
                            Этап 0{i + 1}
                          </span>
                        </div>
                        <h3 className={`font-bold text-base md:text-lg transition-colors duration-400 ${isActive ? 'text-text-dark' : 'text-text-dark/80 group-hover:text-text-dark'}`}>
                          {feature.title}
                        </h3>
                      </div>
                      
                      {/* Chevron/Toggle Icon */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-400 ease-out ${isActive ? 'rotate-180 bg-accent/5' : 'bg-transparent group-hover:bg-graphite/5'}`}>
                        <svg className={`w-5 h-5 transition-colors duration-400 ${isActive ? 'text-accent' : 'text-graphite/40 group-hover:text-accent/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Body (Expandable) */}
                    <div 
                      className={`grid transition-all duration-400 ease-out ${
                        isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 md:px-5 pb-5 pt-0 md:pl-[88px]">
                          <div className="border-t border-card-border pt-4 mt-1">
                            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
                              {feature.description}
                            </p>
                            
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                              {feature.points.map((pt, j) => (
                                <li key={j} className="flex items-start gap-2.5">
                                  <div className="w-1.5 h-1.5 bg-accent/80 rounded-full mt-1.5 flex-shrink-0" />
                                  <span className="text-sm font-medium text-text-dark leading-snug">{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
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
