import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation } from 'lucide-react';

interface PropertyLocationProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  location: string;
  nearbyAmenities: Array<{
    name: string;
    distance: string;
    type: string;
  }>;
}

export default function PropertyLocation({ coordinates, location, nearbyAmenities }: PropertyLocationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
          Location & Nearby Amenities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p className="font-medium">{location}</p>
              <p className="text-sm">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Nearby Amenities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nearbyAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{amenity.name}</p>
                  <p className="text-sm text-gray-600">{amenity.distance}</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {amenity.type}
                </Badge>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center mb-2">
            <Navigation className="w-4 h-4 text-blue-600 mr-2" />
            <span className="font-medium text-blue-800">Getting There</span>
          </div>
          <p className="text-blue-700 text-sm">
            Easily accessible via the main Nakuru-Nairobi highway. Public transport available with regular matatu services to Nakuru town center.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}