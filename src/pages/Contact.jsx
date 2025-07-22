import React, { useState } from 'react';
import { Loader2, Mail, MapPin } from 'lucide-react';
import "../styles/App.css";
import "../styles/contact.css";
import { Helmet } from "react-helmet";

export default function Contact() {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referralSource: '',
    message: ''
  });

  // State to indicate if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Validate form fields before submission
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please fill out this field.";
    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please fill out this field.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }
    if (!formData.referralSource || formData.referralSource === "") {
    newErrors.referralSource = "Please select or enter how you heard about us.";
    }
    if (!formData.message.trim()) newErrors.message = "Please fill out this field.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set error messages if validation fails
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('https://www.apporigotechnologies.co.in/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', referralSource: '', message: '' }); // Clear form after success
      } else {
        alert(result.error || 'Failed to send message.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false); // Re-enable submit button
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        {/* Meta tags for SEO */}
        <title>Contact AppOrigoTechnologies | Get in Touch</title>
        <meta name="description" content="Contact AppOrigoTechnologies for custom web, app, and design solutions." />
      </Helmet>

      {/* Background overlay */}
      <div className="contact-background-overlay"></div>

      <div className="contact-container">
        <div className="contact-content-wrapper">

          {/* Page header */}
          <div className="contact-header">
            <h1 className="contact-title">Contact AppOrigoTechnologies</h1>
            <p className="contact-subtitle">Ask for a quotation from us! For any queries, contact us today.</p>
          </div>

          <div className="contact-grid">
            {/* Contact form section */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">

                {/* Name field */}
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-yellow-400 transition-all"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                </div>

                {/* Email and phone fields side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-yellow-400 transition-all resize-none"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                </div>

                {/*How did you hear about us field */}
                <div className="form-group">
                  <label htmlFor="referralSource" className="text-white block mb-2">How did you hear about us?</label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-yellow-400 transition-all"
                    required
                  >
                    <option value="">-- Select an option --</option>
                    <option value="Google Search">Google Search</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Referral">Referral</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.referralSource && <p className="text-red-400 text-sm">{errors.referralSource}</p>}
                </div>


                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#e29349] text-black py-2 px-6 rounded font-medium hover:text-black transition-all flex items-center justify-center space-x-2 disabled:opacity-50 w-24"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <span>SEND</span>}
                </button>
              </form>
            </div>

            {/* Contact info section */}
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-[#e29349]">Contact Information:</h2>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-[#e29349]" />
                  <p>Jaipur, Rajasthan</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#e29349]" />
                  <p>info.apporigo@gmail.com</p>
                </div>
                <div className="pt-6 border-t border-gray-700">
                  <p className="text-gray-400 mb-4">Working Hours:</p>
                  <p className="text-gray-300 mb-1">Monday to Friday</p>
                  <p className="text-gray-300">9 am to 6 pm</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
