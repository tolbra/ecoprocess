import { Card } from '@/app/components/ui/card';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export function IntakeRequirements() {
  const requirements = [
    'Предварительно отсортированное',
    'Чистое, без посторонних примесей',
    'Без мусора, песка, металла, органики и влаги',
    'Без остатков пищи, масел и химических загрязнений',
    'Минимальная партия — от 100 кг',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Условия приёма сырья
        </h2>

        <Card className="max-w-3xl mx-auto p-8">
          <ul className="space-y-4">
            {requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg">{requirement}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              Если сомневаетесь — отправьте фото в WhatsApp, мы подскажем.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
