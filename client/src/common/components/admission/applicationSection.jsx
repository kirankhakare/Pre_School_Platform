
import { motion } from "framer-motion";

function CTASection() {

  const scrollToContact = () => {
    const section = document.getElementById("contact-application");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 bg-white text-sky-800">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Admissions Open for 2025
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mb-10 text-lg opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Give your child the perfect start to learning in a joyful,
          caring, and creative preschool environment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >

          {/* Apply Button */}
          <motion.button
            onClick={scrollToContact}
            className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Admission
          </motion.button>

          {/* Contact Button */}
          <motion.button
            onClick={scrollToContact}
            className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}

export default CTASection;

