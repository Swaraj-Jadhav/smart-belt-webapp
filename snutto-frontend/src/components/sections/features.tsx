'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { features } from "@/lib/constants";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-8 !rounded-button">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Smart Technology for Smarter Pet Care</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our cutting-edge smart belt combines multiple technologies to keep your pet safe, healthy, and connected.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-800">
            {feature.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{feature.description}</p>
        </CardContent>
      </Card>
    );
  })}
</div>


        {/* Additional feature content... */}
           <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4 !rounded-button">Advanced Tracking</Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Real-time Location Tracking & Safe Zones</h3>
              <p className="text-lg text-gray-600 mb-6">Always know where your pet is with precise GPS tracking. Set up custom safe zones and receive instant alerts if your pet wanders outside these boundaries.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <i className="fa-solid fa-check text-green-600 text-sm"></i>
                  </div>
                  <p className="text-gray-700">Precision GPS tracking with up to 10-meter accuracy</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <i className="fa-solid fa-check text-green-600 text-sm"></i>
                  </div>
                  <p className="text-gray-700">Create multiple custom safe zones with flexible boundaries</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <i className="fa-solid fa-check text-green-600 text-sm"></i>
                  </div>
                  <p className="text-gray-700">Instant notifications via app, SMS, or email</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <i className="fa-solid fa-check text-green-600 text-sm"></i>
                  </div>
                  <p className="text-gray-700">Historical location data for tracking patterns</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/images/dog_img.jpg" 
                alt="Location tracking app interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/images/app_interface.png" 
                alt="Health monitoring app interface" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge className="bg-blue-100 text-blue-800 mb-4 !rounded-button">Health Insights</Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Comprehensive Health Monitoring</h3>
              <p className="text-lg text-gray-600 mb-6">Track vital health metrics and receive alerts for abnormal patterns. Understand your pet's activity levels and ensure they're getting proper exercise.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <i className="fa-solid fa-check text-green-600 text-sm"></i>
                  </div>
                  <p className="text-gray-700">Heart rate and temperature monitoring</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <i className="fa-solid fa-check text-green-600 text-sm"></i>
                  </div>
                  <p className="text-gray-700">Activity tracking with daily goals</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <i className="fa-solid fa-check text-green-600 text-sm"></i>
                  </div>
                  <p className="text-gray-700">Sleep quality analysis</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <i className="fa-solid fa-check text-green-600 text-sm"></i>
                  </div>
                  <p className="text-gray-700">Customizable alerts for abnormal readings</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}