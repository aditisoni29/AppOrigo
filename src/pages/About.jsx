import React from 'react';
import AditiSoni from "../assets/Team/aditi.jpeg";
import ChitranshSaxena from "../assets/Team/chitransh.svg";
import RohanJogale from "../assets/Team/rohan.jpeg";
import NandiniAgrawal from "../assets/Team/nandini.jpeg";
import VaishnaviParolia from "../assets/Team/vaishnavi.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../styles/App.css";
import "../styles/about.css";
import { Helmet } from "react-helmet";

const About = () => {
  const team = [
    {
      name: "Aditi Soni",
      role: "Founder & CEO",
      description:
        "Leading purpose-driven innovation and transformative growth across emerging technologies with a visionary approach.",
      imageUrl: AditiSoni,
      linkedin: "https://www.linkedin.com/in/er-aditi-soni/",
      instagram: "https://www.instagram.com/aadhi._.tea",
    },
    {
      name: "Chitransh Saxena",
      role: "Co-Founder and CTO",
      description: "Driving technical vision by uniting design thinking with robust engineering to architect scalable, impactful digital solutions.",
      imageUrl: ChitranshSaxena,
      linkedin: "https://www.linkedin.com/in/chitranshatlkdin/",
      instagram: "https://www.instagram.com/_.chitransh_saxena._/",
    },
    {
      name: "Rohan Jogale",
      role: "Managing Director",
      description:
        "Driving strategic execution with a focus on innovation and a future-ready technology vision.",
      imageUrl: RohanJogale,
      linkedin: "https://www.linkedin.com/in/rohan-jogale-534a90266/",
      instagram: "https://www.instagram.com/rohanj.05/",
    },
    {
      name: "Nandini Agrawal",
      role: "Chief Financial Officer",
      description:
        "Steering fiscal strategy with precision, ensuring stability, scalability, and stakeholder trust.",
      imageUrl: NandiniAgrawal,
      linkedin: "https://www.linkedin.com/in/nandini-agrawal-9a9825251/",
      instagram: "https://www.instagram.com/justnandinii/",
    },
    {
      name: "Vaishnavi Parolia",
      role: "Chief Operating Officer",
      description:
        "Optimizing operational flow and cross-functional synergy to enable high-impact product delivery.",
      imageUrl: VaishnaviParolia,
      linkedin: "https://www.linkedin.com/in/vaishnavi-parolia-b54a1425b/",
      instagram: "https://www.instagram.com/vaishnavi_parolia/",
    },
  ];

  return (
    <div className="about-page">
      <Helmet>
        <title>About AppOrigo Technologies | Our Story & Team</title>
        <meta name="description" content="Learn about AppOrigo Technologies, our mission, vision, and the passionate team behind our innovative solutions." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Enhanced About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About AppOrigo Technologies</h1>
          <p>
            About AppOrigo Technologies: We specialize in protecting businesses with cost-effective, high-performance security solutions designed for the unique challenges of today's digital landscape. Our mission is to help companies operate securely and confidently by protecting critical assets from evolving cyber threats.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-content-section">
        <div className="about-container">
          <div className="about-content">
            <h2>OUR STORY</h2>
            <p>
              AppOrigo Technologies began as the brainchild of five college students, driven by a shared ambition to make a meaningful impact in the tech world. In 2025, we embarked on a journey to create a company that would redefine how technology can empower individuals and businesses alike. <br /><br />

              Our mission was clear from the start: to provide innovative, reliable, and affordable solutions that bridge the gap between the ever-evolving world of technology and its users. With a deep passion for coding and problem-solving, we set out to build a platform that could cater to the unique needs of startups and enterprises, making technology more accessible for all. <br /><br />

              At AppOrigo Technologies, we believe that technology should be a tool for growth and innovation. Our team worked tirelessly to develop cutting-edge solutions with a focus on simplicity, scalability, and customer-centricity. From our early days of brainstorming ideas to building the first version of our platform, every step has been a reflection of our commitment to excellence. <br /><br />

              We are more than just a tech company; we are a community of creators and collaborators, fostering an environment where knowledge-sharing and innovation thrive. Through workshops, open forums, and resources, we actively engage with our users, enabling them to grow and succeed alongside us. <br /><br />

              As we continue to evolve and expand, our vision remains unchanged: to help businesses and developers turn their ideas into reality with powerful, intuitive solutions. With the support of our growing community and a relentless drive to push the boundaries of what's possible, AppOrigo Technologies is on its way to becoming a transformative force in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="about-content-section">
        <div className="about-container">
          <div className="about-content">
            <h2>Our Core Principles</h2>
            <div className="principles-grid">
              <div className="principle-card">
                <h3>Our Mission</h3>
                <p>To empower businesses and individuals with innovative, reliable, and accessible tech solutions for transformative growth.</p>
              </div>
              <div className="principle-card">
                <h3>Our Vision</h3>
                <p>To become a global leader in creating technology that bridges gaps and drives meaningful, sustainable innovation.</p>
              </div>
              <div className="principle-card">
                <h3>Our Purpose</h3>
                <p>To revolutionize technology by fostering creativity, simplifying processes, and unlocking potential for everyone we serve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <h2>Meet Our Team</h2>
          <p>A group of passionate individuals shaping the future, one step at a time.</p>
          
          <div className="team-grid">
            {/* First Row - Aditi and Chitransh */}
            <div className="team-row-1">
              <div className="team-member-card">
                <img src={team[0].imageUrl} alt={team[0].name} />
                <h3>{team[0].name}</h3>
                <p>{team[0].role}</p>
                <div className="description">{team[0].description}</div>
                <div className="social-links">
                  <a
                    href={team[0].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[0].name}'s LinkedIn`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </a>
                  <a
                    href={team[0].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[0].name}'s Instagram`}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </div>
              
              <div className="team-member-card">
                <img src={team[1].imageUrl} alt={team[1].name} />
                <h3>{team[1].name}</h3>
                <p>{team[1].role}</p>
                <div className="description">{team[1].description}</div>
                <div className="social-links">
                  <a
                    href={team[1].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[1].name}'s LinkedIn`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </a>
                  <a
                    href={team[1].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[1].name}'s Instagram`}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Second Row - Rohan, Nandini, and Vaishnavi */}
            <div className="team-row-2">
              <div className="team-member-card">
                <img src={team[2].imageUrl} alt={team[2].name} />
                <h3>{team[2].name}</h3>
                <p>{team[2].role}</p>
                <div className="description">{team[2].description}</div>
                <div className="social-links">
                  <a
                    href={team[2].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[2].name}'s LinkedIn`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </a>
                  <a
                    href={team[2].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[2].name}'s Instagram`}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </div>
              
              <div className="team-member-card">
                <img src={team[3].imageUrl} alt={team[3].name} />
                <h3>{team[3].name}</h3>
                <p>{team[3].role}</p>
                <div className="description">{team[3].description}</div>
                <div className="social-links">
                  <a
                    href={team[3].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[3].name}'s LinkedIn`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </a>
                  <a
                    href={team[3].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[3].name}'s Instagram`}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </div>
              
              <div className="team-member-card">
                <img src={team[4].imageUrl} alt={team[4].name} />
                <h3>{team[4].name}</h3>
                <p>{team[4].role}</p>
                <div className="description">{team[4].description}</div>
                <div className="social-links">
                  <a
                    href={team[4].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[4].name}'s LinkedIn`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </a>
                  <a
                    href={team[4].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team[4].name}'s Instagram`}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src={AditiSoni} alt="about apporigo technologies founder" style={{display:'none'}} />
    </div>
  );
};

export default About;