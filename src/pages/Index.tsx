import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Drill',
      title: 'Шлифовка бетона',
      description: 'Профессиональная шлифовка бетонных полов с использованием алмазного инструмента',
      features: ['Удаление неровностей', 'Подготовка под покрытие', 'Выравнивание поверхности']
    },
    {
      icon: 'Sparkles',
      title: 'Полировка бетона',
      description: 'Придание бетонной поверхности зеркального глянцевого блеска',
      features: ['Глянцевая поверхность', 'Высокая износостойкость', 'Эстетичный внешний вид']
    },
    {
      icon: 'Layers',
      title: 'Топпинг для бетона',
      description: 'Упрочнение верхнего слоя бетона сухими смесями',
      features: ['Повышение прочности', 'Защита от истирания', 'Долговечность покрытия']
    },
    {
      icon: 'Hammer',
      title: 'Устройство бетонных полов',
      description: 'Комплексные работы по укладке и обустройству промышленных полов',
      features: ['Промышленные объекты', 'Складские помещения', 'Торговые площади']
    }
  ];

  const portfolio = [
    { title: 'Производственный цех', area: '2500 м²', type: 'Полировка бетона', img: 'https://cdn.poehali.dev/projects/4ea3db97-5094-4e2a-815a-3a73738fa3e0/files/f63f6a75-d53f-434f-9efe-6ff53cd5eb30.jpg' },
    { title: 'Складской комплекс', area: '5000 м²', type: 'Шлифовка + топпинг', img: 'https://cdn.poehali.dev/projects/4ea3db97-5094-4e2a-815a-3a73738fa3e0/files/8bcc126f-ef5b-4c2a-a90a-8a49855c75e2.jpg' },
    { title: 'Торговый центр', area: '1800 м²', type: 'Декоративная полировка', img: 'https://cdn.poehali.dev/projects/4ea3db97-5094-4e2a-815a-3a73738fa3e0/files/62be1a5e-81b2-46e2-8c05-6b7426b49e1a.jpg' }
  ];

  const technologies = [
    { step: '01', title: 'Подготовка поверхности', desc: 'Очистка и оценка состояния бетона' },
    { step: '02', title: 'Грубая шлифовка', desc: 'Удаление верхнего слоя алмазными сегментами' },
    { step: '03', title: 'Уплотнение бетона', desc: 'Нанесение упрочняющих пропиток' },
    { step: '04', title: 'Финишная полировка', desc: 'Доведение до зеркального блеска' }
  ];

  const reviews = [
    { name: 'Сергей Иванов', company: 'ООО "ПромСтрой"', text: 'Отличная работа! Выполнили шлифовку склада площадью 3000 м² точно в срок. Качество на высоте.', rating: 5 },
    { name: 'Михаил Петров', company: 'Логистический центр', text: 'Профессиональная команда, современное оборудование. Полы служат уже 3 года без нареканий.', rating: 5 },
    { name: 'Анна Волкова', company: 'Торговая сеть', text: 'Сделали полировку в торговом зале. Результат превзошел ожидания - красиво и практично!', rating: 5 }
  ];

  const faq = [
    { q: 'Сколько времени занимает шлифовка бетонного пола?', a: 'В среднем 1000 м² шлифуется за 3-5 дней в зависимости от состояния бетона и требуемого результата.' },
    { q: 'Можно ли отполировать старый бетонный пол?', a: 'Да, можно отполировать бетон любого возраста. Главное условие - отсутствие критических повреждений и достаточная прочность.' },
    { q: 'Какая гарантия на выполненные работы?', a: 'Мы предоставляем гарантию 24 месяца на все виды работ по шлифовке и полировке бетонных полов.' },
    { q: 'Нужно ли специальное обслуживание после полировки?', a: 'Полированный бетон не требует специального ухода - достаточно регулярной влажной уборки.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Hammer" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-secondary">Шлифовка Бетона</h1>
                <p className="text-xs text-muted-foreground">Профессионально с 2010 года</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
              <a href="#tech" className="text-sm hover:text-primary transition-colors">Технологии</a>
              <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzJjLTcuNzMgMC0xNC02LjI3LTE0LTE0czYuMjctMTQgMTQtMTQgMTQgNi4yNyAxNCAxNC02LjI3IDE0LTE0IDE0eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональная шлифовка бетонных полов
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Современные технологии обработки бетона для промышленных, коммерческих и складских объектов. 
              Гарантия качества, соблюдение сроков, опыт более 14 лет.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать прайс
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">14+</div>
                <div className="text-sm text-white/80">лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-white/80">выполненных объектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24</div>
                <div className="text-sm text-white/80">месяца гарантии</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр работ по обработке бетонных поверхностей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover-scale cursor-pointer hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-muted-foreground text-lg">Примеры выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover-scale">
                <div className="aspect-video overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Icon name="Square" size={14} />
                        {project.area}
                      </span>
                      <span className="text-primary">{project.type}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Технология работы</h2>
            <p className="text-muted-foreground text-lg">Проверенная методика в 4 этапа</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-lg border-2 border-primary/20 hover:border-primary transition-all">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{tech.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.desc}</p>
                </div>
                {idx < technologies.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={24} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Что говорят о нас заказчики</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать проект?</h2>
          <p className="text-xl mb-8 text-white/90">Получите бесплатную консультацию и расчет стоимости</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="Mail" size={20} className="mr-2" />
              info@shlifovka-betona.ru
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-muted-foreground text-lg">Ответы на часто задаваемые вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">Оставьте заявку и мы перезвоним в течение 15 минут</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите ваш проект..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Hammer" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">Шлифовка Бетона</h3>
              </div>
              <p className="text-sm text-white/70">
                Профессиональные услуги по шлифовке и полировке бетонных полов с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-primary transition-colors">Шлифовка бетона</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Полировка бетона</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Топпинг</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Устройство полов</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@shlifovka-betona.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© 2024 Шлифовка Бетона. Все права защищены. | ИНН: 1234567890 | ОГРН: 1234567890123</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
