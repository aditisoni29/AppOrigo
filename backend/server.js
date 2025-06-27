
// Import required packages
const express = require('express');            // Web framework for handling API routes
const cors = require('cors');                  // Enables Cross-Origin Resource Sharing
const nodemailer = require('nodemailer');      // For sending emails
require('dotenv').config();                    // Loads environment variables from .env file

// Initialize the express app
const app = express();

// Middleware
app.use(cors());                               // Enable CORS for all requests
app.use(express.json());                       // Parse incoming JSON requests

// Route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  console.log("📩 Form submitted with data:", req.body);

  const { name, email, phone, message } = req.body;

  // Input validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("❌ Email validation failed");
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 10) {
    console.log("❌ Phone validation failed");
    return res.status(400).json({ error: 'Phone number must be at least 10 digits.' });
  }

  // Send email using nodemailer
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,         // From .env
        pass: process.env.EMAIL_PASS          // From .env
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,               // From .env
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
