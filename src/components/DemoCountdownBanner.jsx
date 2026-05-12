import { useState, useEffect } from 'react';

// Фиксированный дедлайн: 4.5 дня от 2026-05-12 16:00+03:00
const DELETE_AT = new Date('2026-05-17T04:00:00+03:00').getTime();

function getTimeLeft() {
  const diff = DELETE_AT - Date.now();
  if (diff <= 0) return null;
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

  if (!timeLeft) return null;

  return (
    <div
      className="fixed z-[80]"
      style={{
        bottom: '16px',
        right: '16px',
        left: 'auto',
        maxWidth: '560px',
        width: 'calc(100% - 32px)',
      }}
      role="complementary"
      aria-label="Страница будет удалена"
    >
      {/* Responsive: on small screens takes full bottom width with 16px margins */}
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
            color: 'rgba(255,255,255,0.45)',
            fontSize: '12px',
            fontWeight: 500,
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
            gap: '5px',
            fontSize: '13px',
            fontWeight: 600,
            fontVariantNumeric: 'tabular-nums',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          {timeLeft.days > 0 && (
            <>
              <span style={{ color: '#fff' }}>{timeLeft.days}&nbsp;дн</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            </>
          )}
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
