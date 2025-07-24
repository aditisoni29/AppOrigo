import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/scrolltotop";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const MissionPage = lazy(() => import("./pages/Mission"));
const Terms = lazy(() => import("./pages/terms"));
const Privacy = lazy(() => import("./pages/PrivacyPage"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div>
        <Navbar />
        <Suspense fallback={<div style={{color: 'white', textAlign: 'center', marginTop: '2rem'}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;