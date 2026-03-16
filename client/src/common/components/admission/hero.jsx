import { motion } from "framer-motion";
import { Baby, School, Clock, Users } from "lucide-react";

function HeroSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-6 md:px-8 pt-24 pb-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/admission img.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Badge */}
          <div className="inline-block bg-[#E87D1E] text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow-lg mb-6">
            🎒 Admissions Open 2026-27
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Join Our <span className="text-[#E87D1E]">OctaWisdom</span> Family
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            Give your child the best start in life with joyful learning,
            caring teachers, and a safe environment.
          </p>

        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-2xl text-center shadow-md"
          >
            <Baby className="mx-auto mb-2 text-[#E87D1E]" size={28} />
            <p className="font-semibold text-gray-700">Age 3-6</p>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-2xl text-center shadow-md"
          >
            <School className="mx-auto mb-2 text-[#E87D1E]" size={28} />
            <p className="font-semibold text-gray-700">Limited Seats</p>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-2xl text-center shadow-md"
          >
            <Clock className="mx-auto mb-2 text-[#E87D1E]" size={28} />
            <p className="font-semibold text-gray-700">
              8:30 AM - 12:30 PM
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-2xl text-center shadow-md"
          >
            <Users className="mx-auto mb-2 text-[#E87D1E]" size={28} />
            <p className="font-semibold text-gray-700">
              15:1 Ratio
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;