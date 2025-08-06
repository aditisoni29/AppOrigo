const express = require('express');
const router = express.Router();
const { getCommentsCollection } = require('../config/database');

// GET /api/comments/:blogId - Get comments for a specific blog post
router.get('/:blogId', async (req, res) => {
  try {
    const { blogId } = req.params;
    const collection = await getCommentsCollection();
    
    const blogComments = await collection
      .find({ blogId: blogId })
      .sort({ timestamp: -1 }) // Newest first
      .toArray();
    
    res.json({
      success: true,
      data: blogComments,
      count: blogComments.length
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch comments',
      error: error.message
    });
  }
});

// POST /api/comments - Add a new comment
router.post('/', async (req, res) => {
  try {
    const { blogId, name, email, message } = req.body;
    
    // Validation
    if (!blogId || !name || !message) {
      return res.status(400).json({
        success: false,
        message: 'Blog ID, name, and message are required'
      });
    }
    
    // Create new comment
    const newComment = {
      _id: new Date().getTime().toString(), // MongoDB compatible ID
      blogId,
      name: name.trim(),
      email: email ? email.trim() : '',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      replies: [],
      createdAt: new Date()
    };
    
    const collection = await getCommentsCollection();
    const result = await collection.insertOne(newComment);
    
    // Return the inserted comment
    const insertedComment = await collection.findOne({ _id: newComment._id });
    
    res.status(201).json({
      success: true,
      data: insertedComment,
      message: 'Comment added successfully'
    });
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add comment',
      error: error.message
    });
  }
});

// DELETE /api/comments/:blogId/:commentId - Delete a specific comment
router.delete('/:blogId/:commentId', async (req, res) => {
  try {
    const { blogId, commentId } = req.params;
    
    const collection = await getCommentsCollection();
    
    // Check if comment exists
    const comment = await collection.findOne({ 
      _id: commentId, 
      blogId: blogId 
    });
    
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }
    
    // Delete the comment
    const result = await collection.deleteOne({ _id: commentId });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Comment deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete comment',
      error: error.message
    });
  }
});

// GET /api/comments/count/:blogId - Get comment count for a blog
router.get('/count/:blogId', async (req, res) => {
  try {
    const { blogId } = req.params;
    const collection = await getCommentsCollection();
    
    const count = await collection.countDocuments({ blogId: blogId });
    
    res.json({
      success: true,
      count: count
    });
  } catch (error) {
    console.error('Error fetching comment count:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch comment count',
      error: error.message
    });
  }
});

// GET /api/comments - Get all comments (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const collection = await getCommentsCollection();
    
    const allComments = await collection
      .find({})
      .sort({ timestamp: -1 })
      .toArray();
    
    // Group comments by blogId
    const groupedComments = {};
    allComments.forEach(comment => {
      if (!groupedComments[comment.blogId]) {
        groupedComments[comment.blogId] = [];
      }
      groupedComments[comment.blogId].push(comment);
    });
    
    res.json({
      success: true,
      data: groupedComments
    });
  } catch (error) {
    console.error('Error fetching all comments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch comments',
      error: error.message
    });
  }
});

module.exports = router; 