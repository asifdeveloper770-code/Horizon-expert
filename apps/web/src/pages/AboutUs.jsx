import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, CheckCircle, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import engineers from "@/assets/images/Modern industrial boiler.png";

const AboutUs = () => {
  const values = [
    { icon: Target, title: 'Our Mission', description: 'To deliver world-class industrial solutions with uncompromising quality and innovation.' },
    { icon: Users, title: 'Expert Team', description: 'Highly skilled engineers and technicians with decades of combined experience.' },
    { icon: Shield, title: 'Quality Assurance', description: 'ISO certified processes ensuring the highest standards in every project.' },
    { icon: TrendingUp, title: 'Continuous Growth', description: 'Constantly evolving with the latest technologies and industry best practices.' },
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'ASME Certified Fabrication',
    'PEC Registered',
    'PSQCA Approved',
  ];

  const capabilities = [
    'Steam & Oil Boiler Systems',
    'Industrial Fabrication & Welding',
    'Water Treatment Plants',
    'Automation & Control Systems',
    'Pharmaceutical Equipment',
    'Energy Management Solutions',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Chem Con Chemical & Engineering</title>
        <meta name="description" content="Learn about Chem Con's expertise in industrial solutions, boiler systems, fabrication, water treatment, and automation. Trusted partner for engineering excellence." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
          <div className="absolute inset-0">
            <img
              src={engineers}
              alt="Industrial boiler system with advanced heat technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="container mx-auto px-4  relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-6">About Chem Con</h1>
              <p className="text-xl text-white/90">
                Leading provider of comprehensive industrial solutions in Pakistan, specializing in boiler systems, fabrication, water treatment, and automation technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={engineers}
                  alt="Industrial engineers working on equipment at Chem Con facility"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Engineering Excellence Since Inception</h2>
                <p className="text-gray-700 mb-4">
                  Chem Con - Chemical & Engineering has established itself as a premier industrial solutions provider in Pakistan. With our headquarters in Karachi's Korangi Industrial Area, we serve clients across diverse industries with cutting-edge engineering solutions.
                </p>
                <p className="text-gray-700 mb-4">
                  Our comprehensive portfolio spans boiler systems, industrial fabrication, water treatment plants, automation solutions, and pharmaceutical equipment services. We pride ourselves on delivering turnkey solutions that enhance operational efficiency and reliability.
                </p>
                <p className="text-gray-700">
                  Backed by a team of highly qualified engineers and technicians, we combine technical expertise with practical experience to solve complex industrial challenges.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Principles that guide our commitment to excellence and customer satisfaction
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <value.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Capabilities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Certifications & Accreditations</h2>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((capability, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                      {capability}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Chem Con?</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                'Turnkey Industrial Solutions',
                'Experienced Technical Team',
                'Quality Assured Processes',
                'Competitive Pricing',
                'Timely Project Delivery',
                'Comprehensive After-Sales Support',
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;