
import React, { useState } from 'react';
import { MapPin, Clock, Contact as ContactIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 textile-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 bg-textile-gold"></div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-textile-indigo">
              Contact Us
            </h2>
            <div className="h-1 w-16 bg-textile-gold"></div>
          </div>
          <p className="text-textile-indigo/70 text-lg max-w-2xl mx-auto">
            Ready to start your textile business journey with us? Get in touch today and 
            discover how we can help you connect with the right partners.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-textile-indigo mb-6">
                Get In Touch
              </h3>
              <p className="text-textile-indigo/70 leading-relaxed mb-8">
                With over four decades of experience in the textile industry, we're here to help 
                you find the perfect fabric solutions. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-textile-cream rounded-xl p-6 border border-textile-sand hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-textile-maroon rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-textile-cream" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textile-indigo mb-2">Visit Our Office</h4>
                    <p className="text-textile-indigo/70 text-sm leading-relaxed">
                      Kamlapuri Textile Agency<br />
                      Gorakhpur, Uttar Pradesh 273001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-textile-cream rounded-xl p-6 border border-textile-sand hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-textile-maroon rounded-full flex items-center justify-center flex-shrink-0">
                    <ContactIcon className="w-6 h-6 text-textile-cream" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textile-indigo mb-2">Contact Information</h4>
                    <p className="text-textile-indigo/70 text-sm leading-relaxed">
                      Phone: +91 XXX XXX XXXX<br />
                      Email: info@kamlapuritextile.com<br />
                      Business Hours: Mon-Sat, 9 AM - 6 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-textile-cream rounded-xl p-6 border border-textile-sand hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-textile-maroon rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-textile-cream" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textile-indigo mb-2">Quick Response</h4>
                    <p className="text-textile-indigo/70 text-sm leading-relaxed">
                      We typically respond to all inquiries within 24 hours.<br />
                      For urgent requirements, please call us directly.<br />
                      Emergency support available for existing clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-textile-sand/30 rounded-xl p-8 text-center border border-textile-sand">
              <MapPin className="w-16 h-16 text-textile-maroon mx-auto mb-4" />
              <h4 className="font-playfair text-xl font-semibold text-textile-indigo mb-2">
                Located in Gorakhpur
              </h4>
              <p className="text-textile-indigo/70">
                Strategically positioned in Uttar Pradesh to serve clients across North and East India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-textile-indigo to-textile-indigo/90 rounded-2xl p-8 shadow-2xl">
              <h3 className="font-playfair text-2xl font-semibold text-textile-cream mb-6 text-center">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-textile-cream text-sm font-medium">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-textile-cream placeholder:text-textile-cream/60 focus:border-textile-gold focus:ring-textile-gold"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-textile-cream text-sm font-medium">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-textile-cream placeholder:text-textile-cream/60 focus:border-textile-gold focus:ring-textile-gold"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-textile-cream text-sm font-medium">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-textile-cream placeholder:text-textile-cream/60 focus:border-textile-gold focus:ring-textile-gold"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-textile-cream text-sm font-medium">Company</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-textile-cream placeholder:text-textile-cream/60 focus:border-textile-gold focus:ring-textile-gold"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-textile-cream text-sm font-medium">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-textile-cream placeholder:text-textile-cream/60 focus:border-textile-gold focus:ring-textile-gold resize-none"
                    placeholder="Tell us about your textile requirements, preferred fabrics, quantities, or any specific questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-textile-gold hover:bg-textile-gold-light text-textile-indigo font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-textile-cream/80 text-sm">
                  By sending this message, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-textile-cream rounded-xl p-8 border border-textile-sand">
            <h3 className="font-playfair text-2xl font-semibold text-textile-indigo mb-4">
              Why Choose Kamlapuri Textile Agency?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-playfair font-bold text-textile-maroon mb-2">40+</div>
                <p className="text-textile-indigo/70 text-sm">Years of Industry Experience</p>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-textile-maroon mb-2">100+</div>
                <p className="text-textile-indigo/70 text-sm">Trusted Manufacturing Partners</p>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-textile-maroon mb-2">13+</div>
                <p className="text-textile-indigo/70 text-sm">Major Cities Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
