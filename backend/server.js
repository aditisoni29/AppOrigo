console.log("🟢 Starting server.js...");

const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import comment routes
const commentRoutes = require('./routes/comments');
const contactRoutes = require('./routes/contact');
const { connectToDatabase } = require('./config/database');

const app = express();

// Configure CORS to allow requests from frontend
app.use(cors({
  origin: [
    'http://localhost:3000', 
    'https://www.apporigotechnologies.co.in',
    'https://apporigotechnologies.co.in',
    process.env.FRONTEND_URL // Add this for flexibility
  ].filter(Boolean), // Remove undefined values
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Use comment routes
app.use('/api/comments', commentRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'MongoDB Comment Backend is running',
    timestamp: new Date().toISOString()
  });
});

// Global error handling
process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

const PORT = process.env.PORT || 5000;

// Initialize database connection and start server
async function startServer() {
  try {
    // Connect to MongoDB
    await connectToDatabase();
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 MongoDB Atlas connected successfully!`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
