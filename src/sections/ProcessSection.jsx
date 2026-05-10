import { DocumentIcon, RouteIcon, TerminalIcon, WagonIcon, EyeIcon, CheckIcon } from '../components/ui/Icons';

const steps = [
  { 
    id: '01', 
    title: 'Заявка и договор', 
    badge: '1 день',
    text: 'Принимаем заявку, рассчитываем калькуляцию и заключаем договор.',
    icon: DocumentIcon,
  },
  { 
    id: '02', 
    title: 'Схемы и ГУ-12', 
    badge: '1–2 дня',
    text: 'Разрабатываем схемы погрузки, МТУ/НТУ при необходимости и оформляем заявку ГУ-12.',
    icon: RouteIcon,
  },
  { 
    id: '03', 
    title: 'Подвижной состав', 
    badge: '1–2 дня',
    text: 'Организуем подсыл состава, подготовку к погрузке и страхование груза при необходимости.',
    icon: TerminalIcon,
  },
  { 
    id: '04', 
    title: 'Погрузка и отправка', 
    badge: '1–2 дня',
    text: 'Организуем доставку до ЖД-станции, погрузку, оплату тарифа, крепление и пломбировку.',
    icon: WagonIcon,
  },
  { 
    id: '05', 
    title: 'Перевозка', 
    badge: 'По сети ОАО «РЖД»',
    text: 'Сопровождаем груз в пути, отслеживаем движение и информируем о местонахождении.',
    icon: EyeIcon,
    isActive: true,
  },
  { 
    id: '06', 
    title: 'Документы и выдача', 
    badge: 'Финальный этап',
    text: 'Передаём закрывающие документы. При необходимости организуем раскрепление и доставку до склада.',
    icon: CheckIcon,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white section-padding overflow-hidden relative">
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-[20%] left-0 w-full h-px rail-line-h" />
        <div className="absolute top-[80%] left-0 w-full h-px rail-line-h" />
      </div>

      <div className="container-main relative z-10 reveal-up">
        {/* Header Text */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-dark leading-tight mb-6">
            От заявки до закрывающих документов
          </h2>
          <p className="text-text-muted text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Вы оставляете параметры груза — мы собираем маршрут, подвижной состав, документы, погрузку и сопровождение в один управляемый процесс.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = step.isActive;

              return (
                <div 
                  key={step.id} 
                  className={`bg-white rounded-2xl border ${isActive ? 'border-accent/40 shadow-[0_8px_30px_rgba(215,25,32,0.08)] -translate-y-1' : 'border-card-border hover:border-accent/30 hover:shadow-md hover:-translate-y-1'} p-6 md:p-8 relative overflow-hidden flex flex-col h-full group transition-all duration-400 ease-out`}
                >
                  {/* Watermark Number */}
                  <span className="absolute -bottom-2 -right-2 text-[6rem] leading-none font-extrabold text-card-border/40 group-hover:text-card-border/60 transition-colors z-0 pointer-events-none select-none">
                    {step.id}
                  </span>

                  {/* Active Highlight Glow */}
                  {isActive && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  )}

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-6 gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-400 ${isActive ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-section-light text-accent border border-card-border group-hover:bg-accent/10'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {step.badge && (
                        <span className={`inline-block whitespace-nowrap text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md ${isActive ? 'bg-accent/10 border border-accent/20 text-accent' : 'bg-section-light border border-card-border text-text-muted group-hover:border-accent/20'}`}>
                          {step.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className={`font-bold text-lg md:text-xl mb-3 transition-colors ${isActive ? 'text-text-dark' : 'text-text-dark/90 group-hover:text-text-dark'}`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conclusion Badge */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-16 flex justify-center reveal-up">
          <div className="bg-white border border-card-border rounded-xl px-5 py-4 md:px-6 md:py-4 flex items-center gap-3 md:gap-4 hover:border-accent/30 transition-colors shadow-sm cursor-default">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-accent rounded-full animate-pulse shrink-0" />
            <span className="text-text-dark font-semibold text-sm md:text-base leading-snug">
              Один ответственный ведёт процесс на каждом этапе
            </span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-6 md:mt-8 flex justify-center text-center px-4 reveal-up">
          <p className="text-text-muted/70 text-[10px] md:text-xs leading-relaxed font-medium">
            * Сроки могут уменьшаться или увеличиваться в зависимости от условий предприятия, станции отправления и характера перевозимого груза.
          </p>
        </div>

      </div>
    </section>
  );
}
