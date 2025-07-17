import { TrendingUp, Users, MapPin, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: MapPin,
      number: '1,500+',
      label: 'Properties Listed',
      color: 'text-emerald-600'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Customers',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      number: 'KES 6.5B+',
      label: 'Properties Sold',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      number: '5 Years',
      label: 'Market Experience',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}