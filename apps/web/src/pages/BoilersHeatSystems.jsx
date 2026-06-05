import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Flame, Settings, Wrench, TrendingUp, CheckCircle, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Industrial_boiler from "@/assets/images/Modern industrial boiler.png";
import Modern_boiler from "@/assets/images/Steam & Oil Boilers.png";

const BoilersHeatSystems = () => {
  const { toast } = useToast();

  const boilerProducts = [
    {
      title: 'New Imported Cochran Boilers',
      description: 'Premium quality imported boilers with advanced combustion technology',
      specs: ['Capacity: 500 kg/hr to 10,000 kg/hr', 'Pressure: Up to 17.5 bar', 'Fuel: Oil/Gas/Dual Fuel'],
    },
    {
      title: 'Reconditioned Boilers',
      description: 'Expertly refurbished boilers with warranty and performance guarantee',
      specs: ['Full inspection & testing', 'Replacement of worn parts', 'Performance certification'],
    },
    {
      title: 'Waste Heat Recovery Boilers',
      description: 'Energy-efficient systems to recover waste heat from industrial processes',
      specs: ['Custom design', 'High efficiency', 'ROI within 2-3 years'],
    },
  ];

  const services = [
    { icon: Flame, title: 'Burner Tuning & Combustion Analysis', description: 'Optimize fuel efficiency and reduce emissions' },
    { icon: Settings, title: 'Economizer Fabrication', description: 'Custom economizers to improve boiler efficiency' },
    { icon: Wrench, title: 'Complete Erection & Installation', description: 'Professional installation with commissioning' },
    { icon: Package, title: 'Boiler Accessories Supply', description: 'Genuine parts and accessories for all boiler types' },
    { icon: TrendingUp, title: 'Performance Optimization', description: 'Enhance efficiency and reduce operating costs' },
    { icon: CheckCircle, title: 'Maintenance & Support', description: 'Comprehensive after-sales service and support' },
  ];

  const handleQuote = () => {
    toast({
      title: "Quote Request",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Boilers & Heat Systems - Chem Con</title>
        <meta name="description" content="Premium steam and oil boilers, waste heat recovery systems, economizers, and complete boiler solutions. Expert installation and maintenance services." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center">
          <div className="absolute inset-0">
            <img
              src={Industrial_boiler}
              alt="Industrial boiler system with advanced heat technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-5xl font-bold mb-6">Boilers & Heat Systems</h1>
              <p className="text-xl mb-8">
                Premium steam and oil boilers, waste heat recovery systems, and complete boiler solutions for industrial applications
              </p>
              <Button onClick={handleQuote} size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
                Request a Quote
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Boiler Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Boiler Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                High-quality boiler systems designed for efficiency, reliability, and longevity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {boilerProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="space-y-2">
                        {product.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{spec}</span>
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

        {/* Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Boiler Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From installation to maintenance, we provide complete boiler solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Excellence</h2>
                <p className="text-gray-700 mb-4">
                  Our boiler systems are engineered to meet the highest industry standards, ensuring optimal performance, safety, and efficiency.
                </p>
                <div className="space-y-3">
                  {[
                    'ASME certified pressure vessels',
                    'Advanced combustion control systems',
                    'Energy-efficient designs',
                    'Comprehensive safety features',
                    'Remote monitoring capabilities',
                    'Customizable configurations',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={Modern_boiler}
                  alt="Modern industrial boiler with advanced control systems"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Boiler System?</h2>
              <p className="text-xl mb-8 text-white/90">
                Contact us today for a free consultation and quote
              </p>
              <Button onClick={handleQuote} size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
                Get Started
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BoilersHeatSystems;