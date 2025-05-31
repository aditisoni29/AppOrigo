// Import necessary dependencies
import React from 'react';
import '../styles/App.css';
import '../styles/mission.css'; // Import the new mission.css file
import { Link } from 'react-router-dom';
import Button, { SecondaryButton } from '../components/Button'; // Import Button components

const MissionPage = () => {
  return (
    <div className="mission-page">
      {/* Hero Section */}
      <section className="mission-hero">
        <div className="mission-hero-content">
          <h1 className="mission-hero-title">
            Empowering the world through innovation and technology
          </h1>
          <p>Building a future where technology serves humanity's greatest needs</p>
        </div>
      </section>

      {/* Mission Content Section */}
      <section className="mission-content-section">
        <div className="mission-container">
          <div className="mission-content">
            <h2>What Drives Us</h2>
            <p>
              At AppOrigo, our mission is to deliver cutting-edge solutions that simplify lives,
              foster creativity, and make a positive impact on communities worldwide. We are driven by our
              passion for innovation and our commitment to creating a better future for everyone.
            </p>

            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>Continuously pushing boundaries to bring new ideas to life and stay ahead of technological trends.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Integrity</h3>
                <p>Building trust through transparency, accountability, and ethical business practices.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Customer Focus</h3>
                <p>Delivering exceptional value and exceeding expectations through personalized solutions.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3>Sustainability</h3>
                <p>Ensuring our actions contribute to a greener planet and sustainable future.</p>
              </div>
            </div>

            <h2>Our Vision</h2>
            <p>
              To become a global leader in technological advancements, empowering businesses to scale beyond boundaries, 
              helping individuals achieve their fullest potential, and enabling organizations to transform their digital presence. 
              We're committed to delivering solutions that maximize your ROI, streamline operations, and position your business 
              at the forefront of innovation - because your success is our success.
            </p>

            <h2>Pioneering the Future</h2>
            <div className="innovation-grid">
              <div className="innovation-card">
                <div className="innovation-icon">🚀</div>
                <h3>Emerging Technologies</h3>
                <p>Harnessing the power of AI, blockchain, and IoT to create next-generation solutions that transform industries.</p>
              </div>
              <div className="innovation-card">
                <div className="innovation-icon">🌐</div>
                <h3>Digital Transformation</h3>
                <p>Enabling businesses to thrive in the digital age through cutting-edge software and cloud solutions.</p>
              </div>
              <div className="innovation-card">
                <div className="innovation-icon">🔮</div>
                <h3>Future-Ready</h3>
                <p>Building scalable platforms that adapt to tomorrow's challenges while solving today's problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="mission-cta-section">
        <div className="mission-container">
          <div className="mission-cta-content">
            <h2>Ready to Transform Your Vision into Reality?</h2>
            <p>
              Join us in creating innovative solutions that make a difference. Let's start a conversation about shaping the future together.
            </p>
            <div className="cta-buttons">
              <Button as={Link} to="/contact" variant="primary">Contact us</Button>
              <SecondaryButton as={Link} to="/services">Explore Services</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;