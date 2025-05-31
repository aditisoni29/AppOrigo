import React from "react";
import "../styles/App.css";
import "../styles/career.css";
import { Link } from "react-router-dom";
import Button, { GlowButton } from "../components/Button";
import job_icon from "../assets/job_opening_icon.jpg";
import mission_img from '../assets/mission_img.png';

const jobs = [
  { title: "Frontend Developer", location: "Remote", type: "Internship" },
  { title: "Backend Developer", location: "Remote", type: "Internship" },
  { title: "Graphic Designer", location: "Remote", type: "Internship" },
  { title: "Video Editor", location: "Remote", type: "Internship" },
  { title: "Content Writer", location: "Remote", type: "Internship" },
  { title: "Sales & Marketing", location: "Remote", type: "Internship" },
];

const JobCard = ({ title, location, type }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>We are looking for a skilled {title} to join our dynamic team.</p>
      <div className="job-meta">
        <span className="meta-item"><i className="fas fa-map-marker-alt"></i> {location}</span>
        <span className="meta-item"><i className="fas fa-briefcase"></i> {type}</span>
      </div>
      <Button 
        as={Link} 
        to="/contact" 
        variant="primary"
        size="medium"
      >
        Apply Now
      </Button>
    </div>
  );
};

export default function Career() {
  return (
    <>
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-content">
          <h1>
            Be a Part of Something Extraordinary.
          </h1>
          <Button 
            as={Link} 
            to="/contact"
            size="large"
            variant="glow"
            glow={true}
          >
            Join Our Team
          </Button>
        </div>
      </section>

      {/* Job Listings */}
      <section className="job-listings-section">
        <div className="job-listings-container">
          <div className="job-grid">
            {jobs.map((job) => (
              <JobCard key={job.title} {...job} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}