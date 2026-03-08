import React from "react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

function ScheduleSection() {

  const schedule = [
    { time: "08:30 - 09:00", activity: "Welcome & Free Play", icon: "🌞" },
    { time: "09:00 - 09:30", activity: "Circle Time", icon: "🎵" },
    { time: "09:30 - 10:15", activity: "Learning Activity", icon: "📚" },
    { time: "10:15 - 10:30", activity: "Snack Break", icon: "🍎" },
    { time: "10:30 - 11:15", activity: "Outdoor Play", icon: "⚽" },
  ];

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-900 mb-4 flex justify-center items-center gap-3">
          <Clock className="text-sky-900" size={36} />
          Daily Schedule
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
          Our daily schedule is thoughtfully designed to create a balance between
          learning, creativity, and play. Each activity helps children develop
          essential skills such as communication, teamwork, and problem-solving.
          Through structured routines and fun experiences, we ensure every child
          enjoys a joyful and engaging learning environment throughout the day.
        </p>

        {/* Schedule List */}
        <div className="flex flex-col gap-4">

          {schedule.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-4 border rounded-xl shadow hover:bg-pink-50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-2xl">{item.icon}</div>

              <div>
                <p className="font-bold text-pink-500">{item.time}</p>
                <p className="text-gray-700">{item.activity}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ScheduleSection;