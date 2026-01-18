import { Recycle, MessageCircle, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* О компании */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="w-6 h-6 text-green-500" />
              <span className="text-white font-bold text-lg">ECO PROCESS</span>
            </div>
            <p className="text-sm">
              Переработка полиэтилена в Алматы. Приём ПВД/LDPE сырья и производство вторичной гранулы.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-white mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-green-500 transition-colors">
                  Услуги
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-green-500 transition-colors">
                  Гранула
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="hover:text-green-500 transition-colors">
                  Процесс
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('documents')} className="hover:text-green-500 transition-colors">
                  Документы
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacts')} className="hover:text-green-500 transition-colors">
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-white mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('scrap')} className="hover:text-green-500 transition-colors">
                  Приём сырья
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pellets')} className="hover:text-green-500 transition-colors">
                  Продажа гранулы
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="hover:text-green-500 transition-colors">
                  Переработка пластика
                </button>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-white mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/77056890629" className="hover:text-green-500 transition-colors">
                  +7 705 689 06 29
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:erkinbol@icloud.com" className="hover:text-green-500 transition-colors">
                  erkinbol@icloud.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Алматы, Казахстан</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 ECO PROCESS. Все права защищены.</p>
          <p className="mt-2 text-gray-500">
            <a href="#" className="hover:text-green-500 transition-colors">Политика конфиденциальности</a>
          </p>
        </div>
      </div>
    </footer>
  );
}