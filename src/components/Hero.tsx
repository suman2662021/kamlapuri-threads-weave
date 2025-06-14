
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const regions = [
    'Rajasthan', 'Balotra', 'Panipat', 'Delhi', 'Surat', 
    'Gujarat', 'Mumbai', 'Ahmedabad', 'Sholapur', 'Iroi', 
    'Kumaralyam', 'Mathura', 'Ludhiana'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % regions.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [regions.length]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 textile-pattern opacity-30"></div>
      
      {/* Hero Gradient Background */}
      <div className="hero-gradient min-h-screen relative">
        <div className="container mx-auto px-4 pt-20 sm:pt-24 pb-8 sm:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-slide-in-left">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-textile-indigo leading-tight">
                  India's Trusted
                  <span className="block text-textile-maroon">Cloth Commission</span>
                  <span className="block">Agency</span>
                </h1>
                
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-1 w-8 sm:w-12 lg:w-16 bg-textile-gold"></div>
                  <p className="text-textile-maroon font-semibold text-sm sm:text-base lg:text-lg">Since 1981</p>
                </div>
              </div>

              <p className="text-textile-indigo/80 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                Connecting textile buyers and sellers across India with trust, reliability, 
                and four decades of industry expertise from our base in Gorakhpur, Uttar Pradesh.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 text-textile-maroon">
                  <ChevronRight size={16} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                  <span className="font-medium text-xs sm:text-sm lg:text-base">Sourcing from Premium Locations:</span>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-textile-sand w-full max-w-full overflow-hidden">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-playfair font-semibold text-textile-indigo transition-all duration-500 truncate">
                      {regions[currentSlide]}
                    </div>
                    <div className="flex justify-center mt-2 space-x-1 overflow-hidden">
                      {regions.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 w-4 sm:w-6 lg:w-8 rounded flex-shrink-0 transition-all duration-300 ${
                            index === currentSlide ? 'bg-textile-maroon' : 'bg-textile-sand'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 w-full">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-textile-maroon text-textile-cream font-semibold rounded-lg shadow-lg hover:bg-textile-maroon-dark transition-all duration-300 hover:shadow-xl group text-xs sm:text-sm lg:text-base w-full sm:w-auto"
                >
                  Explore Products
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border-2 border-textile-maroon text-textile-maroon font-semibold rounded-lg hover:bg-textile-maroon hover:text-textile-cream transition-all duration-300 text-xs sm:text-sm lg:text-base w-full sm:w-auto"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Content - Animated Textile Visual */}
            <div className="relative animate-slide-in-right mt-6 sm:mt-8 lg:mt-0">
              <div className="relative">
                {/* Main Circle */}
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto relative">
                  
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-textile-gold/30 animate-float"></div>
                  
                  {/* Middle Ring */}
                  <div className="absolute inset-2 sm:inset-3 lg:inset-4 rounded-full border border-textile-maroon/20 sm:border-2 animate-float" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Inner Circle */}
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full bg-gradient-to-br from-textile-maroon to-textile-maroon-dark flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                    <div className="text-center text-textile-cream">
                      <div className="text-2xl sm:text-4xl lg:text-6xl font-playfair font-bold">42+</div>
                      <div className="text-xs sm:text-sm lg:text-lg font-medium">Years of Trust</div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-textile-gold rounded-full flex items-center justify-center shadow-lg animate-float text-textile-indigo font-bold text-xs sm:text-sm" style={{ animationDelay: '0.5s' }}>
                    1981
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-textile-indigo rounded-full flex items-center justify-center shadow-lg animate-float text-textile-cream font-semibold text-xs text-center leading-tight" style={{ animationDelay: '1.5s' }}>
                    Pan India<br/>Network
                  </div>
                  
                  <div className="absolute top-1/2 -right-1 sm:-right-2 lg:-right-4 w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-textile-cream border-2 border-textile-maroon rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-textile-maroon rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16 fill-textile-cream">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
