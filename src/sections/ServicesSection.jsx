import { useState, useEffect } from 'react';
import { services } from '../data/services';
import { serviceIconMap, CloseIcon, CheckIcon } from '../components/ui/Icons';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedService]);

  const handleCtaClick = () => {
    setSelectedService(null);
    setTimeout(() => {
      const el = document.querySelector('#contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-main reveal-up">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="accent-line mb-4" />
          <h2 className="section-title">Услуги</h2>
          <p className="section-subtitle">
            8 направлений в одном контуре ЖД-перевозки: от подбора состава и документов до терминальной обработки, схем крепления и сопровождения груза.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = serviceIconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl border border-card-border overflow-hidden group hover:border-accent/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(215,25,32,0.08)] hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Top Visual Block */}
                <div className="h-48 relative bg-graphite overflow-hidden shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay for industrial feel */}
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
                  <div className="mt-auto pt-5 border-t border-card-border">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:text-[#b5141a] transition-colors group/link focus:outline-none w-full"
                    >
                      Подробнее
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Overlay background */}
          <div 
            className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          />
          
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] md:max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-[#1A1A1A] p-5 sm:p-8 flex items-start justify-between relative overflow-hidden shrink-0">
              {/* Background accent */}
              <div className="absolute inset-0 dot-pattern opacity-5" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
              
              <div className="relative z-10 pr-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg shrink-0">
                    {(() => {
                      const Icon = serviceIconMap[selectedService.icon];
                      return Icon ? <Icon className="w-5 h-5 sm:w-6 sm:h-6" /> : null;
                    })()}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedService(null)}
                className="relative z-10 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors focus:outline-none"
                aria-label="Закрыть"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              <p className="text-text-dark text-base sm:text-lg font-medium leading-relaxed mb-8">
                {selectedService.fullDescription}
              </p>

              <div>
                <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Что входит в услугу
                </h4>
                
                <ul className="space-y-3">
                  {selectedService.includes?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 bg-section-alt border border-card-border rounded-xl p-4 transition-colors hover:border-accent/30 hover:bg-white">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                        <CheckIcon className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-text-dark text-sm sm:text-base font-semibold leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-white p-5 sm:p-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <p className="text-text-muted text-sm max-w-sm hidden sm:block font-medium">
                Оставьте заявку, и мы бесплатно рассчитаем стоимость и предложим оптимальный маршрут.
              </p>
              <button 
                onClick={handleCtaClick}
                className="w-full sm:w-auto bg-accent hover:bg-[#b5141a] text-white font-bold px-8 py-3.5 sm:py-3 rounded-xl shadow-[0_0_15px_rgba(215,25,32,0.2)] hover:shadow-[0_0_25px_rgba(215,25,32,0.4)] hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                Получить расчёт по услуге
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
