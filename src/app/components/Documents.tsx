import { FileText, Download } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export function Documents() {
  return (
    <section id="documents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Документы
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="mb-2">
                  Уведомление о начале деятельности (отходы)
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  № KZ72UWT00011455 · 06.09.2023
                </p>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Скачать PDF
                </Button>
              </div>
            </div>
          </Card>

          <p className="text-center text-sm text-gray-500 mt-6">
            Персональные данные скрыты.
          </p>
        </div>
      </div>
    </section>
  );
}