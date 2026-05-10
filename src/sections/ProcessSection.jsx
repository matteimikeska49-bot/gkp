import { DocumentIcon, RouteIcon, TerminalIcon, WagonIcon, EyeIcon, CheckIcon } from '../components/ui/Icons';

const steps = [
  { 
    id: '01', 
    title: 'Заявка и договор', 
    badge: '1 день',
    text: 'Принимаем заявку, рассчитываем калькуляцию и заключаем договор.',
    icon: DocumentIcon,
    phase: 1,
  },
  { 
    id: '02', 
    title: 'Схемы и ГУ-12', 
    badge: '1–2 дня',
    text: 'Разрабатываем схемы погрузки, МТУ/НТУ при необходимости и оформляем заявку ГУ-12.',
    icon: RouteIcon,
    phase: 1,
  },
  { 
    id: '03', 
    title: 'Подвижной состав', 
    badge: '1–2 дня',
    text: 'Организуем подсыл состава, подготовку к погрузке и страхование груза при необходимости.',
    icon: TerminalIcon,
    phase: 1,
  },
  { 
    id: '04', 
    title: 'Погрузка и отправка', 
    badge: '1–2 дня',
    text: 'Организуем доставку до ЖД-станции, погрузку, оплату тарифа, крепление и пломбировку.',
    icon: WagonIcon,
    phase: 1,
  },
  { 
    id: '05', 
    title: 'Перевозка', 
    badge: 'По сети ОАО «РЖД»',
    text: 'Сопровождаем груз в пути, отслеживаем движение и информируем о местонахождении.',
    icon: EyeIcon,
    phase: 2,
  },
  { 
    id: '06', 
    title: 'Документы и выдача', 
    badge: 'Финальный этап',
    text: 'Передаём закрывающие документы. При необходимости организуем раскрепление и доставку до склада.',
    icon: CheckIcon,
    phase: 2,
  },
];

