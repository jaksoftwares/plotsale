'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import PropertyHeader from '@/components/property/PropertyHeader';
import PropertyGallery from '@/components/property/PropertyGallery';
import PropertyDetails from '@/components/property/PropertyDetails';
import PropertyFeatures from '@/components/property/PropertyFeatures';
import PropertyLocation from '@/components/property/PropertyLocation';
import PropertyEnquiry from '@/components/property/PropertyEnquiry';
import PropertySeller from '@/components/property/PropertySeller';
import RelatedProperties from '@/components/property/RelatedProperties';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Mock property data - in real app, this would come from API
const getPropertyById = (id: string) => {
  const properties = {
    '1': {
      id: '1',
      title: 'Prime Agricultural Land',
      location: 'Nakuru County, Kenya',
      price: 'KES 32,500,000',
      size: '5.2 acres',
      type: 'Agricultural',
      status: 'Available',
      description: 'Exceptional agricultural land located in the fertile highlands of Nakuru County. This prime property offers excellent soil quality, reliable water access, and strategic location for both crop farming and livestock keeping. The land is fully titled and ready for immediate development.',
      images: [
        'https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      features: [
        'Water Access',
        'Fertile Soil',
        'Road Access',
        'Electricity Nearby',
        'Title Deed Available',
        'Fenced Perimeter',
        'Irrigation System',
        'Storage Facilities'
      ],
      specifications: {
        'Land Size': '5.2 acres',
        'Soil Type': 'Clay Loam',
        'Water Source': 'Borehole & River',
        'Access Road': 'All Weather Road',
        'Electricity': '500m to Grid',
        'Title': 'Freehold',
        'Zoning': 'Agricultural',
        'Topography': 'Gently Sloping'
      },
      seller: {
        name: 'John Kamau',
        company: 'Kamau Properties Ltd',
        phone: '+254 712 345 678',
        email: 'john@kamauproperties.co.ke',
        avatar: '/api/placeholder/100/100',
        verified: true,
        rating: 4.8,
        totalSales: 23
      },
      coordinates: {
        lat: -0.3031,
        lng: 36.0800
      },
      nearbyAmenities: [
        { name: 'Nakuru Town', distance: '15 km', type: 'Town Center' },
        { name: 'Egerton University', distance: '8 km', type: 'Education' },
        { name: 'Nakuru Level 5 Hospital', distance: '12 km', type: 'Healthcare' },
        { name: 'Nakuru Airport', distance: '20 km', type: 'Transport' }
      ]
    }
  };
  
  return properties[id as keyof typeof properties];
};

export default function PropertyDetailPage() {
  const params = useParams();
  const property = getPropertyById(params.id as string);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PropertyHeader property={property} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PropertyGallery images={property.images} title={property.title} />
            <PropertyDetails property={property} />
            <PropertyFeatures features={property.features} specifications={property.specifications} />
            <PropertyLocation 
              coordinates={property.coordinates} 
              location={property.location}
              nearbyAmenities={property.nearbyAmenities}
            />
          </div>
          
          <div className="space-y-6">
            <PropertyEnquiry property={property} />
            <PropertySeller seller={property.seller} />
          </div>
        </div>
        
        <RelatedProperties currentPropertyId={property.id} propertyType={property.type} />
      </div>
      
      <Footer />
    </div>
  );
}