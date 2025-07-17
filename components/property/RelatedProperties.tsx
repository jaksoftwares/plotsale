import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Square } from 'lucide-react';
import Link from 'next/link';

interface RelatedPropertiesProps {
  currentPropertyId: string;
  propertyType: string;
}

const relatedProperties = [
  {
    id: '2',
    title: 'Commercial Plot Downtown',
    location: 'Nairobi, Kenya',
    price: 'KES 58,500,000',
    size: '0.8 acres',
    type: 'Commercial',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    title: 'Residential Development Land',
    location: 'Kiambu, Kenya',
    price: 'KES 23,400,000',
    size: '2.1 acres',
    type: 'Residential',
    image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    title: 'Agricultural Farm Land',
    location: 'Meru, Kenya',
    price: 'KES 41,600,000',
    size: '8.5 acres',
    type: 'Agricultural',
    image: 'https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function RelatedProperties({ currentPropertyId, propertyType }: RelatedPropertiesProps) {
  const filteredProperties = relatedProperties.filter(
    property => property.id !== currentPropertyId
  ).slice(0, 3);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Properties</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-emerald-600 text-white">
                  {property.type}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{property.title}</h3>
              
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <Square className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.size}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-emerald-600">{property.price}</span>
                <Link href={`/property/${property.id}`}>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}