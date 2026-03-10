import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

function FeeSummary() {

  const data = [
    { title: "Collected Fees", amount: "₹2,10,000", color: "text-green-600" },
    { title: "Pending Fees", amount: "₹45,000", color: "text-red-500" },
    { title: "Total Fees", amount: "₹2,55,000", color: "text-blue-600" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-3xl md:rounded-[3rem] p-4 sm:p-5 md:p-6 shadow-lg md:shadow-xl w-full"
    >

      {/* Header */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-sky-900 mb-4 md:mb-6 flex items-center gap-2">
        <DollarSign className="text-sky-800" size={20} />
        Fee Summary
      </h2>

      {/* Fee Cards */}
      <div className="space-y-3 sm:space-y-4">

        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 bg-sky-50 p-3 sm:p-4 rounded-xl"
          >

            {/* Title */}
            <span className="font-bold text-sm sm:text-base text-sky-800">
              {item.title}
            </span>

            {/* Amount */}
            <span className={`font-extrabold text-base sm:text-lg ${item.color}`}>
              {item.amount}
            </span>

          </div>
        ))}

      </div>

    </motion.div>
  );
}

export default FeeSummary;