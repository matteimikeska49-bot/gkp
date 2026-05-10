import { CheckIcon } from '../components/ui/Icons';

const points = [
  'контроль движения груза',
  'слежение и розыск грузов',
  'понятный ответственный по перевозке',
  'документы и отчётность после завершения перевозки',
];

export default function TransparencySection() {
  return (
    <section className="bg-section-alt section-padding">
      <div className="container-main reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="accent-line mb-4" />
            <h2 className="section-title mb-4">
              Цифровая прозрачность:{' '}
              <span className="text-accent">вы видите то же, что и мы</span>
            </h2>

            <p className="text-text-dark text-lg mb-3 leading-relaxed font-semibold">
              Забудьте про Excel-отчеты вчерашней давности.
            </p>

            <p className="text-text-muted text-base mb-8 leading-relaxed">
              Мы предоставляем информацию о местонахождении груза в пути следования, сопровождаем
              перевозку и держим клиента в курсе статуса отправки.
            </p>

            <ul className="space-y-3">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 bg-section-light border border-card-border rounded-lg px-4 py-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-text-dark text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Realistic Status Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-card-border p-6 shadow-lg shadow-graphite/5 max-w-md mx-auto lg:ml-auto lg:mr-0">
              
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6 pb-5 border-b border-card-border">
                <div>
                  <h3 className="font-bold text-text-dark text-lg leading-none mb-2">Статус перевозки</h3>
                  <div className="text-xs text-text-muted flex items-center gap-2">
                    <span>Обновлено: 15 минут назад</span>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  В пути
                </div>
              </div>

              {/* Route Visualization */}
              <div className="mb-6 bg-section-light rounded-xl p-5 border border-card-border/50 relative overflow-hidden">
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]" />
                
                <div className="relative z-10">
                  <div className="flex justify-between text-[10px] text-text-muted mb-2 font-bold uppercase tracking-wider">
                    <span>Отправление</span>
                    <span>Назначение</span>
                  </div>
                  
                  <div className="flex items-center gap-3 relative">
                    <div className="font-bold text-text-dark text-sm">Москва</div>
                    <div className="flex-1 relative flex items-center py-2">
                      <div className="w-full h-[2px] bg-card-border" />
                      <div className="absolute left-[60%] -translate-x-1/2">
                        <div className="w-3 h-3 bg-white border-[2.5px] border-accent rounded-full shadow-sm" />
                      </div>
                    </div>
                    <div className="font-bold text-text-dark text-sm">Владивосток</div>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold mb-0.5">Текущая станция</span>
                      <span className="text-sm font-bold text-accent">Новосибирск-Главный</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-0.5">
                <div className="flex items-center justify-between text-sm py-3 border-b border-card-border/50">
                  <span className="text-text-muted">Подвижной состав</span>
                  <span className="font-semibold text-text-dark">Полувагон</span>
                </div>
                <div className="flex items-center justify-between text-sm py-3 border-b border-card-border/50">
                  <span className="text-text-muted">Документы</span>
                  <span className="font-semibold text-text-dark flex items-center gap-1.5">
                    Готовы
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckIcon className="w-2.5 h-2.5 text-green-600" />
                    </div>
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm py-3">
                  <span className="text-text-muted">Ответственный</span>
                  <span className="font-semibold text-text-dark">Закреплен</span>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
