'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WaitlistForm } from './WaitlistForm';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [count, setCount] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const targetCount = 465;
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 fps
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center">
          
          {/* Animated Shimmer */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer"></div>
          </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-300/40 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 left-60 w-1 h-1 bg-indigo-400/50 rounded-full animate-float-medium"></div>
        <div className="absolute top-60 left-40 w-3 h-3 bg-blue-200/30 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-40 left-80 w-2 h-2 bg-indigo-300/40 rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="transform transition-all duration-1000 animate-fade-in-up">
            {/* Enhanced Heading with Gradient Text */}
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
              Make your pets smarter
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium backdrop-blur-sm">
              India's first smart belt that monitors your pet's health and real-time location, 
              <span className="text-blue-700 font-semibold"> even when you're away.</span>
            </p>
            
            {/* Enhanced Button Group */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white px-10 py-7 text-lg !rounded-button cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold border-2 border-blue-500/20 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      <i className="fa-solid fa-rocket"></i>
                      Join Waitlist
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="backdrop-blur-md bg-white/95 border-2 border-blue-100 shadow-2xl">
                  <div className="p-6">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Join Our Waitlist</h2>
                    <WaitlistForm onSuccess={() => {
                      setIsDialogOpen(false);
                      setIsMenuOpen(false);
                    }} />
                  </div>
                </DialogContent>
              </Dialog>

              <button
                className="md:hidden text-gray-700 focus:outline-none cursor-pointer whitespace-nowrap hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
              </button>

              <Button 
                onClick={() => scrollToSection('features')} 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 px-10 py-7 text-lg !rounded-button cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm bg-white/80 hover:border-indigo-600 group"
              >
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-compass group-hover:rotate-12 transition-transform duration-300"></i>
                  Explore Features
                </span>
              </Button>
            </div>
            
            {/* Enhanced Badge and Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 backdrop-blur-sm bg-white/60 p-4 rounded-2xl border border-blue-100 shadow-sm">
              <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 !rounded-button shadow-sm border border-blue-200/50 font-semibold">
                <i className="fa-solid fa-clock mr-2 animate-pulse"></i> 
                Limited Time Offer
              </Badge>
              <p className="text-gray-700 font-medium">
                Join
                <span className="font-bold text-2xl mx-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-number-glow"> {count} </span>
                pet lovers on the waitlist
                <i className="fa-solid fa-heart text-red-500 ml-2 animate-heartbeat"></i>
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
              <img 
                src="/images/phone_images.jpg" 
                alt="Smart pet belt monitoring interface" 
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
              />
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400/30 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-300/40 rounded-full animate-float-slow"></div>
              <div className="absolute top-1/4 -right-6 w-5 h-5 bg-indigo-300/40 rounded-full animate-float-medium"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(300%) skewX(12deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(360deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-180deg); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes number-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(79, 70, 229, 0.6); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .animate-shimmer { animation: shimmer 3s infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-number-glow { animation: number-glow 2s ease-in-out infinite; }
        .animate-heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
      `}</style>
    </section>
  );

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }
}