'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Calendar, Phone, Mail } from 'lucide-react';

interface PropertyEnquiryProps {
  property: {
    title: string;
    price: string;
  };
}

export default function PropertyEnquiry({ property }: PropertyEnquiryProps) {
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    enquiryType: 'general'
  });

  const [visitForm, setVisitForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry submitted:', enquiryForm);
    // Handle enquiry submission
    alert('Your enquiry has been sent successfully!');
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Visit request submitted:', visitForm);
    // Handle visit request submission
    alert('Your visit request has been sent successfully!');
  };

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle className="text-center">Interested in this property?</CardTitle>
        <p className="text-center text-gray-600 text-sm">Get in touch with the seller</p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="enquiry" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="enquiry" className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Enquiry</span>
            </TabsTrigger>
            <TabsTrigger value="visit" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Visit</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="enquiry" className="mt-4">
            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="enquiry-name">Full Name</Label>
                <Input
                  id="enquiry-name"
                  value={enquiryForm.name}
                  onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="enquiry-email">Email</Label>
                <Input
                  id="enquiry-email"
                  type="email"
                  value={enquiryForm.email}
                  onChange={(e) => setEnquiryForm({...enquiryForm, email: e.target.value})}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="enquiry-phone">Phone Number</Label>
                <Input
                  id="enquiry-phone"
                  type="tel"
                  value={enquiryForm.phone}
                  onChange={(e) => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                  placeholder="+254 712 345 678"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="enquiry-type">Enquiry Type</Label>
                <select
                  id="enquiry-type"
                  value={enquiryForm.enquiryType}
                  onChange={(e) => setEnquiryForm({...enquiryForm, enquiryType: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="general">General Information</option>
                  <option value="pricing">Pricing & Negotiation</option>
                  <option value="financing">Financing Options</option>
                  <option value="legal">Legal Documentation</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="enquiry-message">Message</Label>
                <Textarea
                  id="enquiry-message"
                  value={enquiryForm.message}
                  onChange={(e) => setEnquiryForm({...enquiryForm, message: e.target.value})}
                  placeholder={`I'm interested in ${property.title}. Please provide more information about...`}
                  rows={4}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Enquiry
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="visit" className="mt-4">
            <form onSubmit={handleVisitSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="visit-name">Full Name</Label>
                <Input
                  id="visit-name"
                  value={visitForm.name}
                  onChange={(e) => setVisitForm({...visitForm, name: e.target.value})}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="visit-email">Email</Label>
                <Input
                  id="visit-email"
                  type="email"
                  value={visitForm.email}
                  onChange={(e) => setVisitForm({...visitForm, email: e.target.value})}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="visit-phone">Phone Number</Label>
                <Input
                  id="visit-phone"
                  type="tel"
                  value={visitForm.phone}
                  onChange={(e) => setVisitForm({...visitForm, phone: e.target.value})}
                  placeholder="+254 712 345 678"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="visit-date">Preferred Date</Label>
                  <Input
                    id="visit-date"
                    type="date"
                    value={visitForm.preferredDate}
                    onChange={(e) => setVisitForm({...visitForm, preferredDate: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="visit-time">Preferred Time</Label>
                  <select
                    id="visit-time"
                    value={visitForm.preferredTime}
                    onChange={(e) => setVisitForm({...visitForm, preferredTime: e.target.value})}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 6PM)</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="visit-message">Additional Notes</Label>
                <Textarea
                  id="visit-message"
                  value={visitForm.message}
                  onChange={(e) => setVisitForm({...visitForm, message: e.target.value})}
                  placeholder="Any specific requirements or questions for the visit..."
                  rows={3}
                />
              </div>
              
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Calendar className="w-4 h-4 mr-2" />
                Request Visit
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between">
            <Button variant="outline" className="flex-1 mr-2">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" className="flex-1 ml-2">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}