import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Paintbrush,
  Music,
  Calculator,
  Globe,
  Heart,
} from "lucide-react";

function CurriculumSection() {

  const curriculum = [
    {
      icon: <BookOpen size={40} className="text-pink-500" />,
      title: "Language Arts",
      description:
        "Alphabet recognition, phonics, storytelling, vocabulary building and early reading readiness.",
      bg: "bg-pink-50",
    },
    {
      icon: <Calculator size={40} className="text-blue-500" />,
      title: "Basic Mathematics",
      description:
        "Number recognition, counting activities, simple addition, patterns and logical thinking.",
      bg: "bg-blue-50",
    },
    {
      icon: <Paintbrush size={40} className="text-orange-500" />,
      title: "Creative Arts",
      description:
        "Painting, drawing, coloring, craft making and imagination development activities.",
      bg: "bg-orange-50",
    },
    {
      icon: <Music size={40} className="text-purple-500" />,
      title: "Music & Rhythm",
      description:
        "Singing rhymes, dancing, musical instruments and rhythm coordination exercises.",
      bg: "bg-purple-50",
    },
    {
      icon: <Globe size={40} className="text-green-500" />,
      title: "Environmental Studies",
      description:
        "Learning about plants, animals, seasons, nature and the world around us.",
      bg: "bg-green-50",
    },
    {
      icon: <Heart size={40} className="text-red-500" />,
      title: "Social & Emotional Skills",
      description:
        "Teamwork, sharing, kindness, communication and building confidence in children.",
      bg: "bg-red-50",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-sky-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Complete Learning Curriculum
        </motion.h2>

        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          Our preschool curriculum is designed to develop children's
          intellectual, creative, emotional, and physical skills through
          fun learning experiences.
        </p>

        {/* Curriculum Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {curriculum.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.bg} p-8 rounded-3xl shadow-lg`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CurriculumSection;