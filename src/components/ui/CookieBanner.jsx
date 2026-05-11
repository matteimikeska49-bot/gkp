import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('gkparallel_cookie_accepted');
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gkparallel_cookie_accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm z-[90] bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl p-4 sm:p-5 flex flex-col gap-4">
      <p className="text-white/80 text-sm leading-relaxed">
        Мы используем cookies, чтобы сайт работал корректно, а также для анализа посещаемости и улучшения сервиса.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={handleAccept}
          className="bg-accent hover:bg-[#b5141a] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-[0_0_10px_rgba(215,25,32,0.2)] hover:-translate-y-0.5"
        >
          Принять
        </button>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'privacy' }))}
          className="text-white/40 hover:text-white/80 text-sm transition-colors underline underline-offset-4"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}
