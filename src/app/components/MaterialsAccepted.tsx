import { Card } from '@/app/components/ui/card';
import { Film, Layers, Package, Boxes, AlertTriangle, Truck, Tag } from 'lucide-react';

export function MaterialsAccepted() {
  const materials = [
    {
      icon: Film,
      title: 'ПВД (LDPE) плёнка',
    },
    {
      icon: Layers,
      title: 'Стрейч-плёнка',
    },
    {
      icon: Package,
      title: 'Прозрачная и цветная плёнка',
    },
    {
      icon: Boxes,
      title: 'Полиэтиленовые пакеты и целлофан',
    },
    {
      icon: AlertTriangle,
      title: 'Производственный полиэтиленовый брак',
    },
    {
      icon: Truck,
      title: 'Отходы со складов и логистики',
    },
    {
      icon: Package,
      title: 'Вкладыши от биг-бегов',
    },
    {
      icon: Tag,
      title: 'Маркировка 4 (LDPE)',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          Что принимаем
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Принимаем полиэтиленовое сырьё от производственных, складских и логистических компаний.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {materials.map((material, index) => {
            const Icon = material.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-sm">{material.title}</h3>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-gray-700 mt-12 max-w-2xl mx-auto font-medium">
          Работаем на постоянной основе с корпоративными поставщиками.
        </p>
      </div>
    </section>
  );
}
