import { Card } from '@/app/components/ui/card';
import { XCircle } from 'lucide-react';

export function NotAccepted() {
  const notAccepted = [
    'ПЭТ (маркировка 1)',
    'ПП (маркировка 5)',
    'PS (маркировка 6)',
    'ПВХ (маркировка 3)',
    'Медицинские и опасные отходы',
    'Сильно загрязнённую бытовую плёнку',
    'Плёнку с большим количеством скотча и этикеток',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Что не принимаем
        </h2>

        <Card className="max-w-3xl mx-auto p-8 border-2 border-amber-200 bg-amber-50/30">
          <ul className="space-y-4">
            {notAccepted.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
