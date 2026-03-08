import React from "react";
import { motion } from "framer-motion";

function TeachersSection() {

  const teachers = [
    {
      name: "Ms. Priya Sharma",
      role: "Jr KG Teacher",
      experience: "5 Years",
      qualification: "B.Ed in Early Childhood Education",
      languages: "English, Hindi",
      skills: "Storytelling, Creative Activities",
      bio: "Priya ma'am loves teaching through stories and fun activities that help children learn faster.",
      emoji: "👩‍🏫",
    },
    {
      name: "Mr. Rohit Patil",
      role: "Jr KG Teacher",
      experience: "4 Years",
      qualification: "Diploma in Nursery Teaching",
      languages: "English, Marathi, Hindi",
      skills: "Play-based Learning, Games",
      bio: "Rohit sir focuses on learning through play and interactive games to keep kids engaged.",
      emoji: "👨‍🏫",
    },
    {
      name: "Ms. Anjali Deshmukh",
      role: "Sr KG Teacher",
      experience: "6 Years",
      qualification: "M.Ed in Child Development",
      languages: "English, Marathi",
      skills: "Phonics, Reading Skills",
      bio: "Anjali ma'am helps children build strong reading and communication skills.",
      emoji: "👩‍🏫",
    },
    {
      name: "Mr. Sameer Kulkarni",
      role: "Sr KG Teacher",
      experience: "7 Years",
      qualification: "B.Ed + Montessori Training",
      languages: "English, Hindi, Marathi",
      skills: "Mathematics Basics, Logical Thinking",
      bio: "Sameer sir specializes in developing logical thinking and number skills in young learners.",
      emoji: "👨‍🏫",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-900 mb-14">
          Meet Our Wonderful Teachers
        </h2>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">

          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >

              {/* Teacher Avatar */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{teacher.emoji}</div>

                <h3 className="text-xl font-bold text-gray-800">
                  {teacher.name}
                </h3>

                <p className="text-pink-500 font-semibold">
                  {teacher.role}
                </p>
              </div>

              {/* Teacher Details */}
              <div className="space-y-2 text-gray-700 text-sm sm:text-base">

                <p>
                  <span className="font-semibold">📅 Experience:</span>{" "}
                  {teacher.experience}
                </p>

                <p>
                  <span className="font-semibold">🎓 Qualification:</span>{" "}
                  {teacher.qualification}
                </p>

                <p>
                  <span className="font-semibold">🗣 Languages:</span>{" "}
                  {teacher.languages}
                </p>

                <p>
                  <span className="font-semibold">⭐ Skills:</span>{" "}
                  {teacher.skills}
                </p>

                <p className="mt-3 text-gray-600 italic">
                  "{teacher.bio}"
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TeachersSection;