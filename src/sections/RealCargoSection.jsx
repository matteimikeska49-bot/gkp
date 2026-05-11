const cargoItems = [
  {
    image: '/images/real-cargo/slide2.webp',
    title: 'Автотехника',
    description: 'Спецавтомобили, автоцистерны и техника на ЖД-платформах.',
    objectPosition: 'center center',
  },
  {
    image: '/images/real-cargo/slide3.webp',
    title: 'Спецтехника',
    description: 'Погрузчики, бульдозеры и другая тяжёлая техника.',
    objectPosition: 'center center',
  },
  {
    image: '/images/real-cargo/slide4.webp',
    title: 'Крановые установки',
    description: 'Автокраны, манипуляторы и подъёмное оборудование.',
    objectPosition: 'center center',
  },
  {
    image: '/images/real-cargo/slide5.webp',
    title: 'Промышленное оборудование',
    description: 'Крупные установки, ёмкости, резервуары и нестандартные грузы.',
    objectPosition: 'center center',
  },
  {
    image: '/images/real-cargo/slide6.webp',
    title: 'ЖБИ и плиты',
    description: 'Железобетонные изделия, панели и плиты.',
    objectPosition: 'center center',
  },
  {
    image: '/images/real-cargo/slide7.webp',
    title: 'Металлоконструкции',
    description: 'Фермы, балки, каркасы и конструктивные элементы.',
    objectPosition: 'center center',
  },
  {
    image: '/images/real-cargo/slide9.webp',
    title: 'Контейнерное оборудование',
    description: 'Оборудование и установки внутри контейнеров.',
    objectPosition: 'center center',
  },
];

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Подбираем платформу под груз',
    text: 'Выбираем оптимальный тип платформы под габариты, вес и особенности груза.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Готовим схемы крепления и погрузки',
    text: 'Разрабатываем схемы крепления и погрузки с учётом требований ЖД и безопасности.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Сопровождаем до станции назначения',
    text: 'Контролируем перевозку на всех этапах до станции назначения.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Передаём полный пакет документов',
    text: 'Оформляем и передаём все закрывающие документы без задержек.',
  },
];

export default function RealCargoSection() {
  const handleCtaClick = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="real-cargo" className="relative overflow-hidden bg-graphite-dark">
      {/* ── Background layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0d] via-[#111318] to-[#0a0b0d]" />

        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: 'center top'
          }}
        />

        {/* Abstract Perspective Rails (Bottom) */}
        <div className="absolute bottom-0 left-0 w-full h-[50vh] opacity-[0.05] mix-blend-overlay"
          style={{
            background: `
              repeating-linear-gradient(
                to right,
                transparent,
                transparent 49.5%,
                rgba(255,255,255,1) 49.8%,
                rgba(255,255,255,1) 50.2%,
                transparent 50.5%,
                transparent 100%
              )
            `,
            backgroundSize: '150px 100%',
            transform: 'perspective(1000px) rotateX(75deg) scale(2.5)',
            transformOrigin: 'bottom center',
          }}
        />

        {/* Soft Red Ambient Glows */}
        {/* Top Right Glow */}
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-60 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(215,25,32,0.1) 0%, transparent 70%)' }}
        />
        {/* Bottom Left Glow */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-50 blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(215,25,32,0.08) 0%, transparent 70%)' }}
        />
        
        {/* Top border line with subtle glow */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-main relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">

        {/* ── Section header ── */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
              Реальные перевозки
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Берёмся за грузы,<br className="hidden sm:block" /> где обычной перевозки недостаточно
          </h2>

          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-3xl font-medium">
            Сложный груз не прощает случайных подрядчиков. Мы заранее учитываем габариты, крепление, станцию, документы и сроки подачи состава — чтобы перевозка не превращалась в простой, доплаты и переносы.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
          {/* Cargo photo cards */}
          {cargoItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden border cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: 'rgba(255,255,255,0.07)',
                background: '#111318',
                boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(215,25,32,0.35)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(215,25,32,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
              }}
            >
              {/* Photo */}
              <div className="h-[160px] md:h-[175px] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: item.objectPosition }}
                  loading="lazy"
                />
                {/* Dark overlay — lighter than before so photo is visible */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)' }} />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                {/* Red accent line */}
                <div className="w-6 h-[2px] bg-accent mb-3 transition-all duration-300 group-hover:w-10" />
                <h3 className="text-white font-bold text-[15px] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/45 text-[12px] md:text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="group relative rounded-xl overflow-hidden border flex flex-col justify-between p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: 'rgba(215,25,32,0.25)',
              background: 'linear-gradient(135deg, #1a0c0d 0%, #0E1116 60%)',
              boxShadow: '0 2px 20px rgba(215,25,32,0.08)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(215,25,32,0.5)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(215,25,32,0.14)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(215,25,32,0.25)';
              e.currentTarget.style.boxShadow = '0 2px 20px rgba(215,25,32,0.08)';
            }}
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(215,25,32,0.12) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'rgba(215,25,32,0.12)', border: '1px solid rgba(215,25,32,0.2)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#D71920" strokeWidth={1.5} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>

              <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-3">
                Есть нестандартный груз?
              </h3>
              <p className="text-white/45 text-[13px] leading-relaxed mb-6">
                Подберём подвижной состав, подготовим схему крепления и маршрут под вашу задачу.
              </p>
            </div>

            <button
              onClick={handleCtaClick}
              className="relative z-10 w-full flex items-center justify-between gap-2 font-bold text-sm text-white px-5 py-3 rounded-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              style={{ background: '#D71920', boxShadow: '0 4px 14px rgba(215,25,32,0.25)' }}
            >
              Получить расчёт перевозки
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Benefits strip ── */}
        <div
          className="rounded-xl border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-y-0 sm:divide-x"
          style={{
            borderColor: 'rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.025)',
            divideColor: 'rgba(255,255,255,0.07)',
          }}
        >
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-5 md:p-6"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                style={{ background: 'rgba(215,25,32,0.1)', color: '#D71920', border: '1px solid rgba(215,25,32,0.15)' }}
              >
                {b.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-[13px] md:text-sm leading-snug mb-1">
                  {b.title}
                </p>
                <p className="text-white/40 text-[11px] md:text-[12px] leading-relaxed">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
