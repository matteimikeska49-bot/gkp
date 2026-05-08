import { useState } from 'react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    stationFrom: '',
    stationTo: '',
    cargoType: '',
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
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-0 w-full h-px rail-line-h opacity-[0.06]" />
        <div className="absolute bottom-[20%] left-0 w-full h-px rail-line-h opacity-[0.04]" />
        <div className="absolute top-0 left-[20%] w-px h-full rail-line-v opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Content */}
          <div className="lg:pt-8">
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-6">
              Ваш маршрут может стоить{' '}
              <span className="text-accent">дешевле</span> и ехать{' '}
              <span className="text-accent">быстрее</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Мы проведем аудит ваших текущих отправок и найдем узкие места, где вы теряете деньги
              на простоях.
            </p>

            {/* Trust indicators */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-white/50 text-sm">Полный расчёт за 2 часа</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-white/50 text-sm">Без скрытых комиссий</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-white/50 text-sm">Прозрачное ценообразование</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-white font-bold text-xl mb-6">
              Получить план оптимизации и расчет тарифа за 2 часа
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Компания"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="stationFrom"
                  placeholder="Станция отправления"
                  value={formData.stationFrom}
                  onChange={handleChange}
                  className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input
                  type="text"
                  name="stationTo"
                  placeholder="Станция назначения"
                  value={formData.stationTo}
                  onChange={handleChange}
                  className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <input
                type="text"
                name="cargoType"
                placeholder="Тип груза"
                value={formData.cargoType}
                onChange={handleChange}
                className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
              />

              <textarea
                name="comment"
                placeholder="Комментарий"
                rows={3}
                value={formData.comment}
                onChange={handleChange}
                className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full btn-primary py-3.5 text-base font-semibold"
              >
                Получить план оптимизации и расчет тарифа за 2 часа
              </button>
            </form>

            <p className="text-white/40 text-xs text-center mt-4">
              Ответим в течение 15 минут
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
