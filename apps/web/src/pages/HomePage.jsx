import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Flame, Wrench, Droplets, Cpu, Pill, Zap, Mail, Phone, MapPin, Smartphone, Send, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import heroVideo from "@/assets/intro-video.mp4";
import Pharmaceutical_Machinery from "@/assets/images/Pharmaceutical Machinery.png";
import Automation from '@/assets/images/Automation & Electrical Panels.png';
import Water_Treatment from '@/assets/images/Water Treatment Plants.png';
import Fabrication_Engineering from '@/assets/images/Fabrication & Welding.png';
import Boilers_Heat_Systems from '@/assets/images/Steam & Oil Boilers.png';
import engineers from "@/assets/images/Modern industrial boiler.png";
import boilerPlant from "@/assets/images/Industrial utility equipment.png";
import fabricationPlant from "@/assets/images/Pharmaceutical manufacturing equipmen.png";
import waterTreatmentPlant  from "@/assets/images/Modern water treatment plant.png";
import pharmaPlant from "@/assets/images/Industrial fabrication workshop.png";
import utilityPlant from "@/assets/images/Modern industrial.png";

const HomePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  // Parallax setup for Industrial Excellence section
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleQuote = () => {
    toast({
      title: "Quote Request",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

const divisions = [
  {
    title: 'Steam & Oil Boilers',
    image: Boilers_Heat_Systems,
    description: 'Premium imported and reconditioned boilers with complete installation',
    link: '/boilers',
  },
  {
    title: 'Fabrication & Welding',
    image: Fabrication_Engineering,
    description: 'Custom tanks, pressure vessels, and structural steel fabrication',
    link: '/fabrication',
  },
  {
    title: 'Water Treatment Plants',
    image: Water_Treatment,
    description: 'RO, DI, softening plants and treatment chemicals',
    link: '/water-treatment',
  },
  {
    title: 'Automation & Electrical Panels',
    image: Automation,
    description: 'PLC programming, SCADA systems, and energy management',
    link: '/automation',
  },
  {
    title: 'Pharmaceutical Machinery',
    image: Pharmaceutical_Machinery,
    description: 'Installation, validation (DQ/IQ/OQ/PQ), and optimization',
    link: '/pharmaceutical',
  },
  {
    title: 'Compressors & Pumps',
    image: Boilers_Heat_Systems,
    description: 'Industrial compressors, pumps, and utility equipment',
    link: '/contact',
  },
];

  const boilerServices = [
    'New Imported Cochran Boilers',
    'Recondition Boilers with Warranty',
    'Waste Heat Recovery Boilers',
    'Economizer Fabrication',
    'Burner Tuning & Combustion Analysis',
    'Boiler Accessories Supply',
    'Complete Erection & Installation',
  ];

  const fabricationServices = [
    'MS/SS/Fiber Tanks',
    'Pressure Vessels (ASME)',
    'Stainless Steel Piping',
    'Ring Main Systems',
    'Industrial Welding',
    'Erection & Installation',
  ];

  const waterTreatmentServices = [
    'Water Treatment Chemicals',
    'Descaling Chemicals',
    'RO Plants',
    'DI Plants',
    'Softening Plants',
    'Complete Water Treatment Systems',
  ];

  const automationServices = [
    'Boiler Automation',
    'Electrical Panel Work',
    'Online Monitoring & Data Logging',
    'Energy Management & Audit',
    'Equipment Optimization',
  ];

  const pharmaceuticalServices = [
    'Installation & Commissioning',
    'Equipment Optimization (OEE)',
    'Overhauling',
    'DQ/IQ/OQ/PQ',
    'Tooling & Modification',
    'Automation of Equipment',
  ];

  const utilitiesServices = [
    'Utility Equipment Installation',
    'Capacity Enhancement',
    'Sanitary Pumps & Accessories',
    'Manufacturing & Storage Vessels',
    'Complete Automation Systems',
  ];

  const whyChoose = [
    'Engineering Expertise',
    'Turnkey Industrial Solutions',
    'Reliable After-Sales Support',
    'Energy Efficient Systems',
    'Professional Technical Team',
  ];

  return (
    <>
      <Helmet>
        <title>Chem Con - Engineering Excellence in Boiler & Industrial Automation Solutions</title>
        <meta name="description" content="Leading provider of steam & oil boilers, fabrication, water treatment, automation, and pharmaceutical machinery solutions in Pakistan. Expert installation and maintenance services." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl text-white"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
              >
                Engineering Excellence in Boiler & Industrial Automation Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-white/90 font-medium"
              >
                Steam & Oil Boilers | Fabrication | Water Treatment | Automation |
                Pharmaceutical Machinery
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  onClick={handleQuote}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-xl"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-black text-lg px-8 py-6"
                >
                  <Link to="/about">Explore Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Industrial Excellence Section (New) */}
        <section className="py-24 bg-white relative overflow-hidden" ref={parallaxRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Industrial <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering world-class engineering solutions with precision, safety, and unmatched reliability.
              </p>
            </motion.div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] md:h-[600px] group">
              {/* Parallax Image */}
              <motion.div
                className="absolute inset-0 w-full h-[130%]"
                style={{ y }}
              >
                <img
                  src={utilityPlant}
                  alt="Modern industrial facility with advanced boiler systems"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <ShieldCheck className="h-8 w-8 text-accent" />
                    <span className="text-accent font-bold tracking-wider uppercase text-sm">Certified Quality</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Setting the Standard in Industrial Engineering
                  </h3>
                  <p className="text-lg text-gray-200 mb-6">
                    From state-of-the-art boiler installations to complex structural fabrications, our facilities and expertise ensure your operations run at peak efficiency.
                  </p>
                  <Button asChild size="lg" className="bg-accent text-primary hover:bg-white transition-colors duration-300">
                    <Link to="/fabrication">Discover Our Capabilities</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={engineers}
                  alt="Professional industrial engineers working on advanced equipment at Chem Con facility"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover border-4 border-white"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Chem Con</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Chem Con - Chemical & Engineering is a leading provider of comprehensive industrial solutions in Pakistan. With our headquarters in Karachi's Korangi Industrial Area, we specialize in delivering turnkey solutions for boiler systems, industrial fabrication, water treatment, automation, and pharmaceutical equipment.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team of highly qualified engineers and technicians brings decades of combined experience, ensuring that every project meets the highest standards of quality, safety, and efficiency.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Divisions Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Divisions</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive industrial solutions across multiple specialized divisions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={division.link}>
                    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white border border-gray-100 rounded-2xl">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={division.image}
                          alt={`${division.title} - Industrial equipment and services`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white z-10">{division.title}</h3>
                      </div>
                      <CardContent className="p-6 relative">
                        <div className="absolute -top-6 right-6 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ArrowRight className="text-primary h-6 w-6" />
                        </div>
                        <p className="text-gray-600 mt-2 leading-relaxed">{division.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Boiler Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src={boilerPlant}
                  alt="Modern industrial boiler system with advanced control technology"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Boilers & Heat Systems</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We provide comprehensive boiler solutions including new imported Cochran boilers, reconditioned units, and waste heat recovery systems. Our services cover everything from installation to maintenance.
                </p>
                <div className="space-y-4 mb-8">
                  {boilerServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Flame className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-gray-800 font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/boilers">View Boiler Solutions</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fabrication & Engineering Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Fabrication & Engineering</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Expert fabrication services for tanks, pressure vessels, stainless steel piping, and structural steel work. ASME certified with complete quality assurance.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {fabricationServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors"
                    >
                      <Wrench className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-800">{service}</span>
                    </motion.div>
                  ))}
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/fabrication">Explore Fabrication Services</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="relative">
                  <img
                    src={pharmaPlant}
                    alt="Industrial fabrication workshop with welding and manufacturing equipment"
                    className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Water Treatment Solutions Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={waterTreatmentPlant}
                  alt="Modern water treatment plant with filtration and purification systems"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Water Treatment Solutions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Complete water treatment systems including RO plants, DI plants, softening systems, and a full range of treatment chemicals for industrial applications.
                </p>
                <div className="space-y-4 mb-8">
                  {waterTreatmentServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-blue-100"
                    >
                      <Droplets className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/water-treatment">View Water Treatment Solutions</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Automation & Energy Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(245,230,167,0.1) 0px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(245,230,167,0.1) 0px, transparent 1px, transparent 40px)',
            }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Automation & Energy Management</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Smart automation solutions for industrial processes, energy optimization, and operational excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  {automationServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <Cpu className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-lg font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              >
                {[
                  { number: '150+', label: 'Projects Delivered' },
                  { number: '80+', label: 'Active Clients' },
                  { number: '15+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center bg-gradient-to-br from-primary/80 to-primary p-6 rounded-2xl shadow-lg border border-primary-foreground/20"
                  >
                    <div className="text-4xl font-extrabold text-white mb-2">{stat.number}</div>
                    <div className="text-accent font-medium text-sm uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent text-gray-900 hover:bg-white font-bold px-8 py-6 text-lg">
                <Link to="/automation">Explore Automation Solutions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pharmaceutical Solutions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Pharmaceutical Solutions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Specialized services for pharmaceutical equipment including installation, validation (DQ/IQ/OQ/PQ), optimization, and compliance with cGMP standards.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {pharmaceuticalServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-purple-50 p-4 rounded-xl border border-purple-100"
                    >
                      <Pill className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-800">{service}</span>
                    </motion.div>
                  ))}
                </div>
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link to="/pharmaceutical">View Pharmaceutical Services</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <img
                  src={Pharmaceutical_Machinery}
                  alt="Pharmaceutical manufacturing equipment and machinery"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Utilities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={utilityPlant}
                  alt="Industrial utility equipment and systems installation"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Utilities & Equipment</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Complete utility equipment solutions including installation, capacity enhancement, sanitary pumps, and automated systems for industrial applications.
                </p>
                <div className="space-y-4 mb-8">
                  {utilitiesServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                    >
                      <div className="bg-accent/20 p-2 rounded-full">
                        <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-gray-800 font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Contact for Utilities</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Chem Con Section */}
        <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Choose Chem Con?</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Your trusted partner for comprehensive industrial solutions
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {whyChoose.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-full shadow-lg hover:bg-white/20 transition-colors"
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-lg font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contact us for expert industrial solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2 bg-gray-50 border-gray-200 text-gray-900 focus:ring-primary focus:border-primary"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2 bg-gray-50 border-gray-200 text-gray-900 focus:ring-primary focus:border-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2 bg-gray-50 border-gray-200 text-gray-900 focus:ring-primary focus:border-primary"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="mt-2 bg-gray-50 border-gray-200 text-gray-900 focus:ring-primary focus:border-primary resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6" size="lg">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map & Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=67.1050,24.8450,67.1150,24.8550&layer=mapnik&marker=24.8500,67.1100"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="Chem Con location - Korangi Industrial Area, Karachi"
                      className="w-full"
                    ></iframe>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 text-white shadow-2xl border-0 rounded-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -z-0"></div>
                  <CardContent className="p-8 md:p-10 relative z-10">
                    <h3 className="text-2xl font-bold mb-8 text-accent">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-300 mb-1">Address</p>
                          <p className="text-white text-lg">Plot # C-65 32-A Korangi Industrial Area Karachi</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <Smartphone className="h-6 w-6 text-accent flex-shrink-0" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-300 mb-1">Mobile</p>
                          <p className="text-white text-lg">0323-2772110</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-300 mb-1">Phone</p>
                          <p className="text-white text-lg">021-35070311</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-300 mb-1">Email</p>
                          <p className="text-white text-lg">info@chemcon.com.pk</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;