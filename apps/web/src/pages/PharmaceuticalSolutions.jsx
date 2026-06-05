import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Pill, Cog, FileCheck, Wrench, CheckCircle, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Modern_manufacturing from '@/assets/images/Pharmaceutical manufacturing equipmen.png';

const PharmaceuticalSolutions = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Cog,
      title: 'Installation & Commissioning',
      description: 'Professional installation of pharmaceutical equipment with complete commissioning',
      features: ['Equipment Setup', 'System Integration', 'Performance Testing', 'Documentation'],
    },
    {
      icon: FileCheck,
      title: 'DQ/IQ/OQ/PQ Validation',
      description: 'Complete validation services as per regulatory requirements',
      features: ['Design Qualification', 'Installation Qualification', 'Operational Qualification', 'Performance Qualification'],
    },
    {
      icon: Wrench,
      title: 'Equipment Optimization (OEE)',
      description: 'Enhance Overall Equipment Effectiveness for maximum productivity',
      features: ['Performance Analysis', 'Efficiency Improvement', 'Downtime Reduction', 'Quality Enhancement'],
    },
    {
      icon: Pill,
      title: 'Overhauling & Maintenance',
      description: 'Comprehensive overhauling and preventive maintenance services',
      features: ['Complete Overhaul', 'Spare Parts Supply', 'Preventive Maintenance', 'Emergency Support'],
    },
  ];

  const equipment = [
    'Tablet Compression Machines',
    'Capsule Filling Machines',
    'Coating Machines',
    'Granulation Equipment',
    'Blending & Mixing Systems',
    'Packaging Machines',
  ];

  const compliance = [
    'cGMP Compliance',
    'FDA Guidelines',
    'WHO Standards',
    'ISO Certifications',
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
        <title>Pharmaceutical Solutions - Chem Con</title>
        <meta name="description" content="Expert pharmaceutical equipment services including installation, validation (DQ/IQ/OQ/PQ), optimization, and maintenance. cGMP compliant solutions." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
          <div className="absolute inset-0">
            <img
              src={Modern_manufacturing}
              alt="Modern pharmaceutical manufacturing facility"
              className="w-full h-full object-cover"  
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-6">Pharmaceutical Solutions</h1>
              <p className="text-xl text-white/90 mb-8">
                Specialized services for pharmaceutical equipment installation, validation, optimization, and compliance
              </p>
              <Button onClick={handleQuote} size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
                Request a Quote
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pharmaceutical Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions for pharmaceutical manufacturing equipment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-t-purple-600">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-purple-600 mb-2" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
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

        {/* Equipment & Image */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipment We Service</h2>
                <p className="text-gray-700 mb-6">
                  We provide comprehensive services for a wide range of pharmaceutical manufacturing equipment, ensuring optimal performance and regulatory compliance.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {equipment.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={Modern_manufacturing}
                  alt="Modern pharmaceutical manufacturing equipment and machinery"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Compliance & Validation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our services are designed to meet stringent pharmaceutical industry standards
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    <CardContent className="p-8">
                      <Shield className="h-12 w-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-4">Compliance Standards</h3>
                      <div className="space-y-3">
                        {compliance.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <FileCheck className="h-12 w-12 text-purple-600 mb-4" />
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Validation Services</h3>
                      <p className="text-gray-700 mb-4">
                        Complete validation documentation and protocols as per regulatory requirements:
                      </p>
                      <div className="space-y-2">
                        {['Design Qualification (DQ)', 'Installation Qualification (IQ)', 'Operational Qualification (OQ)', 'Performance Qualification (PQ)'].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Tooling & Modification */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tooling & Modification</h2>
                <p className="text-gray-700 mb-8">
                  Custom tooling design and equipment modifications to meet your specific production requirements
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {['Custom Tooling Design', 'Equipment Modifications', 'Automation Upgrades'].map((item, index) => (
                    <Badge key={index} variant="secondary" className="text-base py-3 px-6">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Need Pharmaceutical Equipment Services?</h2>
              <p className="text-xl mb-8 text-white/90">
                Contact us for expert consultation and compliance-ready solutions
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

export default PharmaceuticalSolutions;