import { lazy, Suspense } from "react";
import Navbar from "./components/navbar";
import OrderButton from "./components/heroButton";
import HeroText from "./components/herotext";
import SocialIconG from "./components/social";
import LoadingSpinner, { SectionLoader } from "./components/LoadingSpinner";
import { BackgroundImage } from "./components/OptimizedImage";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

// Lazy load heavy components for better performance
const AdvantagesSection = lazy(() => import("./components/advantages"));
const CollectionsSection = lazy(() => import("./components/collectionsSection"));
const FabricSlider = lazy(() => import("./components/fabrics-slider"));
const Footer = lazy(() => import("./components/footer"));

export default function App() {
  return (
    <main>
      {/* Hero Section */}
      <div id="home" className="relative min-h-screen">
        {/* Background Image - Optimized with lazy loading */}
        <BackgroundImage 
          src="/bg.png" 
          alt="Sabbagh Tex Premium Textiles Background"
          className="min-h-screen"
        />
        
        <Navbar />
        
        <div className="container mx-auto px-4 pt-24">
          <HeroText />
          
          {/* Hero Buttons - Desktop: left positioned / Mobile: centered & stacked */}
          <div className="
            absolute 
            top-[42%] sm:top-[40%] md:top-auto md:bottom-80 
            left-0 right-0 md:left-28 md:right-auto
            flex flex-col md:flex-row 
            gap-3 md:gap-4 
            items-center md:items-start
            px-6 md:px-0
            w-3/4 md:w-auto
            mx-auto md:mx-0
          ">
            <OrderButton 
              text="Explore Collections" 
              bg="bg-[#643101FF]" 
              className="w-full md:w-auto" 
            />
            <OrderButton 
              text="Order Samples" 
              className="w-full md:w-auto" 
            />
          </div>
          
          {/* Fabric Slider - Mobile/Tablet only: static in white area */}
          <div className="block md:hidden absolute bottom-36 sm:bottom-40 left-0 right-0 px-4">
            <Suspense fallback={<div className="h-32" />}>
              <FabricSlider isStatic={true} />
            </Suspense>
          </div>
          
          {/* Fabric Slider - Desktop: floating in corner as original */}
          <div className="hidden md:block absolute bottom-24 left-0 right-0">
            <Suspense fallback={<div className="h-32" />}>
              <FabricSlider />
            </Suspense>
          </div>
        </div>

        {/* Social Icons - Mobile: above text (horizontal, centered) / Desktop: right side (vertical) */}
        <div className="flex absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 top-32 sm:top-36 lg:top-96 lg:-translate-y-1/2 flex-row lg:flex-col gap-3 sm:gap-4 z-50">
          <SocialIconG 
            icon={<FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />} 
            href="https://instagram.com/sabbaghtex" 
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px]"
          />
          <SocialIconG 
            icon={<FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />} 
            href="https://facebook.com/sabbaghtex" 
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px]"
          />
          <SocialIconG 
            icon={<FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />} 
            href="https://wa.me" 
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px]"
          />
        </div>
      </div>
      
      {/* Advantages Section - Lazy loaded */}
      <div className="relative z-10 mt-[-95.5px] ">
        <Suspense fallback={<SectionLoader />}>
          <AdvantagesSection />
        </Suspense>
      </div>

      {/* Collections Section - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <CollectionsSection id="collections" />
      </Suspense>

      {/* Footer - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <Footer id="contact" />
      </Suspense>
    </main>
  )
}