import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export function ContactsAndForms() {
  const addressLink = 'https://2gis.kz/almaty/geo/9430047405839248/76.990567,43.431536';
  const addressLabel = 'Улица Алтын Орда, 14д';
  const mapEmbedSrc =
    'https://www.google.com/maps?q=43.431536,76.990567&z=16&output=embed';

  const materialLabels: Record<string, string> = {
    'ldpe-film': 'ПВД (LDPE) плёнка',
    stretch: 'Стрейч-плёнка',
    'transparent-color': 'Прозрачная/цветная плёнка',
    bags: 'Полиэтиленовые пакеты',
    'production-waste': 'Производственный брак',
    'warehouse-waste': 'Отходы со складов',
    'big-bag-liners': 'Вкладыши от биг-бегов',
    other: 'Другое',
  };

  const granuleLabels: Record<string, string> = {
    transparent: 'Прозрачная',
    black: 'Чёрная',
    mix: 'Микс',
  };

  const [supplyForm, setSupplyForm] = useState({
    name: '',
    phone: '',
    materialType: '',
    volume: '',
    comment: '',
  });

  const [buyForm, setBuyForm] = useState({
    name: '',
    phone: '',
    granuleType: '',
    volume: '',
    comment: '',
  });

  const handleSupplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = [
      'Заявка на сдачу сырья',
      '',
      `Имя: ${supplyForm.name}`,
      `Телефон: ${supplyForm.phone}`,
      `Вид сырья: ${materialLabels[supplyForm.materialType] || 'Не указано'}`,
      `Объём: ${supplyForm.volume || 'Не указано'}`,
      `Комментарий: ${supplyForm.comment || 'Нет'}`,
    ].join('\n');
    
    const whatsappUrl = `https://wa.me/77056890629?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Перенаправление в WhatsApp...');
  };

  const handleBuySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = [
      'Заявка на покупку гранулы',
      '',
      `Имя/Компания: ${buyForm.name}`,
      `Телефон: ${buyForm.phone}`,
      `Тип гранулы: ${granuleLabels[buyForm.granuleType] || 'Не указано'}`,
      `Объём: ${buyForm.volume || 'Не указано'}`,
      `Комментарий: ${buyForm.comment || 'Нет'}`,
    ].join('\n');
    
    const whatsappUrl = `https://wa.me/77056890629?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Перенаправление в WhatsApp...');
  };

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Контакты
        </h2>

        {/* Контактная информация */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
                <Phone className="w-6 h-6 text-green-700" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Телефон / WhatsApp</p>
              <a href="https://wa.me/77056890629" className="font-medium hover:text-green-600 transition-colors">
                +7 705 689 06 29
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Email</p>
              <a href="mailto:erkinbol@icloud.com" className="font-medium hover:text-blue-600 transition-colors">
                erkinbol@icloud.com
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-purple-700" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Адрес</p>
              <a
                href={addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-blue-600 transition-colors"
              >
                {addressLabel}
              </a>
            </Card>
          </div>

          {/* Карта (заглушка) */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title={`Карта: ${addressLabel}`}
              src={mapEmbedSrc}
              className="w-full h-64 border-0"
              loading="lazy"
              allowFullScreen
            />
            <div className="bg-white px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-purple-700 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Адрес</p>
                  <a
                    href={addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-blue-600 transition-colors"
                  >
                    {addressLabel}
                  </a>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={addressLink} target="_blank" rel="noopener noreferrer">
                  Открыть в 2GIS
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Формы */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Форма "Сдать сырьё" */}
          <Card id="scrap" className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-700" />
              </div>
              <h3 className="text-xl">Сдать сырьё</h3>
            </div>

            <form onSubmit={handleSupplySubmit} className="space-y-4">
              <div>
                <Label htmlFor="supply-name">Имя *</Label>
                <Input
                  id="supply-name"
                  required
                  value={supplyForm.name}
                  onChange={(e) => setSupplyForm({ ...supplyForm, name: e.target.value })}
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <Label htmlFor="supply-phone">Телефон *</Label>
                <Input
                  id="supply-phone"
                  required
                  type="tel"
                  value={supplyForm.phone}
                  onChange={(e) => setSupplyForm({ ...supplyForm, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <Label htmlFor="supply-material">Вид сырья *</Label>
                <Select
                  value={supplyForm.materialType}
                  onValueChange={(value) => setSupplyForm({ ...supplyForm, materialType: value })}
                  required
                >
                  <SelectTrigger id="supply-material">
                    <SelectValue placeholder="Выберите тип сырья" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ldpe-film">ПВД (LDPE) плёнка</SelectItem>
                    <SelectItem value="stretch">Стрейч-плёнка</SelectItem>
                    <SelectItem value="transparent-color">Прозрачная/цветная плёнка</SelectItem>
                    <SelectItem value="bags">Полиэтиленовые пакеты</SelectItem>
                    <SelectItem value="production-waste">Производственный брак</SelectItem>
                    <SelectItem value="warehouse-waste">Отходы со складов</SelectItem>
                    <SelectItem value="big-bag-liners">Вкладыши от биг-бегов</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="supply-volume">Объём (кг)</Label>
                <Input
                  id="supply-volume"
                  value={supplyForm.volume}
                  onChange={(e) => setSupplyForm({ ...supplyForm, volume: e.target.value })}
                  placeholder="Примерный объём (кг, тонн)"
                />
              </div>

              <div>
                <Label htmlFor="supply-comment">Комментарий</Label>
                <Textarea
                  id="supply-comment"
                  value={supplyForm.comment}
                  onChange={(e) => setSupplyForm({ ...supplyForm, comment: e.target.value })}
                  placeholder="Дополнительная информация"
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Отправить заявку
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Мы свяжемся с вами в ближайшее время.
            </p>
          </Card>

          {/* Форма "Купить гранулу" */}
          <Card id="pellets" className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-xl">Купить гранулу</h3>
            </div>

            <form onSubmit={handleBuySubmit} className="space-y-4">
              <div>
                <Label htmlFor="buy-name">Имя / Компания *</Label>
                <Input
                  id="buy-name"
                  required
                  value={buyForm.name}
                  onChange={(e) => setBuyForm({ ...buyForm, name: e.target.value })}
                  placeholder="Ваше имя или название компании"
                />
              </div>

              <div>
                <Label htmlFor="buy-phone">Телефон *</Label>
                <Input
                  id="buy-phone"
                  required
                  type="tel"
                  value={buyForm.phone}
                  onChange={(e) => setBuyForm({ ...buyForm, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <Label htmlFor="buy-granule">Тип гранулы *</Label>
                <Select
                  value={buyForm.granuleType}
                  onValueChange={(value) => setBuyForm({ ...buyForm, granuleType: value })}
                  required
                >
                  <SelectTrigger id="buy-granule">
                    <SelectValue placeholder="Выберите тип гранулы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transparent">Прозрачная</SelectItem>
                    <SelectItem value="black">Чёрная</SelectItem>
                    <SelectItem value="mix">Микс</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="buy-volume">Объём (кг/тонны)</Label>
                <Input
                  id="buy-volume"
                  value={buyForm.volume}
                  onChange={(e) => setBuyForm({ ...buyForm, volume: e.target.value })}
                  placeholder="Требуемый объём (кг)"
                />
              </div>

              <div>
                <Label htmlFor="buy-comment">Комментарий</Label>
                <Textarea
                  id="buy-comment"
                  value={buyForm.comment}
                  onChange={(e) => setBuyForm({ ...buyForm, comment: e.target.value })}
                  placeholder="Дополнительная информация"
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Запросить цену
              </Button>
            </form>
          </Card>
        </div>

        {/* WhatsApp CTA Bar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-6 bg-green-50 border-green-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Быстрее в WhatsApp: +7 705 689 06 29
                </p>
                <p className="text-sm text-gray-600">
                  Ответим на ваши вопросы в течение часа
                </p>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 whitespace-nowrap"
                size="lg"
                onClick={() => window.open('https://wa.me/77056890629', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Написать
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
