'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-8 h-8" />
            <span className="text-2xl font-bold">PlotSale</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-emerald-200 transition-colors">Home</Link>
            <Link href="/properties" className="hover:text-emerald-200 transition-colors">Properties</Link>
            <Link href="/about" className="hover:text-emerald-200 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-emerald-200 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
                Sign In
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
                List Property
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect
            <span className="block text-emerald-200">Land & Plot</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-emerald-100">
            Discover premium land and plots from verified sellers. Your dream property awaits.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex bg-white rounded-full shadow-xl p-2">
              <Input
                placeholder="Search by location, price, or property type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-0 bg-transparent text-gray-900 focus:ring-0"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-8">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1,500+</h3>
              <p className="text-emerald-100">Properties Listed</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-emerald-100">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5 Years</h3>
              <p className="text-emerald-100">Market Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}