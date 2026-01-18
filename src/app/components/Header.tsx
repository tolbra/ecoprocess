import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Услуги', id: 'services' },
    { label: 'Гранула', id: 'products' },
    { label: 'Процесс', id: 'process' },
    { label: 'Документы', id: 'documents' },
    { label: 'Контакты', id: 'contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors"
          >
            ECO PROCESS
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-green-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/77056890629', '_blank')}
              className="bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-green-700 transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/77056890629', '_blank')}
              className="bg-green-600 hover:bg-green-700 w-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}