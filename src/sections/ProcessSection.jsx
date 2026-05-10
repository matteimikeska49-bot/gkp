import { DocumentIcon, RouteIcon, TerminalIcon, WagonIcon, EyeIcon, CheckIcon } from '../components/ui/Icons';

const steps = [
  { 
    id: '01', 
    title: 'Заявка', 
    text: 'Вы оставляете параметры груза, маршрут, вес, объём и сроки.',
    icon: DocumentIcon,
  },
  { 
    id: '02', 
    title: 'Расчёт', 
    text: 'Рассчитываем маршрут, тариф, подвижной состав и сопутствующие расходы.',
    icon: RouteIcon,
  },
  { 
    id: '03', 
    title: 'Подготовка', 
    text: 'Оформляем документы, схемы размещения и крепления, МТУ/НТУ, если требуется.',
    icon: TerminalIcon,
  },
  { 
    id: '04', 
    title: 'Погрузка', 
    text: 'Организуем подачу, погрузку, крепление, упаковку и пломбирование груза.',
    icon: WagonIcon,
  },
  { 
    id: '05', 
    title: 'Перевозка', 
    text: 'Сопровождаем груз в пути следования и информируем о местонахождении.',
    icon: EyeIcon,
    isActive: true,
  },
  { 
    id: '06', 
    title: 'Документы', 
    text: 'Передаём закрывающие и сопроводительные документы для бухгалтерии и внутреннего контроля.',
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
        <div className="max-w-5xl mx-auto relative pb-10">
          
          {/* Central Railway Track */}
          <div className="absolute left-[39px] md:left-[50%] md:-ml-[5px] top-4 bottom-4 w-[10px] z-0">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-card-border" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-card-border" />
            {/* Ties */}
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              {[...Array(60)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-card-border/60" />
              ))}
            </div>
          </div>

          <div className="space-y-10 md:space-y-0 relative z-10">
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
                        <h3 className="font-bold text-text-dark text-lg mb-2 flex items-center gap-3 justify-start md:justify-start">
                          {isEven && <span className="hidden md:inline-block w-6 h-6"><Icon className="w-full h-full text-accent" /></span>}
                          {step.title}
                          {!isEven && <span className="hidden md:inline-block w-6 h-6"><Icon className="w-full h-full text-accent" /></span>}
                          <span className="md:hidden w-5 h-5"><Icon className="w-full h-full text-accent" /></span>
                        </h3>
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

      </div>
    </section>
  );
}
