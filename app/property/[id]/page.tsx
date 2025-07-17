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
import properties from '@/app/constants/properties';

const getPropertyById = (id: string) => {
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
          <p className="text-gray-600">The property you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-blue-600 hover:underline mt-4 block">Go back home</Link>
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
            <PropertyFeatures 
              features={property.features} 
              specifications={property.specifications} 
            />
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

        <RelatedProperties 
          currentPropertyId={property.id} 
          propertyType={property.type} 
        />
      </div>

      <Footer />
    </div>
  );
}
