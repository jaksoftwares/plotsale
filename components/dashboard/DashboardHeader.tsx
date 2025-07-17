'use client';

import { Button } from '@/components/ui/button';
import { Bell, Search, User, MapPin, LogOut } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">PlotSale</span>
            </Link>
            <div className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search properties, locations..."
                  className="pl-10 w-80"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <LogOut className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}