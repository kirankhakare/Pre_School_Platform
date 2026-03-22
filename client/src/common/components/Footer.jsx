import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "/logo.png";

function Footer() {

  const currentYear = new Date().getFullYear();
 
  const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Classes", path: "/classes" },
  { name: "Gallery", path: "/common-gallery" },
  { name: "Contact", path: "/contact" }
];

  const socialLinks = [
  {
    icon: Instagram,
    url: "https://www.instagram.com/octawisdom2026/"
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/share/1J1bknVzhh/"
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/your-profile-link"
  }
];

  return (

    <footer className="bg-white text-gray-800 pt-14 pb-8 border-t-4 border-[#2F4C92]">

      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* SCHOOL INFO */}

          <div className="space-y-4">

            <img
              src={logo}
              alt="OctaWisdom Logo"
              className="w-44 hover:scale-105 transition-transform"
            />

            <p className="text-[16px] leading-snug text-gray-600 font-medium">
              OctaWisdom School of Excellence nurtures young minds through
              joyful learning, creativity, and strong values.
            </p>

            {/* SOCIAL */}

           <div className="flex gap-3 pt-2">
  {socialLinks.map((item, idx) => {
    const Icon = item.icon;
    return (
      <a
        key={idx}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-gray-100 text-[#2F4C92]
        hover:bg-[#2F4C92] hover:text-white transition shadow-sm"
      >
        <Icon size={20} />
      </a>
    );
  })}
</div>

          </div>

          {/* QUICK LINKS */}
<div>
  <h3 className="text-lg font-bold text-[#2F4C92] mb-5 border-b-2 border-[#E87D1E] w-fit">
    Quick Links
  </h3>

  <ul className="space-y-3">
    {quickLinks.map((item, index) => (
      <li key={index}>
        <Link
          to={item.path}
          className="text-[16px] font-medium text-gray-700 
          hover:text-[#E87D1E] transition-all duration-300 
          flex items-center gap-2 group"
        >
          <span className="h-1.5 w-1.5 bg-[#E87D1E] rounded-full 
          group-hover:scale-125 transition-transform"></span>

          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* CLASSES */}

          <div>

            <h3 className="text-lg font-bold text-[#2F4C92] mb-5 border-b-2 border-[#E87D1E] w-fit">
              Our Classes
            </h3>

            <ul className="space-y-3">

              {["Play Group", "Nursery", "Junior KG", "Senior KG"].map((cls) => (

                <li
                  key={cls}
                  className="text-[17px] font-semibold text-gray-700
                  hover:text-[#2F4C92] cursor-pointer transition-colors"
                >

                  {cls}

                </li>

              ))}

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-lg font-bold text-[#2F4C92] mb-5 border-b-2 border-[#E87D1E] w-fit">
              Contact Us
            </h3>

            <ul className="space-y-4">

              <li className="flex items-center gap-3 text-[16px] font-medium">

                <div className="bg-[#F4F7FF] p-2 rounded-full">
                  <Mail size={18} className="text-[#2F4C92]" />
                </div>

                octawisdom2026@gmail.com

              </li>

              <li className="flex items-center gap-3 text-[16px] font-medium">

                <div className="bg-[#F4F7FF] p-2 rounded-full">
                  <Phone size={18} className="text-[#2F4C92]" />
                </div>

                +91 8767192113

              </li>

              <li className="flex items-start gap-3 text-[16px] font-medium">

                <div className="bg-[#F4F7FF] p-2 rounded-full">
                  <MapPin size={18} className="text-[#2F4C92]" />
                </div>

                Pramanda, Lane 7, Yashoda Nagar No. 2, Amravati, 444606

              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[15px] font-medium text-gray-500">

            © {currentYear}
            <span className="text-[#2F4C92] font-semibold"> OctaWisdom School</span>.
            All rights reserved.

          </p>

          <div className="flex gap-6 text-[14px] font-semibold">

            <Link
              to="/privacy-policy"
              className="hover:text-[#E87D1E] transition-colors uppercase"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#E87D1E] transition-colors uppercase"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}

export default Footer;