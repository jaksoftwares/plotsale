import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Shield, Phone, Mail, MessageSquare } from 'lucide-react';

interface PropertySellerProps {
  seller: {
    name: string;
    company: string;
    phone: string;
    email: string;
    avatar: string;
    verified: boolean;
    rating: number;
    totalSales: number;
  };
}

export default function PropertySeller({ seller }: PropertySellerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="w-5 h-5 mr-2 text-emerald-600" />
          Property Seller
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={seller.avatar} alt={seller.name} />
            <AvatarFallback>{seller.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-gray-900">{seller.name}</h3>
              {seller.verified && (
                <Badge className="bg-emerald-600 text-white text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            
            <p className="text-gray-600 text-sm mb-2">{seller.company}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{seller.rating}</span>
              </div>
              <span>•</span>
              <span>{seller.totalSales} properties sold</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm">
            <Phone className="w-4 h-4 text-gray-400" />
            <span className="text-gray-700">{seller.phone}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-gray-700">{seller.email}</span>
          </div>
        </div>
        
        <div className="mt-6 space-y-2">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Seller
          </Button>
          <Button variant="outline" className="w-full">
            View All Properties
          </Button>
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            This seller has been verified by PlotSale and has a proven track record of successful transactions.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}