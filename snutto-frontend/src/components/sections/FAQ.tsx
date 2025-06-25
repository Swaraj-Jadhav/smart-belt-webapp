'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from 'react';


export default function FAQ() {
  return (
    <section id="support" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4 !rounded-button">Support</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find answers to common questions.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
  <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    How accurate is the GPS tracking?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      The Snutto Smart Belt uses a combination of GPS, GLONASS, and WiFi positioning to provide accuracy within 10 meters in optimal conditions. In urban areas with good satellite visibility, accuracy can improve to 3-5 meters. The companion app shows your pet's location in real-time with updates every 15 seconds in active tracking mode.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    What would be the price of the snutto smart belt?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      The Snutto smart belt would be approximately priced around ₹9,999 with an additional monthly GPS subscription of around ₹149.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    How waterproof is the device?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      The PetTrack Smart Belt has an IP67 rating, meaning it's fully protected against dust and can withstand immersion in water up to 1 meter (3.3 feet) for up to 30 minutes. It's suitable for pets who swim occasionally or play in the rain, but we don't recommend extended submersion or deep-water swimming.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    When will my pre-order ship?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      We expect to begin shipping pre-orders in August 2025. Waitlist members get priority!
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    How do I measure my pet for the correct size?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      To measure your pet for the correct size, use a soft measuring tape and measure around your pet's neck where a collar would naturally sit. Add 1-2 inches (2.5-5 cm) for comfort. If your pet is between sizes, we recommend choosing the larger size. You can find our detailed size chart in the Product Details section.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    Can I change my order details after placing a pre-order?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      Yes, you can modify your pre-order details (size, color, quantity, shipping address) anytime before your order ships. Simply log in to your account on our website or contact our customer support team with your order number, and we'll assist you with any changes needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
          </Accordion>
          
          <div className="mt-12 text-center">
                       <p className="text-gray-700 mb-6">Still have questions? Our support team is here to help.</p>
                       <div className="flex flex-col sm:flex-row justify-center gap-4">
                         <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 !rounded-button cursor-pointer whitespace-nowrap">
                           <i className="fa-solid fa-envelope mr-2"></i> Email Support
                         </Button>
              
                         <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 !rounded-button cursor-pointer whitespace-nowrap">
                           <i className="fa-solid fa-phone mr-2"></i> Call Us
                         </Button>
                       </div>
                     </div>
        </div>
      </div>
    </section>
  );
}