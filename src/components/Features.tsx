import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Zap, Brain, Shield, Clock, Target } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Обробка запитів та продажі",
    items: [
      "Відповідає на типові питання клієнтів за секунди",
      "Веде діалог за вашими скриптами продажів",
      "Виявляє потребу клієнта і пропонує найкраще рішення",
      "Підтягує актуальну інформацію про ваші продукти та послуги",
      "Надає технічну підтримку по вашим товарам або послугам",
      "Використовує тон і стиль розмови вашого бренду"
    ]
  },
  {
    icon: Zap,
    title: "Автоматизація комунікацій",
    items: [
      "Відповідає в будь-якому каналі: Telegram, WhatsApp, Instagram, Facebook, онлайн-чат на сайті",
      "Працює 24/7 без вихідних і перерв",
      "Уточнює контактні дані для дзвінка або консультації",
      "Передає заявку менеджеру"
    ]
  },
  {
    icon: Brain,
    title: "Навчання та оптимізація",
    items: [
      "Підтягує актуальну інформацію з бази знань",
      'Відповідає тільки по вашій інформації, без "вигадування" сторонніх даних',
      "Є функція відправки відповіді вам на затвердження перед відповіддю клієнту",
      "Доповнюється новими функціями з кожною новою версією консультанта"
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Робота 24/7",
    description: "Жодної втраченої заявки вночі чи у вихідні"
  },
  {
    icon: Shield,
    title: "Точність відповідей",
    description: "Ніяких помилок чи забутої інформації"
  },
  {
    icon: Target,
    title: "Увага до кожного",
    description: "Кожен клієнт отримує швидку та якісну відповідь"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Що вміє <span className="bg-gradient-accent bg-clip-text text-transparent">ШІ-консультант?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Повний спектр функцій для автоматизації спілкування з клієнтами
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 animate-fade-in-up bg-card shadow-card hover:shadow-lg-custom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-accent">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1 flex-shrink-0">●</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gradient-accent border-0 text-white hover:scale-105 transition-transform duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-white/90">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};