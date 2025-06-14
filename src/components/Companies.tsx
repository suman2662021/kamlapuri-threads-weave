
import React, { useEffect, useState } from 'react';

const Companies = () => {
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

    const section = document.getElementById('companies');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: 'Rajasthan Textile Mills', location: 'Rajasthan', specialty: 'Cotton Fabrics' },
    { name: 'Balotra Weaving Co.', location: 'Balotra', specialty: 'Traditional Textiles' },
    { name: 'Panipat Handloom', location: 'Panipat', specialty: 'Handwoven Fabrics' },
    { name: 'Delhi Textile Hub', location: 'Delhi', specialty: 'Premium Silks' },
    { name: 'Surat Diamond Mills', location: 'Surat', specialty: 'Synthetic Fabrics' },
    { name: 'Gujarat Cotton Corp.', location: 'Gujarat', specialty: 'Organic Cotton' },
    { name: 'Mumbai Fashion Mills', location: 'Mumbai', specialty: 'Designer Fabrics' },
    { name: 'Ahmedabad Textiles', location: 'Ahmedabad', specialty: 'Industrial Textiles' },
    { name: 'Sholapur Weavers', location: 'Sholapur', specialty: 'Traditional Weaves' },
    { name: 'Iroi Fabric House', location: 'Iroi', specialty: 'Specialty Fabrics' },
    { name: 'Kumaralyam Mills', location: 'Kumaralyam', specialty: 'Technical Textiles' },
    { name: 'Mathura Handloom', location: 'Mathura', specialty: 'Artisan Textiles' },
    { name: 'Ludhiana Industries', location: 'Ludhiana', specialty: 'Woolen Fabrics' },
  ];

  return (
    <section id="companies" className="py-20 bg-textile-sand/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 textile-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 bg-textile-gold"></div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-textile-indigo">
              Our Trusted Partners
            </h2>
            <div className="h-1 w-16 bg-textile-gold"></div>
          </div>
          <p className="text-textile-indigo/70 text-lg max-w-3xl mx-auto">
            Building strong relationships with premium textile manufacturers and mills across India, 
            ensuring consistent quality and reliable supply chains for over four decades.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '100+', label: 'Partner Mills' },
            { number: '13', label: 'Major Cities' },
            { number: '42+', label: 'Years Experience' },
            { number: '1000+', label: 'Satisfied Clients' }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center bg-white rounded-xl p-6 shadow-lg border border-textile-sand transition-all duration-700 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl lg:text-4xl font-playfair font-bold text-textile-maroon mb-2">
                {stat.number}
              </div>
              <div className="text-textile-indigo/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-textile-sand hover:border-textile-gold cursor-pointer ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-playfair text-lg font-semibold text-textile-indigo group-hover:text-textile-maroon transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-textile-gold font-medium text-sm mt-1">
                    {partner.location}
                  </p>
                </div>
                <div className="w-12 h-12 bg-textile-maroon rounded-full flex items-center justify-center text-textile-cream font-bold text-sm group-hover:bg-textile-maroon-dark transition-colors">
                  {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
              </div>
              
              <div className="border-t border-textile-sand pt-4">
                <p className="text-textile-indigo/70 text-sm">
                  <span className="font-medium">Specialty:</span> {partner.specialty}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-textile-maroon/5 to-textile-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 bg-gradient-to-br from-textile-indigo to-textile-indigo/90 rounded-2xl p-8 lg:p-12 text-center animate-fade-in">
          <h3 className="font-playfair text-2xl lg:text-3xl font-semibold text-textile-cream mb-6">
            Why Our Partners Choose Us
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Reliable Payments',
                description: 'Consistent and timely payments building long-term trust'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality checks ensuring premium standards'
              },
              {
                title: 'Market Reach',
                description: 'Extensive network connecting you to buyers nationwide'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-textile-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-textile-indigo rounded-full"></div>
                </div>
                <h4 className="font-playfair text-xl font-semibold text-textile-cream mb-3">
                  {benefit.title}
                </h4>
                <p className="text-textile-cream/90 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
