import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Rocket, Sparkles, Check } from "lucide-react";

interface PricingTier {
  price: string;
  responses: string;
}

interface PricingPlan {
  id: string;
  name: string;
  icon: React.ReactNode;
  basePrice: string;
  baseResponses: string;
  channels: string;
  support: string;
  tiers: PricingTier[];
  featured?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Базовий",
    icon: <Sprout className="w-8 h-8" />,
    basePrice: "39$",
    baseResponses: "300 відповідей консультанта",
    channels: "1 канал комунікації на вибір",
    support: "Відповіді тех.підтримки протягом робочого дня",
    tiers: [
      { price: "49$", responses: "до 500 відповідей" },
      { price: "59$", responses: "до 1000 відповідей" },
      { price: "69$", responses: "до 2000 відповідей" },
    ],
  },
  {
    id: "standard",
    name: "Стандарт",
    icon: <Rocket className="w-8 h-8" />,
    basePrice: "49$",
    baseResponses: "500 відповідей консультанта",
    channels: "3 канали комунікації на вибір",
    support: "Відповіді тех.підтримки протягом 3 годин",
    tiers: [
      { price: "59$", responses: "до 700 відповідей" },
      { price: "69$", responses: "до 1000 відповідей" },
      { price: "79$", responses: "до 2000 відповідей" },
    ],
    featured: true,
  },
  {
    id: "all-inclusive",
    name: "Все включено",
    icon: <Sparkles className="w-8 h-8" />,
    basePrice: "79$",
    baseResponses: "2000 відповідей консультанта",
    channels: "Усі канали комунікації",
    support: "Пріоритетна тех.підтримка протягом 30 хвилин",
    tiers: [
      { price: "89$", responses: "до 3000 відповідей" },
      { price: "119$", responses: "до 5000 відповідей" },
      { price: "199$", responses: "до 10000 відповідей" },
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Оберіть <span className="bg-gradient-accent bg-clip-text text-transparent">тарифний план</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Гнучкі тарифи для бізнесу будь-якого розміру
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className="relative overflow-hidden transition-all duration-300 cursor-pointer group bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg-custom hover:scale-105"
            >
              <div className="absolute top-4 right-4 transition-opacity opacity-0 group-hover:opacity-100">
                <Badge className="bg-white/20 text-white border-white/30">
                  {plan.featured ? "Рекомендовано" : "Обрати"}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4 transition-colors text-foreground group-hover:text-white">
                  <div className="p-2 rounded-lg transition-colors bg-primary/10 group-hover:bg-white/20">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                
                <div className="space-y-1">
                  <div className="text-4xl font-bold transition-colors text-foreground group-hover:text-white">
                    від {plan.basePrice}
                  </div>
                  <div className="text-sm transition-colors text-muted-foreground group-hover:text-white/80">
                    / місяць
                  </div>
                  <div className="text-xs mt-2 transition-colors text-muted-foreground group-hover:text-white/70">
                    за період підписки:
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="font-semibold text-lg transition-colors text-foreground group-hover:text-white">
                    {plan.baseResponses}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 transition-colors text-muted-foreground group-hover:text-white/90">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 transition-colors text-primary group-hover:text-white" />
                      <span className="text-sm">{plan.channels}</span>
                    </div>
                    <div className="flex items-start gap-2 transition-colors text-muted-foreground group-hover:text-white/90">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 transition-colors text-primary group-hover:text-white" />
                      <span className="text-sm">{plan.support}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t transition-colors border-border group-hover:border-white/20">
                  <div className="text-sm font-medium mb-3 transition-colors text-foreground group-hover:text-white/90">
                    Цей тариф з більшою кількістю відповідей:
                  </div>
                  <div className="space-y-2">
                    {plan.tiers.map((tier, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center text-sm transition-colors text-muted-foreground group-hover:text-white/80"
                      >
                        <span>{tier.price}</span>
                        <span>-</span>
                        <span>{tier.responses}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full mt-6 transition-all bg-gradient-accent hover:opacity-90 text-white group-hover:bg-white group-hover:text-primary group-hover:shadow-lg"
                  size="lg"
                >
                  Обрати
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            Всі тарифи включають повний набір функцій
          </p>
          <p className="text-sm text-muted-foreground">
            Можливість змінити тариф в будь-який момент
          </p>
        </div>
      </div>
    </section>
  );
};

