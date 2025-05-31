import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Loader2, Plus } from 'lucide-react';
import "../styles/App.css";
import "../styles/contact.css";


export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://submit-form.com/xy1UkYMdQ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'form_v1_V6YfjArlnTaI7UjOzmhG8j4A',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="contact-page">
      {/* World Map Background */}
      <div className="contact-background-overlay"></div>
      
      <div className="contact-container">
        <div className="contact-content-wrapper">
          {/* Header Section */}
          <div className="contact-header">
            <h1 className="contact-title">
              Contact us
            </h1>
            <p className="contact-subtitle">Ask for a quotation from us!</p>
          </div>

          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all resize-none"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#e29349] text-black py-2 px-6 rounded font-medium hover:text-[black] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 w-24"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>SEND</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-[#e29349]">
                Contact Information:
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="text-[#e29349]" />
                  <div>
                    {/* <p>Jaipur, Rajasthan</p> */}
                    <p>Jaipur, Rajasthan</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-300">
                  <Phone className="text-[#e29349]" />
                  <p>Call us: +91 9711254544</p>
                </div>

                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="text-[#e29349]" />
                  <p>info.apporigo@gmail.com</p>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <p className="text-gray-400 mb-4">Working Hours:</p>
                  <p className="text-gray-300 mb-1">Monday to Friday</p>
                  <p className="text-gray-300">9 am to 6 pm</p>
                </div>

                {/* <div className="pt-6 border-t border-gray-700">
                  <p className="text-gray-400 mb-4">Follow Us:</p>
                  <div className="flex space-x-4">
                    {['FB', 'TW', 'IN', 'LI'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition-all text-sm font-medium"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}