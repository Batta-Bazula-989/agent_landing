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
              className="relative overflow-hidden cursor-pointer group bg-card border-border"
              style={{ 
                transform: 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'transform, background-color, border-color'
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'scale(1.05)';
                card.style.backgroundColor = 'hsl(var(--primary))';
                card.style.color = 'hsl(var(--primary-foreground))';
                card.style.borderColor = 'hsl(var(--primary))';
                card.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'scale(1)';
                card.style.backgroundColor = '';
                card.style.color = '';
                card.style.borderColor = '';
                card.style.boxShadow = '';
              }}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.3s ease' }}>
                <Badge className="bg-white/20 text-white border-white/30">
                  {plan.featured ? "Рекомендовано" : "Обрати"}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4 text-foreground group-hover:text-white" style={{ transition: 'color 0.3s ease' }}>
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-white/20" style={{ transition: 'background-color 0.3s ease' }}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-foreground group-hover:text-white" style={{ transition: 'color 0.3s ease' }}>
                    від {plan.basePrice}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-white/80" style={{ transition: 'color 0.3s ease' }}>
                    / місяць
                  </div>
                  <div className="text-xs mt-2 text-muted-foreground group-hover:text-white/70" style={{ transition: 'color 0.3s ease' }}>
                    за період підписки:
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="font-semibold text-lg text-foreground group-hover:text-white" style={{ transition: 'color 0.3s ease' }}>
                    {plan.baseResponses}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-muted-foreground group-hover:text-white/90" style={{ transition: 'color 0.3s ease' }}>
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary group-hover:text-white" style={{ transition: 'color 0.3s ease' }} />
                      <span className="text-sm">{plan.channels}</span>
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground group-hover:text-white/90" style={{ transition: 'color 0.3s ease' }}>
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary group-hover:text-white" style={{ transition: 'color 0.3s ease' }} />
                      <span className="text-sm">{plan.support}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border group-hover:border-white/20" style={{ transition: 'border-color 0.3s ease' }}>
                  <div className="text-sm font-medium mb-3 text-foreground group-hover:text-white/90" style={{ transition: 'color 0.3s ease' }}>
                    Цей тариф з більшою кількістю відповідей:
                  </div>
                  <div className="space-y-2">
                    {plan.tiers.map((tier, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center text-sm text-muted-foreground group-hover:text-white/80"
                        style={{ transition: 'color 0.3s ease' }}
                      >
                        <span>{tier.price}</span>
                        <span>-</span>
                        <span>{tier.responses}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className="pricing-btn w-full mt-6 h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  Обрати
                </button>
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

