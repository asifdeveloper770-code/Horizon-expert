import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Toaster } from '@/components/ui/toaster';

import ScrollToTop from '@/components/ScrollToTop.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IntroOverlay from '@/components/IntroOverlay.jsx';

import HomePage from '@/pages/HomePage.jsx';
import AboutUs from '@/pages/AboutUs.jsx';
import BoilersHeatSystems from '@/pages/BoilersHeatSystems.jsx';
import FabricationEngineering from '@/pages/FabricationEngineering.jsx';
import WaterTreatment from '@/pages/WaterTreatment.jsx';
import Automation from '@/pages/Automation.jsx';
import PharmaceuticalSolutions from '@/pages/PharmaceuticalSolutions.jsx';
import ContactUs from '@/pages/ContactUs.jsx';

function App() {
  return (
    <Router>
      <IntroOverlay />

      <ScrollToTop />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/boilers" element={<BoilersHeatSystems />} />
            <Route path="/fabrication" element={<FabricationEngineering />} />
            <Route path="/water-treatment" element={<WaterTreatment />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/pharmaceutical" element={<PharmaceuticalSolutions />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <Toaster />
    </Router>
  );
}

export default App;