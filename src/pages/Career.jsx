import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import job_icon from "../assets/job_opening_icon.jpg";

const jobs = [
  {
    title: "App Dev Intern",
    icon: job_icon,
    postedDate: "05 Jan 2024",
    duration: "3 month",
    stipend: "Undisclosed",
  },
  {
    title: "Web Dev Intern",
    icon: job_icon,
    postedDate: "05 Jan 2024",
    duration: "3 month",
    stipend: "Undisclosed",
  },
  {
    title: "Graphic Design Intern",
    icon: job_icon,
    postedDate: "05 Jan 2024",
    duration: "3 month",
    stipend: "Undisclosed",
  },
];

// Reusable Button Component
const Button = ({ children, className, ...props }) => {
  return (
    <a
      href="https://forms.gle/SQAzdLXTMzREMXX88"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className={`bg-[#ef8e35] px-8 py-2 text-lg mt-10 text-white rounded hover:bg-black transition ${className}`}
        {...props}
      >
        {children}
      </button>
    </a>
  );
};

// Job Card Component
const JobCard = ({ title, icon, postedDate, duration, stipend }) => {
  return (
    <div className="jobcard">
      <img src={icon} alt={title} className="h-16 w-16 mb-4 mx-auto" />
      <h3 className="text-2xl font-semibold text-white text-center">{title}</h3>
      <p className="text-gray-400 text-sm mt-2 text-center">Posted: {postedDate}</p>
      <p className="text-gray-400 text-sm mt-1 text-center">Duration: {duration}</p>
      <p className="text-gray-400 text-sm mt-1 text-center">Stipend: {stipend}</p>
      <Button className={" block py-1 mx-auto"}>Apply Now</Button>
    </div>
  );
};

export default function Career() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center mb-14">
        <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">
        
          <span className="bg-gradient-to-r from-[#ef8e35] to-white bg-clip-text text-transparent">
          Be a Part of Something Extraordinary.
          </span>
        </h1>
        
        <Button>Join Our Team</Button>
      </section>

      {/* Job Listings */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
      </section>
    </div>
  );
}
