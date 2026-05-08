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
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-graphite/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            {/* Rail lines logo mark */}
            <div className="flex flex-col gap-[3px]">
              <div className="w-7 h-[3px] bg-accent rounded-full transition-transform group-hover:translate-x-0.5" />
              <div className="w-5 h-[3px] bg-accent rounded-full transition-transform group-hover:translate-x-1" />
              <div className="w-7 h-[3px] bg-accent rounded-full transition-transform group-hover:translate-x-0.5" />
            </div>
            <div>
              <div className="text-white font-bold text-base md:text-lg tracking-wide leading-tight">
                ГК ПАРАЛЛЕЛЬ
              </div>
              <div className="text-white/50 text-[10px] md:text-xs tracking-wider uppercase leading-tight">
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
                className="text-white/70 hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+78312673070"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="text-sm font-medium">+7 (831) 267-30-70</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Оставить заявку
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-graphite-dark transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-main pt-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-white text-lg font-medium py-2 border-b border-white/10"
            >
              {item.label}
            </a>
          ))}

          <a
            href="tel:+78312673070"
            className="flex items-center gap-3 text-white/80 py-2"
          >
            <PhoneIcon className="w-5 h-5" />
            <span className="text-base font-medium">+7 (831) 267-30-70</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary text-center mt-4"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </header>
  );
}
