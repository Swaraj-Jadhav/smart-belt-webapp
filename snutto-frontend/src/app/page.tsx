'use client';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import ProductDetails from '@/components/sections/productDetails';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/footer';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Home() {
  useEffect(() => {
    // Test backend connection on mount
    fetch(process.env.NEXT_PUBLIC_API_URL!)
      .then(res => res.json())
      .then(data => console.log('Backend response:', data))
      .catch(err => toast.error('Backend connection failed'));
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero />
      <Features />
      <ProductDetails />
      <FAQ />
      <Footer />
    </div>
  );
}