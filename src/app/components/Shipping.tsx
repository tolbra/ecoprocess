import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export function Shipping() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const conditions = [
    'Самовывоз с производства',
    'Доставка по Алматинской области и Казахстану',
    'Индивидуальные условия для постоянных клиентов',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Условия отгрузки
        </h2>

        <Card className="max-w-3xl mx-auto p-8">
          <ul className="space-y-4 mb-8">
            {conditions.map((condition, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg">{condition}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="flex-1 bg-green-600 hover:bg-green-700"
              size="lg"
              onClick={() => scrollToSection('pellets')}
            >
              Заказать партию
            </Button>
            <Button
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              size="lg"
              onClick={() => window.open('https://wa.me/77056890629', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Связаться
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
