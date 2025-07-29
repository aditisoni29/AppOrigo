import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { blogData } from "../styles/BlogData";

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  
  // Get the current path and split it into segments
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // Map of route paths to more user-friendly names
  const routeNameMap = {
    'services': 'Services',
    'career': 'Careers',
    'contact': 'Contact Us',
    'mission': 'Our Mission',
    'about': 'About Us',
    'terms': 'Terms of Service',
    'privacy': 'Privacy Policy',
    'blog': 'Blog'
  };
  
  // Function to truncate text if it's too long
  const truncateText = (text, maxLength = 30) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  
  // Create breadcrumb items with proper formatting
  const breadcrumbItems = pathSegments.map((segment, index) => {
    // Check if we have a predefined name for this route
    let displayName = routeNameMap[segment];
    
    // If not found in our map, format the segment for display
    if (!displayName) {
      // Handle blog/:blogId case - get the actual blog title
      if (pathSegments[index-1] === 'blog') {
        // Try to find the blog post by ID
        const blogPost = blogData.find(blog => blog.id === segment);
        if (blogPost) {
          displayName = truncateText(blogPost.title);
        } else {
          displayName = 'Article';
        }
      } else {
        // Default formatting (capitalize and replace hyphens with spaces)
        displayName = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
    }
    
    // Build the URL for this breadcrumb item
    const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
    
    // Check if this is the last item
    const isLast = index === pathSegments.length - 1;
    
    return {
      text: displayName,
      url,
      isLast
    };
  });

  // If there are no segments, we're on the home page
  if (breadcrumbItems.length === 0) {
    return null; // Don't show breadcrumbs on the home page
  }

  return (
    <nav className="breadcrumb-container" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {/* Home link is always first */}
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
        </li>
        
        {/* Render all breadcrumb items */}
        {breadcrumbItems.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${item.isLast ? 'active' : ''}`}>
            {item.isLast ? (
              <span>{item.text}</span>
            ) : (
              <>
                <Link to={item.url}>{item.text}</Link>
                <span className="breadcrumb-separator">/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 