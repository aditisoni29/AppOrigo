import React from "react";
import web from "../assets/Services/web.webp";
import app from "../assets/Services/app.webp";
import gd from "../assets/Services/GD.webp";
import uiux from "../assets/Services/uiux.webp";
import { Link } from "react-router-dom";
import Button, { GlowButton, SecondaryButton } from "../components/Button";
import "../styles/service.css";
import "../styles/App.css";
import { Helmet } from "react-helmet";

function Services() {
  return (
    <>
      <Helmet>
        <title>Custom Web & App Development India | AppOrigo Services</title>
        <meta name="description" content="AppOrigo Technologies provides custom web & app development in India, offering tailored digital solutions for startups and enterprises." />
        <meta name="robots" content="index, follow" />
         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AppOrigo Technologies Services",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "Web Development",
                  "url": "https://www.apporigotechnologies.co.in/services",
                  "description": "AppOrigo Technologies provides expert web development services including custom websites, e-commerce platforms, web applications, and CMS solutions. We use modern technologies like React, Vue.js, Laravel, and WordPress to deliver fast, secure, and SEO-optimized websites tailored to your business needs."
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "App Development",
                  "url": "https://www.apporigotechnologies.co.in/services",
                  "description": "AppOrigo Technologies offers end-to-end app development services, including native iOS and Android apps, cross-platform solutions, API integration, and ongoing maintenance. We build scalable, secure, and high-performance mobile apps using Flutter and React Native."
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "UI/UX Design",
                  "url": "https://www.apporigotechnologies.co.in/services",
                  "description": "AppOrigo Technologies delivers intuitive UI/UX design services focused on user engagement and responsiveness. From wireframes to motion graphics, we create mobile-first, visually compelling experiences across all platforms."
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "name": "Graphic Design",
                  "url": "https://www.apporigotechnologies.co.in/services",
                  "description": "AppOrigo Technologies offers creative graphic design services, including logo creation, brand identity, marketing materials, and social media graphics to visually elevate your brand and connect with your audience."
                }
              }
            ]
          })}
        </script>

      </Helmet>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Custom Web & App Development India</h1>
          <p>Explore the wide range of services we offer to help you achieve your digital goals. Our <b>custom web & app development India</b> services empower startups and businesses to scale with innovative, robust, and user-centric solutions.</p>
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
                <img src={web} alt="custom web development India" loading="lazy" />
              </div>
            </div>

            {/* App Development Service */}
            <div className="service-card">
              <div className="service-image">
                <img src={app} alt="custom app development India" loading="lazy" />
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
                <img src={uiux} alt="UI/UX Design" loading="lazy" />
              </div>
            </div>

            {/* Graphic Design Service */}
            <div className="service-card">
              <div className="service-image">
                <img src={gd} alt="Graphic Design" loading="lazy" />
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






