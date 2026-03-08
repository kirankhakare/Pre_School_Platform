
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
    <section className="py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-sky-100 to-white p-8 rounded-[4rem] shadow-2xl border-4 border-white">

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-pink-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <MessageCircle className="text-pink-500" size={28} />
              </div>

              <h3 className="text-3xl font-extrabold text-sky-900">
                Send us a Message
              </h3>
            </div>

            <form className="space-y-5">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-2xl border-2 border-pink-200 focus:border-pink-400 outline-none font-medium text-sky-900"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-2xl border-2 border-blue-200 focus:border-blue-400 outline-none font-medium text-sky-900"
                />

              </div>

              {/* Phone + Subject */}
              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-2xl border-2 border-green-200 focus:border-green-400 outline-none font-medium text-sky-900"
                />

                <select className="w-full p-4 rounded-2xl border-2 border-purple-200 focus:border-purple-400 outline-none font-medium text-sky-900">

                  <option>Select Topic</option>
                  <option>Admission Enquiry</option>
                  <option>Schedule a Tour</option>
                  <option>General Question</option>
                  <option>Feedback</option>

                </select>

              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full p-4 rounded-2xl border-2 border-orange-200 focus:border-orange-400 outline-none font-medium text-sky-900"
              />

              {/* Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center gap-3"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={22} />
                Send Message
              </motion.button>

            </form>

            {/* Reply promise */}
            <motion.div
              className="mt-6 bg-green-50 p-4 rounded-2xl flex items-center gap-3 border-2 border-green-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="text-green-500" size={24} />
              <p className="text-sky-800 font-medium">
                We reply within 24 hours on weekdays
              </p>
            </motion.div>

          </motion.div>


          {/* Map + Quick Actions */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {/* Google Map */}
            <div className="bg-white p-6 rounded-[3rem] shadow-xl border-4 border-blue-100">

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="text-blue-500" size={20} />
                </div>

                <h4 className="text-xl font-extrabold text-sky-900">
                  Our Location
                </h4>
              </div>

              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-lg h-64">

                <iframe
                  src="https://www.google.com/maps?q=Pune&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />

              </div>

              <div className="mt-4 flex items-center justify-between">

                <p className="text-sky-800 font-bold">
                  Pune, Maharashtra
                </p>

                <motion.button
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Get Directions
                </motion.button>

              </div>

            </div>


            {/* Quick Contact Actions */}
            <div className="grid grid-cols-2 gap-4">

              {/* Call */}
              <motion.div
                className="bg-pink-50 p-4 rounded-2xl border-4 border-white text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">📞</div>
                <p className="font-bold text-sky-900 text-sm">
                  Call Us Now
                </p>
                <p className="text-pink-500 text-xs mt-1">
                  Toll Free
                </p>
              </motion.div>

              {/* Copy Email */}
              <motion.div
                className="bg-green-50 p-4 rounded-2xl border-4 border-white text-center relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCopyEmail("admissions@adhyayan.edu")}
              >

                <div className="text-3xl mb-2">📧</div>
                <p className="font-bold text-sky-900 text-sm">
                  Copy Email
                </p>

                {copied && (
                  <motion.div
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Copied!
                  </motion.div>
                )}

              </motion.div>

              {/* Chat */}
              <motion.div
                className="bg-purple-50 p-4 rounded-2xl border-4 border-white text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">💬</div>
                <p className="font-bold text-sky-900 text-sm">
                  Live Chat
                </p>
                <p className="text-purple-500 text-xs mt-1">
                  Online Now
                </p>
              </motion.div>

              {/* Visit */}
              <motion.div
                className="bg-orange-50 p-4 rounded-2xl border-4 border-white text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">📅</div>
                <p className="font-bold text-sky-900 text-sm">
                  Schedule Visit
                </p>
                <p className="text-orange-500 text-xs mt-1">
                  Book Now
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ContactMainSection;

