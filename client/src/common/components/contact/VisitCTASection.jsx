
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

function VisitCTASection() {

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Come Visit Our School! 🏫
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-sky-700 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          We would love to welcome you and your child to our joyful learning
          environment. Visit our campus and see the magic of early education.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >

          {/* Visit Button */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-purple-400 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition"
          >
            <MapPin size={20} />
            Visit Campus
          </a>

          {/* Call Button */}
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2  bg-gradient-to-r from-pink-400 to-purple-400 hover:bg-sky-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition"
          >
            <Phone size={20} />
            Call Now
          </a>

        </motion.div>

        {/* Extra Note */}
        <motion.p
          className="mt-8 text-sky-700 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          📍 Walk-ins are welcome during school hours!
        </motion.p>

      </div>

    </section>
  );
}

export default VisitCTASection;

