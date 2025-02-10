import React from 'react';
import AditiSoni from "../assets/Team/aditi.jpeg";
import ChitranshSaxena from "../assets/Team/chitransh.svg";
import RohanJogale from "../assets/Team/rohan.jpeg";
import NandiniAgrawal from "../assets/Team/nandini.jpeg";
import VaishnaviParolia from "../assets/Team/vaishnavi.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const AppOrigo = () => {
  const team = [
    {
      name: "Aditi Soni",
      role: "Founder & CEO",
      description:
        "Leading innovation and strategic vision with over 15 years of experience in technology.",
      imageUrl: AditiSoni,
      linkedin: "https://www.linkedin.com/in/er-aditi-soni/",
      instagram: "https://www.instagram.com/aadhi._.tea",
    },
    {
      name: "Chitransh Saxena",
      role: "Co-Founder and CTO",
      description: "Bringing creative solutions with a decade of UX/UI design expertise.",
      imageUrl: ChitranshSaxena,
      linkedin: "https://www.linkedin.com/in/chitranshatlkdin/",
      instagram: "https://www.instagram.com/_.chitransh_saxena._/",
    },
    {
      name: "Rohan Jogale",
      role: "Managing Director",
      description:
        "Driving technical excellence with extensive full-stack development background.",
      imageUrl: RohanJogale,
      linkedin: "https://www.linkedin.com/in/rohan-jogale-534a90266/",
      instagram: "https://www.instagram.com/rohanj.05/",
    },
    {
      name: "Nandini Agrawal",
      role: "Chief Financial Officer",
      description:
        "Crafting product strategy with deep market insights and user-focused approach.",
      imageUrl: NandiniAgrawal,
      linkedin: "https://www.linkedin.com/in/nandini-agrawal-9a9825251/",
      instagram: "https://www.instagram.com/justnandinii/",
    },
    {
      name: "Vaishnavi Parolia",
      role: "Chief Operating Officer",
      description:
        "Crafting product strategy with deep market insights and user-focused approach.",
      imageUrl: VaishnaviParolia,
      linkedin: "https://www.linkedin.com/in/vaishnavi-parolia-b54a1425b/",
      instagram: "https://www.instagram.com/vaishnavi_parolia/",
    },
  ];
  return (
    
    
    <div className="app-origo">

      
      

      {/* About Section */}
      <section className="about-us bg-gradient-to-b from-gray-900 via-black to-black text-white container mx-auto px-4 py-24 text-center">
        <h1 className="custom-gradient text-6xl font-bold text-transparent mb-4">About Us</h1>
        <p className="leading-relaxed text-[17px] py-[2rem]"> 
          At AppOrigo, we specialize in protecting businesses with cost-effective, high-performance security
          solutions designed for the unique challenges of today's digital landscape. Our mission is to help companies
          operate securely and confidently by protecting critical assets from evolving cyber threats.
        </p>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <h2>
          OUR STORY
        </h2>
        <p>

        </p>
        <div className="features">
          <div className="expanded-feature-card">
            <p>AppOrigo began as the brainchild of five college students, driven by a shared ambition to make a meaningful impact in the tech world. In 2025, we embarked on a journey to create a company that would redefine how technology can empower individuals and businesses alike. <br /><br />

              Our mission was clear from the start: to provide innovative, reliable, and affordable solutions that bridge the gap between the ever-evolving world of technology and its users. With a deep passion for coding and problem-solving, we set out to build a platform that could cater to the unique needs of startups and enterprises, making technology more accessible for all. <br /><br />

              At AppOrigo, we believe that technology should be a tool for growth and innovation. Our team worked tirelessly to develop cutting-edge solutions with a focus on simplicity, scalability, and customer-centricity. From our early days of brainstorming ideas to building the first version of our platform, every step has been a reflection of our commitment to excellence. <br /><br />

              We are more than just a tech company; we are a community of creators and collaborators, fostering an environment where knowledge-sharing and innovation thrive. Through workshops, open forums, and resources, we actively engage with our users, enabling them to grow and succeed alongside us. <br /><br />

              As we continue to evolve and expand, our vision remains unchanged: to help businesses and developers turn their ideas into reality with powerful, intuitive solutions. With the support of our growing community and a relentless drive to push the boundaries of what’s possible, AppOrigo is on its way to becoming a transformative force in the tech industry. </p>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="core-principles">
        <h2>Our Core Principles</h2>
        <div className="principles">
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
      </section>

      {/* Team Section */}
      <div className="team  text-center">
        <div className="mb-6">
          <h2 className="mx-auto max-w-5xl text-4xl tracking-tight sm:text-6xl bg-gradient-to-r from-[#ef8e35] to-white bg-clip-text text-transparent mb-10">
            Meet Our Team
          </h2>
        </div>

        <p className="text-xl mb-1">
          A group of passionate individuals shaping the future, one step at a
          time.
        </p>
      </div>

      <div className=" px-8 space-y-8 pb-24">
              {/* First Row with 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
                {team.slice(0, 2).map((member) => (
                  <div
                    key={member.name}
                    className="group  place-content-center relative h-80 w-full bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#d69350] to-white opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      
                    {/* Team Member Image */}
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg object-top"
                    />
      
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Team Member Name */}
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {member.name}
                      </h3>
                      <h4>
                        {member.role}
                      </h4>
      
                     {/* Social Media Icons */}
                     <div className="flex space-x-4 mt-2">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        </a>
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition"
                          aria-label={`${member.name}'s Instagram`}
                        >
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
      
              {/* Second Row with 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8  justify-items-center max-w-5xl mx-auto">
                {team.slice(2).map((member) => (
                  <div
                    key={member.name}
                    className="group relative h-96  bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#ef8e35] to-white opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      
                    {/* Team Member Image */}
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg "
                    />
      
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Team Member Name */}
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {member.name}
                      </h3>
                      <h4>
                        {member.role}
                      </h4>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-2">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        </a>
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition"
                          aria-label={`${member.name}'s Instagram`}
                        >
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
      </div>
    </div>
  );
};

export default AppOrigo;
