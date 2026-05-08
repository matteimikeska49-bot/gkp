import { useState } from 'react';

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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark-fade" />
      
      {/* Decorative rail lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal rail lines */}
        <div className="absolute top-[20%] left-0 w-full h-px rail-line-h opacity-[0.06]" />
        <div className="absolute top-[40%] left-0 w-full h-px rail-line-h opacity-[0.04]" />
        <div className="absolute top-[70%] left-0 w-full h-px rail-line-h opacity-[0.05]" />
        <div className="absolute bottom-[15%] left-0 w-full h-px rail-line-h opacity-[0.03]" />
        
        {/* Vertical rail lines */}
        <div className="absolute top-0 left-[15%] w-px h-full rail-line-v opacity-[0.04]" />
        <div className="absolute top-0 left-[85%] w-px h-full rail-line-v opacity-[0.05]" />
        
        {/* Decorative dot pattern in corner */}
        <div className="absolute bottom-0 right-0 w-48 h-48 dot-pattern" />
        
        {/* Subtle red glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-main relative z-10 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-xs font-medium uppercase tracking-wider">
                ЖД-перевозки по России и СНГ
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6">
              ЖД-перевозки<br className="hidden sm:block" /> и сопровождение груза{' '}
              <span className="text-accent">под ключ</span>
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
              Берём на себя не только отправку по сети РЖД, но и подбор подвижного состава, документы,
              схемы крепления, терминальные операции, сопровождение и контроль груза в пути.
            </p>

            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xl">
              ГК «Параллель» организует железнодорожные перевозки грузов по России и СНГ: от расчёта
              маршрута и подачи вагона до оформления документов, погрузки, крепления и отслеживания груза.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-base px-8 py-3.5">
                Получить расчёт перевозки
              </a>
              <a href="#services" className="btn-outline text-base px-8 py-3.5">
                Наши услуги
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-white font-bold text-xl mb-6">
                Рассчитать ЖД-перевозку
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="from"
                    placeholder="Откуда"
                    value={formData.from}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="to"
                    placeholder="Куда"
                    value={formData.to}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="cargoType"
                    placeholder="Тип груза"
                    value={formData.cargoType}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="weight"
                    placeholder="Вес / объём"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3.5 text-base font-semibold mt-2"
                >
                  Рассчитать перевозку
                </button>
              </form>

              <p className="text-white/40 text-xs text-center mt-4">
                Ответим в течение 15 минут
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
