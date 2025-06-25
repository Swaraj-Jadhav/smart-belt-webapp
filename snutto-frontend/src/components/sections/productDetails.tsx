'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductDetails() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4 !rounded-button">Specifications</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Product Details</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Advanced technology in a comfortable design.</p>
        </div>
        
        <Tabs defaultValue="specs" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specs">Technical Specs</TabsTrigger>
            <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
            <TabsTrigger value="warranty">Warranty</TabsTrigger>
          </TabsList>
<TabsContent value="specs" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Physical Specifications</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Weight:</span>
                          <span className="text-gray-800 font-medium">28g (Small), 42g (Medium), 56g (Large)</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Dimensions:</span>
                          <span className="text-gray-800 font-medium">Adjustable to fit neck sizes</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Water Resistance:</span>
                          <span className="text-gray-800 font-medium">IP67 (Waterproof up to 1m)</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Materials:</span>
                          <span className="text-gray-800 font-medium">Hypoallergenic silicone, aluminum clasp</span>
                        </li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Battery & Power</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Battery Type:</span>
                          <span className="text-gray-800 font-medium">Rechargeable Li-ion</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Battery Life:</span>
                          <span className="text-gray-800 font-medium">Up to 7 days (normal use)</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Charging Time:</span>
                          <span className="text-gray-800 font-medium">2 hours to full charge</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Charging Method:</span>
                          <span className="text-gray-800 font-medium">USB-C</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Connectivity & Sensors</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span className="text-gray-600">GPS:</span>
                          <span className="text-gray-800 font-medium">High-precision GPS + GLONASS</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Connectivity:</span>
                          <span className="text-gray-800 font-medium">Bluetooth 5.2, WiFi, Cellular (LTE)</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Health Sensors:</span>
                          <span className="text-gray-800 font-medium">Heart rate, temperature, motion</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Range:</span>
                          <span className="text-gray-800 font-medium">Unlimited (with cellular connection)</span>
                        </li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">App Compatibility</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span className="text-gray-600">iOS:</span>
                          <span className="text-gray-800 font-medium">iOS 14.0 or later</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Android:</span>
                          <span className="text-gray-800 font-medium">Android 8.0 or later</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Web Interface:</span>
                          <span className="text-gray-800 font-medium">All modern browsers</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Data Storage:</span>
                          <span className="text-gray-800 font-medium">Cloud-based with local backup</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="compatibility" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Compatible Pet Types</h3>
                      <p className="text-gray-600 mb-4">The PetTrack Smart Belt is designed to work with a wide variety of pets:</p>
                      
                      <h4 className="font-medium text-gray-800 mt-6 mb-2">Dogs:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                          <span className="text-gray-700">Small breeds (Chihuahua, Yorkshire Terrier, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                          <span className="text-gray-700">Medium breeds (Beagle, Border Collie, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                          <span className="text-gray-700">Large breeds (Labrador, German Shepherd, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                          <span className="text-gray-700">Giant breeds (Great Dane, Saint Bernard, etc.)</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-gray-800 mt-6 mb-2">Cats:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                          <span className="text-gray-700">All domestic cat breeds</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                          <span className="text-gray-700">Indoor and outdoor cats</span>
                        </li>
                      </ul>
                      
                      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                        <p className="text-yellow-800 text-sm">
                          <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                          Not recommended for pets under 5 lbs (2.3 kg) or with neck circumference less than 6 inches (15 cm).
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Size Guide</h3>
                      <p className="text-gray-600 mb-4">To ensure proper fit and comfort, please measure your pet's neck and select the appropriate size:</p>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="grid grid-cols-3 bg-gray-100 p-3">
                          <div className="font-medium text-gray-800">Size</div>
                          <div className="font-medium text-gray-800">Neck Circumference</div>
                          <div className="font-medium text-gray-800">Weight Range</div>
                        </div>
                        <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                          <div className="text-gray-800">Small</div>
                          <div className="text-gray-600">6-12 inches (15-30 cm)</div>
                          <div className="text-gray-600">5-15 lbs (2.3-6.8 kg)</div>
                        </div>
                        <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                          <div className="text-gray-800">Medium</div>
                          <div className="text-gray-600">10-18 inches (25-45 cm)</div>
                          <div className="text-gray-600">15-40 lbs (6.8-18 kg)</div>
                        </div>
                        <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                          <div className="text-gray-800">Large</div>
                          <div className="text-gray-600">16-24 inches (40-60 cm)</div>
                          <div className="text-gray-600">40-70 lbs (18-32 kg)</div>
                        </div>
                        <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                          <div className="text-gray-800">X-Large</div>
                          <div className="text-gray-600">20-30 inches (50-75 cm)</div>
                          <div className="text-gray-600">70+ lbs (32+ kg)</div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">How to Measure</h3>
                      <p className="text-gray-600 mb-4">For the most accurate fit, measure your pet's neck where the collar would naturally sit. Add 1-2 inches (2.5-5 cm) for comfort.</p>
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-blue-800 text-sm">
                          <i className="fa-solid fa-circle-info mr-2"></i>
                          If your pet is between sizes, we recommend choosing the larger size for comfort.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="warranty" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Warranty Coverage</h3>
                      <p className="text-gray-600 mb-4">Every PetTrack Smart Belt comes with our comprehensive warranty package:</p>
                      
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                          <div>
                            <span className="text-gray-800 font-medium">1-Year Standard Warranty</span>
                            <p className="text-gray-600 text-sm">Covers all manufacturing defects and hardware failures under normal use.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                          <div>
                            <span className="text-gray-800 font-medium">30-Day Money Back Guarantee</span>
                            <p className="text-gray-600 text-sm">If you're not completely satisfied, return for a full refund within 30 days.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                          <div>
                            <span className="text-gray-800 font-medium">Extended Warranty Option</span>
                            <p className="text-gray-600 text-sm">2-year and 3-year extended warranty plans available for purchase.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Support</h3>
                      <p className="text-gray-600 mb-4">We're committed to providing exceptional support for all PetTrack customers:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center mb-2">
                            <i className="fa-solid fa-headset text-blue-600 mr-3 text-xl"></i>
                            <h4 className="font-medium text-gray-800">24/7 Technical Support</h4>
                          </div>
                          <p className="text-gray-600 text-sm">Our technical team is available around the clock to help with any issues.</p>
                        </div>
                        
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center mb-2">
                            <i className="fa-solid fa-video text-blue-600 mr-3 text-xl"></i>
                            <h4 className="font-medium text-gray-800">Video Setup Assistance</h4>
                          </div>
                          <p className="text-gray-600 text-sm">Schedule a video call with our experts for personalized setup help.</p>
                        </div>
                        
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center mb-2">
                            <i className="fa-solid fa-book text-blue-600 mr-3 text-xl"></i>
                            <h4 className="font-medium text-gray-800">Comprehensive Knowledge Base</h4>
                          </div>
                          <p className="text-gray-600 text-sm">Access detailed guides, tutorials, and troubleshooting resources.</p>
                        </div>
                        
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center mb-2">
                            <i className="fa-solid fa-comments text-blue-600 mr-3 text-xl"></i>
                            <h4 className="font-medium text-gray-800">Community Forum</h4>
                          </div>
                          <p className="text-gray-600 text-sm">Connect with other PetTrack users to share tips and experiences.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Pre-order Guarantee</h3>
                      <p className="text-gray-700 mb-4">We understand that pre-ordering requires trust. That's why we offer these special guarantees:</p>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <i className="fa-solid fa-shield-halved text-blue-600 mt-1 mr-3 text-lg"></i>
                          <div>
                            <span className="text-gray-800 font-medium">No-Charge Until Shipping</span>
                            <p className="text-gray-600 text-sm">Your card will only be charged when your order ships.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <i className="fa-solid fa-tag text-blue-600 mt-1 mr-3 text-lg"></i>
                          <div>
                            <span className="text-gray-800 font-medium">Price-Lock Guarantee</span>
                            <p className="text-gray-600 text-sm">Your pre-order price is locked in, even if prices increase before shipping.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <i className="fa-solid fa-calendar-check text-blue-600 mt-1 mr-3 text-lg"></i>
                          <div>
                            <span className="text-gray-800 font-medium">Priority Shipping</span>
                            <p className="text-gray-600 text-sm">Pre-order customers receive priority shipping when products are released.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}