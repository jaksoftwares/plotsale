import PropertiesGrid from '@/components/PropertiesGrid';
import PropertiesHeader from '@/components/PropertiesHeader';
import Footer from '@/components/Footer';

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PropertiesHeader />
      <PropertiesGrid />
      <Footer />
    </div>
  );
}