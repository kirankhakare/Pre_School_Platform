import { motion } from "framer-motion";
import { PlusCircle, Users, BookOpen, FileText } from "lucide-react";

function QuickActions() {

  const actions = [
    { label: "Add Student", icon: <PlusCircle /> },
    { label: "Add Teacher", icon: <Users /> },
    { label: "Create Class", icon: <BookOpen /> },
    { label: "Generate Report", icon: <FileText /> }
  ];

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 md:mt-8"
    >

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-sky-900 mb-4 md:mb-6">
        Quick Actions
      </h2>

      {/* Actions Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

        {actions.map((action, index) => (

          <motion.button
            key={index}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold 
            p-3 sm:p-4 rounded-xl sm:rounded-2xl 
            flex flex-col sm:flex-row items-center justify-center 
            gap-1 sm:gap-2 shadow-md sm:shadow-lg 
            text-xs sm:text-sm md:text-base transition-all"
          >

            <span className="text-lg sm:text-xl">
              {action.icon}
            </span>

            <span className="text-center">
              {action.label}
            </span>

          </motion.button>

        ))}

      </div>

    </motion.div>
  );
}

export default QuickActions;