/* Small arrow connector between grid cards (desktop only) */
function ConnectorArrow() {
  return (
    <div className="hidden lg:flex absolute -right-[18px] top-1/2 -translate-y-1/2 z-20 items-center justify-center w-[36px] h-[36px]">
      <div className="w-7 h-7 rounded-full bg-white border border-card-border flex items-center justify-center shadow-sm">
        <svg className="w-3.5 h-3.5 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="bg-section-alt section-padding overflow-hidden relative">
      {/* Industrial background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
        <div className="absolute top-[15%] left-0 w-full h-px rail-line-h opacity-[0.04]" />
        <div className="absolute top-[85%] left-0 w-full h-px rail-line-h opacity-[0.04]" />
        <div className="absolute top-0 left-[12%] w-px h-full rail-line-v opacity-[0.025]" />
        <div className="absolute top-0 right-[12%] w-px h-full rail-line-v opacity-[0.025]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-white/50 rounded-full blur-[180px]" />
      </div>

      <div className="container-main relative z-10 reveal-up">

        {/* ── Section header ── */}
        <div className="text-center mb-10 md:mb-14 max-w-4xl mx-auto">
          <div className="accent-line mx-auto mb-5" />

          {/* Main selling H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-dark leading-tight mb-2">
            Отправка груза за <span className="text-accent">3&nbsp;дня</span>
          </h2>

          {/* Supporting sub-line */}
          <p className="text-text-muted/80 text-base md:text-lg font-semibold mb-5">
            От заявки до закрывающих документов
          </p>

          {/* Descriptive paragraph */}
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-7">
            За первые 3&nbsp;дня запускаем расчёт, договор, схемы, ГУ&#8209;12 и&nbsp;подсыл состава. Дальше сопровождаем груз до выдачи и&nbsp;закрывающих документов.
          </p>

          {/* Accent timing strip */}
          <div className="inline-flex items-center gap-0 bg-white border border-card-border rounded-xl overflow-hidden shadow-sm">
            {/* Left pill — headline */}
            <div className="flex items-center gap-2 px-4 py-2.5 sm:px-5 bg-graphite text-white">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shrink-0" />
              <span className="font-bold text-xs sm:text-sm tracking-wide whitespace-nowrap">Запуск отправки — за 3 дня</span>
            </div>
            {/* Right pill — route rhythm (desktop) */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-text-muted">
              <span className="text-[11px] font-bold">1д</span>
              <svg className="w-3 h-3 text-card-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-[11px] font-bold">1–2д</span>
              <svg className="w-3 h-3 text-card-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-[11px] font-bold">1–2д</span>
              <svg className="w-3 h-3 text-card-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-[11px] font-bold text-accent">маршрут</span>
            </div>
          </div>
        </div>

        {/* ── Roadmap grid ── */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLaunchPhase = step.phase === 1;
              const showConnector = idx < steps.length - 1 && idx !== 2; // no arrow after 3rd card (row break)

              return (
                <div key={step.id} className="relative">
                  {/* Desktop connector arrows */}
                  {showConnector && <ConnectorArrow />}

                  <div 
                    className={`rounded-2xl border relative overflow-hidden flex flex-col h-full group transition-all duration-300 ease-out ${
                      isLaunchPhase
                        ? 'bg-white border-card-border hover:border-accent/30 hover:shadow-[0_6px_24px_rgba(215,25,32,0.06)] hover:-translate-y-0.5'
                        : 'bg-white/80 border-card-border/80 hover:border-accent/25 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Top route line */}
                    <div className={`h-[3px] w-full transition-all duration-300 ${
                      isLaunchPhase
                        ? 'bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 group-hover:via-accent'
                        : 'bg-gradient-to-r from-transparent via-card-border/60 to-transparent group-hover:via-accent/30'
                    }`} />

                    {/* Watermark */}
                    <span className="absolute -bottom-2 -right-1 text-[5rem] leading-none font-extrabold text-card-border/20 group-hover:text-card-border/35 transition-colors duration-300 z-0 pointer-events-none select-none">
                      {step.id}
                    </span>

                    <div className="relative z-10 flex-1 flex flex-col p-5 md:p-6">
                      {/* Icon + Badge */}
                      <div className="flex items-start justify-between mb-4 gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isLaunchPhase
                            ? 'bg-accent/10 text-accent border border-accent/15 group-hover:bg-accent group-hover:text-white group-hover:shadow-md group-hover:shadow-accent/20'
                            : 'bg-section-alt text-text-muted border border-card-border group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20'
                        }`}>
                          <Icon className="w-[18px] h-[18px]" />
                        </div>
                        {step.badge && (
                          <span className={`inline-block whitespace-nowrap text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md transition-all duration-300 ${
                            isLaunchPhase
                              ? 'bg-accent/8 border border-accent/15 text-accent/90'
                              : 'bg-section-alt border border-card-border text-text-muted/80 group-hover:border-accent/15'
                          }`}>
                            {step.badge}
                          </span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-base md:text-lg text-text-dark mb-2 transition-colors group-hover:text-text-dark">
                        {step.title}
                      </h3>
                      
                      {/* Text */}
                      <p className="text-text-muted text-[13px] md:text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Conclusion badge ── */}
        <div className="max-w-3xl mx-auto mt-10 md:mt-14 flex justify-center reveal-up">
          <div className="bg-white border border-card-border rounded-xl px-5 py-3.5 md:px-7 md:py-4 flex items-center gap-3 hover:border-accent/30 transition-colors shadow-sm cursor-default">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-accent rounded-full animate-pulse shrink-0" />
            <span className="text-text-dark font-semibold text-sm md:text-[15px] leading-snug">
              Один ответственный ведёт маршрут, документы, сроки и&nbsp;связь на каждом этапе
            </span>
          </div>
        </div>

        {/* ── Footnote ── */}
        <div className="max-w-3xl mx-auto mt-4 md:mt-5 flex justify-center text-center px-4 reveal-up">
          <p className="text-text-muted/50 text-[10px] md:text-[11px] leading-relaxed">
            * Сроки могут уменьшаться или увеличиваться в зависимости от условий предприятия, станции отправления и характера перевозимого груза.
          </p>
        </div>

      </div>
    </section>
  );
}
