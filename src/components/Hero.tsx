
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
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-textile-blue leading-tight">
                  India's Trusted
                  <span className="block text-textile-blue-dark">Cloth Commission</span>
                  <span className="block">Agency</span>
                </h1>
                
                <div className="flex items-center space-x-3">
                  <div className="h-1 w-16 bg-textile-blue"></div>
                  <p className="text-textile-blue-dark font-semibold text-lg">Since 1981</p>
                </div>
              </div>

              <p className="text-textile-blue/80 text-lg lg:text-xl leading-relaxed max-w-lg">
                Connecting textile buyers and sellers across India with trust, reliability, 
                and four decades of industry expertise from our base in Gorakhpur, Uttar Pradesh.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-textile-blue-dark">
                  <ChevronRight size={20} />
                  <span className="font-medium">Sourcing from Premium Locations:</span>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-textile-light-blue">
                  <div className="text-center">
                    <div className="text-2xl font-playfair font-semibold text-textile-blue transition-all duration-500">
                      {regions[currentSlide]}
                    </div>
                    <div className="flex justify-center mt-2 space-x-1">
                      {regions.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 w-8 rounded transition-all duration-300 ${
                            index === currentSlide ? 'bg-textile-blue-dark' : 'bg-textile-light-blue'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center px-8 py-3 bg-textile-blue text-white font-semibold rounded-lg shadow-lg hover:bg-textile-blue-dark transition-all duration-300 hover:shadow-xl group"
                >
                  Explore Products
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-textile-blue text-textile-blue font-semibold rounded-lg hover:bg-textile-blue hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Content - Animated Textile Visual */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                {/* Main Circle */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                  
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-textile-blue/30 animate-float"></div>
                  
                  {/* Middle Ring */}
                  <div className="absolute inset-4 rounded-full border-2 border-textile-blue/20 animate-float" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Inner Circle */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-textile-blue to-textile-blue-dark flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                    <div className="text-center text-white">
                      <div className="text-6xl font-playfair font-bold">42+</div>
                      <div className="text-lg font-medium">Years of Trust</div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-textile-blue rounded-full flex items-center justify-center shadow-lg animate-float text-white font-bold text-sm" style={{ animationDelay: '0.5s' }}>
                    1981
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-textile-blue-dark rounded-full flex items-center justify-center shadow-lg animate-float text-white font-semibold text-xs text-center" style={{ animationDelay: '1.5s' }}>
                    Pan India<br/>Network
                  </div>
                  
                  <div className="absolute top-1/2 -right-4 w-12 h-12 bg-white border-2 border-textile-blue rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
                    <div className="w-2 h-2 bg-textile-blue rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
