import React from "react";
import "../styles/App.css";
import "../styles/Home.css";
import Button from "../components/Button";
import Careerimg from "../assets/careers_img.png";
import fact_img from "../assets/fact-img.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Revolutionary Tech Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          {/* Animated Tech Grid */}
          <div className="tech-grid">
            <div className="grid-line grid-line-1"></div>
            <div className="grid-line grid-line-2"></div>
            <div className="grid-line grid-line-3"></div>
            <div className="grid-line grid-line-4"></div>
          </div>
          
          {/* Floating Tech Elements */}
          <div className="floating-tech">
            <div className="tech-element element-1">
              <div className="element-core"></div>
              <div className="element-ring"></div>
            </div>
            <div className="tech-element element-2">
              <div className="element-core"></div>
              <div className="element-ring"></div>
            </div>
            <div className="tech-element element-3">
              <div className="element-core"></div>
              <div className="element-ring"></div>
            </div>
            <div className="tech-element element-4">
              <div className="element-core"></div>
              <div className="element-ring"></div>
            </div>
          </div>
          
          {/* Neural Network Connections */}
          <div className="neural-network">
            <div className="connection connection-1"></div>
            <div className="connection connection-2"></div>
            <div className="connection connection-3"></div>
            <div className="connection connection-4"></div>
            <div className="connection connection-5"></div>
          </div>
          
          {/* Gradient Orbs */}
          <div className="gradient-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-icon">💻</div>
            <span className="badge-text">Next-Gen Development Platform</span>
            <div className="badge-pulse"></div>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line-1">Empowering</span>
            <span className="title-line-2 gradient-text">Digital</span>
            <span className="title-line-3">Transformation Through</span>
            <span className="title-line-5 gradient-text">Innovation</span>
          </h1>
          
          <p className="hero-description">
            <span className="description-highlight">AppOrigo Technologies</span> revolutionizes digital experiences with 
            cutting-edge technology solutions. We architect the future of digital innovation, 
            transforming complex challenges into seamless, scalable solutions.
          </p>
          
          <div className="hero-cta">
            <Link to="/contact" className="cta-primary">
              <div className="cta-icon">🚀</div>
              <span>Start Your Journey</span>
              <div className="cta-arrow">→</div>
            </Link>
          </div>
          
          <div className="hero-metrics">
            <div className="metric-item">
              <div className="metric-icon">🎯</div>
              <div className="metric-number">30+</div>
              <div className="metric-label">Projects Delivered</div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <div className="metric-icon">👥</div>
              <div className="metric-number">20+</div>
              <div className="metric-label">Clients</div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <div className="metric-icon">⚡</div>
              <div className="metric-number">99%</div>
              <div className="metric-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="service-section">
        <div className="service-header">
          <h2>Our <span className="gradient-text">Premium Services</span></h2>
        </div>
        
        <div className="ag-format-container">
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="service-icon">🌐</div>
                <div className="ag-courses-item_title">
                  Web Development
                </div>
                <div className="ag-courses-item_date-box">
                  <span className="ag-courses-item_date">
                    Transform ideas into impactful websites with our advanced web development services, focusing on sleek designs and robust functionality to drive engagement and growth.
                  </span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="service-icon">📱</div>
                <div className="ag-courses-item_title">
                  App Development
                </div>
                <div className="ag-courses-item_date-box">
                  <span className="ag-courses-item_date">
                    We create custom mobile apps that meet your business needs, blending innovation and functionality for a user-centric experience from start to finish.
                  </span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="service-icon">🎨</div>
                <div className="ag-courses-item_title">
                  UI/UX Design
                </div>
                <div className="ag-courses-item_date-box">
                  <span className="ag-courses-item_date">
                    Our UI/UX design services combine creativity and strategy to craft visually stunning, intuitive interfaces, ensuring every interaction maximizes user satisfaction.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="future-vision-section">
        <div className="future-vision-container">
          <div className="future-vision-content">
            <h2>Shaping the <span className="gradient-text">Digital Future</span></h2>
            <p>In today's rapidly evolving digital landscape, staying ahead means embracing innovation. At AppOrigo Technologies, we're not just building solutions – we're crafting the future of digital experiences.</p>
            <div className="vision-stats">
              <div className="vision-stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="vision-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
              <div className="vision-stat">
                <span className="stat-number">10x</span>
                <span className="stat-label">Growth</span>
              </div>
            </div>
            <Link to="/contact" className="vision-cta">
              Join the Digital Revolution
              <span className="cta-arrow">→</span>
            </Link>
          </div>
          <div className="future-vision-image">
            <img src={fact_img} alt="Digital Future" />
          </div>
        </div>
      </section>

      <section className="careers-section">
        <div className="careers-container">
          <div className="careers-image">
            <img src={Careerimg} alt="career opportunities" />
            <div className="image-overlay"></div>
          </div>
          
          <div className="careers-content">
            <h3>
              Your <span className="gradient-text">Talent</span>, Our Mission,
              <br />
              <span className="gradient-text">Unlimited</span> Potential
            </h3>
            <p>
              Join our team at <span className="highlight">AppOrigo Technologies</span> and unleash your talent with a 
              mission-driven community. Grow with us and discover your unlimited potential today!
            </p>
            <Link to="/career" className="careers-cta">
              <span>Apply Now!</span>
              <div className="cta-arrow">→</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
