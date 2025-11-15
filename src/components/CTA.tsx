import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Brain, FileText, Monitor, Target, Wrench, BarChart3 } from "lucide-react";

const packages = [
  {
    icon: Brain,
    title: "Налаштуваний Консультант 24/7",
    description: "Під ваш бізнес, з навчанням на ваших матеріалах"
  },
  {
    icon: FileText,
    title: "База знань",
    description: "Створення та наповнення інформацією про ваш бізнес та послуги, щоб консультант відповідав точно"
  },
  {
    icon: Monitor,
    title: "Підключення ШІ до всіх каналів",
    description: "Telegram, WhatsApp, Instagram, Facebook, онлайн-чат на сайті"
  },
  {
    icon: Target,
    title: "Адаптація під ваші процеси",
    description: "Налаштування скриптів діалогів та логіки роботи консультанта"
  },
  {
    icon: Wrench,
    title: "Технічна підтримка",
    description: "Допомога у налаштуванні та відповіді на питання протягом усього періоду використання"
  },
  {
    icon: BarChart3,
    title: "Оновлення та покращення",
    description: "Регулярні оновлення консультанта з новими можливостями"
  }
];

export const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Почніть економити час і гроші <span className="bg-gradient-accent bg-clip-text text-transparent">вже сьогодні</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ваші клієнти пишуть у різний час, у різні месенджери — а відповісти треба всім і швидко.
          </p>
          <p className="text-lg text-foreground font-medium mb-4">
            Боти не розуміють контексту, менеджери перевантажені, а запити втрачаються.
          </p>
          <p className="text-lg text-destructive font-bold">
            Кожна хвилина без відповіді — це втрачений продаж.
          </p>
        </div>

        <Card className="mb-12 border-2 border-primary/20 shadow-lg-custom animate-scale-in bg-card">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-accent flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Що входить у пакет:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {packages.map((pkg, index) => {
                    const IconComponent = pkg.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{pkg.title}</h4>
                          <p className="text-sm text-muted-foreground">{pkg.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 mb-6">
              <p className="text-center text-foreground font-medium">
                Бот працює повністю в автоматичному режимі ✅
                <br />
                <span className="text-muted-foreground">але також є можливість затверджувати відповідь бота перед відправкою клієнту</span>
              </p>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-accent hover:opacity-90 transition-opacity text-xl px-12 py-7 shadow-lg-custom group"
                onClick={() => {
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Дивитись тарифи
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Кожен "нічний" клієнт — це упущена можливість.
          </p>
          <p className="text-xl font-bold text-foreground">
            А ви продовжуєте втрачати гроші через банальні затримки з відповідями.
          </p>
        </div>
      </div>
    </section>
  );
};