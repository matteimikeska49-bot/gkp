import { useState } from 'react';
import { CheckIcon } from '../components/ui/Icons';
import ctaBg from '../assets/sections/cta-bg.png';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    route: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Visual-only on stage 1
  };

  return (
    <section id="contact" className="relative bg-graphite section-padding overflow-hidden">
      {/* Realistic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={ctaBg} 
          alt="Контейнерный терминал" 
          className="w-full h-full object-cover opacity-[0.25] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/90 to-graphite/50" />
      </div>

      {/* Decorative Technical Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-0 w-full h-px rail-line-h opacity-[0.06]" />
        <div className="absolute bottom-[20%] left-0 w-full h-px rail-line-h opacity-[0.06]" />
        <div className="absolute top-0 left-[20%] w-px h-full rail-line-v opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />
      </div>

      <div className="container-main relative z-10 reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-6 lg:pr-8">
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-6">
              Ваш маршрут может стоить{' '}
              <span className="text-accent relative inline-block">
                дешевле
                <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-accent/30 rounded-full" />
              </span>{' '}
              и ехать{' '}
              <span className="text-accent relative inline-block">
                быстрее
                <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-accent/30 rounded-full" />
              </span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10 font-medium">
              Мы проведем аудит ваших текущих отправок и найдем узкие места, где вы теряете деньги на простоях.
            </p>

            {/* Checklist / Thesis */}
            <div className="space-y-4">
              {[
                'Покажем, где теряются деньги на простоях',
                'Рассчитаем маршрут и тариф',
                'Подскажем, как сократить лишние расходы',
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-lg p-4 transition-colors hover:bg-white/[0.05]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-white/80 text-base font-medium leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-6 relative">
            {/* Form Glow */}
            <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-[80px] pointer-events-none" />

            <div id="contact-form" className="relative bg-[#1A1A1A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl scroll-mt-28">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-white font-bold text-xl">
                  Заявка на расчёт
                </h3>
                <div className="w-12 h-px bg-accent/50" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input-dark text-sm py-3.5"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-dark text-sm py-3.5 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Компания"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input-dark text-sm py-3.5"
                  />
                  <input
                    type="text"
                    name="route"
                    placeholder="Маршрут / что везти"
                    value={formData.route}
                    onChange={handleChange}
                    className="form-input-dark text-sm py-3.5 w-full"
                  />
                </div>

                <textarea
                  name="comment"
                  placeholder="Комментарий"
                  rows={3}
                  value={formData.comment}
                  onChange={handleChange}
                  className="form-input-dark text-sm py-3.5 resize-none w-full"
                />

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-base font-bold shadow-[0_0_20px_rgba(215,25,32,0.3)] hover:shadow-[0_0_30px_rgba(215,25,32,0.5)] transition-all duration-300"
                  >
                    Получить расчёт и план оптимизации
                  </button>
                  <p className="text-white/40 text-[13px] text-center mt-4 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Ответим в течение 15 минут. Расчёт и план — до 2 часов.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
