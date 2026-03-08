import React from "react";
import { motion } from "framer-motion";
import classImg from "../../../assets/class.png";

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src={classImg}
        alt="Preschool Classroom"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-block bg-black/20
          px-4 py-2 sm:px-6 sm:py-3 rounded-full 
          text-sm sm:text-base md:text-lg font-bold shadow-lg mb-6">

            🎓 Welcome to OctaWisdom

          </div>

          {/* Heading */}
          <h1 className="font-bold text-white/80 leading-tight mb-6 
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-4xl
          xl:text-7xl">

            A Happy Place <br />


            Where Little Minds Grow


          </h1>

          {/* Description */}
          <p className="mx-auto mb-10
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          max-w-xs
          sm:max-w-lg
          md:max-w-2xl
          lg:max-w-3xl">

            At <span className="font-bold">OctaWisdom Preschool</span>,
            we nurture curiosity, creativity, and confidence through fun
            learning activities, engaging classrooms, and caring teachers
            dedicated to early childhood development.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto
             bg-gradient-to-r from-blue-500 to-purple-600
              font-bold
              text-sm sm:text-base md:text-lg
              px-6 py-3 md:px-8 md:py-4
              rounded-full shadow-lg">

              Explore Classes 🎒

            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto
             bg-gradient-to-r from-blue-500 to-purple-600
              font-bold
              text-sm sm:text-base md:text-lg
              px-6 py-3 md:px-8 md:py-4
              rounded-full shadow-lg">

              Admission Enquiry 📚

            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default HeroSection;