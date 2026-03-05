import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function PublicNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isMobileLoginOpen, setIsMobileLoginOpen] = useState(false); // new state for mobile login
  const dropdownRef = useRef(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLoginDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            to="/contact"
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300 relative group"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Login Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
              className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transform transition duration-200 flex items-center gap-2 shadow-md"
            >
              <span>🔑</span> Login
            </button>

            {isLoginDropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl py-3 border-2 border-purple-200 animate-fadeIn">
                <Link
                  to="/admin/login"
                  className="block px-5 py-3 text-purple-700 hover:bg-purple-50 hover:text-purple-900 transition flex items-center gap-3 rounded-lg"
                  onClick={() => setIsLoginDropdownOpen(false)}
                >
                  <span className="text-xl">👩‍💼</span> Admin Login
                </Link>
                <Link
                  to="/teacher/login"
                  className="block px-5 py-3 text-purple-700 hover:bg-purple-50 hover:text-purple-900 transition flex items-center gap-3 rounded-lg"
                  onClick={() => setIsLoginDropdownOpen(false)}
                >
                  <span className="text-xl">👩‍🏫</span> Teacher Login
                </Link>
                <Link
                  to="/parent/login"
                  className="block px-5 py-3 text-purple-700 hover:bg-purple-50 hover:text-purple-900 transition flex items-center gap-3 rounded-lg"
                  onClick={() => setIsLoginDropdownOpen(false)}
                >
                  <span className="text-xl">👪</span> Parent Login
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button with animated icon */}
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            // Close mobile login submenu when closing main menu
            if (isMobileMenuOpen) setIsMobileLoginOpen(false);
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
            to="/contact"
            className="hover:bg-purple-100 w-full text-center py-3 transition flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>📞</span> Contact
          </Link>

          {/* Mobile Login Toggle Button */}
          <div className="w-full">
            <button
              onClick={() => setIsMobileLoginOpen(!isMobileLoginOpen)}
              className="w-full flex items-center justify-center gap-2 py-3 text-purple-600 hover:bg-purple-100 transition font-semibold"
            >
              <span>🔑</span> Login
              <span className="text-xl">{isMobileLoginOpen ? "▲" : "▼"}</span>
            </button>

            {/* Mobile Login Submenu (collapsible) */}
            <div
              className={`transition-all duration-300 overflow-hidden ${isMobileLoginOpen ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="flex flex-col items-center bg-purple-50 py-2">
                <Link
                  to="/admin/login"
                  className="w-full text-center py-3 hover:bg-purple-200 transition flex items-center justify-center gap-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileLoginOpen(false);
                  }}
                >
                  <span>👩‍💼</span> Admin Login
                </Link>
                <Link
                  to="/teacher/login"
                  className="w-full text-center py-3 hover:bg-purple-200 transition flex items-center justify-center gap-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileLoginOpen(false);
                  }}
                >
                  <span>👩‍🏫</span> Teacher Login
                </Link>
                <Link
                  to="/parent/login"
                  className="w-full text-center py-3 hover:bg-purple-200 transition flex items-center justify-center gap-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileLoginOpen(false);
                  }}
                >
                  <span>👪</span> Parent Login
                </Link>
              </div>
            </div>
          </div>

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