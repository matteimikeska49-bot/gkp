export default function PainSection() {
  return (
    <section className="relative overflow-hidden bg-graphite-light">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px rail-line-h opacity-[0.08]" />
        <div className="absolute bottom-0 left-0 w-full h-px rail-line-h opacity-[0.08]" />
        <div className="absolute top-1/2 left-[10%] w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-main section-padding relative z-10 reveal-up">
        <div className="max-w-4xl mx-auto text-center">
          {/* Red accent line */}
          <div className="accent-line mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4">
            Ваш груз не станет{' '}
            <span className="text-accent">«недвижимостью»</span>
          </h2>

          <p className="text-white/60 text-lg md:text-xl font-medium mb-8">
            Гарантируем движение там, где другие стоят в «брошенных» поездах.
          </p>

          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-10 text-left">
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
              В ЖД-перевозках бизнес теряет деньги не только на тарифе. Гораздо дороже обходятся
              простои на сети, дефицит тяги, неподходящий вагон, ошибки в документах, порожний пробег,
              скрытые доплаты и отсутствие контроля на маршруте.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Мы закрываем весь контур перевозки: подвижной состав, маршрут, документы, схемы крепления,
              терминальные операции, сопровождение и юридическую чистоту сделки.
            </p>

            {/* Decorative bottom accent */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span className="text-white/50 text-sm">
                Полный контроль от заявки до закрывающих документов
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
