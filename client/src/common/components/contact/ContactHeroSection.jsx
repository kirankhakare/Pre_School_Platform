import { motion } from "framer-motion";
import contactImg from "../../../assets/contact.png";

function ContactHero() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-6 py-20 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactImg}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center text-white">

        {/* Badge */}
        <motion.div
          className="inline-block bg-[#E87D1E] text-white px-6 py-2 rounded-full font-semibold mb-6 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          📞 Get in Touch
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          We'd Love to Hear From You
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Have questions about admissions, curriculum, or want to schedule a
          school visit? Our team is happy to assist you.
        </motion.p>

        {/* Quick Contact Options */}
        <div className="flex flex-wrap justify-center gap-4">

          {["📞 Call", "💬 Chat", "📧 Email", "👋 Visit"].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white text-[#2F4C92] px-6 py-3 rounded-full shadow-md font-semibold cursor-pointer hover:bg-[#E87D1E] hover:text-white transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ContactHero;