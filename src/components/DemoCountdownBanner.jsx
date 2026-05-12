import { useState, useEffect } from 'react';

// Фиксированная дата — 7 дней от 2026-05-12. Одна для всех пользователей.
const DELETE_AT = new Date('2026-05-19T23:59:59+03:00').getTime();

function getTimeLeft() {
  const diff = DELETE_AT - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function DemoCountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[80] w-[calc(100%-32px)] sm:w-auto sm:max-w-[400px]"
      role="complementary"
      aria-label="Обратный отсчёт"
    >
      <div
        style={{
          background: 'linear-gradient(145deg, #1a1d24 0%, #141720 100%)',
          border: '1px solid rgba(215,25,32,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
        className="rounded-xl p-4 sm:p-5"
      >
        {/* Top accent line */}
        <div className="h-[2px] w-full rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #D71920, rgba(215,25,32,0.1))' }} />

        {/* Label */}
        <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2.5">
          Страница будет удалена через:
        </p>

        {/* Countdown */}
        {timeLeft ? (
          <div className="flex items-end gap-2 sm:gap-3 mb-4">
            {/* Days */}
            {timeLeft.days > 0 && (
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-2xl sm:text-3xl leading-none tabular-nums">{timeLeft.days}</span>
                <span className="text-white/30 text-[10px] mt-1 uppercase tracking-wider">дн</span>
              </div>
            )}
            {timeLeft.days > 0 && <span className="text-white/20 font-light text-xl mb-3">:</span>}
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-2xl sm:text-3xl leading-none tabular-nums">{pad(timeLeft.hours)}</span>
              <span className="text-white/30 text-[10px] mt-1 uppercase tracking-wider">ч</span>
            </div>
            <span className="text-white/20 font-light text-xl mb-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-2xl sm:text-3xl leading-none tabular-nums">{pad(timeLeft.minutes)}</span>
              <span className="text-white/30 text-[10px] mt-1 uppercase tracking-wider">мин</span>
            </div>
            <span className="text-white/20 font-light text-xl mb-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-accent font-bold text-2xl sm:text-3xl leading-none tabular-nums">{pad(timeLeft.seconds)}</span>
              <span className="text-white/30 text-[10px] mt-1 uppercase tracking-wider">сек</span>
            </div>
          </div>
        ) : (
          <p className="text-accent font-bold text-lg mb-4">Время просмотра истекло</p>
        )}

        {/* CTA button */}
        <button
          onClick={handleClick}
          className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-[#b5141a] text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          style={{ boxShadow: '0 4px 14px rgba(215,25,32,0.3)' }}
        >
          Обсудить запуск
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </button>
      </div>
    </div>
  );
}
