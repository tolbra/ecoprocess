import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Recycle, ShoppingCart, CheckCircle2 } from 'lucide-react';

export function TwoDirections() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Что вам нужно?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Сдать сырьё */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
              <Recycle className="w-8 h-8 text-green-700" />
            </div>
            
            <h3 className="text-2xl text-center mb-6">
              Сдать сырьё
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Приём LDPE/ПВД плёнки и производственных отходов</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Чёткие требования к чистоте и сортировке</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Быстрый расчёт цены и логистики</span>
              </li>
            </ul>

            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => scrollToSection('scrap')}
            >
              Получить расчёт
            </Button>
          </Card>

          {/* Купить гранулу */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
              <ShoppingCart className="w-8 h-8 text-blue-700" />
            </div>
            
            <h3 className="text-2xl text-center mb-6">
              Купить ПВД гранулу (LDPE)
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Прозрачная, цветная, микс</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Фасовка 30 кг</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Отгрузка от 1 тонны</span>
              </li>
            </ul>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => scrollToSection('pellets')}
            >
              Запросить цену и наличие
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}