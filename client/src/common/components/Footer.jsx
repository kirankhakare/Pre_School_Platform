import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import logo from "/logo2.png";

function Footer() {
  return (
    <footer className="bg-sky-100 text-sky-950 font-sans relative pt-2 pb-8 mt-20">
      {/* Decorative Wavy Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
        <svg
          className="relative block w-full h-[50px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.42,126,195.42,116.15,241.69,109.13,283.47,78.73,321.39,56.44Z"
            className="fill-sky-100"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-16">

          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-32 sm:w-40 flex items-center justify-center">
                <img src={logo} alt="Adhyayan Kids Academy Logo" className="w-full h-auto object-contain" />
              </div>
              {/* <h2 className="text-2xl font-extrabold text-sky-800 tracking-wide">Adhyayan Kids Academy</h2> */}
            </div>
            {/* <p className="text-sky-700 font-medium text-lg leading-relaxed">
              Where little minds bloom! We provide a safe, fun, and loving environment for your child's early learning journey.
            </p> */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-sky-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">🌟</span> Quick Links
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Our Classes', 'Facilities', 'Gallery', 'Admissions'].map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center text-sky-800 hover:text-pink-600 font-semibold text-lg transition-colors">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-pink-500" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-sky-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">📞</span> Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sky-800">
                <div className="bg-white p-2 rounded-full text-green-500 shadow-sm mt-1">
                  <MapPin size={18} />
                </div>
                <span className="font-medium text-lg">Adhyayan Kids School, Pune (xxxxxx)</span>
              </li>
              <li className="flex items-center gap-4 text-sky-800">
                <div className="bg-white p-2 rounded-full text-blue-500 shadow-sm">
                  <Phone size={18} />
                </div>
                <span className="font-medium text-lg">+91 xxxxxxxxxx</span>
              </li>
              <li className="flex items-center gap-4 text-sky-800">
                <div className="bg-white p-2 rounded-full text-amber-500 shadow-sm">
                  <Mail size={18} />
                </div>
                <span className="font-medium text-lg">adhyayan26@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-sky-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">💌</span> Newsletter
            </h3>
            <p className="text-sky-700 font-medium text-lg mb-4">
              Subscribe for fun updates and school news!
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter parent's email"
                className="px-5 py-3 rounded-2xl border-2 border-white bg-white/60 focus:bg-white focus:border-pink-300 focus:outline-none transition-all text-sky-900 font-medium shadow-sm placeholder:text-sky-400"
                required
              />
              <button
                type="submit"
                className="bg-pink-400 hover:bg-pink-500 text-white font-bold text-lg py-3 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Subscribe <span className="text-xl hidden md:inline">🚀</span>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-2 border-sky-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sky-700 font-semibold text-base">
            © {new Date().getFullYear()} Adyayan Kids School. All rights reserved.
          </p>
          <div className="flex gap-6 text-sky-600 font-semibold text-base">
            <Link to="/privacy-policy" className="hover:text-pink-500 transition-colors">Privacy Policy</Link>
            <Link to="/TearmCondition" className="hover:text-pink-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;