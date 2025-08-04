import React, { useState } from "react";

function BlogContentPagination({ blog }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = blog.content.length;

  return (
    <div>
      <div className="text-lg leading-relaxed text-gray-300 mb-10">
        <p>{blog.content[currentPage]}</p>
      </div>

      <div className="flex justify-between text-white mb-10">
        <button
          onClick={() => setCurrentPage((currentPage - 1 + totalPages) % totalPages)}
          className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Previous
        </button>

        <span className="self-center">Page {currentPage + 1} of {totalPages}</span>

        <button
          onClick={() => setCurrentPage((currentPage + 1) % totalPages)}
          className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BlogContentPagination;
