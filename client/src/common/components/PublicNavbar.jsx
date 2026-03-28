import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function PublicNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={`fixed w-full z-50 transition-all duration-300
    ${scrolled ? "bg-white shadow-lg py-3" : "bg-white py-4"}`}>

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">

          <img
            src="/logo.png"
            alt="School Logo"
            className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
          />

          <div>

            <h1 className="text-lg md:text-2xl font-bold text-[#2F4C92] leading-tight">
              OctaWisdom
            </h1>

            <p className="text-xs md:text-sm text-gray-500">
              School Of Excellence
            </p>

          </div>

        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[18px] font-semibold text-gray-700">

          <NavItem to="/" label="Home" location={location}/>
          <NavItem to="/about" label="About" location={location}/>
          <NavItem to="/classes" label="Classes" location={location}/>
          <NavItem to="/admission" label="Admission" location={location}/>
          <NavItem to="/common-gallery" label="Gallery" location={location}/>
          <NavItem to="/career" label="Career" location={location}/>
          <NavItem to="/contact" label="Contact" location={location}/>

          <Link
            to="/register"
            className="px-6 py-2.5 text-[16px] rounded-full text-white font-semibold
            bg-[#E87D1E] hover:bg-[#cf6b14]
            transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Apply Now →
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#2F4C92]"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-xl overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-[500px] py-6" : "max-h-0"}
        `}
      >

        <div className="flex flex-col gap-6 px-6 text-[17px] font-medium text-gray-700">

          <MobileItem to="/" label="Home" close={setMenuOpen}/>
          <MobileItem to="/about" label="About" close={setMenuOpen}/>
          <MobileItem to="/classes" label="Classes" close={setMenuOpen}/>
          <MobileItem to="/admission" label="Admission" close={setMenuOpen}/>
          <MobileItem to="/common-gallery" label="Gallery" close={setMenuOpen}/>
          <MobileItem to="/career" label="Career" close={setMenuOpen}/>
          <MobileItem to="/contact" label="Contact" close={setMenuOpen}/>

          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-full text-white font-semibold
            bg-[#E87D1E] hover:bg-[#cf6b14]
            transition-all duration-300 shadow-md"
          >
            Apply Now →
          </Link>

        </div>

      </div>

    </nav>

  );
}


/* Desktop Link */

function NavItem({ to, label, location }) {

  const active = location.pathname === to;

  return (

    <Link
      to={to}
      className={`relative transition duration-300
      ${active ? "text-[#2F4C92]" : "hover:text-[#2F4C92]"}`}
    >

      {label}

      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-[#E87D1E] transition-all duration-300
        ${active ? "w-full" : "w-0 hover:w-full"}
        `}
      />

    </Link>

  );

}


/* Mobile Link */

function MobileItem({ to, label, close }) {

  return (
    <Link
      to={to}
      onClick={() => close(false)}
      className="hover:text-[#2F4C92] transition"
    >
      {label}
    </Link>
  );

}

export default PublicNavbar;