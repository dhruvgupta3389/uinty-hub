import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { DemoSection } from '@/components/sections/demo';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <main className="min-h-screen">
{/*       <HeroSection /> */}
      <FeaturesSection />
      <DemoSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
