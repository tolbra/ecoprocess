import { Button } from '@/app/components/ui/button';
import { MapPin, MessageCircle, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1713016877596-6a800832e15c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwcmVjeWNsaW5nJTIwcGVsbGV0c3xlbnwxfHx8fDE3Njg3NDAwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl mb-6 max-w-5xl mx-auto leading-tight">
          ECO PROCESS — приём и переработка полиэтиленового сырья
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Принимаем ПВД/LDPE плёнку и производим вторичную гранулу. Работаем с корпоративными поставщиками по Алматинской области и Казахстану.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6"
            onClick={() => scrollToSection('scrap')}
          >
            Сдать сырьё
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8 py-6"
            onClick={() => scrollToSection('pellets')}
          >
            Купить гранулу
          </Button>
        </div>

        <div className="text-sm md:text-base text-gray-200 mb-12 max-w-3xl mx-auto">
          Минимальная партия приёма — от 100 кг · Взвешивание при клиенте · Оплата в день приёма
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm md:text-base text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Алматы, Ауэзовский район</span>
          </div>
          <div className="hidden md:block">·</div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <a href="https://wa.me/77056890629" className="hover:text-white transition-colors">
              WhatsApp: +7 705 689 06 29
            </a>
          </div>
          <div className="hidden md:block">·</div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:erkinbol@icloud.com" className="hover:text-white transition-colors">
              erkinbol@icloud.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}