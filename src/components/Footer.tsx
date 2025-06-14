
import React from 'react';
import { MapPin, Contact, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-textile-indigo text-textile-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 textile-pattern opacity-10"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-textile-gold rounded-full flex items-center justify-center">
                  <span className="text-textile-indigo font-playfair font-bold text-xl">K</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl">Kamlapuri Textile Agency</h3>
                  <p className="text-textile-cream/80 text-sm">Since 1981</p>
                </div>
              </div>
              
              <p className="text-textile-cream/80 leading-relaxed mb-6 max-w-md">
                India's trusted cloth commission agency connecting textile buyers and sellers 
                across the nation for over four decades. Based in Gorakhpur, Uttar Pradesh, 
                we serve clients throughout India with integrity and excellence.
              </p>
              
              <div className="text-textile-gold font-playfair text-lg font-semibold">
                "India's Trusted Cloth Commission Agency Since 1981"
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4 text-textile-gold">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'Our Products', href: '#products' },
                  { label: 'Partner Companies', href: '#companies' },
                  { label: 'About Us', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-textile-cream/80 hover:text-textile-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4 text-textile-gold">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-textile-gold flex-shrink-0 mt-0.5" />
                  <div className="text-textile-cream/80 text-sm">
                    Kamlapuri Textile Agency<br />
                    Gorakhpur, Uttar Pradesh<br />
                    India - 273001
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Contact className="w-5 h-5 text-textile-gold flex-shrink-0 mt-0.5" />
                  <div className="text-textile-cream/80 text-sm">
                    Phone: +91 XXX XXX XXXX<br />
                    Email: info@kamlapuritextile.com
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-textile-gold flex-shrink-0 mt-0.5" />
                  <div className="text-textile-cream/80 text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 pt-8 border-t border-textile-cream/20">
            <h4 className="font-playfair text-lg font-semibold mb-4 text-textile-gold text-center">
              We Serve Across India
            </h4>
            <div className="text-center">
              <p className="text-textile-cream/80 text-sm">
                <span className="font-medium">Major Sourcing Centers:</span> Rajasthan • Balotra • Panipat • Delhi • Surat • Gujarat • Mumbai • Ahmedabad • Sholapur • Iroi • Kumaralyam • Mathura • Ludhiana
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-textile-cream/20 bg-textile-indigo/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-textile-cream/70 text-sm">
                © {currentYear} Kamlapuri Textile Agency. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-textile-cream/70">
                <span>Established 1981</span>
                <span>•</span>
                <span>42+ Years of Trust</span>
                <span>•</span>
                <span>Pan India Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
