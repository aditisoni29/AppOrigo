import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin,
  ArrowRight,
  Code,
  Zap,
  Globe
} from "lucide-react";
import companyLogo from "../assets/Screenshot_2024-11-26_at_9.57.43_AM.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    helpful: [
      { name: "Services", path: "/services" },
      { name: "Terms & Condition", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
  };

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/company/AppOrigo Technologies", 
      icon: Linkedin,
      color: "linkedin"
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/app.origo/", 
      icon: Instagram,
      color: "instagram" 
    },
    { 
      name: "Mail",
      url: "mailto:info.apporigo@gmail.com",
      icon: Mail,
      color: "mail"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "info.apporigo@gmail.com",
      href: "mailto:info.apporigo@gmail.com"
    },
  ];

  return (
    <footer className="footer-container">
      {/* Animated Background */}
      <div className="footer-bg-animation"></div>
      
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info Section */}
          <div className="footer-section footer-brand">
            <div className="brand-section">
              <div className="footer-logo">
                <img src={companyLogo} alt="AppOrigo Technologies Logo" className="logo-image" />
                <div className="logo-glow-effect"></div>
              </div>
              
              <div className="brand-info">
                <h3 className="brand-name">
                  <span className="brand-app">App</span>
                  <span className="brand-origo">Origo</span>
                </h3>
                <p className="brand-tagline">
                  Crafting digital experiences that transform businesses and inspire innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Helpful Links */}
          <div className="footer-section">
            <h4 className="section-title">
              Helpful Links
              <div className="title-underline"></div>
            </h4>
            <ul className="footer-links">
              {footerLinks.helpful.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="footer-section">
            <h4 className="section-title">
              Contact Information
              <div className="title-underline"></div>
            </h4>
            
            <div className="contact-details">
              {/* Address */}
              <div className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span className="contact-text">B-83, Nandpuri Colony, Hawa sadak, Jaipur (Rajasthan), 302019</span>
              </div>

              {/* Social Media Icons */}
              <div className="social-icons-contact">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`social-link social-${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <div className="copyright">
              <span>2025 @AppOrigo Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}