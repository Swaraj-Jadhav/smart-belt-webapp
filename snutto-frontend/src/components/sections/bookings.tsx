/*'use client';
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function Booking() {
  const [petType, setPetType] = useState("dog");
  const [petSize, setPetSize] = useState("medium");
  const [color, setColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleQuantityChange = (value: number) => {
    if (value > 0) setQuantity(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) setFormStep(2);
    else setIsSubmitted(true);
  };

  const originalPrice = 4500;
  const discountPercentage = 15;
  const discountedPrice = originalPrice * (1 - discountPercentage / 100);
  const totalPrice = discountedPrice * quantity;

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4 !rounded-button">Pre-order Now</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Secure Your Sarama Smart Belt</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Be among the first to experience the future of pet care.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-gray-200">
              <CardHeader>
                                <CardTitle className="text-2xl font-bold text-gray-800">Pre-booking Form</CardTitle>
                                <CardDescription>Fill out the details to reserve your Sarama Smart Belt</CardDescription>
                              </CardHeader>
                              <CardContent>
                                {isSubmitted ? (
                                  <div className="text-center py-8">
                                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                      <i className="fa-solid fa-check text-green-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Pre-order Confirmed!</h3>
                                    <p className="text-gray-600 mb-6">Thank you for your pre-order. We've sent a confirmation to your email.</p>
                                    <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
                                      Place Another Order
                                    </Button>
                                  </div>
                                ) : (
                                  <form onSubmit={handleSubmit}>
                                    {formStep === 1 ? (
                                      <div className="space-y-6">
                                        <div>
                                          <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Configuration</h3>
                                          <div className="space-y-4">
                                            <div>
                                              <Label htmlFor="pet-type" className="text-gray-700 mb-2 block">Pet Type</Label>
                                              <RadioGroup id="pet-type" value={petType} onValueChange={setPetType} className="flex space-x-4">
                                                <div className="flex items-center space-x-2">
                                                  <RadioGroupItem value="dog" id="dog" />
                                                  <Label htmlFor="dog" className="cursor-pointer">Dog</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                  <RadioGroupItem value="cat" id="cat" />
                                                  <Label htmlFor="cat" className="cursor-pointer">Cat</Label>
                                                </div>
                                              </RadioGroup>
                                            </div>
                                            
                                            <div>
                                              <Label htmlFor="pet-size" className="text-gray-700 mb-2 block">Pet Size</Label>
                                              <Select value={petSize} onValueChange={setPetSize}>
                                                <SelectTrigger id="pet-size" className="w-full">
                                                  <SelectValue placeholder="Select size" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                  <SelectItem value="small">Small (up to 15 lbs)</SelectItem>
                                                  <SelectItem value="medium">Medium (15-40 lbs)</SelectItem>
                                                  <SelectItem value="large">Large (40-70 lbs)</SelectItem>
                                                  <SelectItem value="xlarge">X-Large (70+ lbs)</SelectItem>
                                                </SelectContent>
                                              </Select>
                                            </div>
                                            
                                            <div>
                                              <Label htmlFor="color" className="text-gray-700 mb-2 block">Color Preference</Label>
                                              <div className="flex space-x-3">
                                                <button
                                                  type="button"
                                                  onClick={() => setColor("black")}
                                                  className={`h-10 w-10 rounded-full bg-gray-900 cursor-pointer ${color === "black" ? "ring-2 ring-offset-2 ring-blue-600" : ""}`}
                                                  aria-label="Black"
                                                ></button>
                                                <button
                                                  type="button"
                                                  onClick={() => setColor("blue")}
                                                  className={`h-10 w-10 rounded-full bg-blue-600 cursor-pointer ${color === "blue" ? "ring-2 ring-offset-2 ring-blue-600" : ""}`}
                                                  aria-label="Blue"
                                                ></button>
                                                <button
                                                  type="button"
                                                  onClick={() => setColor("red")}
                                                  className={`h-10 w-10 rounded-full bg-red-600 cursor-pointer ${color === "red" ? "ring-2 ring-offset-2 ring-blue-600" : ""}`}
                                                  aria-label="Red"
                                                ></button>
                                                <button
                                                  type="button"
                                                  onClick={() => setColor("green")}
                                                  className={`h-10 w-10 rounded-full bg-green-600 cursor-pointer ${color === "green" ? "ring-2 ring-offset-2 ring-blue-600" : ""}`}
                                                  aria-label="Green"
                                                ></button>
                                              </div>
                                            </div>
                                            
                                            <div>
                                              <Label htmlFor="quantity" className="text-gray-700 mb-2 block">Quantity</Label>
                                              <div className="flex items-center">
                                                <button
                                                  type="button"
                                                  onClick={() => handleQuantityChange(quantity - 1)}
                                                  className="h-10 w-10 rounded-l-md bg-gray-100 flex items-center justify-center border border-gray-300 cursor-pointer whitespace-nowrap"
                                                  disabled={quantity <= 1}
                                                >
                                                  <i className="fa-solid fa-minus text-gray-600"></i>
                                                </button>
                                                <Input
                                                  type="number"
                                                  id="quantity"
                                                  value={quantity}
                                                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                                  min="1"
                                                  className="h-10 w-16 text-center border-y border-gray-300 rounded-none"
                                                />
                                                <button
                                                  type="button"
                                                  onClick={() => handleQuantityChange(quantity + 1)}
                                                  className="h-10 w-10 rounded-r-md bg-gray-100 flex items-center justify-center border border-gray-300 cursor-pointer whitespace-nowrap"
                                                >
                                                  <i className="fa-solid fa-plus text-gray-600"></i>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div className="pt-4">
                                          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 !rounded-button cursor-pointer whitespace-nowrap">
                                            Continue to Shipping <i className="fa-solid fa-arrow-right ml-2"></i>
                                          </Button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="space-y-6">
                                        <div>
                                          <h3 className="text-lg font-semibold text-gray-800 mb-4">Shipping Information</h3>
                                          <div className="space-y-4">
                                            <div>
                                              <Label htmlFor="name" className="text-gray-700 mb-2 block">Full Name</Label>
                                              <Input
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter your full name"
                                                required
                                                className="w-full"
                                              />
                                            </div>
                                            
                                            <div>
                                              <Label htmlFor="email" className="text-gray-700 mb-2 block">Email Address</Label>
                                              <Input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email address"
                                                required
                                                className="w-full"
                                              />
                                            </div>
                                            
                                            <div>
                                              <Label htmlFor="address" className="text-gray-700 mb-2 block">Shipping Address</Label>
                                              <Input
                                                id="address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                placeholder="Enter your shipping address"
                                                required
                                                className="w-full"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div className="flex space-x-4 pt-4">
                                          <Button 
                                            type="button" 
                                            variant="outline" 
                                            onClick={() => setFormStep(1)}
                                            className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 py-6 !rounded-button cursor-pointer whitespace-nowrap"
                                          >
                                            <i className="fa-solid fa-arrow-left mr-2"></i> Back
                                          </Button>
                                          <Button 
                                            type="submit" 
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 !rounded-button cursor-pointer whitespace-nowrap"
                                          >
                                            Complete Pre-order <i className="fa-solid fa-check ml-2"></i>
                                          </Button>
                                        </div>
                                      </div>
                                    )}
                                  </form>
                                )}
                              </CardContent>
                            </Card>
          </div>
          
          <div>
            <Card className="border border-gray-200 sticky top-24">
               <CardHeader>
                                <CardTitle className="text-xl font-bold text-gray-800">Order Summary</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-4">
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">PetTrack Smart Belt ({petSize})</span>
                                    <span className="text-gray-800">${originalPrice.toFixed(2)}</span>
                                  </div>
                                  <div className="flex justify-between text-green-600">
                                    <span>Early-bird Discount ({discountPercentage}%)</span>
                                    <span>-${(originalPrice * discountPercentage / 100).toFixed(2)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Unit Price</span>
                                    <span className="text-gray-800">${discountedPrice.toFixed(2)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Quantity</span>
                                    <span className="text-gray-800">{quantity}</span>
                                  </div>
                                  <Separator />
                                  <div className="flex justify-between font-bold">
                                    <span className="text-gray-800">Total</span>
                                    <span className="text-blue-600 text-xl">${totalPrice.toFixed(2)}</span>
                                  </div>
                                </div>
                                
                                <div className="mt-6 space-y-4">
                                  <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
                                    <ul className="space-y-2">
                                      <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">PetTrack Smart Belt ({petSize})</span>
                                      </li>
                                      <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">USB Charging Cable</span>
                                      </li>
                                      <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">Free Mobile App Access</span>
                                      </li>
                                      <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">1-Year Warranty</span>
                                      </li>
                                      <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">30-Day Money Back Guarantee</span>
                                      </li>
                                    </ul>
                                  </div>
                                  
                                  <div className="flex items-center justify-center space-x-4">
                                    <i className="fa-brands fa-cc-visa text-2xl text-gray-600"></i>
                                    <i className="fa-brands fa-cc-mastercard text-2xl text-gray-600"></i>
                                    <i className="fa-brands fa-cc-amex text-2xl text-gray-600"></i>
                                    <i className="fa-brands fa-cc-paypal text-2xl text-gray-600"></i>
                                    <i className="fa-brands fa-apple-pay text-2xl text-gray-600"></i>
                                  </div>
                                  
                                  <div className="text-center text-sm text-gray-600">
                                    <p>Expected shipping: August 2025</p>
                                    <p>No charge until product ships</p>
                                  </div>
                                </div>
                              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}*/