import { motion } from "framer-motion";
import { PercentCircle, Gift } from "lucide-react";

function FeeInstallment() {

  const installments = [
    {
      title: "1st Installment",
      desc: "50% at the time of admission"
    },
    {
      title: "2nd Installment",
      desc: "25% before 1 September"
    },
    {
      title: "3rd Installment",
      desc: "25% before 1 December"
    }
  ];

  return (

    <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F4C92] text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Fee Installment Plan
        </motion.h2>

        {/* Installment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {installments.map((item, index) => (

            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md text-center border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >

              <PercentCircle
                className="mx-auto text-[#E87D1E] mb-3"
                size={32}
              />

              <h3 className="text-lg sm:text-xl font-bold text-[#2F4C92]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Discount Offer */}
        <motion.div
          className="mt-12 bg-[#FFF3E6] border border-[#E87D1E] p-6 sm:p-8 rounded-2xl text-center shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center">

            <Gift className="text-[#E87D1E]" size={30} />

            <p className="text-lg sm:text-xl font-semibold text-[#2F4C92]">
              Pay Full Fee at Admission & Get ₹1000 Discount
            </p>

          </div>

        </motion.div>

      </div>

    </section>

  );
}

export default FeeInstallment;