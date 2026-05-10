import { WagonIcon } from '../components/ui/Icons';

const economyCards = [
  {
    id: 1,
    problem: 'Порожний пробег',
    solution: 'Берем расходы по возврату и подсылу на себя',
    benefit: 'Меньше переплат за пустое движение',
  },
  {
    id: 2,
    problem: 'Сезонные скачки',
    solution: 'Фиксируем условия перевозки в договоре',
    benefit: 'Прогнозируемый бюджет без «сюрпризов»',
  },
  {
    id: 3,
    problem: 'Простои под погрузкой',
    solution: 'Планируем подачу, погрузку и терминальные операции заранее',
    benefit: 'Меньше потерь на ожидании',
  },
  {
    id: 4,
    problem: 'Ошибки в документах',
    solution: 'Готовим перевозочные документы, ЖД-накладные и схемы',
    benefit: 'Меньше задержек до отправки',
  },
];

export default function EconomySection() {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      {/* Decorative Technical Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-[10%] left-0 w-full h-px rail-line-h" />
        <div className="absolute bottom-[10%] left-0 w-full h-px rail-line-h" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container-main relative z-10 reveal-up">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-dark leading-tight mb-4">
            Вы платите за перевозку, а не за <span className="text-accent">«воздух»</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl font-medium leading-relaxed">
            Устраняем скрытые расходы, которые обычно перекладывают на грузоотправителя.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {economyCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white border border-card-border rounded-2xl p-6 md:p-8 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(215,25,32,0.06)] transition-all duration-300 relative group flex flex-col h-full overflow-hidden"
            >
              {/* Subtle wagon silhouette in background */}
              <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none transform group-hover:-translate-x-2">
                <WagonIcon className="w-40 h-40" />
              </div>

              {/* Vertical Route Line */}
              <div className="absolute left-6 md:left-8 top-10 bottom-10 w-[2px] bg-card-border group-hover:bg-accent/20 transition-colors" />

              <div className="flex flex-col h-full relative z-10 pl-6">
                
                {/* Zone 1: Problem */}
                <div className="mb-8 relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-[3px] border-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1 block">
                    Проблема
                  </span>
                  <h3 className="text-text-dark font-bold text-lg leading-tight">
                    {card.problem}
                  </h3>
                </div>

                {/* Zone 2: Solution */}
                <div className="mb-8 relative">
                  <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-white border-2 border-card-border group-hover:border-accent/50 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1 block">
                    Наше решение
                  </span>
                  <p className="text-text-dark text-sm leading-relaxed font-medium">
                    {card.solution}
                  </p>
                </div>

                {/* Zone 3: Benefit */}
                <div className="mt-auto relative">
                  <div className="absolute -left-[29.5px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-graphite flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                  <div className="bg-section-alt rounded-xl p-4 md:p-5 border border-card-border/50 group-hover:bg-white group-hover:border-accent/10 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1.5 block">
                      Ваша выгода
                    </span>
                    <p className="text-text-dark font-bold text-sm md:text-base leading-snug">
                      {card.benefit}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="bg-white border border-card-border rounded-xl px-6 py-4 flex items-start sm:items-center gap-4 hover:border-card-border hover:shadow-sm transition-all text-center sm:text-left">
            <div className="hidden sm:flex w-2 h-2 bg-accent rounded-full mt-0.5 flex-shrink-0" />
            <span className="text-text-dark font-medium text-sm leading-relaxed">
              <span className="font-bold">Стоимость перевозки — это не только тариф РЖД.</span> Это подача состава, маршрут, погрузка, документы, крепление, терминал и контроль.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
