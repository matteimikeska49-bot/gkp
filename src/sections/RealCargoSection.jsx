import heroBg from '../assets/hero-bg.jpg';

const cargoItems = [
  {
    image: '/images/real-cargo/slide2.webp',
    title: 'Автотехника',
    description: 'Спецавтомобили, автоцистерны и техника на ЖД-платформах.',
    objectPosition: 'center 40%',
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
    objectPosition: 'center 35%',
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
    objectPosition: 'center 60%',
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[18px] h-[18px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Подбираем платформу под груз',
    text: 'Выбираем оптимальный тип платформы под габариты, вес и особенности груза.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[18px] h-[18px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Готовим схемы крепления и погрузки',
    text: 'Разрабатываем схемы с учётом требований ЖД и безопасности.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[18px] h-[18px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Сопровождаем до станции назначения',
    text: 'Контролируем перевозку на всех этапах до станции назначения.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[18px] h-[18px]">
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
    <section id="real-cargo" className="relative overflow-hidden">
      {/* ── Live industrial background ── */}
      <div className="absolute inset-0">
        {/* Real railway photo as background — heavily darkened */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 70%' }}
        />
        {/* Heavy dark overlay to keep text readable */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(14,17,22,0.92) 0%, rgba(14,17,22,0.88) 40%, rgba(14,17,22,0.94) 100%)' }} />

        {/* Very faint technical grid on top */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Soft red ambient glow — top-right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(215,25,32,0.07) 0%, transparent 70%)' }}
        />
        {/* Soft red ambient glow — bottom-left */}
        <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(215,25,32,0.05) 0%, transparent 70%)' }}
        />

        {/* Top separator line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 md:py-28">

        {/* ── Header ── */}
        <div className="mb-10 md:mb-14 max-w-2xl">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-7 h-[2px] bg-accent" />
            <span className="text-accent text-[11px] font-bold uppercase tracking-[0.18em]">
              Реальные перевозки
            </span>
          </div>

          <h2 className="text-[28px] sm:text-4xl md:text-[44px] font-bold text-white leading-[1.15] mb-5 tracking-tight">
            Берёмся за&nbsp;грузы,{' '}
            <br className="hidden md:block" />
            где обычной перевозки недостаточно
          </h2>

          <p className="text-white/55 text-[15px] md:text-base leading-relaxed">
            Сложный груз не прощает случайных подрядчиков. Мы&nbsp;заранее учитываем габариты, крепление, станцию, документы и&nbsp;сроки подачи состава&nbsp;— чтобы перевозка не&nbsp;превращалась в&nbsp;простой, доплаты и&nbsp;переносы.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8 md:mb-12">
          {cargoItems.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(17,19,24,0.85)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(215,25,32,0.3)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(215,25,32,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Photo */}
              <div className="h-[150px] sm:h-[160px] md:h-[170px] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: item.objectPosition }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/70 via-transparent to-[#111318]/20" />
              </div>

              {/* Content */}
              <div className="px-4 py-3.5 md:px-5 md:py-4">
                <div className="w-5 h-[2px] bg-accent mb-2.5 transition-all duration-300 group-hover:w-8" />
                <h3 className="text-white font-bold text-sm mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/40 text-[12px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div
            className="group rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(160deg, rgba(30,12,14,0.9) 0%, rgba(17,19,24,0.9) 50%)',
              border: '1px solid rgba(215,25,32,0.2)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(215,25,32,0.45)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(215,25,32,0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(215,25,32,0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="px-5 pt-5 md:px-6 md:pt-6 flex-1 flex flex-col">
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0"
                style={{ background: 'rgba(215,25,32,0.1)', border: '1px solid rgba(215,25,32,0.18)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#D71920" strokeWidth={1.5} className="w-[18px] h-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>

              <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-2">
                Есть нестандартный груз?
              </h3>
              <p className="text-white/40 text-[12px] md:text-[13px] leading-relaxed mb-5">
                Подберём подвижной состав, подготовим схему крепления и&nbsp;маршрут под вашу задачу.
              </p>
            </div>

            <div className="px-5 pb-5 md:px-6 md:pb-6">
              <button
                onClick={handleCtaClick}
                className="w-full flex items-center justify-between gap-2 font-bold text-[13px] text-white px-4 py-2.5 rounded-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                style={{ background: '#D71920', boxShadow: '0 4px 12px rgba(215,25,32,0.25)' }}
              >
                Получить расчёт перевозки
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Benefits Strip ── */}
        <div
          className="rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 px-5 py-4 md:px-6 md:py-5"
              style={{
                borderRight: idx < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderBottom: idx < 2 ? undefined : undefined,
              }}
            >
              <div
                className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center mt-0.5"
                style={{ background: 'rgba(215,25,32,0.08)', color: '#D71920' }}
              >
                {b.icon}
              </div>
              <div className="min-w-0">
                <p className="text-white/90 font-semibold text-[13px] leading-snug mb-0.5">
                  {b.title}
                </p>
                <p className="text-white/35 text-[11px] leading-relaxed">
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
