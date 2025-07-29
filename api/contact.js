const nodemailer = require('nodemailer');
const AWS = require('aws-sdk');

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log("📩 Form submitted with data:", req.body);
  const { name, email, phone, referralSource, message } = req.body;

  // 🔍 Validation
  if (!name || !email || !phone || !referralSource || !message) {
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

    // 📧 Send email
    console.log("📧 Sending email...");
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission from AppOrigo Website',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nReferral Source: ${referralSource}\nMessage: ${message}`,
    });

    console.log("✅ Email sent successfully");

    // ☁️ Save to AWS S3
    console.log("🔧 Configuring AWS S3...");
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    const s3 = new AWS.S3();
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const fileName = `contact-submissions/${name}-${timestamp}.json`;
    const fileContent = JSON.stringify({ name, email, phone, referralSource, message }, null, 2);

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
      ContentType: 'application/json',
    };

    console.log("📤 Uploading to S3...");
    const result = await s3.upload(params).promise();
    console.log('✅ Form submission saved to S3:', result.Location);

    return res.status(200).json({
      success: 'Message sent and stored in AWS S3!',
      s3Url: result.Location,
    });

  } catch (error) {
    console.error("❌ Something failed:", error);
    return res.status(500).json({
      error: 'Failed to send message or store data.',
      details: error.message,
    });
  }
} 