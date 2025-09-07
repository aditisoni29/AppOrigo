import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../styles/BlogData";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import CommentPreview from "../components/CommentPreview";
import "../styles/BlogPage.css";


const CATEGORIES = [
  "All",
  "Tech Insights",
  "Startup Insights",
  "Development",
  "Client Testimonials"
];

const CATEGORY_MAP = {
  "Tech Insights": ["Web Development", "App Development", "UI/UX Design", "Custom App Development"],
  "Startup Insights": ["Digital Marketing"],
  "Development": ["Web Development", "App Development", "Custom App Development", "UI/UX Design", "Graphic Design"],
  "Client Testimonials": ["Client Testimonials"] // Adjust if/when you add such posts
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering logic
  const categoryFilteredBlogs = selectedCategory === "All"
    ? blogData
    : blogData.filter(blog => {
        const mapped = CATEGORY_MAP[selectedCategory] || [];
        return mapped.includes(blog.category);
      });

  const filteredBlogs = categoryFilteredBlogs.filter((blog) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const title = (blog.title || "").toLowerCase();
    const content = (blog.content || []).join(" ").toLowerCase();
    const category = (blog.category || "").toLowerCase();
    return title.includes(q) || content.includes(q) || category.includes(q);
  });

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
              },
              {
                "@type": "BlogPosting",
                "headline": "GEO Explained: Winning Visibility in the Age of ChatGPT and AI Search",
                "url": "https://www.apporigotechnologies.co.in/blog/geo-explained",
                "datePublished": "2025-09-07",
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
                "description": "This blog explains Generative Engine Optimization (GEO) — the practice of making brands visible inside AI-generated answers on platforms like ChatGPT, Google SGE, and Perplexity. It compares GEO with SEO and AEO, highlights why it’s crucial in today’s AI-driven search landscape, and outlines practical strategies to future-proof your digital presence."
              },
              {
                "@type": "BlogPosting",
                "headline": "What’s Next in Digital Marketing? Key Trends for Businesses",
                "url": "https://www.apporigotechnologies.co.in/blog/digital-marketing-trends",
                "datePublished": "2025-09-07",
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
                "description": "This blog highlights the key trends shaping the future of digital marketing, from AI and automation to content evolution and social media shifts, helping businesses stay ahead in a fast-changing landscape."
              },
              {
                "@type": "BlogPosting",
                "headline": "AI in Mobile Applications: Pros, Cons and Future Potential",
                "url": "https://www.apporigotechnologies.co.in/blog/ai-in-mobile-applications",
                "datePublished": "2025-09-07",
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
                "description": "This blog explores how AI is reshaping mobile app development — from cost reduction and faster launches to personalized user experiences and enhanced security — while addressing its challenges and future potential with 5G, conversational AI, and advanced cybersecurity."
              }
            ]
            })}
        </script>
      </Helmet>
      <div className="blog-container max-w-7xl mx-auto px-4">
        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 text-sm shadow-md
                  ${selectedCategory === cat
                    ? "bg-gradient-to-r from-orange-400 to-yellow-400 text-black border-orange-300"
                    : "bg-white/10 text-white border-white/20 hover:bg-orange-400 hover:text-black hover:border-orange-300"}
                `}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <form className="w-full md:w-auto md:ml-auto" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="blog-search" className="sr-only">Search blogs</label>
            <input
              id="blog-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs..."
              className="w-full md:w-72 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-full px-4 py-2 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
              aria-label="Search blogs"
            />
          </form>
        </div>
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog) => (
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
