import { CheckCircle, Shield, Users, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'All properties are thoroughly verified and legally compliant.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our team of real estate experts is here to guide you through every step.'
    },
    {
      icon: Zap,
      title: 'Fast Transactions',
      description: 'Streamlined process for quick and efficient property transactions.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'We ensure every property meets our high standards for quality and value.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose PlotSale?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're more than just a marketplace. We're your trusted partner in finding and selling premium land and plots with confidence and ease.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white p-2 rounded-lg">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Beautiful landscape"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}