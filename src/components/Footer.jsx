import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, Linkedin } from "lucide-react";
import companyLogo from "../assets/Screenshot_2024-11-26_at_9.57.43_AM.png";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <img src={companyLogo} className="w-28 h-28" />

            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-orange-400 text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition duration-150">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition duration-150">About Us</Link></li>

            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-orange-400 text-xl font-semibold mb-4">Helpful Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-orange-400 transition duration-150">Services</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-orange-400 transition duration-150">Terms & Condition</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition duration-150">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-400 text-xl font-semibold mb-3">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 text-orange-400" />
                <span>+91 9711254544</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-orange-400" />
                <span>info.apporigo@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center  gap-4 mt-12 pt-8 border-t border-gray-800">
          <Link to="https://www.linkedin.com/company/apporigo" className="bg-orange-400 p-2 rounded-full hover:bg-orange-500 transition-colors" target="_blank">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link to="https://www.instagram.com/app.origo/" className="bg-orange-400 p-2 rounded-full hover:bg-orange-500 transition-colors" target="_blank">
            <Instagram className="h-5 w-5" />
          </Link>
          <div className="ml-auto">2025 @AppOrigo Technologies</div>
        </div>

      </div>
    </footer>
  );
}
