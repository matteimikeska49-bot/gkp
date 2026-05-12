import { useState, useEffect } from 'react';

// Фиксированный дедлайн: 4.5 дня от 2026-05-12 16:00+03:00
const DELETE_AT = new Date('2026-05-17T04:00:00+03:00').getTime();

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

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[80] w-[calc(100%-32px)] sm:w-auto sm:max-w-[360px]"
      role="complementary"
    >
      <div
        style={{
          background: 'linear-gradient(145deg, #1a1d24 0%, #141720 100%)',
          border: '1px solid rgba(215,25,32,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
        className="rounded-xl px-4 py-4 sm:px-5 sm:py-4"
      >
        {/* Top accent line */}
        <div className="h-[2px] w-full rounded-full mb-3.5" style={{ background: 'linear-gradient(90deg, #D71920, rgba(215,25,32,0.08))' }} />

        {/* Label */}
        <p className="text-white/45 text-[10px] font-semibold uppercase tracking-[0.16em] mb-3">
          Страница будет удалена через:
        </p>

        {/* Countdown */}
        {timeLeft ? (
          <div className="flex items-end gap-2 sm:gap-2.5">
            {timeLeft.days > 0 && (
              <>
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-[26px] sm:text-3xl leading-none tabular-nums">{timeLeft.days}</span>
                  <span className="text-white/30 text-[9px] mt-1 uppercase tracking-wider">дн</span>
                </div>
                <span className="text-white/20 text-xl mb-3.5 leading-none">:</span>
              </>
            )}
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-[26px] sm:text-3xl leading-none tabular-nums">{pad(timeLeft.hours)}</span>
              <span className="text-white/30 text-[9px] mt-1 uppercase tracking-wider">ч</span>
            </div>
            <span className="text-white/20 text-xl mb-3.5 leading-none">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-[26px] sm:text-3xl leading-none tabular-nums">{pad(timeLeft.minutes)}</span>
              <span className="text-white/30 text-[9px] mt-1 uppercase tracking-wider">мин</span>
            </div>
            <span className="text-white/20 text-xl mb-3.5 leading-none">:</span>
            <div className="flex flex-col items-center">
              <span className="text-accent font-bold text-[26px] sm:text-3xl leading-none tabular-nums">{pad(timeLeft.seconds)}</span>
              <span className="text-white/30 text-[9px] mt-1 uppercase tracking-wider">сек</span>
            </div>
          </div>
        ) : (
          <p className="text-accent font-bold text-base">Время просмотра истекло</p>
        )}
      </div>
    </div>
  );
}
