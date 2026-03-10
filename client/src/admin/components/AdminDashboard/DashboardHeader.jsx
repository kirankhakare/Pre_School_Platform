import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

function DashboardHeader() {

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8"
    >

      {/* Welcome Text */}
      <div className="text-center sm:text-left">

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-sky-900">
          Welcome back, Admin
        </h1>

        <p className="text-sm sm:text-base text-sky-700 font-medium mt-1">
          Manage your preschool dashboard
        </p>

      </div>

      {/* Date Box */}
      <div className="bg-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-md border-2 border-amber-600 w-full sm:w-auto">

        <div className="flex items-center justify-center sm:justify-start gap-2 text-sky-800 font-bold text-xs sm:text-sm md:text-base">

          <Calendar size={18} className="text-sky-900" />

          <span>{today}</span>

        </div>

      </div>

    </motion.div>
  );
}

export default DashboardHeader;