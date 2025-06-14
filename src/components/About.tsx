
import React, { useEffect, useState } from 'react';
import { MapPin, Users, Clock } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 textile-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-textile-gold"></div>
                <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-textile-indigo">
                  About Us
                </h2>
              </div>
              
              <h3 className="font-playfair text-2xl font-semibold text-textile-maroon">
                Four Decades of Textile Excellence
              </h3>
              
              <p className="text-textile-indigo/80 text-lg leading-relaxed">
                Established in <strong>1981</strong> in the historic city of Gorakhpur, Uttar Pradesh, 
                <strong> Kamlapuri Textile Agency</strong> has been the trusted bridge between textile 
                manufacturers and buyers across India for over four decades.
              </p>
              
              <p className="text-textile-indigo/70 leading-relaxed">
                What started as a small family business has grown into one of India's most reliable 
                cloth commission agencies, built on the foundation of trust, quality, and unwavering 
                commitment to our clients. Our deep understanding of the textile industry, combined 
                with extensive relationships across major textile hubs, enables us to deliver 
                exceptional value to both buyers and sellers.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-textile-cream rounded-lg border border-textile-sand">
                <MapPin className="w-8 h-8 text-textile-maroon mx-auto mb-3" />
                <h4 className="font-semibold text-textile-indigo mb-2">Pan India Network</h4>
                <p className="text-textile-indigo/70 text-sm">Presence across 13+ major textile centers</p>
              </div>
              
              <div className="text-center p-4 bg-textile-cream rounded-lg border border-textile-sand">
                <Users className="w-8 h-8 text-textile-maroon mx-auto mb-3" />
                <h4 className="font-semibold text-textile-indigo mb-2">Trusted Partnerships</h4>
                <p className="text-textile-indigo/70 text-sm">Strong relationships with 100+ mills</p>
              </div>
              
              <div className="text-center p-4 bg-textile-cream rounded-lg border border-textile-sand">
                <Clock className="w-8 h-8 text-textile-maroon mx-auto mb-3" />
                <h4 className="font-semibold text-textile-indigo mb-2">Legacy of Trust</h4>
                <p className="text-textile-indigo/70 text-sm">42+ years of industry experience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Timeline */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Timeline */}
              <div className="bg-gradient-to-b from-textile-maroon to-textile-maroon-dark rounded-2xl p-8 shadow-2xl">
                <h3 className="font-playfair text-2xl font-semibold text-textile-cream mb-8 text-center">
                  Our Journey
                </h3>
                
                <div className="space-y-8">
                  {/* Timeline Items */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-textile-gold rounded-full flex items-center justify-center text-textile-indigo font-bold flex-shrink-0">
                      1981
                    </div>
                    <div>
                      <h4 className="font-semibold text-textile-cream mb-2">The Beginning</h4>
                      <p className="text-textile-cream/90 text-sm">
                        Founded in Gorakhpur with a vision to connect textile manufacturers with quality buyers
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-textile-gold rounded-full flex items-center justify-center text-textile-indigo font-bold flex-shrink-0">
                      1990s
                    </div>
                    <div>
                      <h4 className="font-semibold text-textile-cream mb-2">Expansion</h4>
                      <p className="text-textile-cream/90 text-sm">
                        Extended network to major textile hubs across Rajasthan, Gujarat, and Punjab
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-textile-gold rounded-full flex items-center justify-center text-textile-indigo font-bold flex-shrink-0">
                      2000s
                    </div>
                    <div>
                      <h4 className="font-semibold text-textile-cream mb-2">Modernization</h4>
                      <p className="text-textile-cream/90 text-sm">
                        Adopted modern business practices while maintaining traditional values of trust
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-textile-gold rounded-full flex items-center justify-center text-textile-indigo font-bold flex-shrink-0">
                      Today
                    </div>
                    <div>
                      <h4 className="font-semibold text-textile-cream mb-2">Industry Leader</h4>
                      <p className="text-textile-cream/90 text-sm">
                        Leading commission agency with nationwide reach and digital transformation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-textile-gold rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-textile-indigo font-bold text-sm text-center">
                  42+<br/>Years
                </span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-textile-cream border-4 border-textile-maroon rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-textile-maroon font-bold text-xs">UP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center animate-fade-in">
          <h3 className="font-playfair text-3xl font-semibold text-textile-indigo mb-12">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Trust', description: 'Building lasting relationships through transparency and reliability' },
              { title: 'Quality', description: 'Ensuring premium standards in every transaction and partnership' },
              { title: 'Heritage', description: 'Preserving traditional textile wisdom while embracing innovation' },
              { title: 'Service', description: 'Dedicated support and personalized attention to every client' }
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-textile-maroon rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-textile-maroon-dark transition-colors duration-300">
                  <div className="w-6 h-6 bg-textile-cream rounded-full"></div>
                </div>
                <h4 className="font-playfair text-xl font-semibold text-textile-indigo mb-3 group-hover:text-textile-maroon transition-colors">
                  {value.title}
                </h4>
                <p className="text-textile-indigo/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
