'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Square, Eye, Heart, Filter } from 'lucide-react'; 
import Link from 'next/link';

const allProperties = [
  {
    id: 1,
    title: "Prime Agricultural Land",
    location: "Riverside County, CA",
    price: "KES 32,500,000",
    size: "5.2 acres",
    type: "Agricultural",
    image: "https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Water Access", "Fertile Soil", "Road Access"]
  },
  {
    id: 2,
    title: "Commercial Plot Downtown",
    location: "Austin, TX",
    price: "KES 58,500,000",
    size: "0.8 acres",
    type: "Commercial",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["City Center", "High Traffic", "Utilities Ready"]
  },
  {
    id: 3,
    title: "Residential Development Land",
    location: "Phoenix, AZ",
    price: "KES 23,400,000",
    size: "2.1 acres",
    type: "Residential",
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Subdivision Ready", "Utilities", "Great Schools"]
  },
  {
    id: 4,
    title: "Mountain View Plot",
    location: "Boulder, CO",
    price: "KES 41,600,000",
    size: "3.5 acres",
    type: "Residential",
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Mountain Views", "Privacy", "Nature Access"]
  },
  {
    id: 5,
    title: "Industrial Development Site",
    location: "Houston, TX",
    price: "KES 115,700,000",
    size: "12.3 acres",
    type: "Industrial",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Highway Access", "Rail Nearby", "Zoned Industrial"]
  },
  {
    id: 6,
    title: "Waterfront Property",
    location: "Miami, FL",
    price: "KES 87,750,000",
    size: "1.8 acres",
    type: "Waterfront",
    image: "https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Ocean Access", "Private Beach", "Investment Potential"]
  },
  {
    id: 7,
    title: "Rural Acreage",
    location: "Montana",
    price: "KES 12,350,000",
    size: "10.5 acres",
    type: "Rural",
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Privacy", "Hunting", "Mineral Rights"]
  },
  {
    id: 8,
    title: "Suburban Plot",
    location: "Atlanta, GA",
    price: "KES 16,250,000",
    size: "1.2 acres",
    type: "Residential",
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Quiet Neighborhood", "Utilities", "Schools Nearby"]
  },
  {
    id: 9,
    title: "Investment Land",
    location: "Las Vegas, NV",
    price: "KES 26,000,000",
    size: "2.8 acres",
    type: "Investment",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Growth Area", "Development Potential", "Tax Benefits"]
  }
];

export default function PropertiesGrid() {
  const [likedProperties, setLikedProperties] = useState<number[]>([]);
  const [selectedType, setSelectedType] = useState('All');

  const toggleLike = (propertyId: number) => {
    setLikedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const types = ['All', 'Agricultural', 'Commercial', 'Residential', 'Industrial', 'Waterfront', 'Rural', 'Investment'];

  const filteredProperties = selectedType === 'All' 
    ? allProperties 
    : allProperties.filter(property => property.type === selectedType);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Available Properties</h1>
          <p className="text-gray-600 mt-2">
            {filteredProperties.length} properties available
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            {types.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType(type)}
                className={selectedType === type ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-emerald-600 text-white">
                  {property.type}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/90 border-white/90 text-gray-700 hover:bg-white"
                  onClick={() => toggleLike(property.id)}
                >
                  <Heart className={`w-4 h-4 ${likedProperties.includes(property.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/90 border-white/90 text-gray-700 hover:bg-white"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                <span className="text-2xl font-bold text-emerald-600">{property.price}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <Square className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.size}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {property.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <Link href={`/property/${property.id}`}>
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    View Details
                  </Button>
                </Link>
                <Button variant="outline" className="flex-1">
                  Contact Seller
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}