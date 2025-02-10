import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MissionPage from './pages/Mission';
import Terms from "./pages/terms";
import Privacy from "./pages/PrivacyPage";
import ScrollToTop from "./components/scrolltotop";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/privacy" element={<Privacy/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;