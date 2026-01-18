import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'Минимальный объём приёма сырья?',
      answer: 'Минимальная партия приёма — от 100 кг. Для уточнения деталей по вашему конкретному типу сырья свяжитесь с нами через WhatsApp или оставьте заявку на сайте.',
    },
    {
      question: 'Можно ли сдавать сырьё с небольшими загрязнениями?',
      answer: 'Сырьё должно быть чистым, без посторонних примесей. Если сомневаетесь — отправьте фото в WhatsApp, мы оценим качество и подскажем, подходит ли материал.',
    },
    {
      question: 'Нужно ли сортировать по видам плёнки?',
      answer: 'Да, сырьё должно быть предварительно отсортировано по типам. Это влияет на качество конечного продукта и цену приёма.',
    },
    {
      question: 'От чего зависит цена приёма?',
      answer: 'Цена зависит от типа сырья, степени чистоты, объёма партии и необходимости дополнительной обработки. Для точного расчёта оставьте заявку или отправьте фото материала в WhatsApp.',
    },
    {
      question: 'Минимальная партия для покупки гранулы?',
      answer: 'Минимальная партия для покупки гранулы — от 1 тонны. Фасовка производится в мешки по 30 кг. Возможен подбор партии под требования заказчика.',
    },
    {
      question: 'Есть ли доставка по Казахстану?',
      answer: 'Да, доставка осуществляется по Алматинской области и Казахстану. Также возможен самовывоз с производства. Условия доставки обсуждаются индивидуально.',
    },
    {
      question: 'Как быстро происходит отгрузка/приём?',
      answer: 'Приём сырья и оплата производятся в день приёма после взвешивания. Отгрузка гранулы зависит от наличия на складе — обычно 1-3 дня. Для постоянных клиентов возможны индивидуальные условия.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          FAQ
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
