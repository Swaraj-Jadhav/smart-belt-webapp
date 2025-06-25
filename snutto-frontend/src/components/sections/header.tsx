'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WaitlistForm } from './WaitlistForm';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-paw text-blue-600 text-2xl"></i>
          <span className="font-bold text-xl text-blue-600">Snutto.in</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Home</button>
          <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Features</button>
          <button onClick={() => scrollToSection('support')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Support</button>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
                Join Waitlist
              </Button>
            </DialogTrigger>
            <DialogContent>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Join Our Waitlist</h2>
                <WaitlistForm onSuccess={() => setIsDialogOpen(false)} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none cursor-pointer whitespace-nowrap"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <button onClick={() => {scrollToSection('home'); setIsMenuOpen(false);}} className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer whitespace-nowrap">Home</button>
            <button onClick={() => {scrollToSection('features'); setIsMenuOpen(false);}} className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer whitespace-nowrap">Features</button>
            <button onClick={() => {scrollToSection('support'); setIsMenuOpen(false);}} className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer whitespace-nowrap">Support</button>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
                  Join Waitlist
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">Join Our Waitlist</h2>
                  <WaitlistForm onSuccess={() => {
                    setIsDialogOpen(false);
                    setIsMenuOpen(false);
                  }} />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </header>
  );
}