import { WagonIcon, DocumentIcon, BlueprintIcon, TerminalIcon, TrackingIcon, TaxIcon } from '../components/ui/Icons';

const features = [
  {
    title: 'Подвижной состав',
    description: 'Подбираем собственный или арендованный состав под тип груза, станцию и сроки отправки.',
    icon: WagonIcon,
  },
  {
    title: 'Документы и ЖД-накладные',
    description: 'Оформляем перевозочные документы, схемы погрузки и железнодорожные накладные.',
    icon: DocumentIcon,
  },
  {
    title: 'Схемы МТУ / НТУ',
    description: 'Разрабатываем и согласовываем схемы размещения и крепления для сложных, негабаритных и тяжеловесных грузов.',
    icon: BlueprintIcon,
  },
  {
    title: 'Терминальная обработка',
    description: 'Организуем взвешивание, погрузку, выгрузку, упаковку, пломбирование и крепление груза.',
    icon: TerminalIcon,
  },
  {
    title: 'Слежение и розыск груза',
    description: 'Предоставляем информацию о местонахождении груза в пути следования и сопровождаем перевозку до станции назначения.',
    icon: TrackingIcon,
  },
  {
    title: 'НДС и закрывающие документы',
    description: 'Работаем по договору и предоставляем документы для бухгалтерии, внутреннего контроля и вычетов по НДС.',
    icon: TaxIcon,
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-section-alt section-padding">
      <div className="container-main reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="accent-line mb-6" />
            <h2 className="section-title mb-6 leading-tight">
              Один партнёр на весь <span className="text-accent">контур ЖД-перевозки</span>
            </h2>

            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6">
              ГК «Параллель» закрывает не отдельную операцию, а весь процесс: подбор подвижного состава, маршрут, документы, схемы крепления, терминальную обработку, погрузку, сопровождение и закрывающие документы.
            </p>
            
            <p className="text-text-muted text-base leading-relaxed font-medium">
              Вам не нужно собирать перевозку из разных подрядчиков. Мы берём всю ответственность и координацию на себя в рамках единого контура.
            </p>
          </div>

          {/* Right: 6 Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {features.map((feature, i) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={i} 
                    className="bg-white rounded-2xl border border-card-border p-6 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Subtle numbering/accent in background */}
                    <div className="absolute -top-4 -right-4 text-[6rem] font-black text-graphite/[0.02] select-none pointer-events-none group-hover:text-accent/[0.03] transition-colors duration-500">
                      0{i + 1}
                    </div>
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-text-dark font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {feature.description}
                        </p>
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
