import { motion } from "framer-motion";
import { Clock, Heart } from "lucide-react";

function BusinessHoursSection() {

  const hours = [
    { day: "Monday - Friday", hours: "8:30 AM - 2:30 PM", emoji: "📚" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM", emoji: "🎨" },
    { day: "Sunday", hours: "Closed", emoji: "🏠" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-4xl mx-auto">

        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">

            <div className="w-12 h-12 bg-[#FFF3E6] rounded-xl flex items-center justify-center">
              <Clock className="text-[#E87D1E]" size={24} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#2F4C92]">
              Office Hours
            </h3>

          </div>

          {/* Hours List */}
          <div className="space-y-4">

            {hours.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center pb-3 border-b border-gray-200"
              >

                <span className="font-medium text-gray-700 flex items-center gap-2">
                  <span>{item.emoji}</span>
                  {item.day}
                </span>

                <span className="font-semibold text-[#E87D1E]">
                  {item.hours}
                </span>

              </div>
            ))}

          </div>

          {/* Notice */}
          <div className="mt-6 bg-[#FFF3E6] p-4 rounded-xl flex items-center gap-2">

            <Heart size={18} className="text-[#E87D1E]" />

            <p className="text-gray-700">
              We are also available on WhatsApp during school hours.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default BusinessHoursSection;