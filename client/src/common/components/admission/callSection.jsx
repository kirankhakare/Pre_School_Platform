
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* Contact Info */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-6 flex  text-center mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-8">
            Have questions about admissions or programs? 
            Reach out to us and our team will be happy to help you.
          </p>

          {/* Phone */}
          <div className="flex items-center gap-4 mb-5 p-4 rounded-xl hover:bg-pink-50 transition">

            <div className="p-3 bg-pink-100 rounded-full">
              <Phone className="text-pink-500"/>
            </div>

            <span className="text-gray-700 font-medium">
              +91 98765 43210
            </span>

          </div>

          {/* Email */}
          <div className="flex items-center gap-4 mb-5 p-4 rounded-xl hover:bg-pink-50 transition">

            <div className="p-3 bg-pink-100 rounded-full">
              <Mail className="text-pink-500"/>
            </div>

            <span className="text-gray-700 font-medium">
              info@preschool.com
            </span>

          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-pink-50 transition">

            <div className="p-3 bg-pink-100 rounded-full">
              <MapPin className="text-pink-500"/>
            </div>

            <span className="text-gray-700 font-medium">
              Nagpur, Maharashtra, India
            </span>

          </div>

        </motion.div>


        {/* Contact Form */}
        <motion.form
          className="flex-1 bg-gray-50 p-8 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 mb-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <motion.button
            className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

        </motion.form>

      </div>

    </section>
  );
}

export default ContactSection;

