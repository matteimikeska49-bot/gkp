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
    <section id="process" className="bg-section-alt section-padding overflow-hidden relative">
      {/* Rich industrial background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        {/* Horizontal rail lines */}
        <div className="absolute top-[18%] left-0 w-full h-px rail-line-h opacity-[0.04]" />
        <div className="absolute top-[82%] left-0 w-full h-px rail-line-h opacity-[0.04]" />
        {/* Vertical rail lines */}
        <div className="absolute top-0 left-[15%] w-px h-full rail-line-v opacity-[0.03]" />
        <div className="absolute top-0 right-[15%] w-px h-full rail-line-v opacity-[0.03]" />
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/60 rounded-full blur-[150px]" />
      </div>

      <div className="container-main relative z-10 reveal-up">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-dark leading-tight mb-5">
            От заявки до закрывающих документов
          </h2>
          <p className="text-text-muted text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto mb-6">
            За первые 3&nbsp;дня запускаем расчёт, договор, схемы погрузки, ГУ-12, подсыл состава и подготовку к отправке. Дальше сопровождаем груз до выдачи и закрывающих документов.
          </p>

          {/* Dispatch timing accent strip */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white border border-card-border rounded-full px-4 py-2 sm:px-5 sm:py-2.5 shadow-sm">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse shrink-0" />
            <span className="text-text-dark font-bold text-xs sm:text-sm tracking-wide">Запуск отправки — за 3 дня</span>
            <div className="hidden sm:flex items-center gap-1.5 ml-1 text-text-muted/50">
              <span className="text-[10px] font-semibold">1д</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-[10px] font-semibold">1–2д</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-[10px] font-semibold">1–2д</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-[10px] font-semibold text-accent">маршрут</span>
            </div>
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = step.isActive;

              return (
                <div 
                  key={step.id} 
                  className={`rounded-2xl border relative overflow-hidden flex flex-col h-full group transition-all duration-300 ease-out ${
                    isActive 
                      ? 'bg-white border-accent/30 shadow-[0_8px_30px_rgba(215,25,32,0.07)] -translate-y-0.5' 
                      : 'bg-white border-card-border hover:border-accent/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top route accent line */}
                  <div className={`h-[3px] w-full ${isActive ? 'bg-gradient-to-r from-accent/60 via-accent to-accent/60' : 'bg-gradient-to-r from-transparent via-card-border to-transparent group-hover:via-accent/40'} transition-all duration-300`} />

                  {/* Watermark Number */}
                  <span className="absolute -bottom-3 -right-1 text-[5.5rem] leading-none font-extrabold text-card-border/25 group-hover:text-card-border/40 transition-colors duration-300 z-0 pointer-events-none select-none">
                    {step.id}
                  </span>

                  {/* Active glow */}
                  {isActive && (
                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  )}

                  <div className="relative z-10 flex-1 flex flex-col p-6 md:p-7">
                    {/* Icon + Badge row */}
                    <div className="flex items-start justify-between mb-5 gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'bg-accent text-white shadow-md shadow-accent/25' 
                          : 'bg-section-alt text-accent border border-card-border group-hover:bg-accent/10 group-hover:border-accent/20'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      {step.badge && (
                        <span className={`inline-block whitespace-nowrap text-[10px] md:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md transition-all duration-300 ${
                          isActive 
                            ? 'bg-accent/10 border border-accent/20 text-accent' 
                            : 'bg-section-alt border border-card-border text-text-muted group-hover:border-accent/20 group-hover:text-text-dark/70'
                        }`}>
                          {step.badge}
                        </span>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className={`font-bold text-lg mb-2.5 transition-colors duration-300 ${
                      isActive ? 'text-text-dark' : 'text-text-dark/90 group-hover:text-text-dark'
                    }`}>
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-text-muted text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conclusion Badge */}
        <div className="max-w-3xl mx-auto mt-10 md:mt-14 flex justify-center reveal-up">
          <div className="bg-white border border-card-border rounded-xl px-5 py-4 md:px-8 md:py-5 flex items-center gap-3 md:gap-4 hover:border-accent/30 transition-colors shadow-sm cursor-default">
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shrink-0" />
            <span className="text-text-dark font-semibold text-sm md:text-base leading-snug">
              Один ответственный ведёт маршрут, документы и сроки на каждом этапе
            </span>
          </div>
        </div>

        {/* Footnote */}
        <div className="max-w-3xl mx-auto mt-5 md:mt-6 flex justify-center text-center px-4 reveal-up">
          <p className="text-text-muted/60 text-[10px] md:text-xs leading-relaxed">
            * Сроки могут уменьшаться или увеличиваться в зависимости от условий предприятия, станции отправления и характера перевозимого груза.
          </p>
        </div>

      </div>
    </section>
  );
}
