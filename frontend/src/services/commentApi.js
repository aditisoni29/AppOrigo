// API service for comment operations
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : 'https://app-origo.vercel.app/api');

class CommentApiService {
  // Get comments for a specific blog post
  static async getComments(blogId) {
    try {
      const response = await fetch(`${API_BASE_URL}/comments/${blogId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch comments');
      }
      
      return data.data;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  }

  // Add a new comment
  static async addComment(commentData) {
    try {
      const response = await fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to add comment');
      }
      
      return data.data;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  }

  // Delete a comment
  static async deleteComment(blogId, commentId) {
    try {
      const response = await fetch(`${API_BASE_URL}/comments/${blogId}/${commentId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to delete comment');
      }
      
      return true;
    } catch (error) {
      console.error('Error deleting comment:', error);
      throw error;
    }
  }

  // Get comment count for a blog
  static async getCommentCount(blogId) {
    try {
      const response = await fetch(`${API_BASE_URL}/comments/count/${blogId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch comment count');
      }
      
      return data.count;
    } catch (error) {
      console.error('Error fetching comment count:', error);
      throw error;
    }
  }

  // Get all comments (for admin purposes)
  static async getAllComments() {
    try {
      const response = await fetch(`${API_BASE_URL}/comments`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch all comments');
      }
      
      return data.data;
    } catch (error) {
      console.error('Error fetching all comments:', error);
      throw error;
    }
  }
}

export default CommentApiService; 
