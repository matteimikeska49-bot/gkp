import { useState, useEffect } from 'react';
import { PhoneIcon, MenuIcon, CloseIcon } from '../ui/Icons';

const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Как работаем', href: '#process' },
  { label: 'О компании', href: '#why-us' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    
    // Slight delay to allow mobile menu to close before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg border-b border-white/5 py-1'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo & Brand Block */}
          <a href="#" className="flex items-center gap-2.5 md:gap-3.5 group shrink-0" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/images/logo.png" alt="" className="h-[28px] md:h-[36px] w-auto object-contain transition-opacity group-hover:opacity-90 shrink-0" />
            <div className="flex flex-col justify-center">
              <div className="text-white font-bold text-[14px] md:text-[16px] leading-none tracking-wide mb-[3px] md:mb-1">
                ГК ПАРАЛЛЕЛЬ
              </div>
              <div className="text-white/50 text-[7px] sm:text-[9px] md:text-[10px] tracking-[0.06em] uppercase leading-none hidden min-[370px]:block">
                Железнодорожные перевозки грузов
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white/70 hover:text-white text-sm font-semibold transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+78312673070"
              className="flex items-center gap-2 text-white hover:text-accent transition-colors font-bold text-sm md:text-base tracking-wide"
            >
              <PhoneIcon className="w-4 h-4 text-accent" />
              +7 (831) 267-30-70
            </a>
            <a
              href="#contact-form"
              onClick={(e) => handleNavClick(e, '#contact-form')}
              className="bg-accent hover:bg-[#b5141a] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(215,25,32,0.2)] hover:shadow-[0_0_25px_rgba(215,25,32,0.4)] hover:-translate-y-0.5"
            >
              Оставить заявку
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-[#1A1A1A] transition-all duration-300 z-40 overflow-y-auto ${
          mobileOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
        }`}
      >
        <div className="container-main py-8 flex flex-col h-full">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white text-xl font-bold py-4 border-b border-white/10 flex items-center justify-between group"
              >
                {item.label}
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            ))}
          </div>

          <div className="mt-auto pt-10 pb-6 flex flex-col gap-6">
            <a
              href="tel:+78312673070"
              className="flex items-center gap-3 text-white justify-center bg-white/5 rounded-xl py-4 border border-white/10"
            >
              <PhoneIcon className="w-5 h-5 text-accent" />
              <span className="text-lg font-bold tracking-wide">+7 (831) 267-30-70</span>
            </a>

            <a
              href="#contact-form"
              onClick={(e) => handleNavClick(e, '#contact-form')}
              className="bg-accent text-white font-bold text-center py-4 rounded-xl shadow-[0_0_20px_rgba(215,25,32,0.3)] text-lg"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
