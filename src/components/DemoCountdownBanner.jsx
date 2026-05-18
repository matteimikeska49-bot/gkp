import { useState, useEffect } from 'react';

// Фиксированный дедлайн: 22 часа от текущего момента
const DELETE_AT = new Date('2026-05-19T09:30:00+03:00').getTime();

function getTimeLeft() {
  const diff = DELETE_AT - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="fixed z-[80] bottom-[12px] right-[12px] left-[12px] md:left-auto md:bottom-[16px] md:right-[16px] max-w-full md:max-w-[560px]"
      role="complementary"
      aria-label="Страница будет удалена"
    >
      <div
        style={{
          background: 'linear-gradient(90deg, #16191f 0%, #1a1d24 100%)',
          border: '1px solid rgba(215,25,32,0.22)',
          borderTop: '2px solid rgba(215,25,32,0.55)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.45)',
          borderRadius: '8px',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '6px 10px',
          minHeight: '44px',
        }}
      >
        {/* Label */}
        <span
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '13px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            letterSpacing: '0.01em',
          }}
        >
          Страница будет удалена через:
        </span>

        {/* Countdown inline */}
        <span
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '6px',
            fontSize: '15px',
            fontWeight: 700,
            fontVariantNumeric: 'tabular-nums',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: '#fff' }}>{pad(timeLeft.days)}&nbsp;дн</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span style={{ color: '#fff' }}>{pad(timeLeft.hours)}&nbsp;ч</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span style={{ color: '#fff' }}>{pad(timeLeft.minutes)}&nbsp;мин</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span style={{ color: '#D71920', fontWeight: 700 }}>{pad(timeLeft.seconds)}&nbsp;сек</span>
        </span>
      </div>
    </div>
  );
}

