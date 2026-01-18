import { Card } from '@/app/components/ui/card';
import { Factory, Award, TrendingUp } from 'lucide-react';

export function ProductionCapacity() {
  const capacity = [
    {
      icon: TrendingUp,
      number: '50–60 тонн',
      label: 'переработка в месяц',
    },
    {
      icon: Factory,
      number: 'Собственное',
      label: 'производство',
    },
    {
      icon: Award,
      number: 'Стабильное',
      label: 'качество продукции',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Производственные возможности
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {capacity.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-green-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {item.number}
                </div>
                <p className="text-gray-600">{item.label}</p>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
          Опыт в переработке полиэтилена — 6 лет
        </p>
      </div>
    </section>
  );
}
