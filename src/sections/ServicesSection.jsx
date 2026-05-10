import { services } from '../data/services';
import { serviceIconMap } from '../components/ui/Icons';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-main reveal-up">
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
              <div 
                key={service.id} 
                className="bg-white rounded-2xl border border-card-border overflow-hidden group hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Top Visual Block */}
                <div className="h-40 relative bg-graphite overflow-hidden shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay for industrial feel and text readability later if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/20 to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-5 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-text-dark font-bold text-lg mb-2 leading-snug group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2.5 mb-6">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 mt-[3px] rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        </div>
                        <span className="text-text-muted text-sm leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <div className="mt-auto pt-4 border-t border-card-border">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-hover transition-colors group/link"
                    >
                      Подробнее
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
