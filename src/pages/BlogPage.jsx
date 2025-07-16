import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../styles/BlogData";
import { motion } from "framer-motion";
import "../styles/BlogPage.css";


    const BlogPage = () => {
    return (

      <section className="blog-section py-20 bg-gradient-to-b from-[#0F111A] via-[#111623] to-[#090D18]">
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

                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:underline"
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
