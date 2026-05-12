import painBg from '../assets/sections/pain-bg.png';
import { ShieldIcon, EyeIcon, DocumentIcon } from '../components/ui/Icons';

export default function PainSection() {
  return (
    <section className="relative overflow-hidden bg-graphite section-padding">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={painBg} 
          alt="Остановленный грузовой поезд" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite via-graphite/90 to-graphite" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-px rail-line-h opacity-[0.1]" />
        <div className="absolute bottom-0 left-0 w-full h-px rail-line-h opacity-[0.1]" />
        <div className="absolute top-1/2 left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-main relative z-10 reveal-up">
        {/* Header Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="accent-line mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4">
            Ваш груз не станет{' '}
            <span className="text-accent">«недвижимостью»</span>
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl font-medium mb-8">
            Гарантируем движение там, где другие стоят в «брошенных» поездах.
          </p>
          
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            В ЖД-перевозках бизнес теряет деньги не только на тарифе. Гораздо дороже обходятся простои, отсутствие контроля, ошибки в документах и ситуации, когда груз “зависает” без понятного ответственного.
          </p>
        </div>

        {/* 3 Result Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          
          {/* Card 1 */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-accent/20">
              <ShieldIcon className="w-6 h-6 text-white group-hover:text-accent transition-colors duration-300" />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">
              Не теряете деньги на простоях
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mt-auto">
              Мы заранее учитываем риски станции, маршрута и подачи подвижного состава, чтобы перевозка не превращалась в ожидание без сроков.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-accent/20">
              <EyeIcon className="w-6 h-6 text-white group-hover:text-accent transition-colors duration-300" />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">
              Понимаете, где груз и что происходит
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mt-auto">
              Сопровождаем перевозку, отслеживаем движение груза и держим клиента в курсе статуса отправки.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-accent/20">
              <DocumentIcon className="w-6 h-6 text-white group-hover:text-accent transition-colors duration-300" />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">
              Получаете управляемую перевозку
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mt-auto">
              Закрываем подвижной состав, документы, схемы крепления, терминальные операции и контроль движения в одном контуре.
            </p>
          </div>

        </div>

        {/* Conclusion */}
        <div className="max-w-3xl mx-auto flex justify-center">
          <div className="bg-accent/10 border border-accent/20 rounded-full px-6 py-3 flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 font-medium text-sm md:text-base">
              Результат — груз движется по маршруту, а у вас есть ответственный, документы и понимание следующего шага.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
