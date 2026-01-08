import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CTASection() {

  const navigate = useNavigate();

  return (

    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#2F4C92] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Admissions Open for 2026
        </motion.h2>

        {/* Text */}
        <motion.p
          className="mb-10 text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Give your child the perfect start to learning in a joyful,
          caring and creative preschool environment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          {/* Apply Button */}
          <motion.button
            onClick={() => navigate("/contact")}
            className="bg-[#2F4C92] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#1f3570]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Admission
          </motion.button>
        </motion.div>

      </div>

    </section>

  );
}

export default CTASection;