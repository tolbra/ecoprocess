import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Scale, DollarSign, Shield, Handshake } from 'lucide-react';

export function TransparencyBlock() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const guarantees = [
    {
      icon: Scale,
      title: 'Взвешивание сырья при клиенте',
    },
    {
      icon: DollarSign,
      title: 'Оплата в день приёма',
    },
    {
      icon: Shield,
      title: 'Честный расчёт без скрытых удержаний',
    },
    {
      icon: Handshake,
      title: 'Долгосрочное сотрудничество',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Прозрачные условия работы
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-lg">{guarantee.title}</h3>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700"
            onClick={() => scrollToSection('scrap')}
          >
            Оставить заявку на приём сырья
          </Button>
        </div>
      </div>
    </section>
  );
}
