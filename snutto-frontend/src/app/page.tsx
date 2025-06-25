'use client';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
//import Booking from '@/components/sections/bookings';
import ProductDetails from '@/components/sections/productDetails';
import FAQ from '@/components/sections/FAQ';
//import TrustIndicators from '@/components/sections/trustIndicators';
//import Newsletter from '@/components/sections/newsletter';
import Footer from '@/components/sections/footer';

export default function Home() {
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