import { motion } from "framer-motion";
import { Baby, School, Clock, Users } from "lucide-react";

function HeroSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-6 md:px-8 pt-16 pb-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/admission img.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-block bg-black/20 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold shadow-lg mb-6">
            🎒 Admissions Open 2024-25
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white/80 mb-6 leading-tight">
            Join Our OctaWisdom Family
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto px-2">
            Give your child the best start in life. Apply for KG 1 and KG 2
            admissions today!
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">

          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-pink-100 p-4 sm:p-5 rounded-2xl text-center shadow-md"
          >
            <Baby className="mx-auto mb-2 text-pink-500" size={28} />
            <p className="font-semibold text-sm sm:text-base">Age 3.5+</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-100 p-4 sm:p-5 rounded-2xl text-center shadow-md"
          >
            <School className="mx-auto mb-2 text-blue-500" size={28} />
            <p className="font-semibold text-sm sm:text-base">Limited Seats</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-100 p-4 sm:p-5 rounded-2xl text-center shadow-md"
          >
            <Clock className="mx-auto mb-2 text-green-500" size={28} />
            <p className="font-semibold text-sm sm:text-base">
              8:30 AM - 12:30 PM
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-purple-100 p-4 sm:p-5 rounded-2xl text-center shadow-md"
          >
            <Users className="mx-auto mb-2 text-purple-500" size={28} />
            <p className="font-semibold text-sm sm:text-base">15:1 Ratio</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;