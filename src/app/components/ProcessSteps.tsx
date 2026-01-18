import { ClipboardCheck, Filter, Factory, Boxes, PackageCheck } from 'lucide-react';

export function ProcessSteps() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Приём и оценка сырья',
      description: 'Проверяем качество и определяем тип материала',
    },
    {
      icon: Filter,
      title: 'Сортировка и подготовка',
      description: 'Очистка и сортировка по типам пластика',
    },
    {
      icon: Factory,
      title: 'Переработка',
      description: 'Измельчение и промывка материала',
    },
    {
      icon: Boxes,
      title: 'Грануляция',
      description: 'Преобразование в гранулы высокого качества',
    },
    {
      icon: PackageCheck,
      title: 'Упаковка и отгрузка',
      description: 'Фасовка и доставка готовой продукции',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Процесс переработки
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-green-200" />
              
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Icon Circle */}
                      <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4 mx-auto relative z-10">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="mb-2 text-sm">{step.title}</h3>
                        <p className="text-xs text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Video */}
          <div className="mt-16 rounded-lg overflow-hidden shadow-lg">
            <div className="relative aspect-video bg-gray-900">
              <video
                className="w-full h-full object-cover"
                src="/videoplastic.mp4"
                controls
                preload="metadata"
                
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-md text-sm">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
