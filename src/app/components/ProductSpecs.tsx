import { Card } from '@/app/components/ui/card';

export function ProductSpecs() {
  const specs = [
    { label: 'Тип', value: 'LDPE (ПВД)' },
    { label: 'Форма', value: 'гранула' },
    { label: 'Цвет', value: 'прозрачная / цветная / микс' },
    { label: 'Фасовка', value: 'мешки по 30 кг' },
    { label: 'Минимальная партия', value: 'от 1 тонны' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Характеристики продукции
        </h2>

        <Card className="max-w-3xl mx-auto overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-700 border-r">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <p className="text-center text-gray-600 mt-8">
          Возможен подбор партии под требования заказчика.
        </p>
      </div>
    </section>
  );
}
