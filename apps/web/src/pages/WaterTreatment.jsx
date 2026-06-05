import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplets, Beaker, Filter, Gauge, CheckCircle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Modern_water from '@/assets/images/Modern water treatment plant.png';
import water from '@/assets/images/Water Treatment Plants.png';

const WaterTreatment = () => {
  const { toast } = useToast();

  const solutions = [
    {
      icon: Filter,
      title: 'RO Plants',
      description: 'Reverse Osmosis systems for pure water production',
      features: ['Industrial RO Systems', 'Commercial RO Units', 'Customized Capacities', 'Automatic Operation'],
    },
    {
      icon: Droplets,
      title: 'DI Plants',
      description: 'Deionization plants for ultra-pure water requirements',
      features: ['Mixed Bed DI', 'Two-Bed DI Systems', 'EDI Technology', 'Pharmaceutical Grade'],
    },
    {
      icon: Gauge,
      title: 'Softening Plants',
      description: 'Water softening systems to remove hardness',
      features: ['Automatic Softeners', 'Manual Softeners', 'Industrial Capacity', 'Salt-Free Options'],
    },
    {
      icon: Beaker,
      title: 'Water Treatment Chemicals',
      description: 'Complete range of treatment chemicals',
      features: ['Boiler Chemicals', 'Cooling Tower Chemicals', 'RO Chemicals', 'Descaling Agents'],
    },
  ];

  const services = [
    'Complete Water Treatment System Design',
    'Installation & Commissioning',
    'Water Quality Testing & Analysis',
    'System Optimization',
    'Preventive Maintenance',
    'Chemical Dosing Systems',
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
        <title>Water Treatment Solutions - Chem Con</title>
        <meta name="description" content="Comprehensive water treatment solutions including RO plants, DI plants, softening systems, and treatment chemicals. Expert installation and maintenance." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="absolute inset-0">
            <img
              src={water}
              alt="Modern water treatment plant"
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
              <h1 className="text-5xl font-bold mb-6">Water Treatment Solutions</h1>
              <p className="text-xl text-white/90 mb-8">
                Advanced water treatment systems and chemicals for industrial, commercial, and pharmaceutical applications
              </p>
              <Button onClick={handleQuote} size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
                Request a Quote
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Water Treatment Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive range of water treatment systems tailored to your specific needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-l-blue-500">
                    <CardHeader>
                      <solution.icon className="h-12 w-12 text-blue-600 mb-2" />
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      <div className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
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

        {/* Featured Image Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/20 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={Modern_water}
                  alt="Modern water treatment plant with filtration systems and purification equipment"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Water Treatment Systems</h2>
                <p className="text-gray-700 mb-4">
                  We design, supply, and install complete water treatment systems customized to meet your specific water quality requirements and production capacity.
                </p>
                <p className="text-gray-700 mb-6">
                  Our systems are engineered for reliability, efficiency, and ease of operation, ensuring consistent water quality for your processes.
                </p>
                <div className="space-y-3">
                  {[
                    'Custom system design',
                    'High-quality components',
                    'Energy-efficient operation',
                    'Automated controls',
                    'Remote monitoring options',
                    'Comprehensive warranty',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                End-to-end water treatment solutions from design to maintenance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">{service}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Chemicals Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Water Treatment Chemicals</h2>
                <p className="text-gray-600">
                  High-quality chemicals for all your water treatment needs
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Boiler Water Treatment', items: ['Oxygen Scavengers', 'Scale Inhibitors', 'Alkalinity Boosters', 'Condensate Treatment'] },
                  { title: 'Cooling Tower Chemicals', items: ['Biocides', 'Corrosion Inhibitors', 'Scale Inhibitors', 'Dispersants'] },
                  { title: 'RO Membrane Chemicals', items: ['Antiscalants', 'Membrane Cleaners', 'Biocides', 'pH Adjusters'] },
                  { title: 'Descaling Chemicals', items: ['Acid Cleaners', 'Alkaline Cleaners', 'Biodegradable Options', 'Custom Formulations'] },
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Need a Water Treatment Solution?</h2>
              <p className="text-xl mb-8 text-white/90">
                Contact us for a free water analysis and customized solution
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

export default WaterTreatment;