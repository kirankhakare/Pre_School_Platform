import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

function UpcomingEvents() {

  const events = [
    { title: "Annual Day Celebration", date: "25 March 2026", icon: "🎭" },
    { title: "Parent Meeting", date: "30 March 2026", icon: "👨‍👩‍👧" },
    { title: "Sports Day", date: "5 April 2026", icon: "🏆" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl md:rounded-[3rem] p-4 sm:p-5 md:p-6 shadow-lg md:shadow-xl w-full"
    >

      {/* Header */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-sky-900 mb-4 md:mb-6 flex items-center gap-2">
        <Calendar size={20} className="text-sky-800" />
        Upcoming Events
      </h2>

      {/* Events List */}
      <div className="space-y-3 sm:space-y-4">

        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-pink-50 rounded-xl"
          >

            {/* Event Icon */}
            <span className="text-xl sm:text-2xl">
              {event.icon}
            </span>

            {/* Event Info */}
            <div className="flex flex-col">

              <p className="font-bold text-sm sm:text-base text-sky-900 leading-snug">
                {event.title}
              </p>

              <p className="text-xs sm:text-sm text-sky-600">
                {event.date}
              </p>

            </div>

          </div>
        ))}

      </div>

    </motion.div>
  );
}

export default UpcomingEvents;