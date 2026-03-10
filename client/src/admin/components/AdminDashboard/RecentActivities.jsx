import { motion } from "framer-motion";
import { Clock } from "lucide-react";

function RecentActivities() {

  const activities = [
    { action: "New student admitted in KG 1", time: "5 mins ago", icon: "🎉" },
    { action: "Fee paid by Riya Sharma (KG 2)", time: "15 mins ago", icon: "💰" },
    { action: "Attendance marked for KG 1", time: "1 hour ago", icon: "📋" },
  ];

  return (

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-3xl md:rounded-[3rem] p-4 sm:p-5 md:p-6 shadow-lg md:shadow-xl w-full"
    >

      {/* Header */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-sky-900 mb-4 md:mb-6 flex items-center gap-2">
        <Clock className="text-sky-800" size={20} />
        Recent Activities
      </h2>

      {/* Activities */}
      <div className="space-y-3 sm:space-y-4">

        {activities.map((a, i) => (

          <div
            key={i}
            className="flex items-start gap-3 bg-sky-50 p-3 sm:p-4 rounded-xl"
          >

            {/* Icon */}
            <span className="text-lg sm:text-xl">
              {a.icon}
            </span>

            {/* Activity Text */}
            <div className="flex flex-col">

              <p className="font-bold text-sm sm:text-base text-sky-900 leading-snug">
                {a.action}
              </p>

              <p className="text-xs sm:text-sm text-sky-600">
                {a.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </motion.div>
  );
}

export default RecentActivities;