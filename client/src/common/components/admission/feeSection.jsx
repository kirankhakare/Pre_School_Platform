import { motion } from "framer-motion";
import { Users, CheckCircle } from "lucide-react";

function FeeSection() {

  const feeStructure = [
    {
      class: "Nursery",
      ageGroup: "3 - 4 Years",
      admissionFee: "₹16,000",
    },
    {
      class: "KG 1",
      ageGroup: "4 - 5 Years",
      admissionFee: "₹18,000",
    },
    {
      class: "KG 2",
      ageGroup: "5 - 6 Years",
      admissionFee: "₹20,000",
    }
  ];

  const kitItems = [
    "School Bag",
    "Text Books",
    "Student ID Card",
    "Student Diary",
    "School Uniform"
  ];

  return (

    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#2F4C92] text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Fee Structure 2026-27
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Transparent and affordable fee structure with complete student kit included.
        </motion.p>

        {/* Fee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {feeStructure.map((fee, index) => (

            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#E87D1E]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >

              {/* Class Title */}
              <h3 className="text-3xl font-bold text-[#2F4C92] mb-2">
                {fee.class}
              </h3>

              {/* Age */}
              <p className="flex items-center gap-2 text-gray-600 mb-6">
                <Users size={18} className="text-[#E87D1E]" />
                Age Group: {fee.ageGroup}
              </p>

              {/* Fee */}
              <div className="flex justify-between items-center mb-8 pb-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">
                  Admission Fee
                </span>

                <span className="text-2xl font-bold text-[#E87D1E]">
                  {fee.admissionFee}
                </span>
              </div>

              {/* Student Kit */}
              <div>

                <h4 className="font-bold text-[#2F4C92] mb-4">
                  Student Kit Includes
                </h4>

                <ul className="space-y-2">

                  {kitItems.map((item, i) => (

                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >

                      <CheckCircle size={18} className="text-[#E87D1E]" />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default FeeSection;