
import { motion } from "framer-motion";
import { FileText, CalendarCheck, AlertCircle } from "lucide-react";

function DocumentsSection() {

  const requiredDocuments = [
    { name: "Child's Birth Certificate", icon: "📜", color: "bg-pink-50 text-pink-600" },
    { name: "Passport Size Photos (4 copies)", icon: "📸", color: "bg-blue-50 text-blue-600" },
    { name: "Parent's ID Proof", icon: "🆔", color: "bg-green-50 text-green-600" },
    { name: "Address Proof", icon: "🏠", color: "bg-purple-50 text-purple-600" },
    { name: "Medical History/Records", icon: "🏥", color: "bg-orange-50 text-orange-600" },
    { name: "Previous School Records (if any)", icon: "📚", color: "bg-yellow-50 text-yellow-600" },
  ];

  const importantDates = [
    { event: "Admission Starts", date: "1st November 2024", icon: "📅", color: "text-green-600" },
    { event: "Last Date to Apply", date: "15th March 2025", icon: "⏰", color: "text-red-600" },
    { event: "Interaction Sessions", date: "20th - 30th March 2025", icon: "🤝", color: "text-blue-600" },
    { event: "Results Announcement", date: "5th April 2025", icon: "📢", color: "text-purple-600" },
    { event: "Fee Submission", date: "10th - 20th April 2025", icon: "💰", color: "text-orange-600" },
    { event: "Academic Year Begins", date: "15th June 2025", icon: "🎓", color: "text-pink-600" },
  ];

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

          {/* Required Documents */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-extrabold text-sky-900 mb-4 flex items-center gap-3">
              <FileText className="text-sky-500" size={40} />
              Required Documents
            </h2>

            <p className="text-lg text-sky-700 font-medium mb-8">
              Please keep these documents ready before applying
            </p>

            <div className="space-y-4">

              {requiredDocuments.map((doc, i) => (

                <motion.div
                  key={i}
                  className={`${doc.color} p-4 rounded-2xl flex items-center gap-4 border-2 border-white shadow-md`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                >

                  <span className="text-3xl">{doc.icon}</span>
                  <span className="font-bold text-sky-900">
                    {doc.name}
                  </span>

                </motion.div>

              ))}

            </div>

            <motion.div
              className="mt-8 bg-yellow-50 p-6 rounded-3xl border-2 border-yellow-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >

              <p className="text-sky-800 font-medium flex items-center gap-2">
                <AlertCircle className="text-yellow-600" />
                Submit self-attested copies of all documents
              </p>

            </motion.div>

          </motion.div>


          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-extrabold text-sky-900 mb-4 flex items-center gap-3">
              <CalendarCheck className="text-sky-500" size={40} />
              Important Dates
            </h2>

            <p className="text-lg text-sky-700 font-medium mb-8">
              Mark your calendar for these key dates
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-[3rem] border-4 border-white shadow-xl">

              {importantDates.map((date, i) => (

                <motion.div
                  key={i}
                  className="flex items-center justify-between py-3 border-b-2 border-dashed border-blue-200 last:border-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >

                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{date.icon}</span>
                    <span className="font-bold text-sky-900">
                      {date.event}
                    </span>
                  </div>

                  <span className={`font-extrabold ${date.color}`}>
                    {date.date}
                  </span>

                </motion.div>

              ))}

            </div>

            {/* Countdown Box */}
            <motion.div
              className="mt-8 bg-pink-50 p-6 rounded-3xl border-4 border-white text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >

              <p className="text-lg text-sky-800 font-bold mb-2">
                Applications Closing Soon!
              </p>

              <p className="text-4xl font-black text-sky-800">
                15 Days Left
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default DocumentsSection;

