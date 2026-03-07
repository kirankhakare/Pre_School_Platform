import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "/logo2.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 pt-12 pb-8 border-t-4 border-[#0B3D91]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid - Optimized Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* 1. School Info */}
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="w-44 mb-2 hover:scale-105 transition-transform" />
            <h2 className="text-2xl font-bold text-[#0B3D91] leading-tight">
              Adhyayan Kids School
            </h2>
            <p className="text-[16px] leading-snug text-gray-600 font-medium">
              Nurturing young minds through creative learning and joyful experiences.
            </p>
            {/* Social Icons - Compact style */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 rounded-lg bg-gray-100 text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links - Increased Font */}
          <div>
            <h3 className="text-lg font-bold text-[#0B3D91] mb-5 border-b-2 border-orange-400 w-fit">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-[17px] font-semibold hover:text-orange-500 transition-colors flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-orange-400 rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Classes - High Visibility */}
          <div>
            <h3 className="text-lg font-bold text-[#0B3D91] mb-5 border-b-2 border-orange-400 w-fit">
              Our Classes
            </h3>
            <ul className="space-y-3">
              {['Play Group', 'Nursery', 'Junior KG', 'Senior KG'].map((cls) => (
                <li key={cls} className="text-[17px] font-semibold text-gray-700 hover:text-[#0B3D91] cursor-pointer">
                  {cls}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact - Professional Look */}
          <div>
            <h3 className="text-lg font-bold text-[#0B3D91] mb-5 border-b-2 border-orange-400 w-fit">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[16px] font-medium">
                <div className="bg-blue-50 p-2 rounded-full"><Mail size={18} className="text-[#0B3D91]" /></div>
                info@school.com
              </li>
              <li className="flex items-center gap-3 text-[16px] font-medium">
                <div className="bg-blue-50 p-2 rounded-full"><Phone size={18} className="text-[#0B3D91]" /></div>
                +91 9876543210
              </li>
              <li className="flex items-start gap-3 text-[16px] font-medium">
                <div className="bg-blue-50 p-2 rounded-full"><MapPin size={18} className="text-[#0B3D91]" /></div>
                Pune, Maharashtra
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar - Clean & Slim */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-[15px] font-bold text-gray-500">
            © {currentYear} <span className="text-[#0B3D91]">Adhyayan Kids</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-[14px] font-bold">
            <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors uppercase tracking-tight">Privacy</Link>
            <Link to="/terms" className="hover:text-orange-500 transition-colors uppercase tracking-tight">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;