import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PublicNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={`fixed w-full z-50 transition-all duration-300
    ${scrolled ? "bg-white shadow-md py-3" : "bg-white py-4"}`}>

      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src="/logo2.png"
            alt="School Logo"
            className="h-12"
          />

          <div>

            <h1 className="text-lg md:text-xl font-bold text-[#0B3D91]">
              OctaWisdom
            </h1>

            <p className="text-xs md:text-sm text-gray-500">
              School Of Excellence
            </p>

          </div>

        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[17px] font-semibold text-gray-700">

          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/classes" label="Classes" />
          <NavItem to="/admission" label="Admission" />
          <NavItem to="/gallery" label="Gallery" />
          <NavItem to="/contact" label="Contact" />

          <Link
            to="/register"
            className="px-6 py-2 rounded-full text-white font-semibold
            bg-gradient-to-r from-blue-500 to-purple-600 shadow-md"
          >
            Apply Now →
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-[500px] py-6" : "max-h-0"}
        `}
      >

        <div className="flex flex-col gap-5 px-6 text-[16px] font-medium text-gray-700">

          <MobileItem to="/" label="Home" close={setMenuOpen} />
          <MobileItem to="/about" label="About" close={setMenuOpen} />
          <MobileItem to="/classes" label="Classes" close={setMenuOpen} />
          <MobileItem to="/admission" label="Admission" close={setMenuOpen} />
          <MobileItem to="/gallery" label="Gallery" close={setMenuOpen} />
          <MobileItem to="/contact" label="Contact" close={setMenuOpen} />

          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="mt-3 text-center py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-blue-500 to-purple-600 shadow-md"
          >
            Apply Now →
          </Link>

        </div>

      </div>

    </nav>

  );
}


/* Desktop Link */

function NavItem({ to, label }) {

  return (
    <Link
      to={to}
      className="hover:text-[#0B3D91] transition"
    >
      {label}
    </Link>
  );

}


/* Mobile Link */

function MobileItem({ to, label, close }) {

  return (
    <Link
      to={to}
      onClick={() => close(false)}
      className="hover:text-[#0B3D91]"
    >
      {label}
    </Link>
  );

}

export default PublicNavbar;