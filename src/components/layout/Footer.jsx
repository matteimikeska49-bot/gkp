import { PhoneIcon } from '../ui/Icons';
import { footerServices } from '../../data/services';

export default function Footer() {
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
              <div className="flex flex-col gap-[3px]">
                <div className="w-8 h-[3px] bg-accent rounded-full" />
                <div className="w-5 h-[3px] bg-accent rounded-full" />
                <div className="w-8 h-[3px] bg-accent rounded-full" />
              </div>
              <div>
                <div className="font-bold text-xl tracking-wide leading-tight">ГК ПАРАЛЛЕЛЬ</div>
              </div>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Железнодорожные перевозки грузов по России и СНГ. Комплексное сопровождение на всех этапах маршрута.
            </p>

            {/* Contact Block inside Company Info */}
            <div className="mt-auto">
              <a
                href="tel:+78312673070"
                className="inline-flex items-center gap-3 text-white hover:text-accent transition-colors bg-white/5 border border-white/10 rounded-xl px-5 py-3 hover:bg-white/10 group"
              >
                <PhoneIcon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-bold tracking-wide text-lg">+7 (831) 267-30-70</span>
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

            <div className="mt-auto">
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
    </footer>
  );
}
