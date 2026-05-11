import { useState, useEffect } from 'react';
import { PhoneIcon, CloseIcon } from '../ui/Icons';
import { footerServices } from '../../data/services';

function RequisitesModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <h3 className="text-white font-bold text-lg">Реквизиты компании</h3>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors focus:outline-none"
            aria-label="Закрыть"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 overflow-y-auto flex-1 space-y-5">
          <p className="text-white font-bold text-base">ООО ГК «ПАРАЛЛЕЛЬ»</p>

          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 text-sm">
            <span className="text-white/40 font-medium">ИНН:</span>
            <span className="text-white/80">5257182506</span>

            <span className="text-white/40 font-medium">КПП:</span>
            <span className="text-white/80">525701001</span>

            <span className="text-white/40 font-medium">ОКПО:</span>
            <span className="text-white/80">31657828</span>

            <span className="text-white/40 font-medium">ОГРН:</span>
            <span className="text-white/80">1185275038794</span>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-2.5 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-white/40 font-medium shrink-0">Адрес:</span>
              <span className="text-white/80">г.&nbsp;Н.&nbsp;Новгород, ул.&nbsp;Ракетная,&nbsp;9э</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white/40 font-medium shrink-0">Тел./факс:</span>
              <a href="tel:+79063482633" className="text-white/80 hover:text-accent transition-colors">8-906-348-26-33</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white/40 font-medium shrink-0">Телефон:</span>
              <a href="tel:+78312673070" className="text-white/80 hover:text-accent transition-colors">+7 (831) 267-30-70</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white/40 font-medium shrink-0">E-mail:</span>
              <a href="mailto:info@gkparallel.ru" className="text-white/80 hover:text-accent transition-colors">info@gkparallel.ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [showRequisites, setShowRequisites] = useState(false);

  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden border-t border-accent/20">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 dot-pattern opacity-5 pointer-events-none" />

      <div className="container-main py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Company info (Takes up 4 cols on large screens) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <img src="/images/logo .png" alt="ГК ПАРАЛЛЕЛЬ" className="h-[36px] md:h-[44px] w-auto object-contain" />
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs font-medium">
              Железнодорожные перевозки грузов по России и СНГ. Комплексное сопровождение на всех этапах маршрута.
            </p>

            {/* Contact Block */}
            <div className="space-y-2.5 mt-auto">
              {/* Phone 1 */}
              <a
                href="tel:+78312673070"
                className="flex items-center gap-3 text-white hover:text-accent transition-colors bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 hover:bg-white/10 group"
              >
                <PhoneIcon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-bold tracking-wide">+7 (831) 267-30-70</span>
              </a>
              {/* Phone 2 */}
              <a
                href="tel:+79063482633"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 hover:bg-white/10 group"
              >
                <PhoneIcon className="w-4 h-4 text-accent/60 group-hover:text-accent group-hover:scale-110 transition-all shrink-0" />
                <span className="font-semibold tracking-wide text-sm">8-906-348-26-33</span>
              </a>
              {/* Email */}
              <a
                href="mailto:info@gkparallel.ru"
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors px-4 py-1.5 group"
              >
                <svg className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-sm font-medium">info@gkparallel.ru</span>
              </a>
            </div>
          </div>

          {/* Services column (Takes up 3 cols) */}
          <div className="lg:col-span-3 lg:ml-8">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent/50" />
              Услуги
            </h4>
            <ul className="space-y-3.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-white text-sm transition-colors hover:underline underline-offset-4 decoration-accent/50"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation (Takes up 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent/50" />
              Навигация
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#services" className="text-white/70 hover:text-white text-sm transition-colors hover:underline underline-offset-4 decoration-accent/50">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-white text-sm transition-colors hover:underline underline-offset-4 decoration-accent/50">
                  Как работаем
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/70 hover:text-white text-sm transition-colors hover:underline underline-offset-4 decoration-accent/50">
                  О компании
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white text-sm transition-colors hover:underline underline-offset-4 decoration-accent/50">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* CTA & Docs (Takes up 3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent/50" />
              Сотрудничество
            </h4>
            
            <a href="#contact" className="bg-white/5 hover:bg-accent border border-white/10 hover:border-accent text-white font-bold text-sm px-6 py-4 rounded-xl transition-all duration-300 text-center shadow-lg mb-8 inline-block">
              Получить расчёт
            </a>

            <div className="mt-auto space-y-5">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-4">
                  Документы
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white/40 hover:text-white/80 text-xs transition-colors">
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/40 hover:text-white/80 text-xs transition-colors">
                      Согласие на обработку данных
                    </a>
                  </li>
                </ul>
              </div>

              {/* Requisites button */}
              <button
                onClick={() => setShowRequisites(true)}
                className="flex items-center gap-2 text-white/40 hover:text-white/80 text-xs transition-colors group"
              >
                <svg className="w-3.5 h-3.5 text-accent/40 group-hover:text-accent/70 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                Реквизиты компании
              </button>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-medium">
            © {new Date().getFullYear()} ГК ПАРАЛЛЕЛЬ. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs font-medium">Сайт не является публичной офертой</span>
          </div>
        </div>
      </div>

      {/* Requisites Modal */}
      <RequisitesModal open={showRequisites} onClose={() => setShowRequisites(false)} />
    </footer>
  );
}
