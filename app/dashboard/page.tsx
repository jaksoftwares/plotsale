'use client';

import { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import PropertiesManager from '@/components/dashboard/PropertiesManager';
import AddPropertyForm from '@/components/dashboard/AddPropertyForm';
import ProfileSettings from '@/components/dashboard/ProfileSettings';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'properties':
        return <PropertiesManager />;
      case 'add-property':
        return <AddPropertyForm />;
      case 'profile':
        return <ProfileSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}