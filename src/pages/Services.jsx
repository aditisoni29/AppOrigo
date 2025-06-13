import React from "react";
import web from "../assets/Services/web.png";
import app from "../assets/Services/app.png";
import gd from "../assets/Services/GD.png";
import uiux from "../assets/Services/uiux.png";
import { Link } from "react-router-dom";
import Button, { GlowButton, SecondaryButton } from "../components/Button";
import "../styles/service.css";
import "../styles/App.css";

function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Premium Services</h1>
          <p>Explore the wide range of services we offer to help you achieve your digital goals.</p>
          <Button 
            as={Link} 
            to="/contact" 
            variant="primary"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-main">
        <div className="services-container">
          <div className="services-grid">
            {/* Web Development Service */}
            <div className="service-card">
              <div className="service-content">
                <h2>Web Development</h2>
                <p>Our team develops fast, secure, and responsive websites, from corporate sites to eCommerce platforms and web apps. Using React, Vue.js, Laravel, and WordPress, we ensure top-notch performance, SEO optimization, and a flawless user experience.</p>
                <ul className="service-features">
                  <li>Custom Website Development</li>
                  <li>E-commerce Solutions</li>
                  <li>Web Application Development</li>
                  <li>CMS Development</li>
                </ul>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary"
                  className="service-cta-btn"
                >
                  Get Started
                </Button>
              </div>
              <div className="service-image">
                <img src={web} alt="Web Development" />
              </div>
            </div>

            {/* App Development Service */}
            <div className="service-card">
              <div className="service-image">
                <img src={app} alt="App Development" />
              </div>
              <div className="service-content">
                <h2>App Development</h2>
                <p>We build high-performance iOS, Android, and cross-platform apps using the latest technologies like Flutter and React Native. From custom development to API integrations and security, we create seamless, scalable solutions designed for growth.</p>
                <ul className="service-features">
                  <li>Native App Development</li>
                  <li>Cross-platform Solutions</li>
                  <li>App Maintenance & Support</li>
                  <li>API Integration</li>
                </ul>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary"
                  className="service-cta-btn"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* UI/UX Design Service */}
            <div className="service-card">
              <div className="service-content">
                <h2>UI/UX Design</h2>
                <p>We craft intuitive, user-friendly designs that enhance engagement. Through wireframing, prototyping, and testing, we create responsive, mobile-first interfaces that look great and function perfectly across all devices.</p>
                <ul className="service-features">
                  <li>UI/UX Design</li>
                  <li>Print & Digital Design</li>
                  <li>Motion Graphics</li>
                </ul>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary"
                  className="service-cta-btn"
                >
                  Get Started
                </Button>
              </div>
              <div className="service-image">
                <img src={uiux} alt="UI/UX Design" />
              </div>
            </div>

            {/* Graphic Design Service */}
            <div className="service-card">
              <div className="service-image">
                <img src={gd} alt="Graphic Design" />
              </div>
              <div className="service-content">
                <h2>Graphic Design</h2>
                <p>Transform your brand identity with our creative graphic design solutions. From logos to marketing materials, we craft compelling visual stories that resonate with your audience and elevate your brand presence.</p>
                <ul className="service-features">
                  <li>Logo Design</li>
                  <li>Brand Identity</li>
                  <li>Marketing Materials</li>
                  <li>Social Media Graphics</li>
                </ul>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary"
                  className="service-cta-btn"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <h2>Our Development Process</h2>
            <p>We follow a systematic approach to deliver exceptional results</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon">📋</div>
              <h3>Discovery</h3>
              <p>Understanding your requirements and project goals</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon">🎨</div>
              <h3>Design</h3>
              <p>Creating intuitive and engaging user interfaces</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon">⚡</div>
              <h3>Development</h3>
              <p>Building robust and scalable solutions</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-icon">🚀</div>
              <h3>Launch</h3>
              <p>Deploying and monitoring your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="service-cta-container">
          <div className="service-cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together. Contact us today to discuss your project requirements.</p>
            <div className="cta-buttons-service">
              <GlowButton 
                as={Link} 
                to="/contact"
                size="large"
              >
                Get in Touch
              </GlowButton>
              <SecondaryButton 
                as={Link} 
                to="/contact"
                size="large"
              >
                Request a Quote
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;






