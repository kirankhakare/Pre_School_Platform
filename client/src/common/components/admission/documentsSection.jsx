import { motion } from "framer-motion";
import { FileText, CalendarCheck, AlertCircle } from "lucide-react";

function DocumentsSection() {

  const requiredDocuments = [
    "Child's Birth Certificate",
    "Passport Size Photos (2 copies)",
    "Parent's ID Proof",
    "Address Proof",
    "Medical History / Records",
    "Previous School Records (if any)",
  ];

  const importantDates = [
    { event: "Admission Starts", date: "21 March 2026" },
    { event: "Academic Year Begins", date: "15 June 2026" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Documents Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92] mb-4 flex items-center gap-3">
              <FileText className="text-[#E87D1E]" size={36} />
              Required Documents
            </h2>

            <p className="text-gray-600 mb-8">
              Please keep these documents ready before applying.
            </p>

            <div className="space-y-4">

              {requiredDocuments.map((doc, i) => (

                <motion.div
                  key={i}
                  className="bg-white p-4 rounded-xl shadow-sm border flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >

                  <div className="w-10 h-10 bg-[#FFF3E6] flex items-center justify-center rounded-full font-bold text-[#E87D1E]">
                    {i + 1}
                  </div>

                  <span className="font-medium text-gray-700">
                    {doc}
                  </span>

                </motion.div>

              ))}

            </div>

            {/* Notice Box */}
            <motion.div
              className="mt-8 bg-[#FFF3E6] p-6 rounded-2xl border border-[#E87D1E]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >

              <p className="text-gray-700 flex items-center gap-2">

                <AlertCircle className="text-[#E87D1E]" />

                Submit self-attested copies of all documents.

              </p>

            </motion.div>

          </motion.div>


          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92] mb-4 flex items-center gap-3">

              <CalendarCheck className="text-[#E87D1E]" size={36} />

              Important Dates

            </h2>

            <p className="text-gray-600 mb-8">
              Mark your calendar for these important events.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-md">

              {importantDates.map((date, i) => (

                <motion.div
                  key={i}
                  className="flex items-center justify-between py-4 border-b last:border-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >

                  <span className="font-semibold text-[#2F4C92]">
                    {date.event}
                  </span>

                  <span className="font-bold text-[#E87D1E]">
                    {date.date}
                  </span>

                </motion.div>

              ))}

            </div>

            {/* Countdown Notice */}
            <motion.div
              className="mt-8 bg-[#2F4C92] text-white p-6 rounded-2xl text-center shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >

              <p className="text-lg font-semibold mb-2">
                Applications Closing Soon!
              </p>

              <p className="text-3xl font-bold text-[#FFD08A]">
                Limited Seats Available
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default DocumentsSection;