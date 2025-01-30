import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Constructions from "./components/Constructions";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Contact from "./components/Contact"; 
import StatsCard from "./components/StatusCard";
import Services from "./components/Services";

const App = () => {
  return (
    <Router>
      <div className="relative">
        <Header /> 
        
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <section id="livingRoom">
                <Constructions />
              </section>
              <section id="services">
                <Services />
                </section>
              <StatsCard />
              <section id="gallery">
                <Projects />
              </section>
            </>
          }/>
          
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
