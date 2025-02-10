// Import necessary dependencies
import React from 'react';
import '../styles/App.css';
import mission_img from '../assets/mission_img.png';

const MissionPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="mission-page">
        <img src={mission_img} alt="career image"/>
        <p className="mx-auto max-w-5xl text-2xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-[#ff7b00] to-white bg-clip-text text-transparent py-2 text-center">Empowering the world through innovation and technology</p>
      </div>

      {/* Mission Content Section */}
      <section className="mission-content">
        <h2>What Drives Us</h2>
        <p>
          At AppOrigo, our mission is to deliver cutting-edge solutions that simplify lives,
          foster creativity, and make a positive impact on communities worldwide. We are driven by our
          passion for innovation and our commitment to creating a better future for everyone.
        </p>

        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Innovation:</strong> Continuously pushing boundaries to bring new ideas to life.</li>
          <li><strong>Integrity:</strong> Building trust through transparency and accountability.</li>
          <li><strong>Customer Focus:</strong> Delivering value and exceeding expectations.</li>
          <li><strong>Sustainability:</strong> Ensuring our actions contribute to a greener planet.</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
        To become a global leader in technological advancements, empowering businesses to scale beyond boundaries, helping individuals achieve their fullest potential, and enabling organizations to transform their digital presence. We're committed to delivering solutions that maximize your ROI, streamline operations, and position your business at the forefront of innovation - because your success is our success.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <div className="mission-cta">
        <h2>Get in Touch!</h2>
        <p>
        We’d love to hear from you! Let’s start a conversation about shaping the future together.
        </p>
        <div className='cta-buttons'>
            <button>Contact us</button>
        </div>
        
      </div>
    </>
  );
};

export default MissionPage;