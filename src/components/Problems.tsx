import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Clock, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Менеджери",
    items: [
      'Хочуть працювати лише з "теплими" лідами',
      '"Забувають" відповідати у директі чи месенджерах',
      "Відповідають клієнтам із затримкою або з помилками",
      "Плутають інформацію, дають різні відповіді",
      "Не знають усі деталі вашого продукту чи послуги"
    ]
  },
  {
    icon: TrendingDown,
    title: "Витрати на навчання",
    items: [
      "Кожного разу доводиться заново навчати менеджера тій самій інформації",
      'Новачки проходять "стажування" тижнями, але не запам\'ятовують все',
      "Витрачаєте 2 місяці на стажера — він звільняється, і все починається спочатку",
      'Разом із менеджером "зникають" знання, які він накопичував',
      "Час, гроші та енергія — просто згорають у повітрі"
    ]
  },
  {
    icon: AlertCircle,
    title: "Організаційні хаоси",
    items: [
      'Людина написала тиждень тому, а повідомлення досі "не прочитано"',
      "Ви оплачуєте рекламу — а заявки просто зникають",
      "Вночі та у вихідні ніхто не відповідає, і клієнти йдуть до конкурентів",
      "Немає системи контролю: скільки запитів оброблено, а скільки — ні"
    ]
  }
];

export const Problems = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
            <Clock className="inline-block w-5 h-5 mr-2" />
            <span className="font-semibold">Знайомо?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Навіть якщо ви вкладаєте гроші в рекламу і маєте відмінний продукт — продажі стопоряться
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            не через якість, а через... <span className="text-destructive font-bold">людський фактор</span>.
          </p>
          <p className="text-lg text-foreground mt-4 font-medium">
            Менеджери втомлюються, забувають, не встигають — і ви <span className="text-destructive">втрачаєте десятки</span> потенційних клієнтів щодня.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-lg-custom transition-all duration-300 animate-fade-in-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-destructive/10">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{problem.title}</h3>
                </div>
                <ul className="space-y-3">
                  {problem.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 text-muted-foreground">
                      <span className="text-destructive flex-shrink-0 text-sm leading-relaxed" style={{ paddingTop: '0.125rem' }}>✕</span>
                      <span className="text-sm leading-relaxed flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
