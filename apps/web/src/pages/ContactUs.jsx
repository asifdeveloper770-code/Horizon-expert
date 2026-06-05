import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Smartphone, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Plot # C-65 32-A Korangi Industrial Area Karachi',
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      content: '0323-2772110',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '021-35070311',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@chemcon.com.pk',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Chem Con Chemical & Engineering</title>
        <meta name="description" content="Get in touch with Chem Con for industrial solutions. Located in Korangi Industrial Area, Karachi. Contact us for boilers, fabrication, water treatment, and automation services." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-white/90">
                Get in touch with our team for expert industrial solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <info.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-600 text-sm">{info.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form & Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 bg-white text-gray-900"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 bg-white text-gray-900"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 bg-white text-gray-900"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="mt-1 bg-white text-gray-900"
                          placeholder="Inquiry about services"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="mt-1 bg-white text-gray-900"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map & Company Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card>
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=67.1050,24.8450,67.1150,24.8550&layer=mapnik&marker=24.8500,67.1100"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="Chem Con location map - Korangi Industrial Area, Karachi"
                      className="rounded-lg"
                    ></iframe>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Chem Con</h3>
                    <p className="text-lg mb-6">Chemical & Engineering</p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                        <span>Plot # C-65 32-A Korangi Industrial Area Karachi</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-5 w-5 flex-shrink-0" />
                        <span>0323-2772110</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 flex-shrink-0" />
                        <span>021-35070311</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 flex-shrink-0" />
                        <span>info@chemcon.com.pk</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Hours</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Monday - Friday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Saturday</span>
                      <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Sunday</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;