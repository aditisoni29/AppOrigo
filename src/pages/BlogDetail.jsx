import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../styles/BlogData";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function BlogDetail() {
  const { blogId } = useParams();
  const blog = blogData.find((b) => b.id === blogId);
  const contentRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wordCount = blog?.content?.join(" ").split(" ").length || 0;
  const readTime = Math.ceil(wordCount / 200);

  if (!blog) {
    return <div className="text-center text-red-500 text-xl mt-20">Blog not found</div>;
  }

  return (
    <div className="bg-gradient-to-br from-[#0F111A] via-[#141728] to-[#0B0E18] min-h-screen py-12 px-4 md:px-8">
      <Helmet>
        <title>{blog.title} | AppOrigo Blog</title>
        <meta name="description" content={blog.content[0].substring(0, 150)} />
        <link rel="canonical" href={`https://www.apporigotechnologies.co.in/blog/${blog.id}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.content[0].substring(0, 150)} />
        <meta property="og:image" content={blog.images[0]} />
        <meta property="og:url" content={`https://www.apporigotechnologies.co.in/blog/${blog.id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.content[0].substring(0, 150)} />
        <meta name="twitter:image" content={blog.images[0]} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: blog.title,
          description: blog.content[0].substring(0, 150),
          image: blog.images[0],
          author: 'AppOrigo Technologies',
          datePublished: blog.date,
          mainEntityOfPage: `https://www.apporigotechnologies.co.in/blog/${blog.id}`
        })}</script>
      </Helmet>

      <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-50">
        <div style={{ width: `${scrollProgress}%` }} className="h-full bg-orange-500 transition-all duration-300"></div>
      </div>

      <motion.div className="max-w-5xl mx-auto bg-white/5 rounded-3xl border border-white/10 p-10 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="text-sm text-gray-400 mb-4 flex flex-wrap items-center">
          <Link to="/" className="hover:text-orange-500 focus:outline-none">Home</Link>
          <span className="mx-2">»</span>
          <Link to="/" className="hover:text-orange-500 focus:outline-none">Blog</Link>
          <span className="mx-2">»</span>
          <span className="text-white font-medium">{blog.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-snug">
          {blog.title}
        </h1>

        {/* Ultra smooth animated Orange Line */}
        <motion.div 
          className="h-1 bg-orange-500 mb-6 rounded"
          initial={{ width: 0 }} 
          animate={{ width: "100%" }} 
          transition={{ duration: 0.5, ease: "anticipate" }}
        ></motion.div>

        {/* Single Image */}
        <motion.div className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}>

          <motion.img 
            src={blog.images[0]} 
            alt={blog.title + ' - AppOrigo Blog'} 
            className="w-full h-[400px] object-cover object-center rounded-xl transition-transform duration-300 ease-out"
            loading="lazy"
            whileHover={{ scale: 1.035 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>

        <div className="text-gray-400 mb-10 text-sm md:text-base">
          Published on {blog.date} • {readTime} min read • <span className="text-indigo-400">{blog.category}</span>
        </div>

        <div ref={contentRef} className="text-gray-300 leading-relaxed space-y-6">
          <p><b>{blog.title}</b>: {blog.content[0]}</p>
          {blog.content.slice(1).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default BlogDetail;
