import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Find Your Perfect Property?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
          Join thousands of satisfied customers who have found their dream land through PlotSale.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/properties">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Browse Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/auth">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
              List Your Property
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}