import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../styles/BlogData";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import CommentPreview from "../components/CommentPreview";
import "../styles/BlogPage.css";


    const BlogPage = () => {
    return (
      <section className="blog-section py-20 bg-gradient-to-b from-[#0F111A] via-[#111623] to-[#090D18]">
      <Helmet>
        <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AppOrigo Technologies Blog",
            "url": "https://www.apporigotechnologies.co.in/blog",
            "description": "Latest blogs and insights from AppOrigo Technologies on web development, app design, and tech innovation.",
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "Modern Web Development: Building Scalable Solutions for Tomorrow",
                "url": "https://www.apporigotechnologies.co.in/blog/modern-web-development",
                "datePublished": "2025-04-15",
                "author": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies"
                },
                "publisher": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.apporigotechnologies.co.in/static/media/fdgcfghgzs.e3ca80808acb72289777.webp"
                  }
                },
                "description": "Explore how AppOrigo Technologies builds scalable, future-proof web applications using modern frameworks, cloud-native architectures, and advanced optimization techniques for high performance and growth."
              },
              {
                "@type": "BlogPosting",
                "headline": "The Art of User Experience: Creating Intuitive Digital Interfaces",
                "url": "https://www.apporigotechnologies.co.in/blog/ui-ux-design",
                "datePublished": "2025-03-12",
                "author": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies"
                },
                "publisher": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.apporigotechnologies.co.in/static/media/fdgcfghgzs.e3ca80808acb72289777.webp"
                  }
                },
                "description": "Discover how AppOrigo crafts intuitive, accessible digital experiences through user research, design systems, and continuous UX optimization."
              },
              {
                "@type": "BlogPosting",
                "headline": "Mobile App Development: Crafting Solutions for the Digital Age",
                "url": "https://www.apporigotechnologies.co.in/blog/app-development",
                "datePublished": "2025-02-10",
                "author": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies"
                },
                "publisher": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.apporigotechnologies.co.in/static/media/fdgcfghgzs.e3ca80808acb72289777.webp"
                  }
                },
                "description": "Explore how AppOrigo builds secure, scalable, and user-focused mobile apps using native and cross-platform technologies."
              },

               {
                "@type": "BlogPosting",
                "headline": "From Idea to App store”: A Complete guide for App Development",
                "url": "https://www.apporigotechnologies.co.in/blog/custom-app-development",
                "datePublished": "2025-01-08",
                "author": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies"
                },
                "publisher": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.apporigotechnologies.co.in/static/media/fdgcfghgzs.e3ca80808acb72289777.webp"
                  }
                },
                "description": "From Idea to App Store: by AppOrigo Technologies is a comprehensive guide that walks you through every stage of mobile app development — from ideation and market research to UI/UX design, backend/frontend development, testing, launch, and post-launch maintenance. Perfect for startups and businesses, this guide helps you turn your vision into a successful, high-performing app."
              },

              {
                "@type": "BlogPosting",
                "headline": "From Clicks to Answers: The Shift from SEO to AEO",
                "url": "https://www.apporigotechnologies.co.in/blog/digital-marketing",
                "datePublished": "2025-01-08",
                "author": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies"
                },
                "publisher": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.apporigotechnologies.co.in/static/media/fdgcfghgzs.e3ca80808acb72289777.webp"
                  }
                },
                "description": " The Shift from SEO to AEO"
              },

              {
                "@type": "BlogPosting",
                "headline": "Visual Storytelling: The Power of Strategic Graphic Design",
                "url": "https://www.apporigotechnologies.co.in/blog/graphic-design",
                "datePublished": "2025-03-08",
                "author": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies"
                },
                "publisher": {
                  "@type": "Corporation",
                  "name": "AppOrigo Technologies",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.apporigotechnologies.co.in/static/media/fdgcfghgzs.e3ca80808acb72289777.webp"
                  }
                },
                "description": "AppOrigo crafts strategic, scalable graphic designs that elevate brand identity and visual storytelling across all platforms."
              }
            ]
            })}
        </script>
      </Helmet>
      <div className="blog-container max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((blog) => (
            <motion.div
              className="blog-card rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl hover:scale-105 transition-all duration-400 cursor-pointer"
              key={blog.id}
              whileHover={{ y: -8 }}
            >
              <div className="blog-image relative">
                <img
                  src={blog.images[0]}
                  alt={blog.category}
                  className="w-full h-[220px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-3 py-1 rounded-full text-xs shadow-lg">
                  {blog.category}
                </div>
              </div>

              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-gray-300 mb-6">
                  {blog.content[0]?.substring(0, 100)}...
                </p>

                <div className="flex justify-between items-center text-sm text-gray-400 mb-5">
                  <span>{blog.date}</span>
                  <span>
                    {Math.ceil(blog.content.join(" ").split(" ").length / 200)} min read
                  </span>
                </div>

                {/* Comment Preview */}
                <CommentPreview blogId={blog.id} />

                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:underline mt-4"
                >
                  Read Article <span className="cta-arrow">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      );
};

export default BlogPage;
