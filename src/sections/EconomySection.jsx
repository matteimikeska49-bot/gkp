import { economyData } from '../data/services';

export default function EconomySection() {
  return (
    <section className="bg-section-light section-padding">
      <div className="container-main reveal-up">
        <div className="text-center mb-12 md:mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title">
            Вы платите за перевозку, а не за <span className="text-accent">«воздух»</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Устраняем скрытые расходы, которые обычно перекладывают на грузоотправителя.
          </p>
        </div>

        {/* Desktop: Table */}
        <div className="hidden md:block">
          <div className="bg-white rounded-2xl border border-card-border overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-graphite text-white">
              <div className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                Проблема
              </div>
              <div className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                Решение
              </div>
              <div className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                Выгода
              </div>
            </div>

            {/* Table rows */}
            {economyData.map((row, i) => (
              <div
                key={row.id}
                className={`grid grid-cols-3 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-section-alt'
                } ${i < economyData.length - 1 ? 'border-b border-card-border' : ''}`}
              >
                <div className="px-6 py-5 flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-dark font-medium text-base">{row.problem}</span>
                </div>
                <div className="px-6 py-5 text-text-muted text-base">
                  {row.solution}
                </div>
                <div className="px-6 py-5 text-text-dark font-medium text-base">
                  {row.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Cards */}
        <div className="md:hidden space-y-4">
          {economyData.map((row) => (
            <div key={row.id} className="card">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <h3 className="font-bold text-text-dark">{row.problem}</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Решение</span>
                  <p className="text-text-dark text-sm mt-1">{row.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Выгода</span>
                  <p className="text-accent font-medium text-sm mt-1">{row.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
