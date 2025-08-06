const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI;

// Database and collection names
const DB_NAME = 'apporigo_comments';
const COLLECTION_NAME = 'comments';

let client;
let db;

// Connect to MongoDB
async function connectToDatabase() {
  try {
    if (client) {
      return { client, db };
    }

    console.log('🔌 Connecting to MongoDB Atlas...');
    client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log('✅ Connected to MongoDB Atlas successfully!');

    db = client.db(DB_NAME);
    return { client, db };
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    throw error;
  }
}

// Get database instance
async function getDatabase() {
  if (!db) {
    await connectToDatabase();
  }
  return db;
}

// Get comments collection
async function getCommentsCollection() {
  const database = await getDatabase();
  return database.collection(COLLECTION_NAME);
}

// Close database connection
async function closeDatabase() {
  if (client) {
    await client.close();
    console.log('🔌 MongoDB connection closed');
  }
}

// Handle application shutdown
process.on('SIGINT', async () => {
  await closeDatabase();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await closeDatabase();
  process.exit(0);
});

module.exports = {
  connectToDatabase,
  getDatabase,
  getCommentsCollection,
  closeDatabase,
  DB_NAME,
  COLLECTION_NAME
}; 