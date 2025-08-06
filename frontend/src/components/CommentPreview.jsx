import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  getCommentsForBlog, 
  formatCommentDateShort 
} from '../utils/commentUtils';

const CommentPreview = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);

    getCommentsForBlog(blogId)
      .then((data) => {
        if (isMounted) {
          setComments(data);
          setCommentCount(data.length);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError('Failed to load comments');
          console.error('Error loading comments:', err);
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => { isMounted = false; };
  }, [blogId]);



  if (isLoading) {
    return (
      <div className="mt-4 text-gray-400 text-xs">Loading comments...</div>
    );
  }

  if (error) {
    return (
      <div className="mt-4 text-red-400 text-xs">{error}</div>
    );
  }

  return (
    <div className="mt-4">
      {/* Comment Count */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
        <span>{commentCount} comment{commentCount !== 1 ? 's' : ''}</span>
      </div>

      {/* Recent Comments Preview */}
      {comments.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Recent Comments
          </h4>
          {comments.slice(0, 2).map((comment) => (
            <motion.div
              key={comment._id || comment.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 rounded-lg p-3 border border-white/5"
            >
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xs">
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-white truncate">
                      {comment.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatCommentDateShort(comment.timestamp)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    {comment.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {comments.length > 2 && (
            <div className="text-xs text-gray-500 text-center py-2">
              +{comments.length - 2} more comment{comments.length - 2 !== 1 ? 's' : ''}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentPreview; 