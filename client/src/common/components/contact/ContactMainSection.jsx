import { motion } from "framer-motion";
import { Send, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

function ContactMainSection() {

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <div className="flex items-center gap-3 mb-8">

              <div className="w-12 h-12 bg-[#FFF3E6] rounded-xl flex items-center justify-center">
                <MessageCircle className="text-[#E87D1E]" size={24} />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#2F4C92]">
                Send us a Message
              </h3>

            </div>

            <form className="space-y-5">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:border-[#E87D1E] outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:border-[#E87D1E] outline-none"
                />

              </div>

              {/* Phone + Subject */}
              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:border-[#E87D1E] outline-none"
                />

                <select className="w-full p-4 rounded-xl border border-gray-300 focus:border-[#E87D1E] outline-none">

                  <option>Select Topic</option>
                  <option>Admission Enquiry</option>
                  <option>Schedule a Visit</option>
                  <option>General Question</option>
                  <option>Feedback</option>

                </select>

              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-[#E87D1E] outline-none"
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-[#2F4C92] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#1e3572]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >

                <Send size={20} />

                Send Message

              </motion.button>

            </form>

            {/* Reply Notice */}
            <div className="mt-6 bg-[#FFF3E6] p-4 rounded-xl flex items-center gap-2">

              <CheckCircle className="text-[#E87D1E]" size={20} />

              <p className="text-gray-700">
                We usually reply within 24 hours.
              </p>

            </div>

          </motion.div>


          {/* Map + Actions */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            {/* Map Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 bg-[#FFF3E6] rounded-lg flex items-center justify-center">
                  <MapPin className="text-[#E87D1E]" size={20} />
                </div>

                <h4 className="text-xl font-bold text-[#2F4C92]">
                  Our Location
                </h4>

              </div>

              <div className="rounded-xl overflow-hidden h-64">

                <iframe
                  src="https://www.google.com/maps?q=Amravati&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />

              </div>

              <div className="mt-4 flex justify-between items-center">

                <p className="font-semibold text-gray-700">
                  Pramanda, Lane 7, Yashoda Nagar No.2, Amravati, 444606
                </p>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="text-[#E87D1E] font-semibold"
                >
                  Directions
                </a>

              </div>

            </div>


            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">

              {[
                { icon: "📞", label: "Call Us" },
                { icon: "📧", label: "Copy Email" },
                { icon: "💬", label: "Live Chat" },
                { icon: "📅", label: "Schedule Visit" }
              ].map((item, i) => (

                <motion.div
                  key={i}
                  className="bg-white p-4 rounded-xl shadow-md text-center border border-gray-100 cursor-pointer hover:shadow-lg"
                  whileHover={{ scale: 1.04 }}
                  onClick={
                    item.label === "Copy Email"
                      ? () => handleCopyEmail("octawisdom@gmail.com")
                      : undefined
                  }
                >

                  <div className="text-3xl mb-2">
                    {item.icon}
                  </div>

                  <p className="font-semibold text-[#2F4C92]">
                    {item.label}
                  </p>

                  {copied && item.label === "Copy Email" && (
                    <div className="text-xs text-green-600 mt-1">
                      Copied!
                    </div>
                  )}

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ContactMainSection;