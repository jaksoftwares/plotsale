'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Eye, 
  Heart, 
  DollarSign, 
  TrendingUp,
  MessageSquare,
  Calendar,
  Plus
} from 'lucide-react';

export default function DashboardOverview() {
  const stats = [
    {
      title: 'Active Properties',
      value: '8',
      change: '+2 this month',
      icon: Home,
      color: 'text-emerald-600'
    },
    {
      title: 'Total Views',
      value: '1,247',
      change: '+18% from last month',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      title: 'Inquiries',
      value: '23',
      change: '+5 new this week',
      icon: MessageSquare,
      color: 'text-purple-600'
    },
    {
      title: 'Revenue',
      value: 'KES 5,876,000',
      change: '+12% from last month',
      icon: DollarSign,
      color: 'text-green-600'
    }
  ];

  const recentProperties = [
    {
      id: 1,
      title: 'Commercial Plot Downtown',
      location: 'Austin, TX',
      price: 'KES 58,500,000',
      status: 'Active',
      views: 234,
      inquiries: 8
    },
    {
      id: 2,
      title: 'Residential Development Land',
      location: 'Phoenix, AZ',
      price: 'KES 23,400,000',
      status: 'Pending',
      views: 189,
      inquiries: 5
    },
    {
      id: 3,
      title: 'Agricultural Land',
      location: 'Riverside County, CA',
      price: 'KES 32,500,000',
      status: 'Active',
      views: 156,
      inquiries: 12
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your properties today.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="w-5 h-5 mr-2" />
          Add New Property
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProperties.map((property) => (
                <div key={property.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{property.title}</h3>
                    <p className="text-sm text-gray-600">{property.location}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm font-medium text-emerald-600">{property.price}</span>
                      <Badge variant={property.status === 'Active' ? 'default' : 'secondary'}>
                        {property.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{property.views}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{property.inquiries}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">New inquiry for Commercial Plot Downtown</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Agricultural Land gained 15 new views</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Residential Development Land was favorited</p>
                  <p className="text-xs text-gray-500">3 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}