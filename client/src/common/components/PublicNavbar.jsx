import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PublicNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuIcon = isMobileMenuOpen ? "✕" : "☰";

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white shadow-lg py-2"
        : "bg-transparent py-4"
        }`}
    >
      {/* Navbar Container */}
      <div className="w-full px-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo2.png"
            alt="Adhyayan Kids Academy"
            className="h-12 w-auto"
          />

          <span className="text-xl font-bold hidden sm:block text-black">
            OctaWisdom <br />School Of Excellence
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/classes" label="Classes" />
          <NavLink to="/admission" label="Admission" />
          <NavLink to="/gallery" label="Gallery" />
          <NavLink to="/contact" label="Contact" />

          {/* Sign Up Button */}
          <Link
            to="/register"
            className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 rounded-xl font-bold shadow-md transition"
          >
            SignUp
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-3xl text-black"
        >
          {menuIcon}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-lg py-6">
          <div className="flex flex-col items-center gap-5 text-gray-700 font-medium">

            <MobileLink to="/" label="Home" closeMenu={setIsMobileMenuOpen} />
            <MobileLink to="/about" label="About" closeMenu={setIsMobileMenuOpen} />
            <MobileLink to="/classes" label="Classes" closeMenu={setIsMobileMenuOpen} />
            <MobileLink to="/admission" label="Admission" closeMenu={setIsMobileMenuOpen} />
            <MobileLink to="/gallery" label="Gallery" closeMenu={setIsMobileMenuOpen} />
            <MobileLink to="/contact" label="Contact" closeMenu={setIsMobileMenuOpen} />

            <Link
              to="/register"
              className="bg-blue-500 text-white px-6 py-2 rounded-xl font-bold shadow-md transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

/* Desktop Navigation Link */
function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="text-xl font-semibold text-black hover:text-pink-500 transition"
    >
      {label}
    </Link>
  );
}

/* Mobile Navigation Link */
function MobileLink({ to, label, closeMenu }) {
  return (
    <Link
      to={to}
      onClick={() => closeMenu(false)}
      className="hover:text-pink-500"
    >
      {label}
    </Link>
  );
}

export default PublicNavbar;


