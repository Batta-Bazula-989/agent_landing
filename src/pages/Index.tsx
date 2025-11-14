import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;
