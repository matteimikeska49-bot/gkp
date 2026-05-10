import { MapIcon, WagonIcon, DocumentIcon, TrackingIcon } from '../components/ui/Icons';

const advantages = [
  {
    icon: MapIcon,
    text: 'По России и СНГ',
  },
  {
    icon: WagonIcon,
    text: 'Собственный и арендованный подвижной состав',
  },
  {
    icon: DocumentIcon,
    text: 'Документы, схемы и ЖД-накладные',
  },
  {
    icon: TrackingIcon,
    text: 'Слежение и розыск грузов',
  },
];

export default function AdvantagesStrip() {
  return (
    <section className="bg-white border-b border-card-border">
      <div className="container-main py-6 md:py-8 reveal-up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {advantages.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-accent" />
                </div>
                <span className="text-text-dark text-sm font-medium leading-snug">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
