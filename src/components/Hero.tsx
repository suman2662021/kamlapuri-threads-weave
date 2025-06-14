
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
            <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textile-indigo leading-tight">
                  India's Trusted
                  <span className="block text-textile-maroon">Cloth Commission</span>
                  <span className="block">Agency</span>
                </h1>
                
                <div className="flex items-center space-x-3">
                  <div className="h-1 w-12 sm:w-16 bg-textile-gold"></div>
                  <p className="text-textile-maroon font-semibold text-base sm:text-lg">Since 1981</p>
                </div>
              </div>

              <p className="text-textile-indigo/80 text-base sm:text-lg lg:text-xl leading-relaxed">
                Connecting textile buyers and sellers across India with trust, reliability, 
                and four decades of industry expertise from our base in Gorakhpur, Uttar Pradesh.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-textile-maroon">
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base">Sourcing from Premium Locations:</span>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-textile-sand">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-playfair font-semibold text-textile-indigo transition-all duration-500">
                      {regions[currentSlide]}
                    </div>
                    <div className="flex justify-center mt-2 space-x-1">
                      {regions.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 w-6 sm:w-8 rounded transition-all duration-300 ${
                            index === currentSlide ? 'bg-textile-maroon' : 'bg-textile-sand'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-textile-maroon text-textile-cream font-semibold rounded-lg shadow-lg hover:bg-textile-maroon-dark transition-all duration-300 hover:shadow-xl group text-sm sm:text-base"
                >
                  Explore Products
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-textile-maroon text-textile-maroon font-semibold rounded-lg hover:bg-textile-maroon hover:text-textile-cream transition-all duration-300 text-sm sm:text-base"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Content - Animated Textile Visual */}
            <div className="relative animate-slide-in-right mt-8 lg:mt-0">
              <div className="relative">
                {/* Main Circle */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto relative">
                  
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-textile-gold/30 animate-float"></div>
                  
                  {/* Middle Ring */}
                  <div className="absolute inset-3 sm:inset-4 rounded-full border border-textile-maroon/20 sm:border-2 animate-float" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Inner Circle */}
                  <div className="absolute inset-6 sm:inset-8 rounded-full bg-gradient-to-br from-textile-maroon to-textile-maroon-dark flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                    <div className="text-center text-textile-cream">
                      <div className="text-4xl sm:text-6xl font-playfair font-bold">42+</div>
                      <div className="text-sm sm:text-lg font-medium">Years of Trust</div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-textile-gold rounded-full flex items-center justify-center shadow-lg animate-float text-textile-indigo font-bold text-xs sm:text-sm" style={{ animationDelay: '0.5s' }}>
                    1981
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-textile-indigo rounded-full flex items-center justify-center shadow-lg animate-float text-textile-cream font-semibold text-xs text-center" style={{ animationDelay: '1.5s' }}>
                    Pan India<br/>Network
                  </div>
                  
                  <div className="absolute top-1/2 -right-2 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-textile-cream border-2 border-textile-maroon rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
                    <div className="w-2 h-2 bg-textile-maroon rounded-full"></div>
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
