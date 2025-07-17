import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold">PlotSale</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for premium land and plot transactions. Find your perfect property today.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="/properties" className="text-gray-400 hover:text-emerald-400 transition-colors">Properties</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Buy Land</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Sell Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Property Valuation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Legal Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">info@plotsale.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">123 Real Estate Ave, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PlotSale. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}