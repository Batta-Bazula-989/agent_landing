import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";

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
