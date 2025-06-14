
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Companies', href: '#companies' },
    { label: 'About Us', href: '#about' },
    { label: 'Get to Know Us', href: '#get-to-know-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-textile-cream/95 backdrop-blur-sm shadow-lg border-b border-textile-sand' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-textile-maroon rounded-full flex items-center justify-center">
              <span className="text-textile-cream font-playfair font-bold text-lg sm:text-xl">K</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-sm sm:text-xl text-textile-indigo">
                Kamlapuri Textile Agency
              </h1>
              <p className="text-xs text-textile-maroon font-medium">
                Since 1981
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-textile-indigo hover:text-textile-maroon transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-textile-maroon transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-textile-indigo hover:text-textile-maroon transition-colors bg-textile-cream/80 hover:bg-textile-cream shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-textile-cream/95 backdrop-blur-sm z-40 animate-fade-in">
            <nav className="container mx-auto px-4 pt-4 pb-8 overflow-y-auto max-h-[calc(100vh-72px)]">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-4 text-lg text-center text-textile-indigo hover:text-textile-maroon transition-colors duration-300 font-medium border-b border-textile-sand/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
