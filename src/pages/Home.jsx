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

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="service-icon">🎯</div>
                <div className="ag-courses-item_title">
                  Graphic Design
                </div>
                <div className="ag-courses-item_date-box">
                  <span className="ag-courses-item_date">
                    Transform your brand identity with our creative graphic design solutions. From logos to marketing materials, we craft compelling visual stories that resonate with your audience.
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-header">
            <h2>What Our <span className="gradient-text">Clients Say</span></h2>
            <p className="section-subtitle">Hear from our satisfied clients about their experience working with us</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p>
                  Working with AppOrigo Technologies has been an absolute pleasure. Their team's expertise in web development and commitment to delivering high-quality solutions has helped us transform our digital presence. The attention to detail and innovative approach they bring to every project is truly remarkable.
                </p>
              </div>
              <div className="testimonial-author">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfOdWoerP5UOJ3nqzmAl8squti1cxu9lIFw&s" alt="John Smith" />
                <div className="author-info">
                  <h4>Adv. Arvind Soni</h4>
                  <p>CEO, Arvind Soni & Associates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-container">
          <div className="section-header">
            <h2>Latest <span className="gradient-text">Insights</span></h2>
            <p className="section-subtitle">Stay updated with our latest articles, insights, and industry trends</p>
          </div>
          <div className="blog-grid">
            {/* Blog cards */}
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" alt="Web Development" />
                <div className="blog-category">Web Development</div>
              </div>
              <div className="blog-content">
                <h3>Modern Web Development: Building Scalable Solutions for Tomorrow</h3>
                <p>Discover how we leverage cutting-edge technologies and frameworks to create robust, scalable web applications that drive business growth and deliver exceptional user experiences.</p>
                <div className="blog-meta">
                  <span className="blog-date">March 15, 2024</span>
                  <span className="blog-read-time">5 min read</span>
                </div>
                <a href="#" className="read-more">
                  Read Article <span className="cta-arrow">→</span>
                </a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" alt="UI/UX Design" />
                <div className="blog-category">UI/UX Design</div>
              </div>
              <div className="blog-content">
                <h3>The Art of User Experience: Creating Intuitive Digital Interfaces</h3>
                <p>Explore our comprehensive approach to UI/UX design, where we combine aesthetic excellence with functional precision to create engaging and intuitive digital experiences.</p>
                <div className="blog-meta">
                  <span className="blog-date">March 12, 2024</span>
                  <span className="blog-read-time">4 min read</span>
                </div>
                <a href="#" className="read-more">
                  Read Article <span className="cta-arrow">→</span>
                </a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="App Development" />
                <div className="blog-category">App Development</div>
              </div>
              <div className="blog-content">
                <h3>Mobile App Development: Crafting Solutions for the Digital Age</h3>
                <p>Learn about our innovative approach to mobile app development, where we combine cutting-edge technology with user-centric design to create powerful, scalable applications.</p>
                <div className="blog-meta">
                  <span className="blog-date">March 10, 2024</span>
                  <span className="blog-read-time">6 min read</span>
                </div>
                <a href="#" className="read-more">
                  Read Article <span className="cta-arrow">→</span>
                </a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Graphic Design" />
                <div className="blog-category">Graphic Design</div>
              </div>
              <div className="blog-content">
                <h3>Visual Storytelling: The Power of Strategic Graphic Design</h3>
                <p>Discover how our graphic design expertise helps businesses communicate their message effectively through compelling visual narratives and brand identity solutions.</p>
                <div className="blog-meta">
                  <span className="blog-date">March 8, 2024</span>
                  <span className="blog-read-time">4 min read</span>
                </div>
                <a href="#" className="read-more">
                  Read Article <span className="cta-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="careers-section">
        <div className="careers-container">
          <div className="careers-content">
            <h3>Your Talent, Our Mission,<br />Unlimited Potential</h3>
            <p>Join our team of innovators and creators. We're always looking for passionate individuals who want to make a difference in the digital world. At AppOrigo, you'll find opportunities to grow, learn, and contribute to exciting projects that shape the future of technology.</p>
            <a href="/career" className="careers-cta">
              Join Our Team <span className="cta-arrow">→</span>
            </a>
          </div>
          <div className="careers-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Join Our Team" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
