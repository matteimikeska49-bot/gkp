import { PhoneIcon } from '../ui/Icons';
import { footerServices } from '../../data/services';

export default function Footer() {
  return (
    <footer className="bg-graphite text-white">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col gap-[3px]">
                <div className="w-7 h-[3px] bg-accent rounded-full" />
                <div className="w-5 h-[3px] bg-accent rounded-full" />
                <div className="w-7 h-[3px] bg-accent rounded-full" />
              </div>
              <div>
                <div className="font-bold text-lg tracking-wide">ГК ПАРАЛЛЕЛЬ</div>
                <div className="text-white/50 text-xs tracking-wider uppercase">
                  Железнодорожные перевозки грузов
                </div>
              </div>
            </div>

            <a
              href="tel:+78312673070"
              className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors mt-6"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="font-medium">+7 (831) 267-30-70</span>
            </a>
          </div>

          {/* Services column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Услуги
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Навигация
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="text-white/70 hover:text-white text-sm transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-white text-sm transition-colors">
                  Как работаем
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/70 hover:text-white text-sm transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Documents */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Документы
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Согласие на обработку персональных данных
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ГК ПАРАЛЛЕЛЬ. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm">Железнодорожные перевозки грузов</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
