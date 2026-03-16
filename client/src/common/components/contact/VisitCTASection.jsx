import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

function VisitCTASection() {

  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#2F4C92] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Come Visit Our School! 🏫
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          We would love to welcome you and your child to our joyful learning
          environment. Visit our campus and experience the magic of early
          education.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          {/* Visit Button */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#2F4C92] hover:bg-[#1e3572] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
          >
            <MapPin size={20} />
            Visit Campus
          </a>

          {/* Call Button */}
          <a
            href="tel:+918767192113"
            className="flex items-center justify-center gap-2 border-2 border-[#E87D1E] text-[#E87D1E] hover:bg-[#E87D1E] hover:text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            <Phone size={20} />
            Call Now
          </a>

        </motion.div>

        {/* Note */}
        <motion.p
          className="mt-8 text-gray-600 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          📍 Walk-ins are welcome during school hours.
        </motion.p>

      </div>

    </section>
  );
}

export default VisitCTASection;