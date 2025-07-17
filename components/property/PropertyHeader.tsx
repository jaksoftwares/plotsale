'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Share2, Heart, MapPin, Square } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface PropertyHeaderProps {
  property: {
    title: string;
    location: string;
    price: string;
    size: string;
    type: string;
    status: string;
  };
}

export default function PropertyHeader({ property }: PropertyHeaderProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <Link href="/properties" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Properties</span>
          </Link>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className={isLiked ? 'text-red-600 border-red-600' : ''}
            >
              <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
              {isLiked ? 'Saved' : 'Save'}
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <Badge className="bg-emerald-600 text-white">{property.type}</Badge>
              <Badge variant={property.status === 'Available' ? 'default' : 'secondary'}>
                {property.status}
              </Badge>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{property.title}</h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center">
                <Square className="w-5 h-5 mr-2" />
                <span>{property.size}</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-bold text-emerald-600 mb-2">{property.price}</div>
            <div className="text-sm text-gray-600">Negotiable</div>
          </div>
        </div>
      </div>
    </div>
  );
}