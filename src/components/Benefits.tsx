import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Zap, Repeat } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    description: 'які "зависли без відповіді"',
    value: "на 60% менше запитів",
    valueHighlight: "60%",
  },
  {
    icon: Zap,
    description: "швидшу конверсію у продаж",
    value: "у 3 рази",
    valueHighlight: "3x",
  },
  {
    icon: Repeat,
    description: "завдяки персональній комунікації",
    value: "+20% повторних покупок",
    valueHighlight: "+20%",
  },
];

export const Benefits = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70 text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white/95">
          Клієнти, які вже встановили ШІ-консультанта, отримують:
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 border-white/20 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-white/25 backdrop-blur-sm">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <p className="text-white/95 text-sm mb-4 min-h-[3rem]">
                    {benefit.description}
                  </p>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {benefit.valueHighlight}
                  </div>
                  <p className="text-white/85 text-sm">
                    {benefit.value}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

