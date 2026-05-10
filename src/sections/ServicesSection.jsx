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
        <div className="mb-10 md:mb-14">
          <div className="accent-line mb-4" />
          <h2 className="section-title">Услуги</h2>
          <p className="section-subtitle max-w-3xl">
            8&nbsp;направлений в одном контуре ЖД&#8209;перевозки: от подбора состава и&nbsp;документов до терминальной обработки, схем крепления и&nbsp;сопровождения груза.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {services.map((service) => {
            const IconComponent = serviceIconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl border border-card-border overflow-hidden group hover:border-accent/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(215,25,32,0.07)] hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Top Visual Block */}
                <div className="h-40 md:h-44 relative bg-graphite overflow-hidden shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Lighter overlay — preserves photo detail */}
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/15 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute bottom-3 left-5 w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-4 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-text-dark font-bold text-base md:text-lg mb-1.5 leading-snug group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-[13px] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2 mb-5">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent/60 rounded-full flex-shrink-0" />
                        <span className="text-text-muted text-[13px] leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <div className="mt-auto pt-4 border-t border-card-border">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:text-[#b5141a] transition-all group/link focus:outline-none w-full group-hover:gap-3"
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
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
            <div className="bg-graphite p-5 sm:p-7 flex items-start justify-between relative overflow-hidden shrink-0">
              {/* Background accent */}
              <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
              
              <div className="relative z-10 pr-10">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-accent flex items-center justify-center text-white shadow-lg shrink-0">
                    {(() => {
                      const Icon = serviceIconMap[selectedService.icon];
                      return Icon ? <Icon className="w-5 h-5" /> : null;
                    })()}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedService(null)}
                className="relative z-10 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors focus:outline-none shrink-0"
                aria-label="Закрыть"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-7 overflow-y-auto flex-1">
              <p className="text-text-dark text-sm sm:text-base font-medium leading-relaxed mb-6">
                {selectedService.fullDescription}
              </p>

              <div>
                <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Что входит в услугу
                </h4>
                
                <ul className="space-y-2">
                  {selectedService.includes?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-section-alt border border-card-border rounded-lg p-3.5 transition-colors hover:border-accent/20 hover:bg-white">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                        <CheckIcon className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-text-dark text-sm font-medium leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-white p-4 sm:p-5 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <p className="text-text-muted text-sm max-w-sm hidden sm:block font-medium leading-snug">
                Оставьте заявку — рассчитаем стоимость и предложим маршрут.
              </p>
              <button 
                onClick={handleCtaClick}
                className="w-full sm:w-auto bg-accent hover:bg-[#b5141a] text-white font-bold px-7 py-3 rounded-xl shadow-[0_0_15px_rgba(215,25,32,0.2)] hover:shadow-[0_0_25px_rgba(215,25,32,0.4)] hover:-translate-y-0.5 transition-all text-sm"
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
