import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function PublicNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle hamburger icon
  const menuIcon = isMobileMenuOpen ? "✕" : "☰";

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* Logo with playful bounce on hover */}
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo2.png"   // put your logo inside public folder
            alt="Adhyayan Kids Academy"
            className="h-12 w-auto group-hover:scale-105 transition duration-300"
          />
          <span className="text-white text-xl font-bold tracking-wide hidden sm:block">
            Adhyayan Kids Academy
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 relative">

          {/* Navigation Links with playful hover effect */}
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300 relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300 relative group"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/classes"
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300 relative group"
          >
            Classes
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/admission"
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300 relative group"
          >
            Admission
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/gallery"
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300 relative group"
          >
            Gallery
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300 relative group"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Sign Up Button - Links to Registration Page */}
          <Link
            to="/register"
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transform transition duration-200 flex items-center gap-2 shadow-md"
          >
            <span>📝</span> Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button with animated icon */}
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="md:hidden text-white text-4xl focus:outline-none transform transition duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {menuIcon}
        </button>
      </div>

      {/* Mobile Menu with slide-down animation */}
      <div
        className={`md:hidden bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 py-6" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-center gap-5 text-purple-600 font-semibold text-lg">

          <Link
            to="/"
            className="hover:bg-purple-100 w-full text-center py-3 transition flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>🏠</span> Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-purple-100 w-full text-center py-3 transition flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>📖</span> About
          </Link>
          <Link
            to="/classes"
            className="hover:bg-purple-100 w-full text-center py-3 transition flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>🎨</span> Classes
          </Link>
          <Link
            to="/admission"
            className="hover:bg-purple-100 w-full text-center py-3 transition flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>📝</span> Admission
          </Link>
          <Link
            to="/gallery"
            className="hover:bg-purple-100 w-full text-center py-3 transition flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>🖼️</span> Gallery
          </Link>
          <Link
            to="/contact"
            className="hover:bg-purple-100 w-full text-center py-3 transition flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>📞</span> Contact
          </Link>

          {/* Mobile Sign Up Button - Links to Registration Page */}
          <Link
            to="/register"
            className="w-full flex items-center justify-center gap-2 py-3 text-purple-600 hover:bg-purple-100 transition font-semibold border-t-2 border-purple-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>📝</span> Sign Up
          </Link>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce-sm {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-sm {
          animation: bounce-sm 1.5s infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}

export default PublicNavbar;