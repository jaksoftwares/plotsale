import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import About from '@/components/About';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <FeaturedProperties />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}