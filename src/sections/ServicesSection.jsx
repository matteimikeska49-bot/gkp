import { services } from '../data/services';
import { serviceIconMap, CheckIcon } from '../components/ui/Icons';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-section-light section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="accent-line mb-4" />
          <h2 className="section-title">Услуги</h2>
          <p className="section-subtitle">
            Железнодорожные перевозки и сопровождение груза под ключ: от подбора подвижного состава
            до документов, терминальной обработки и контроля в пути.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = serviceIconMap[service.icon];
            return (
              <div key={service.id} className="card group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  {IconComponent && (
                    <IconComponent className="w-6 h-6 text-accent" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-text-dark font-bold text-lg mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted text-sm leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
