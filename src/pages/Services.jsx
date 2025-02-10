import React from "react";
import web from "../assets/Services/web.png";
import app from "../assets/Services/app.png";
import gd from "../assets/Services/gd.png";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 via-black to-black text-white container mx-auto px-4 py-24 text-center mb-14">
        <div className="container mx-auto text-center px-4">
          <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-[#ef8e35] to-white bg-clip-text text-transparent mb-10">Our Premium Services</h1>
          <p className="text-xl mb-8">Explore the wide range of services we offer to help you achieve your mental well-being goals.</p>
          <Link to="/contact">
          <button className="bg-[#ef8e35] hover:bg-black text-white font-semibold px-6 py-3 rounded-lg text-lg transition duration-300">
            Contact Us
          </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto max-w-6xl px-4 mb-10">
        <section className="flex flex-col gap-12">
          {/* Card 1 */}
          <div className="flex justify-between hover:shadow-lg transition duration-300 scale-105">
            <div className="flex-1 p-6 text-left">
              <h2 className="text-2xl font-bold">Web Development</h2>
              <p>Our team develops fast, secure, and responsive websites, from corporate sites to eCommerce platforms and web apps. Using React, Vue.js, Laravel, and WordPress, we ensure top-notch performance, SEO optimization, and a flawless user experience.</p>
            </div>
            <div className="w-3/5 h-64">
              <img src={web} alt="Image 1" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-between hover:shadow-lg transition duration-300 scale-105">
            <div className="w-3/5 h-64">
              <img src={app} alt="Image 2" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex-1 p-6 text-right">
              <h2 className="text-2xl font-bold">App Development</h2>
              <p>We build high-performance iOS, Android, and cross-platform apps using the latest technologies like Flutter and React Native. From custom development to API integrations and security, we create seamless, scalable solutions designed for growth.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-between hover:shadow-lg transition duration-300 scale-105">
            <div className="flex-1 p-6 text-left">
              <h2 className="text-2xl font-bold">Graphics Design</h2>
              <p>We craft intuitive, user-friendly designs that enhance engagement. Through wireframing, prototyping, and testing, we create responsive, mobile-first interfaces that look great and function perfectly across all devices.</p>
            </div>
            <div className="w-3/5 h-64">
              <img src={gd} alt="Image 3" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
