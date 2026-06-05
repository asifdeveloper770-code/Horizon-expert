import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cpu, Zap, BarChart3, Settings, CheckCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import automationImage from "@/assets/images/Automation & Electrical Panels.png";

const Automation = () => {
  const { toast } = useToast();
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });

  useEffect(() => {
    const targets = { projects: 150, clients: 80, years: 15 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Cpu,
      title: 'Boiler Automation',
      description: 'Advanced automation systems for boiler control and monitoring',
      features: ['PLC-based Control', 'HMI Interfaces', 'Safety Interlocks', 'Remote Access'],
    },
    {
      icon: Zap,
      title: 'Electrical Panel Work',
      description: 'Custom electrical panels and control systems',
      features: ['MCC Panels', 'PLC Panels', 'VFD Panels', 'Distribution Boards'],
    },
    {
      icon: BarChart3,
      title: 'Online Monitoring & Data Logging',
      description: 'Real-time monitoring and historical data analysis',
      features: ['SCADA Systems', 'Cloud Connectivity', 'Mobile Apps', 'Trend Analysis'],
    },
    {
      icon: TrendingUp,
      title: 'Energy Management & Audit',
      description: 'Optimize energy consumption and reduce costs',
      features: ['Energy Audits', 'Load Management', 'Power Factor Correction', 'Consumption Analysis'],
    },
  ];

  const capabilities = [
    'PLC Programming (Siemens, Allen Bradley, Mitsubishi)',
    'HMI/SCADA Development',
    'VFD Installation & Programming',
    'Instrumentation & Calibration',
    'Network Infrastructure',
    'System Integration',
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
        <title>Automation & Control Systems - Chem Con</title>
        <meta name="description" content="Industrial automation solutions including boiler automation, electrical panels, SCADA systems, and energy management. Expert PLC programming and system integration." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-primary to-gray-900 text-white py-20">
          <div className="absolute inset-0">
            <img
              src={automationImage}
              alt="Industrial boiler system with advanced heat technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(90deg, rgba(177,18,38,0.3) 1px, transparent 1px), linear-gradient(rgba(177,18,38,0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-6">Automation & Control Systems</h1>
              <p className="text-xl text-white/90 mb-8">
                Smart automation solutions for industrial processes, energy management, and operational excellence
              </p>
              <Button onClick={handleQuote} size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
                Request a Quote
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Counter */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{counters.projects}+</div>
                <div className="text-xl text-white/90">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{counters.clients}+</div>
                <div className="text-xl text-white/90">Satisfied Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{counters.years}+</div>
                <div className="text-xl text-white/90">Years of Experience</div>
              </motion.div>
            </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Automation Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive automation solutions to enhance efficiency and control
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
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-primary mb-2" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
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

        {/* Capabilities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={automationImage}
                  alt="Industrial automation control panel with PLC and monitoring systems"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Capabilities</h2>
                <p className="text-gray-700 mb-6">
                  Our team of certified automation engineers brings extensive experience in designing, programming, and implementing industrial control systems.
                </p>
                <div className="space-y-3">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Equipment Optimization */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Optimization</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Maximize efficiency and reduce downtime with our optimization services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Performance Analysis', description: 'Detailed analysis of equipment performance and efficiency' },
                { title: 'Process Optimization', description: 'Fine-tuning processes for maximum productivity' },
                { title: 'Predictive Maintenance', description: 'AI-powered maintenance scheduling to prevent failures' },
                { title: 'Energy Efficiency', description: 'Reduce energy consumption and operational costs' },
                { title: 'System Integration', description: 'Seamless integration with existing systems' },
                { title: 'Training & Support', description: 'Comprehensive training for your operations team' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Settings className="h-10 w-10 text-primary mb-3" />
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Operations?</h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how automation can transform your business
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

export default Automation;