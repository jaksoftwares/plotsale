import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface PropertyDetailsProps {
  property: {
    description: string;
    title: string;
  };
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="w-5 h-5 mr-2 text-emerald-600" />
          Property Description
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            {property.description}
          </p>
        </div>
        
        <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
          <h4 className="font-semibold text-emerald-800 mb-2">Investment Highlights</h4>
          <ul className="text-emerald-700 space-y-1">
            <li>• Prime location with excellent growth potential</li>
            <li>• Ready title deed for immediate transfer</li>
            <li>• Suitable for both agricultural and development purposes</li>
            <li>• Strategic location with good infrastructure access</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}