import { motion } from "framer-motion";

function ClassDistribution() {

  const classes = [
    { name: "Play Group", students: 30, color: "bg-amber-500" },
    { name: "Nursery", students: 40, color: "bg-blue-400" },
    { name: "KG 1", students: 43, color: "bg-green-400" },
    { name: "KG 2", students: 43, color: "bg-purple-400" }
  ];

  const total = classes.reduce((sum, c) => sum + c.students, 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-3xl md:rounded-[3rem] p-4 md:p-6 shadow-lg md:shadow-xl w-full"
    >

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-sky-900 mb-5 md:mb-6">
        Class Distribution
      </h2>

      <div className="space-y-4 md:space-y-5">

        {classes.map((c, i) => {

          const percentage = ((c.students / total) * 100).toFixed(0);

          return (
            <div key={i} className="space-y-1">

              {/* Class Label */}
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-sky-800">

                <span>{c.name}</span>

                <span className="text-sky-600">
                  {c.students} students
                </span>

              </div>

              {/* Progress Bar */}
              <div className="w-full bg-sky-100 h-2 sm:h-3 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.8 }}
                  className={`${c.color} h-full rounded-full`}
                />

              </div>

              {/* Percentage (Mobile Friendly) */}
              <div className="text-[11px] sm:text-xs text-sky-500 text-right">
                {percentage}%
              </div>

            </div>
          );
        })}

      </div>

    </motion.div>
  );
}

export default ClassDistribution;