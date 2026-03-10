import { motion } from "framer-motion";
import { Users, GraduationCap, BookOpen, DollarSign } from "lucide-react";

function StatsCards() {

  const stats = [
    {
      title: "Total Students",
      value: "156",
      icon: <Users />,
      color: "bg-white text-sky-900",
      subtext: "KG 1: 78 | KG 2: 78"
    },
    {
      title: "Total Teachers",
      value: "12",
      icon: <GraduationCap />,
      color: "bg-white text-sky-900",
      subtext: "8 Full-time | 4 Part-time"
    },
    {
      title: "Total Classes",
      value: "4",
      icon: <BookOpen />,
      color: "bg-white text-sky-900",
      subtext: "Play, Nursery, KG 1, KG 2"
    },
    {
      title: "Pending Fees",
      value: "₹45,000",
      icon: <DollarSign />,
      color: "bg-white text-sky-900",
      subtext: "12 students pending"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6 md:mb-8">

      {stats.map((stat, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-amber-600 rounded-3xl p-1 shadow-md"
        >

          <div className="bg-white rounded-3xl p-4 sm:p-5 md:p-6 h-full">

            {/* Top section */}
            <div className="flex justify-between items-center mb-3 sm:mb-4">

              <div className={`${stat.color} p-2 sm:p-3 rounded-xl sm:rounded-2xl`}>
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                  {stat.icon}
                </div>
              </div>

              <span className="text-xl sm:text-2xl md:text-3xl">📊</span>

            </div>

            {/* Title */}
            <h3 className="text-sky-800 font-bold text-xs sm:text-sm">
              {stat.title}
            </h3>

            {/* Value */}
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-sky-900">
              {stat.value}
            </p>

            {/* Subtext */}
            <p className="text-[11px] sm:text-xs text-sky-600 mt-1">
              {stat.subtext}
            </p>

          </div>

        </motion.div>

      ))}

    </div>
  );
}

export default StatsCards;