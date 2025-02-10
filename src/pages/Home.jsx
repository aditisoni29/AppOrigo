import React from "react";
import "../styles/App.css";
import Button from "../components/Button";
import Careerimg from "../assets/careers_img.png";
import fact_img from "../assets/fact-img.png";
import hero_bg_vid from "../assets/hero-video.mp4";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <div className="hero-section">
        <video autoPlay loop muted className="video-background">
          <source src={hero_bg_vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1 className="mx-auto max-w-6xl text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-[#ef8e35] to-white bg-clip-text text-transparent mb-10">
          Be <span>Fearless</span> Online With Our <br />
          Advanced <span>Development</span> Solutions.
        </h1>
        <p  className="leading-relaxed text-[17px]">
        AppOrigo is a tech startup, focused on delivering innovative, reliable, and user-friendly solutions.
        <br /> We aim to bridge the gap between technology and accessibility, empowering businesses and individuals for a more connected future.
        </p>
        <div className="cta-buttons">
         <Link to="/contact">
         <button>Contact us</button>
         </Link>
         </div>
      </div>

      <section className="service-section">
      <div><h2>Check out our <span>Services</span></h2></div>
        
      <div class="ag-format-container">
        <div class="ag-courses_box">

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Web Development
              </div>

              <div class="ag-courses-item_date-box">
                
                <span class="ag-courses-item_date text-[17px]">
                We create custom mobile apps that meet your business needs, blending innovation and functionality for a user-centric experience from start to finish.
                </span>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                App development
              </div>

              <div class="ag-courses-item_date-box">

                <span class="ag-courses-item_date text-[17px]">
                Transform ideas into impactful websites with our advanced web development services, focusing on sleek designs and robust functionality to drive engagement and growth.              
                </span>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                UI/UX
              </div>

              <div class="ag-courses-item_date-box">

                <span class="ag-courses-item_date text-[17px]">
                Our UI/UX design services combine creativity and strategy to craft visually stunning, intuitive interfaces, ensuring every interaction maximizes user satisfaction.                  
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
      
      </section>

      <section className="Fact-blog">
        <div className="wrapper">
          <figure className="fact-card">
            
            <figcaption>
              <blockquote>
                Take the right step now and choose AppOrigo!
              </blockquote>
              <cite>According to the Statista report, more than 299 billion apps have been downloaded by users worldwide by 2023.
              </cite>
              
            </figcaption>

            <img
              src={fact_img}
              width="340"
              height="340"
              alt=""
            />
          </figure>
        </div>

      </section>

      <section className="careers">
        <div className="image-container">

          <img src={Careerimg} alt="career image"/>

          <div className="image-container-div1">
            <h3>Your <span>Talent</span>, Our Mission, <span>Unlimited</span>  Potential. </h3>
            <p className="text-[17px]">Join our team at <span>AppOrigo</span> and unleash your talent with a mission-driven community. Grow with us and discover your unlimited potential today!</p>
            <div className="cta-buttons">
         <Link to="/career">
         <button>Apply Now!</button>
         </Link>
         </div>
          </div>
          
        </div>
        
      </section>
    </div>
    
    
  );
}

export default Home;