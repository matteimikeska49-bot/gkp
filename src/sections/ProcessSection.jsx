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
    text: 'Разрабатываем и согласовываем схемы погрузки, МТУ/НТУ при необходимости, оформляем заявку на отправку по форме ГУ-12.',
    icon: RouteIcon,
  },
  { 
    id: '03', 
    title: 'Подвижной состав', 
    badge: '1–2 дня',
    text: 'Организуем подсыл подвижного состава, подготовку к погрузке и страхование груза при необходимости.',
    icon: TerminalIcon,
  },
  { 
    id: '04', 
    title: 'Погрузка и отправка', 
    badge: '1–2 дня',
    text: 'Организуем доставку до ЖД-станции, погрузку в вагон, оплату тарифа и сборов, крепление, упаковку и пломбировку.',
    icon: WagonIcon,
  },
  { 
    id: '05', 
    title: 'Перевозка', 
    badge: 'По сети ОАО «РЖД»',
    text: 'Сопровождаем груз в пути следования, отслеживаем движение и информируем о местонахождении.',
    icon: EyeIcon,
    isActive: true,
  },
  { 
    id: '06', 
    title: 'Документы и выдача', 
    badge: 'Финальный этап',
    text: 'Передаём закрывающие и сопроводительные документы для бухгалтерии и внутреннего контроля. При необходимости организуем раскрепление и доставку до склада.',
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

        {/* Route / Timeline */}
        <div className="max-w-5xl mx-auto relative pb-2 md:pb-10">
          
          {/* Central Railway Track */}
          <div className="absolute left-[39px] md:left-[50%] md:-ml-[5px] top-4 bottom-[4.5rem] md:bottom-8 w-[10px] z-0">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-card-border" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-card-border" />
            {/* Ties */}
            <div className="absolute inset-0 flex flex-col justify-between py-2 overflow-hidden">
              {[...Array(60)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-card-border/60" />
              ))}
            </div>
          </div>

          <div className="space-y-6 md:space-y-0 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              const isActive = step.isActive;

              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-start md:items-center w-full ${!isEven ? 'md:flex-row-reverse' : ''} md:h-32 group`}>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} pt-2 md:pt-0`}>
                    <div className="bg-white hover:bg-section-alt border border-card-border hover:border-accent/30 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md relative">
                      <span className="absolute -top-4 -right-2 md:right-auto md:-left-2 text-5xl font-extrabold text-card-border/30 z-0">
                        {step.id}
                      </span>
                      <div className="relative z-10">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 md:mb-3 gap-2">
                          <h3 className="font-bold text-text-dark text-base md:text-lg flex items-center gap-2 md:gap-3 justify-start md:justify-start">
                            {isEven && <span className="hidden md:inline-block w-5 h-5 md:w-6 md:h-6 shrink-0"><Icon className="w-full h-full text-accent" /></span>}
                            {step.title}
                            {!isEven && <span className="hidden md:inline-block w-5 h-5 md:w-6 md:h-6 shrink-0"><Icon className="w-full h-full text-accent" /></span>}
                            <span className="md:hidden w-4 h-4 shrink-0"><Icon className="w-full h-full text-accent" /></span>
                          </h3>
                          {step.badge && (
                            <span className={`inline-block self-start xl:self-auto whitespace-nowrap text-[10px] font-bold uppercase tracking-wider px-2 py-1 md:px-2.5 md:py-1 rounded md:rounded-md ${isActive ? 'bg-accent/10 border border-accent/20 text-accent' : 'bg-section-light border border-card-border text-text-muted'}`}>
                              {step.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Node (Station) */}
                  <div className="absolute left-[20px] md:static md:left-auto md:w-[10%] flex justify-center items-center h-full">
                    <div className={`w-12 h-12 rounded-full border-[3px] flex items-center justify-center bg-white transition-all duration-300 z-10 ${isActive ? 'border-accent shadow-[0_0_15px_rgba(215,25,32,0.3)]' : 'border-card-border group-hover:border-accent/50'}`}>
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-accent animate-pulse' : 'bg-card-border group-hover:bg-accent/50'}`} />
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>

        </div>

        {/* Conclusion Badge */}
        <div className="max-w-3xl mx-auto mt-12 flex justify-center reveal-up">
          <div className="bg-section-alt border border-card-border rounded-xl px-6 py-4 flex items-start sm:items-center gap-4 hover:border-accent/30 transition-colors">
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse mt-1.5 sm:mt-0 flex-shrink-0" />
            <span className="text-text-dark font-semibold text-sm md:text-base leading-snug">
              На каждом этапе есть ответственный: клиент понимает, что происходит с грузом, документами и сроками.
            </span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-6 md:mt-8 flex justify-center text-center px-4">
          <p className="text-text-muted/60 text-[10px] md:text-xs leading-relaxed">
            * Сроки могут уменьшаться или увеличиваться в зависимости от условий предприятия, станции отправления и характера перевозимого груза.
          </p>
        </div>

      </div>
    </section>
  );
}
