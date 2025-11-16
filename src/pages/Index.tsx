import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "А якщо консультант помилиться?",
    answer:
      "Ми будуємо систему так, щоб вона працювала в межах ваших правил: надаємо чіткі інструкції, обмежуємо дозволені дії та налаштовуємо перевірки. Для чутливих випадків можна додати ескалацію на менеджера.",
  },
  {
    question: "Мій бізнес специфічний, ШІ впорається?",
    answer:
      "Так. Ми навчаємо асистента на ваших даних: продуктах, правилах, скриптах, знаннях з бази та історії діалогів. Це дозволяє відповідати з урахуванням контексту саме вашого бізнесу.",
  },
  {
    question: "Чи можнa інтегрувати з CRM або сайтом?",
    answer:
      "Так. Підтримуємо інтеграції з популярними CRM та сайтами. Асистент може створювати ліди, оновлювати статуси, залишати коментарі й працювати з вашими формами та базами даних.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            FAQ
          </h2>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="divide-y rounded-xl border bg-card shadow-sm"
        >
          {faqs.map((item, idx) => (
            <Accordion.Item key={idx} value={`item-${idx}`} className="group">
              <Accordion.Header className="w-full">
                <Accordion.Trigger
                  className={cn(
                    "w-full flex items-center gap-4 px-6 py-6 text-left",
                    "transition-colors hover:bg-muted/40",
                    "data-[state=open]:bg-muted/50"
                  )}
                >
                  <span className="flex-1 text-xl md:text-2xl font-semibold text-foreground">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-muted-foreground">
                    <Plus className="h-6 w-6 group-data-[state=open]:hidden" />
                    <Minus className="h-6 w-6 hidden group-data-[state=open]:block" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Features />
      <Pricing />
      <Benefits />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
