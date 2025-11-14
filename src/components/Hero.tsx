import { Button } from "@/components/ui/button";
import { Rocket, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-card mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Нова ера обслуговування клієнтів</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <Rocket className="inline-block w-12 h-12 md:w-16 md:h-16 mr-2 text-primary animate-float" />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              ШІ-консультант
            </span>
            <br />
            <span className="text-foreground">який працює на вас</span>
            <br />
            <span className="text-primary text-4xl md:text-5xl lg:text-6xl">24/7 без вихідних</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Автоматизуйте відповіді клієнтам у Telegram, WhatsApp, Instagram, Facebook та на сайті.
            <br />
            <span className="text-foreground font-medium">
              Ваш ШІ-консультант знає все про ваш бізнес — бо навчений саме на вашій базі знань.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-accent hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg-custom"
            >
              Тарифи
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-muted"
            >
              Дізнатись більше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
