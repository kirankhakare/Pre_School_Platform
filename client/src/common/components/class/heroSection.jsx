import React from "react";
import { motion } from "framer-motion";
import classImg from "../../../assets/class.png";

function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src={classImg}
        alt="Preschool Classroom"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-block bg-[#E87D1E] px-6 py-2 rounded-full text-sm md:text-base font-semibold mb-6 shadow-md">
            🎓 Welcome to OctaWisdom
          </div>

          {/* Heading */}
          <h1 className="font-bold leading-tight mb-6
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl">

            A Happy Place <br />

            Where Little Minds Grow

          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 text-sm sm:text-base md:text-lg max-w-3xl text-gray-200">

            At <span className="font-semibold">OctaWisdom Preschool</span>,
            we nurture curiosity, creativity, and confidence through joyful
            learning activities, engaging classrooms, and caring teachers
            dedicated to early childhood development.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* Explore */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2F4C92] hover:bg-[#1e3572] text-white font-semibold
              px-8 py-3 rounded-full shadow-md transition"
            >
              Explore Classes 🎒
            </motion.button>

            {/* Admission */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#E87D1E] text-[#E87D1E] hover:bg-[#E87D1E] hover:text-white
              font-semibold px-8 py-3 rounded-full transition"
            >
              Admission Enquiry 📚
            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default HeroSection;