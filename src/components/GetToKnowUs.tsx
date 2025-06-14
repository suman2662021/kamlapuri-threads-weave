
import React, { useEffect, useState } from 'react';
import { Users, Clock, MapPin } from 'lucide-react';

const GetToKnowUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('get-to-know-us');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Mumbai Fashion House',
      quote: 'Kamlapuri Textile Agency has been our trusted partner for over 15 years. Their commitment to quality and timely delivery is unmatched.',
      location: 'Mumbai'
    },
    {
      name: 'Priya Sharma',
      company: 'Delhi Garments Ltd.',
      quote: 'The relationship we have with Kamlapuri goes beyond business. They understand our needs and consistently deliver premium fabrics.',
      location: 'Delhi'
    },
    {
      name: 'Amit Patel',
      company: 'Gujarat Textile Mills',
      quote: 'Working with Kamlapuri has transformed our supply chain. Their extensive network and expertise have been invaluable to our growth.',
      location: 'Gujarat'
    }
  ];

  const milestones = [
    { year: '1981', event: 'Founded in Gorakhpur', icon: <MapPin className="w-6 h-6" /> },
    { year: '1990', event: 'Expanded to Rajasthan Markets', icon: <Users className="w-6 h-6" /> },
    { year: '1995', event: 'Partnership with Gujarat Mills', icon: <Clock className="w-6 h-6" /> },
    { year: '2000', event: 'Pan-India Network Established', icon: <MapPin className="w-6 h-6" /> },
    { year: '2010', event: 'Digital Transformation', icon: <Users className="w-6 h-6" /> },
    { year: '2020', event: 'Sustainable Practices Adopted', icon: <Clock className="w-6 h-6" /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="get-to-know-us" className="py-20 bg-textile-sand/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 textile-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 bg-textile-gold"></div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-textile-indigo">
              Get to Know Us
            </h2>
            <div className="h-1 w-16 bg-textile-gold"></div>
          </div>
          <p className="text-textile-indigo/70 text-lg max-w-3xl mx-auto">
            Meet the people behind Kamlapuri Textile Agency and discover the story that has shaped 
            our four-decade journey in India's textile industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Timeline Section */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="font-playfair text-2xl font-semibold text-textile-indigo mb-8 text-center">
              Our Journey Through Time
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-textile-gold/30"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-6 group ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-16 h-16 bg-textile-maroon rounded-full flex items-center justify-center text-textile-cream shadow-lg group-hover:bg-textile-maroon-dark transition-colors duration-300 flex-shrink-0">
                      {milestone.icon}
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="bg-white rounded-lg p-4 shadow-md border border-textile-sand group-hover:shadow-lg transition-shadow duration-300">
                        <div className="font-playfair text-lg font-semibold text-textile-maroon mb-1">
                          {milestone.year}
                        </div>
                        <p className="text-textile-indigo/80">
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team & Testimonials Section */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            
            {/* Leadership Section */}
            <div className="mb-12">
              <h3 className="font-playfair text-2xl font-semibold text-textile-indigo mb-6 text-center">
                Our Leadership
              </h3>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-textile-sand">
                <div className="text-center">
                  <div className="w-24 h-24 bg-textile-maroon rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-textile-cream font-playfair font-bold text-2xl">KS</span>
                  </div>
                  <h4 className="font-playfair text-xl font-semibold text-textile-indigo mb-2">
                    Founder & Visionary
                  </h4>
                  <p className="text-textile-maroon font-medium mb-3">Est. 1981, Gorakhpur</p>
                  <p className="text-textile-indigo/70 text-sm leading-relaxed">
                    With a vision to bridge the gap between textile manufacturers and buyers, 
                    our founder established Kamlapuri Textile Agency in 1981. The legacy continues 
                    with the same commitment to excellence and trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Carousel */}
            <div className="mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-textile-indigo mb-6 text-center">
                What Our Clients Say
              </h3>
              
              <div className="relative bg-gradient-to-br from-textile-indigo to-textile-indigo/90 rounded-xl p-8 text-center shadow-xl">
                <div className="text-textile-cream">
                  <div className="text-4xl font-playfair mb-4">"</div>
                  <p className="text-lg leading-relaxed mb-6 italic">
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div className="border-t border-textile-cream/20 pt-4">
                    <h4 className="font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-textile-cream/80 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <p className="text-textile-gold text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
                
                {/* Testimonial Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-textile-gold' 
                          : 'bg-textile-cream/30 hover:bg-textile-cream/50'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 text-center shadow-md border border-textile-sand">
                <div className="text-2xl font-playfair font-bold text-textile-maroon mb-2">1000+</div>
                <div className="text-textile-indigo/70 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md border border-textile-sand">
                <div className="text-2xl font-playfair font-bold text-textile-maroon mb-2">13+</div>
                <div className="text-textile-indigo/70 text-sm">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-textile-maroon to-textile-maroon-dark rounded-xl p-8">
            <h3 className="font-playfair text-2xl font-semibold text-textile-cream mb-4">
              Ready to Join Our Legacy?
            </h3>
            <p className="text-textile-cream/90 mb-6 max-w-2xl mx-auto">
              Become part of our extended family of trusted partners and experience the difference 
              that four decades of textile expertise can make for your business.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-textile-cream text-textile-maroon font-semibold rounded-lg shadow-lg hover:bg-textile-sand transition-all duration-300 hover:shadow-xl"
            >
              Start Your Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowUs;
