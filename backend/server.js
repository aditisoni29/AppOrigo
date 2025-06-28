console.log("🟢 Starting server.js...");

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  console.log("📩 Form submitted with data:", req.body);
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    console.log("❌ Validation error: Missing fields");
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("❌ Validation error: Invalid email");
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 10) {
    console.log("❌ Validation error: Phone number too short");
    return res.status(400).json({ error: 'Phone number must be at least 10 digits.' });
  }

  try {
    console.log("✅ Entered try block");

    console.log("📧 Sending email...");
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    console.log("✅ Email sent successfully");

    console.log("🔧 Configuring AWS S3...");
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    const s3 = new AWS.S3();
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const fileName = `contact-submissions/${name}-${timestamp}.json`;
    const fileContent = JSON.stringify({ name, email, phone, message }, null, 2);

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
      ContentType: 'application/json',
    };

    console.log("📤 Prepared S3 params:", params);

    const result = await s3.upload(params).promise();
    console.log('✅ Form submission saved to S3:', result.Location);

    return res.status(200).json({ success: 'Message sent and stored in AWS S3!', s3Url: result.Location });

  } catch (error) {
    console.error("❌ Something failed:", error);
    return res.status(500).json({ error: 'Failed to send message or store data.', details: error.message });
  }
  process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
