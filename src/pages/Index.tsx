
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Companies from '../components/Companies';
import About from '../components/About';
import Contact from '../components/Contact';
import GetToKnowUs from '../components/GetToKnowUs';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-textile-cream transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <Products />
        <Companies />
        <About />
        <GetToKnowUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
