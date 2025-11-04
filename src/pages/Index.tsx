import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Я свяжусь с вами в ближайшее время.",
    });
  };

  const projects = {
    web: [
      { title: 'E-commerce платформа', desc: 'Полнофункциональный интернет-магазин с корзиной и оплатой', link: '#', tags: ['React', 'Node.js'] },
      { title: 'CRM система', desc: 'Управление клиентами и автоматизация продаж', link: '#', tags: ['TypeScript', 'PostgreSQL'] },
    ],
    operator: [
      { title: 'Корпоративный ролик', desc: 'Съемка и монтаж имиджевого видео для IT-компании', link: '#', tags: ['Premiere Pro', '4K'] },
      { title: 'Прямая трансляция', desc: 'Онлайн-трансляция бизнес-конференции на 5000+ зрителей', link: '#', tags: ['OBS', 'YouTube'] },
    ],
    judge: [
      { title: 'Городской чемпионат', desc: 'Главный судья соревнований по киберспорту', link: '#', tags: ['CS:GO', 'Dota 2'] },
      { title: 'Международный турнир', desc: 'Организация и судейство онлайн-турнира', link: '#', tags: ['Valorant'] },
    ],
    blogger: [
      { title: 'YouTube канал', desc: 'Контент о технологиях и разработке — 50K подписчиков', link: '#', tags: ['YouTube', 'Editing'] },
      { title: 'Telegram блог', desc: 'Ежедневные инсайты из мира IT и бизнеса', link: '#', tags: ['Telegram', 'SMM'] },
    ],
    business: [
      { title: 'Веб-студия', desc: 'Разработка сайтов под ключ для малого бизнеса', link: '#', tags: ['Web', 'Design'] },
      { title: 'Продакшн студия', desc: 'Производство видеоконтента для брендов', link: '#', tags: ['Video', 'Production'] },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Портфолио</h1>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab('home')}
                className={`transition-colors hover:text-primary ${activeTab === 'home' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
              >
                О себе
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`transition-colors hover:text-primary ${activeTab === 'projects' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
              >
                Проекты
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`transition-colors hover:text-primary ${activeTab === 'contacts' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'home' && (
          <div className="animate-fade-in space-y-8">
            <section className="text-center py-16">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Icon name="User" size={64} className="text-primary-foreground" />
              </div>
              <h2 className="text-5xl font-bold mb-4">Иван Петров</h2>
              <p className="text-xl text-muted-foreground mb-8">Многопрофильный специалист</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="text-base px-4 py-2">Web-разработчик</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">Видеооператор</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">Судья киберспорта</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">Блогер</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">Предприниматель</Badge>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Briefcase" className="text-primary" />
                    Резюме
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-semibold text-primary">Возраст:</span> 28 лет
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Имя:</span> Иван Петров
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Готов работать:</span>
                    <ul className="mt-2 space-y-1 text-muted-foreground">
                      <li>• Fullstack разработчик</li>
                      <li>• Видеопродакшн</li>
                      <li>• Судья киберспортивных турниров</li>
                      <li>• Консультант по SMM</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Heart" className="text-primary" />
                    Увлечения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Создаю цифровые продукты, которые решают реальные проблемы. Обожаю съемку видео и фотографии в путешествиях. 
                    Активно слежу за киберспортом и участвую в организации турниров. Веду блог о технологиях и делюсь опытом в разработке.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">Путешествия</Badge>
                    <Badge variant="outline">Фотография</Badge>
                    <Badge variant="outline">Киберспорт</Badge>
                    <Badge variant="outline">Технологии</Badge>
                    <Badge variant="outline">Предпринимательство</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <blockquote className="text-center text-lg italic text-foreground">
                  "Лучший способ предсказать будущее — создать его самому"
                </blockquote>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Мои проекты</h2>
            <Tabs defaultValue="web" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="web" className="flex items-center gap-2">
                  <Icon name="Code" size={16} />
                  Web
                </TabsTrigger>
                <TabsTrigger value="operator" className="flex items-center gap-2">
                  <Icon name="Video" size={16} />
                  Оператор
                </TabsTrigger>
                <TabsTrigger value="judge" className="flex items-center gap-2">
                  <Icon name="Trophy" size={16} />
                  Судья
                </TabsTrigger>
                <TabsTrigger value="blogger" className="flex items-center gap-2">
                  <Icon name="Rss" size={16} />
                  Блогер
                </TabsTrigger>
                <TabsTrigger value="business" className="flex items-center gap-2">
                  <Icon name="Briefcase" size={16} />
                  Бизнес
                </TabsTrigger>
              </TabsList>

              {Object.entries(projects).map(([key, items]) => (
                <TabsContent key={key} value={key} className="space-y-4">
                  {items.map((project, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-all hover:scale-[1.02] animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {project.title}
                          <Icon name="ExternalLink" size={20} className="text-primary" />
                        </CardTitle>
                        <CardDescription>{project.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Свяжитесь со мной</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle>Контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" />
                    <span>ivan@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" />
                    <span>Москва, Россия</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle>Социальные сети</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-3" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Icon name="Github" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3" asChild>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <Icon name="Youtube" />
                      YouTube
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3" asChild>
                    <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" />
                      Telegram
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Icon name="Linkedin" />
                      LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Заполните форму, и я свяжусь с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Имя</label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                    <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Иван Петров. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
