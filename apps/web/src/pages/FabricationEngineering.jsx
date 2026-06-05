import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Wrench, Box, Droplet, Zap, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import fabricationPlant from "@/assets/images/Industrial fabrication workshop.png";
import fabricationPlant2 from "@/assets/images/Fabrian 2.png";

const FabricationEngineering = () => {
  const { toast } = useToast();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    fabricationPlant,
    fabricationPlant2,
  ];

  const capabilities = [
    {
      icon: Box,
      title: 'MS/SS/Fiber Tanks',
      description: 'Custom fabrication of storage tanks in various materials and capacities',
      features: ['Mild Steel Tanks', 'Stainless Steel Tanks', 'FRP Tanks', 'Custom Sizes'],
    },
    {
      icon: Droplet,
      title: 'Pressure Vessels',
      description: 'ASME certified pressure vessel fabrication for industrial applications',
      features: ['ASME Code Compliance', 'Hydrostatic Testing', 'NDT Inspection', 'Custom Design'],
    },
    {
      icon: Zap,
      title: 'Stainless Steel Piping',
      description: 'High-quality SS piping systems for pharmaceutical and food industries',
      features: ['Sanitary Piping', 'Orbital Welding', 'Polishing & Passivation', 'Installation'],
    },
    {
      icon: Wrench,
      title: 'Ring Main Systems',
      description: 'Complete ring main fabrication and installation services',
      features: ['Design & Engineering', 'Fabrication', 'Installation', 'Testing & Commissioning'],
    },
  ];

  const services = [
    'Industrial Welding (TIG, MIG, Arc)',
    'Structural Steel Fabrication',
    'Sheet Metal Work',
    'CNC Cutting & Bending',
    'Surface Treatment & Coating',
    'Complete Erection & Installation',
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleQuote = () => {
    toast({
      title: "Quote Request",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Fabrication & Engineering - Chem Con</title>
        <meta name="description" content="Expert industrial fabrication services including tanks, pressure vessels, stainless steel piping, and structural steel work. ASME certified fabrication." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-6">Fabrication & Engineering</h1>
              <p className="text-xl text-white/90 mb-8">
                Precision fabrication services for tanks, pressure vessels, piping systems, and structural steel work
              </p>
              <Button onClick={handleQuote} size="lg" className="bg-primary hover:bg-primary/90">
                Request a Quote
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fabrication Capabilities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                State-of-the-art fabrication facilities with experienced craftsmen
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <capability.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">{capability.title}</h3>
                      <p className="text-gray-600 mb-4">{capability.description}</p>
                      <div className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fabrication Workshop</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Modern facilities equipped with advanced machinery and tools
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src={images[currentImage]}
                  alt={`Fabrication workshop showing industrial welding and manufacturing equipment - Image ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-gray-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-gray-900" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${currentImage === index ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Services</h2>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                  <p className="mb-6">
                    All our fabrication work is carried out under strict quality control procedures, ensuring compliance with international standards.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>ASME Code Compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>NDT Testing & Inspection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>Material Traceability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>Certified Welders</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/20 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Custom Fabrication?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Let's discuss your project requirements and provide a tailored solution
              </p>
              <Button onClick={handleQuote} size="lg" className="bg-primary hover:bg-primary/90">
                Contact Our Team
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FabricationEngineering;