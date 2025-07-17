'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Filter, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PropertiesHeader() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">PlotSale</span>
            </div>
          </div>
          <Link href="/auth">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              List Your Property
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search by location, price, or property type..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
        </div>
      </div>
    </div>
  );
}