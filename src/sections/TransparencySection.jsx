import { CheckIcon, EyeIcon } from '../components/ui/Icons';

const points = [
  'контроль движения груза',
  'слежение и розыск грузов',
  'понятный ответственный по перевозке',
  'документы и отчётность после завершения перевозки',
];

export default function TransparencySection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="accent-line mb-4" />
            <h2 className="section-title mb-2">
              Цифровая прозрачность:{' '}
              <span className="text-accent">вы видите то же, что и мы</span>
            </h2>

            <p className="text-text-muted text-lg mb-2 leading-relaxed font-medium">
              Забудьте про Excel-отчеты вчерашней давности.
            </p>

            <p className="text-text-muted text-base mb-8 leading-relaxed">
              Мы предоставляем информацию о местонахождении груза в пути следования, сопровождаем
              перевозку и держим клиента в курсе статуса отправки.
            </p>

            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-text-dark text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Decorative dashboard mockup */}
          <div className="relative">
            <div className="bg-section-light rounded-2xl border border-card-border p-6 md:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-accent/20 hover:-translate-y-1 transition-all duration-300">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <EyeIcon className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-text-dark text-sm">Статус отправки</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-medium">В пути</span>
                </div>
              </div>

              {/* Status cards */}
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-card-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted uppercase tracking-wider">Маршрут</span>
                    <span className="text-xs text-accent font-medium">Активный</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm font-semibold text-text-dark">Москва</span>
                    <div className="flex-1 h-px bg-accent/30 relative">
                      <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <span className="text-sm font-semibold text-text-dark">Владивосток</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-4 border border-card-border">
                    <span className="text-xs text-text-muted uppercase tracking-wider block">Вагон</span>
                    <span className="text-sm font-semibold text-text-dark mt-1 block">Полувагон</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-card-border">
                    <span className="text-xs text-text-muted uppercase tracking-wider block">Документы</span>
                    <span className="text-sm font-semibold text-green-600 mt-1 block">Готовы ✓</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-card-border">
                  <span className="text-xs text-text-muted uppercase tracking-wider block">Текущая позиция</span>
                  <span className="text-sm font-semibold text-text-dark mt-1 block">Новосибирск-Главный</span>
                  <span className="text-xs text-text-muted mt-1 block">Обновлено 15 мин назад</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
