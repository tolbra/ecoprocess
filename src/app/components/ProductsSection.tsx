import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Package, Layers, Container, Shield, Film, CircleDot } from 'lucide-react';

export function ProductsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const applications = [
    { icon: Package, title: 'Пакеты' },
    { icon: Film, title: 'Термоусадочная плёнка' },
    { icon: Container, title: 'Рукав и полурукав' },
    { icon: Shield, title: 'Мембраны' },
    { icon: Layers, title: 'Упаковочные материалы' },
    { icon: CircleDot, title: 'Технические полиэтиленовые трубы' },
  ];

  const products = [
    {
      title: 'Гранула LDPE — прозрачная/натуральная',
      image: 'white.jpeg',
      description: 'Прозрачная гранула высокого качества для производства упаковочных материалов',
      color: 'bg-blue-50',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'Гранула LDPE — чёрная',
      image: 'black.jpeg',
      description: 'Чёрная гранула для производства технических изделий',
      color: 'bg-gray-50',
      buttonColor: 'bg-gray-800 hover:bg-gray-900',
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          Готовая продукция — ПВД гранула (LDPE)
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Производим вторичную ПВД гранулу (LDPE) для упаковочной промышленности и технических изделий.
        </p>

        {/* Применение */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8">Применение</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mb-3 mx-auto">
                    <Icon className="w-5 h-5 text-green-700" />
                  </div>
                  <p className="text-xs">{app.title}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Продукты */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={`p-6 ${product.color}`}>
                <h3 className="text-xl mb-3">{product.title}</h3>
                <p className="text-gray-700 mb-6">{product.description}</p>

                <Button
                  className={`w-full ${product.buttonColor}`}
                  onClick={() => scrollToSection('pellets')}
                >
                  Узнать цену
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
