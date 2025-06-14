
import React, { useState } from 'react';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      name: 'Premium Cotton',
      description: 'High-quality cotton fabrics sourced from the finest mills across India',
      features: ['100% Pure Cotton', 'Various Counts Available', 'Premium Quality'],
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop'
    },
    {
      name: 'Silk Fabrics',
      description: 'Luxurious silk textiles for premium garment manufacturing',
      features: ['Pure Silk', 'Traditional Weaves', 'Export Quality'],
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop'
    },
    {
      name: 'Denim Collection',
      description: 'Durable denim fabrics in various weights and finishes',
      features: ['Multiple Weights', 'Various Washes', 'International Standards'],
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=300&fit=crop'
    },
    {
      name: 'Synthetic Blends',
      description: 'Modern synthetic and blended fabrics for contemporary fashion',
      features: ['Polyester Blends', 'Easy Care', 'Wrinkle Resistant'],
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop'
    },
    {
      name: 'Traditional Handloom',
      description: 'Authentic handloom fabrics preserving Indian textile heritage',
      features: ['Handwoven', 'Traditional Patterns', 'Artisan Made'],
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop'
    },
    {
      name: 'Technical Textiles',
      description: 'Advanced technical fabrics for specialized applications',
      features: ['Industrial Grade', 'Specialized Properties', 'Custom Solutions'],
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 textile-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 bg-textile-gold"></div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-textile-indigo">
              Our Products
            </h2>
            <div className="h-1 w-16 bg-textile-gold"></div>
          </div>
          <p className="text-textile-indigo/70 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of premium textile products sourced from India's finest mills and weaving centers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-textile-cream rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in border border-textile-sand"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-textile-indigo/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-textile-maroon/90 flex items-center justify-center transition-all duration-300 ${
                  hoveredProduct === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-textile-cream p-4">
                    <h4 className="font-playfair text-xl font-semibold mb-2">Premium Quality</h4>
                    <p className="text-sm">Trusted by manufacturers across India</p>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-textile-indigo mb-3 group-hover:text-textile-maroon transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-textile-indigo/70 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-textile-indigo/80">
                      <div className="w-1.5 h-1.5 bg-textile-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Shimmer Effect on Hover */}
                <div className={`absolute inset-0 shimmer-effect animate-shimmer ${
                  hoveredProduct === index ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-textile-maroon to-textile-maroon-dark rounded-xl p-8 text-center">
            <h3 className="font-playfair text-2xl font-semibold text-textile-cream mb-4">
              Need Custom Textile Solutions?
            </h3>
            <p className="text-textile-cream/90 mb-6 max-w-2xl mx-auto">
              With over 40 years of experience, we can source specialized fabrics and custom quantities to meet your exact requirements.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-textile-cream text-textile-maroon font-semibold rounded-lg shadow-lg hover:bg-textile-sand transition-all duration-300 hover:shadow-xl"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
