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
      title: 'Алмазная шлифовка бетона',
      description: 'Профессиональная шлифовка бетонных полов алмазным инструментом. Удаление неровностей, выравнивание поверхности.',
      features: ['Алмазные сегменты HTC', 'Убираем перепады до 5мм', 'Подготовка под покрытие', 'Выравнивание поверхности'],
      price: 'от 200₽/м²'
    },
    {
      icon: 'Sparkles',
      title: 'Полировка бетона до блеска',
      description: 'Полировка бетонного пола до зеркального глянца. Износостойкое покрытие для торговых центров и офисов.',
      features: ['Глянцевая поверхность', 'Высокая износостойкость', 'Эстетичный внешний вид', 'Легкость в уборке'],
      price: 'от 350₽/м²'
    },
    {
      icon: 'Layers',
      title: 'Топпинг для бетонного пола',
      description: 'Упрочнение верхнего слоя бетона сухими смесями. Защита от истирания для складов и производств.',
      features: ['Повышение прочности в 3 раза', 'Защита от истирания', 'Долговечность покрытия', 'Беспыльное покрытие'],
      price: 'от 280₽/м²'
    },
    {
      icon: 'Hammer',
      title: 'Устройство бетонных полов',
      description: 'Комплексные работы по укладке и обустройству промышленных бетонных полов под ключ.',
      features: ['Промышленные объекты', 'Складские помещения', 'Торговые площади', 'Полный цикл работ'],
      price: 'от 450₽/м²'
    },
    {
      icon: 'Grid3x3',
      title: 'Мозаичные полы (терраццо)',
      description: 'Шлифовка и полировка мозаичных бетонных полов. Восстановление старых терраццо покрытий.',
      features: ['Реставрация старых полов', 'Декоративная шлифовка', 'Проявление мраморной крошки', 'Защитная полировка'],
      price: 'от 400₽/м²'
    },
    {
      icon: 'Fan',
      title: 'Затирка бетона вертолетом',
      description: 'Машинная затирка свежего бетона затирочными машинами (вертолетами). Создание гладкой поверхности.',
      features: ['Затирка свежего бетона', 'Уплотнение поверхности', 'Гладкая основа', 'Подготовка под топпинг'],
      price: 'от 150₽/м²'
    },
    {
      icon: 'Shield',
      title: 'Упрочнение бетонного пола',
      description: 'Пропитка бетона упрочняющими составами. Защита от пыли, влаги и химических воздействий.',
      features: ['Пропитка литиевыми составами', 'Защита от влаги', 'Беспыльная поверхность', 'Повышение прочности'],
      price: 'от 120₽/м²'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт бетонных полов',
      description: 'Восстановление поврежденных бетонных полов. Устранение трещин, выбоин, сколов.',
      features: ['Заделка трещин', 'Устранение выбоин', 'Локальный ремонт', 'Выравнивание участков'],
      price: 'от 250₽/м²'
    }
  ];

  const portfolio = [
    { 
      title: 'Производственный цех металлообработки', 
      area: '2500 м²', 
      type: 'Полировка бетона + упрочнение', 
      img: 'https://cdn.poehali.dev/projects/4ea3db97-5094-4e2a-815a-3a73738fa3e0/files/f63f6a75-d53f-434f-9efe-6ff53cd5eb30.jpg',
      location: 'Москва, Южный порт'
    },
    { 
      title: 'Складской логистический комплекс', 
      area: '5000 м²', 
      type: 'Шлифовка + топпинг + защита', 
      img: 'https://cdn.poehali.dev/projects/4ea3db97-5094-4e2a-815a-3a73738fa3e0/files/8bcc126f-ef5b-4c2a-a90a-8a49855c75e2.jpg',
      location: 'Московская область'
    },
    { 
      title: 'Торговый центр', 
      area: '1800 м²', 
      type: 'Декоративная полировка до блеска', 
      img: 'https://cdn.poehali.dev/projects/4ea3db97-5094-4e2a-815a-3a73738fa3e0/files/62be1a5e-81b2-46e2-8c05-6b7426b49e1a.jpg',
      location: 'Москва, ЦАО'
    }
  ];

  const technologies = [
    { step: '01', title: 'Подготовка и осмотр', desc: 'Очистка поверхности. Оценка состояния бетона. Определение толщины снятия слоя.', icon: 'ClipboardCheck' },
    { step: '02', title: 'Грубая шлифовка', desc: 'Удаление верхнего слоя алмазными сегментами #30-40. Выравнивание поверхности.', icon: 'Disc' },
    { step: '03', title: 'Уплотнение и пропитка', desc: 'Нанесение упрочняющих пропиток. Заполнение пор. Повышение плотности.', icon: 'Droplets' },
    { step: '04', title: 'Финишная полировка', desc: 'Доведение до зеркального блеска сегментами #200-400. Защитная полировка.', icon: 'Sparkles' }
  ];

  const reviews = [
    { 
      name: 'Сергей Иванов', 
      company: 'ООО "ПромСтрой" | Директор по производству', 
      text: 'Отличная работа! Выполнили шлифовку склада площадью 3000 м² точно в срок. Качество на высоте. Полы выдерживают постоянные нагрузки от погрузчиков. Рекомендую!', 
      rating: 5,
      date: 'Сентябрь 2024'
    },
    { 
      name: 'Михаил Петров', 
      company: 'Логистический центр "Грузовоз"', 
      text: 'Профессиональная команда, современное оборудование. Полы служат уже 3 года без нареканий. Никакой пыли, легко моются. Цена адекватная. Спасибо за работу!', 
      rating: 5,
      date: 'Июль 2024'
    },
    { 
      name: 'Анна Волкова', 
      company: 'Торговая сеть "Продукты 24"', 
      text: 'Сделали полировку в торговом зале. Результат превзошел ожидания - красиво и практично! Покупатели отмечают современный вид магазина. Будем обращаться еще.', 
      rating: 5,
      date: 'Август 2024'
    }
  ];

  const faq = [
    { 
      q: 'Сколько стоит шлифовка бетонного пола за м2?', 
      a: 'Стоимость шлифовки бетона зависит от площади и состояния пола: алмазная шлифовка от 200₽/м², полировка до блеска от 350₽/м², топпинг от 280₽/м². Точную цену рассчитаем после осмотра объекта. Выезд замерщика бесплатный.' 
    },
    { 
      q: 'Сколько времени занимает шлифовка бетонного пола?', 
      a: 'В среднем 1000 м² шлифуется за 3-5 рабочих дней в зависимости от состояния бетона и требуемого результата. Полировка до блеска занимает 5-7 дней на 1000 м². График работ согласовываем индивидуально.' 
    },
    { 
      q: 'Можно ли отполировать старый бетонный пол?', 
      a: 'Да, можно отполировать бетон любого возраста - даже советские мозаичные полы 60-70х годов. Главное условие - отсутствие критических повреждений и достаточная прочность бетона (не менее М200). Проведем бесплатную диагностику.' 
    },
    { 
      q: 'Какая гарантия на выполненные работы по шлифовке?', 
      a: 'Мы предоставляем официальную гарантию 24 месяца на все виды работ по шлифовке и полировке бетонных полов. Гарантия покрывает качество шлифовки, полировки, упрочнения. Договор с гарантийными обязательствами.' 
    },
    { 
      q: 'Нужно ли специальное обслуживание после полировки бетона?', 
      a: 'Полированный бетон не требует специального ухода - достаточно регулярной влажной уборки обычной водой или с pH-нейтральными моющими средствами. Раз в год рекомендуем обновлять защитную пропитку для поддержания блеска.' 
    },
    {
      q: 'Чем алмазная шлифовка бетона отличается от обычной?',
      a: 'Алмазная шлифовка использует специальные сегменты с алмазным напылением, которые более эффективны и долговечны. Это позволяет достичь идеально ровной поверхности и высокого качества обработки. Обычная шлифовка менее эффективна и быстрее изнашивает инструмент.'
    },
    {
      q: 'Подходит ли полированный бетон для складских помещений?',
      a: 'Да, полированный бетон идеально подходит для складов. Он выдерживает высокие нагрузки от погрузчиков и складского оборудования, не пылит, легко моется. Для складов рекомендуем комбинацию: шлифовка + топпинг + упрочнение.'
    },
    {
      q: 'Что такое топпинг для бетонного пола?',
      a: 'Топпинг - это упрочняющая сухая смесь на основе цемента и корунда/кварца, которая втирается в свежий бетон. Повышает прочность поверхности в 2-3 раза, защищает от истирания, делает пол беспыльным. Идеален для промышленных объектов.'
    }
  ];

  const advantages = [
    { icon: 'Award', title: '14 лет опыта', desc: 'Работаем с 2010 года. Более 500 выполненных объектов в Москве и области.' },
    { icon: 'Users', title: 'Опытная бригада', desc: 'Собственные бригады из 12 специалистов с опытом от 5 лет. Без субподряда.' },
    { icon: 'Wrench', title: 'Своё оборудование', desc: 'Профессиональные шлифмашины HTC, Husqvarna, Lavina. Алмазный инструмент.' },
    { icon: 'ShieldCheck', title: 'Гарантия 24 месяца', desc: 'Официальная гарантия на все виды работ. Договор. Акты выполненных работ.' },
    { icon: 'Calculator', title: 'Прозрачное ценообразование', desc: 'Фиксированная цена в договоре. Без скрытых доплат и переплат в процессе.' },
    { icon: 'Clock', title: 'Соблюдение сроков', desc: 'Работаем по графику. Штрафные санкции за срыв сроков прописаны в договоре.' }
  ];

  const processSteps = [
    { num: '1', title: 'Заявка', desc: 'Звоните или оставляйте заявку на сайте' },
    { num: '2', title: 'Выезд замерщика', desc: 'Бесплатный выезд в течение 24 часов' },
    { num: '3', title: 'Расчет стоимости', desc: 'Точный расчет за 15 минут после осмотра' },
    { num: '4', title: 'Договор', desc: 'Заключение договора с фиксацией сроков' },
    { num: '5', title: 'Выполнение работ', desc: 'Работаем по утвержденному графику' },
    { num: '6', title: 'Сдача объекта', desc: 'Подписание акта. Гарантия 24 месяца' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами в течение 15 минут.`);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Hammer" size={36} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-secondary">Шлифовка Бетона</h1>
                <p className="text-xs text-muted-foreground">Профессионально с 2010 года • Москва</p>
              </div>
            </div>
            <nav className="hidden lg:flex gap-6">
              <a href="#services" className="text-sm hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#prices" className="text-sm hover:text-primary transition-colors font-medium">Цены</a>
              <a href="#portfolio" className="text-sm hover:text-primary transition-colors font-medium">Портфолио</a>
              <a href="#advantages" className="text-sm hover:text-primary transition-colors font-medium">Преимущества</a>
              <a href="#reviews" className="text-sm hover:text-primary transition-colors font-medium">Отзывы</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors font-medium">Вопросы</a>
            </nav>
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <a href="tel:+74951234567" className="text-lg font-bold text-secondary hover:text-primary">+7 (495) 123-45-67</a>
                <p className="text-xs text-muted-foreground">Ежедневно 8:00 - 22:00</p>
              </div>
              <Button size="sm" className="hidden md:flex">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzJjLTcuNzMgMC0xNC02LjI3LTE0LTE0czYuMjctMTQgMTQtMTQgMTQgNi4yNyAxNCAxNC02LjI3IDE0LTE0IDE0eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1 mb-6">
              <span className="text-sm font-medium">⭐ Работаем по Москве и Московской области</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Шлифовка и полировка бетонных полов в Москве
            </h2>
            <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
              Алмазная шлифовка • Полировка до блеска • Топпинг • Мозаичные полы
            </p>
            <p className="text-lg mb-8 text-white/80">
              Профессиональное оборудование HTC и Husqvarna. Собственные бригады специалистов. 
              Гарантия 24 месяца. Более 500 выполненных объектов с 2010 года.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">14+</div>
                <div className="text-sm text-white/80">лет на рынке</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-white/80">объектов выполнено</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">24</div>
                <div className="text-sm text-white/80">месяца гарантии</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">от 200₽</div>
                <div className="text-sm text-white/80">цена за м²</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Услуги по шлифовке и полировке бетона</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Полный спектр работ по обработке бетонных поверхностей для промышленных, складских и коммерческих объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover-scale cursor-pointer hover:shadow-xl transition-all border-2 hover:border-primary/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
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

      <section id="advantages" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg">6 причин доверить шлифовку бетона нашей компании</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={adv.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{adv.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио выполненных работ</h2>
            <p className="text-muted-foreground text-lg">Примеры проектов по шлифовке и полировке бетонных полов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover-scale hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.area}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-col gap-2 mt-2">
                      <span className="flex items-center gap-2 text-primary font-medium">
                        <Icon name="Sparkles" size={14} />
                        {project.type}
                      </span>
                      <span className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Icon name="MapPin" size={14} />
                        {project.location}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Технология шлифовки бетона</h2>
            <p className="text-muted-foreground text-lg">Проверенная методика профессиональной обработки в 4 этапа</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-lg border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-5xl font-bold text-primary/30">{tech.step}</div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={tech.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm">{tech.desc}</p>
                </div>
                {idx < technologies.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <Icon name="ArrowRight" size={28} className="text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Процесс работы: от заявки до сдачи объекта</h2>
            <p className="text-muted-foreground text-lg">Как мы работаем: прозрачно и по договору</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов о шлифовке бетона</h2>
            <p className="text-muted-foreground text-lg">Что говорят о нашей работе заказчики</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-sm">{review.company}</CardDescription>
                  <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать проект по шлифовке бетона?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Получите бесплатную консультацию, выезд замерщика и точный расчет стоимости за 15 минут
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-base">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-base">
              <Icon name="Mail" size={20} className="mr-2" />
              info@shlifovka-betona.ru
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-6">Работаем ежедневно с 8:00 до 22:00 • Бесплатный выезд замерщика</p>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы о шлифовке и полировке бетона</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о бетонных полах</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-lg px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Заказать шлифовку бетонного пола</h2>
            <p className="text-muted-foreground text-lg">Оставьте заявку и мы перезвоним в течение 15 минут. Бесплатный выезд замерщика!</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Описание объекта (площадь, тип пола, адрес)</label>
                    <Textarea 
                      placeholder="Например: Склад 2000м², старый бетон, нужна шлифовка и топпинг, Москва..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-base">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку на расчет
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с <a href="#" className="underline hover:text-primary">политикой конфиденциальности</a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4">Шлифовка бетонных полов в Москве: профессиональные услуги от компании с опытом 14 лет</h2>
            <p className="text-muted-foreground mb-4">
              Наша компания специализируется на <strong>шлифовке и полировке бетонных полов</strong> с 2010 года. За это время мы выполнили более 500 объектов 
              в Москве и Московской области: производственные цеха, складские комплексы, торговые центры, автосалоны, офисные здания.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Алмазная шлифовка бетона</strong> — это современная технология обработки бетонных полов, которая позволяет создать прочное, 
              износостойкое и эстетичное покрытие. Мы используем профессиональное оборудование ведущих производителей: HTC, Husqvarna, Lavina, 
              а также оригинальный алмазный инструмент.
            </p>
            <h3 className="text-xl font-bold mb-3">Виды услуг по обработке бетонных полов:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Грубая шлифовка бетона</strong> — удаление верхнего слоя, выравнивание поверхности, подготовка под покрытие</li>
              <li><strong>Полировка бетона до блеска</strong> — создание зеркальной глянцевой поверхности, декоративная обработка</li>
              <li><strong>Топпинг для бетонного пола</strong> — упрочнение поверхности специальными сухими смесями, защита от истирания</li>
              <li><strong>Шлифовка мозаичных полов (терраццо)</strong> — восстановление старых советских полов, проявление рисунка</li>
              <li><strong>Затирка бетона вертолетом</strong> — машинная обработка свежеуложенного бетона для создания гладкой основы</li>
              <li><strong>Упрочнение бетонного пола</strong> — пропитка литиевыми составами для повышения прочности и беспыльности</li>
            </ul>
            <h3 className="text-xl font-bold mb-3">Стоимость шлифовки бетонного пола за м2:</h3>
            <p className="text-muted-foreground mb-4">
              Цена на шлифовку бетона зависит от площади объекта, состояния поверхности и требуемого результата. Средние расценки: 
              алмазная шлифовка от 200₽/м², полировка до блеска от 350₽/м², топпинг от 280₽/м². Точную стоимость рассчитаем после 
              бесплатного выезда замерщика на объект.
            </p>
            <p className="text-muted-foreground">
              Заказать шлифовку бетонного пола в Москве можно по телефону <a href="tel:+74951234567" className="text-primary font-semibold">+7 (495) 123-45-67</a> 
              или оставив заявку на сайте. Бесплатная консультация, выезд специалиста, расчет стоимости за 15 минут. Работаем с юридическими лицами и частными заказчиками. 
              Официальный договор, гарантия 24 месяца на все виды работ.
            </p>
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
              <p className="text-sm text-white/70 mb-4">
                Профессиональные услуги по шлифовке и полировке бетонных полов в Москве и области с 2010 года
              </p>
              <div className="text-sm text-white/70">
                <p>ИНН: 1234567890</p>
                <p>ОГРН: 1234567890123</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-primary transition-colors">Алмазная шлифовка бетона</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Полировка бетона до блеска</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Топпинг для бетонного пола</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Устройство бетонных полов</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Мозаичные полы (терраццо)</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Упрочнение бетона</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base">Информация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио работ</a></li>
                <li><a href="#advantages" className="hover:text-primary transition-colors">Наши преимущества</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы клиентов</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">Вопросы и ответы</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base">Контакты</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+74951234567" className="hover:text-primary">+7 (495) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@shlifovka-betona.ru" className="hover:text-primary">info@shlifovka-betona.ru</a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5" />
                  <span>Москва и Московская область</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Ежедневно 8:00 - 22:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
            <p>© 2024 Шлифовка Бетона. Все права защищены. | <a href="https://www.shlifovka-betona.ru" className="hover:text-primary">www.shlifovka-betona.ru</a></p>
            <p className="mt-2">Шлифовка и полировка бетонных полов в Москве • Алмазная технология • Гарантия 24 месяца</p>
          </div>
        </div>
      </footer>

      <a 
        href="tel:+74951234567" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110 z-40"
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={24} />
      </a>
    </div>
  );
};

export default Index;
