import { useState } from 'react';
import heroBg from '../assets/hero-bg.jpg';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    cargoType: '',
    weight: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Visual-only on stage 1
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Photo background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Грузовой поезд на железнодорожном терминале"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      {/* Extra bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-graphite to-transparent" />

      {/* Decorative rail lines — subtle over photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[25%] left-0 w-full h-px rail-line-h opacity-[0.08]" />
        <div className="absolute top-[65%] left-0 w-full h-px rail-line-h opacity-[0.06]" />
        <div className="absolute top-0 left-[12%] w-px h-full rail-line-v opacity-[0.05]" />
        <div className="absolute bottom-0 right-0 w-36 h-36 dot-pattern" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10 pt-32 pb-12 md:pt-36 md:pb-14 lg:pt-40 lg:pb-16 reveal-up is-revealed">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Content — takes 7 cols on desktop */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-1.5 mb-5">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-xs font-medium uppercase tracking-wider">
                ЖД-перевозки по России и СНГ
              </span>
            </div>

            <h1 className="text-[1.625rem] sm:text-[2rem] md:text-[2.375rem] lg:text-[2.625rem] xl:text-[2.875rem] font-bold text-white leading-[1.18] mb-5">
              ЖД-перевозки<br className="hidden sm:block" /> и&nbsp;сопровождение груза{' '}
              <span className="text-accent">под&nbsp;ключ</span>
            </h1>

            <p className="text-white/75 text-[0.9rem] md:text-[1rem] lg:text-lg leading-relaxed mb-4 max-w-lg">
              Берём на себя не только отправку по сети РЖД, но и подбор подвижного состава, документы,
              схемы крепления, терминальные операции, сопровождение и контроль груза в пути.
            </p>

            <p className="text-white/50 text-[0.8rem] md:text-sm lg:text-[0.938rem] leading-relaxed mb-7 max-w-lg">
              ГК&nbsp;«Параллель» помогает грузоотправителю пройти весь маршрут без разрозненных
              подрядчиков: от расчёта перевозки и подачи вагона до закрывающих документов.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact-form" className="btn-primary text-base px-8 py-3.5">
                Получить расчёт перевозки
              </a>
              <a href="#services" className="btn-outline text-base px-8 py-3.5">
                Наши услуги
              </a>
            </div>
          </div>

          {/* Right: Form — takes 5 cols on desktop */}
          <div className="lg:col-span-5">
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="bg-graphite-dark/75 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 md:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <h2 className="text-white font-bold text-lg md:text-xl mb-5">
                  Рассчитать ЖД-перевозку
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="from"
                      placeholder="Откуда"
                      value={formData.from}
                      onChange={handleChange}
                      className="form-input-dark text-sm py-2.5"
                    />
                    <input
                      type="text"
                      name="to"
                      placeholder="Куда"
                      value={formData.to}
                      onChange={handleChange}
                      className="form-input-dark text-sm py-2.5"
                    />
                  </div>
                  <input
                    type="text"
                    name="cargoType"
                    placeholder="Тип груза"
                    value={formData.cargoType}
                    onChange={handleChange}
                    className="w-full bg-white/[0.07] border border-white/12 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="weight"
                      placeholder="Вес / объём"
                      value={formData.weight}
                      onChange={handleChange}
                      className="form-input-dark text-sm py-2.5"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input-dark text-sm py-2.5"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3 text-sm md:text-base font-semibold mt-1"
                  >
                    Рассчитать перевозку
                  </button>
                </form>

                <p className="text-white/40 text-xs text-center mt-3">
                  Ответим в течение 15 минут
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
