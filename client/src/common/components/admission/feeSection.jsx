
import { motion } from "framer-motion";
import { Users } from "lucide-react";

function FeeSection() {

  const feeStructure = [
    {
      class: "JR.KG",
      ageGroup: "3.5 - 4.5 Years",
      admissionFee: "₹15,000",
      tuitionFee: "₹3,500/month",
      activityFee: "₹1,000/month",
      totalAnnual: "₹55,000",
      color: "from-pink-400 to-orange-400",
      emoji: "🐼"
    },
    {
      class: "SR.KG",
      ageGroup: "4.5 - 5.5 Years",
      admissionFee: "₹15,000",
      tuitionFee: "₹3,500/month",
      activityFee: "₹1,000/month",
      totalAnnual: "₹55,000",
      color: "from-blue-400 to-green-400",
      emoji: "🐨"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-sky-900 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Fee Structure 2024-25
        </motion.h2>

        <motion.p
          className="text-xl text-sky-700 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Transparent and affordable fee structure for both KG classes
        </motion.p>

        {/* Fee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

          {feeStructure.map((fee, index) => (

            <motion.div
              key={index}
              className={`bg-gradient-to-br ${fee.color} p-1 rounded-[3rem] shadow-xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >

              <div className="bg-white rounded-[2.8rem] p-8 h-full relative overflow-hidden">

                {/* Decorative circles */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>

                <div className="relative z-10">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-4xl font-black text-sky-900">
                      {fee.class}
                    </h3>
                    <span className="text-6xl">{fee.emoji}</span>
                  </div>

                  {/* Age */}
                  <p className="text-lg text-sky-700 font-bold mb-6 flex items-center gap-2">
                    <Users size={20} className="text-pink-500" />
                    {fee.ageGroup}
                  </p>

                  {/* Fees */}
                  <div className="space-y-4 mb-8">

                    <div className="flex justify-between items-center pb-2 border-b-2 border-dashed border-pink-200">
                      <span className="text-sky-800 font-bold">
                        Admission Fee
                      </span>
                      <span className="text-2xl font-extrabold text-pink-500">
                        {fee.admissionFee}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b-2 border-dashed border-blue-200">
                      <span className="text-sky-800 font-bold">
                        Tuition Fee
                      </span>
                      <span className="text-2xl font-extrabold text-blue-500">
                        {fee.tuitionFee}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b-2 border-dashed border-green-200">
                      <span className="text-sky-800 font-bold">
                        Activity Fee
                      </span>
                      <span className="text-2xl font-extrabold text-green-500">
                        {fee.activityFee}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <span className="text-xl font-bold text-sky-900">
                        Total Annual
                      </span>
                      <span className="text-3xl font-black text-purple-600">
                        {fee.totalAnnual}
                      </span>
                    </div>

                  </div>

                  {/* Button */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${fee.color} text-white font-bold text-xl py-4 px-6 rounded-2xl shadow-lg border-4 border-white hover:shadow-xl transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply for {fee.class} 🎒
                  </motion.button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeeSection;

