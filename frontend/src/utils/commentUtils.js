// Comment management utilities - API-based
import CommentApiService from '../services/commentApi';

export const getCommentsForBlog = async (blogId) => {
  try {
    return await CommentApiService.getComments(blogId);
  } catch (error) {
    console.error('Error loading comments:', error);
    return [];
  }
};

export const addCommentToBlog = async (commentData) => {
  try {
    return await CommentApiService.addComment(commentData);
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

export const deleteCommentFromBlog = async (blogId, commentId) => {
  try {
    return await CommentApiService.deleteComment(blogId, commentId);
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
};

export const getCommentCountForBlog = async (blogId) => {
  try {
    return await CommentApiService.getCommentCount(blogId);
  } catch (error) {
    console.error('Error getting comment count:', error);
    return 0;
  }
};

export const getAllBlogComments = async () => {
  try {
    return await CommentApiService.getAllComments();
  } catch (error) {
    console.error('Error getting all comments:', error);
    return {};
  }
};

export const formatCommentDate = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatCommentDateShort = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}; 