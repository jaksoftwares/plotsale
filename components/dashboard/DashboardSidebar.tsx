'use client';

import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Home, 
  Plus, 
  BarChart3, 
  Settings, 
  Users,
  MessageSquare,
  CreditCard
} from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'properties', label: 'My Properties', icon: Home },
    { id: 'add-property', label: 'Add Property', icon: Plus },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm border-r min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? 'default' : 'ghost'}
              className={`w-full justify-start ${
                activeTab === item.id 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
}