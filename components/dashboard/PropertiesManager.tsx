'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  MoreHorizontal,
  MapPin,
  DollarSign
} from 'lucide-react';

export default function PropertiesManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const properties = [
    {
      id: 1,
      title: 'Commercial Plot Downtown',
      location: 'Austin, TX',
      price: 'KES 58,500,000',
      size: '0.8 acres',
      type: 'Commercial',
      status: 'Active',
      views: 234,
      inquiries: 8,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      title: 'Residential Development Land',
      location: 'Phoenix, AZ',
      price: 'KES 23,400,000',
      size: '2.1 acres',
      type: 'Residential',
      status: 'Pending',
      views: 189,
      inquiries: 5,
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      title: 'Agricultural Land',
      location: 'Riverside County, CA',
      price: 'KES 32,500,000',
      size: '5.2 acres',
      type: 'Agricultural',
      status: 'Active',
      views: 156,
      inquiries: 12,
      image: 'https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 4,
      title: 'Industrial Development Site',
      location: 'Houston, TX',
      price: 'KES 115,700,000',
      size: '12.3 acres',
      type: 'Industrial',
      status: 'Sold',
      views: 445,
      inquiries: 23,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || property.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Properties</h1>
          <p className="text-gray-600 mt-2">Manage and track your property listings</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          Add New Property
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Property Listings</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredProperties.map((property) => (
              <div key={property.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{property.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {property.price}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant={property.status === 'Active' ? 'default' : 
                                   property.status === 'Pending' ? 'secondary' : 'outline'}>
                      {property.status}
                    </Badge>
                    <span className="text-sm text-gray-600">{property.size}</span>
                    <span className="text-sm text-gray-600">{property.type}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{property.views}</div>
                    <div>Views</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{property.inquiries}</div>
                    <div>Inquiries</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}