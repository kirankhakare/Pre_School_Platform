import { motion } from "framer-motion";
import {
  BookOpen,
  Paintbrush,
  Music,
  Gamepad2,
  Scissors,
  Globe,
  Users,
  Star
} from "lucide-react";

function ClassesSection() {

  /* Nursery */
  const nurseryCurriculum = [
    {
      icon: <Paintbrush size={20} />,
      subject: "Creative Activities",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Music size={20} />,
      subject: "Rhymes & Music",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Gamepad2 size={20} />,
      subject: "Play-Based Learning",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <BookOpen size={20} />,
      subject: "Story Time",
      color: "bg-orange-100 text-orange-600"
    },
  ];

  /* JR KG */
  const kg1Curriculum = [
    {
      icon: <BookOpen size={20} />,
      subject: "Language Development",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Paintbrush size={20} />,
      subject: "Art & Creativity",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Music size={20} />,
      subject: "Music & Rhythm",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Gamepad2 size={20} />,
      subject: "Interactive Learning",
      color: "bg-green-100 text-green-600"
    },
  ];

  /* SR KG */
  const kg2Curriculum = [
    {
      icon: <BookOpen size={20} />,
      subject: "Early Reading Skills",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Scissors size={20} />,
      subject: "Fine Motor Skills",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Music size={20} />,
      subject: "Music & Movement",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Globe size={20} />,
      subject: "Environmental Studies",
      color: "bg-green-100 text-green-600"
    },
  ];

  return (
    <section className="px-6 py-20 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-extrabold text-[#2F4C92] mb-4">
            Our Learning Programs
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer age-appropriate programs designed to nurture creativity,
            curiosity, and confidence through engaging activities and
            structured learning experiences.
          </p>

        </div>


        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          {/* Nursery */}
          <motion.div
            className="bg-white rounded-2xl p-7 shadow-lg border hover:shadow-xl transition"
            whileHover={{ y: -5 }}
          >

            <h3 className="text-2xl font-bold text-[#2F4C92] mb-2">
              Nursery
            </h3>

            <p className="text-gray-600 mb-4">
              Age Group: 3 – 4 Years
            </p>

            <p className="text-gray-600 mb-6">
              A nurturing environment where children begin their learning
              journey through play, creativity, music, and social interaction.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">

              {nurseryCurriculum.map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} text-sm p-3 rounded-lg flex items-center gap-2 font-medium`}
                >
                  {item.icon}
                  {item.subject}
                </div>
              ))}

            </div>

            <button className="w-full bg-[#E87D1E] hover:bg-[#c96b17] text-white font-semibold py-3 rounded-lg transition">
              View Nursery Program
            </button>

          </motion.div>


          {/* Jr KG */}
          <motion.div
            className="bg-white rounded-2xl p-7 shadow-lg border hover:shadow-xl transition"
            whileHover={{ y: -5 }}
          >

            <h3 className="text-2xl font-bold text-[#2F4C92] mb-2">
              Junior Kindergarten
            </h3>

            <p className="text-gray-600 mb-4">
              Age Group: 4 – 5 Years
            </p>

            <p className="text-gray-600 mb-6">
              Focused on developing language skills, creativity, and
              confidence through engaging classroom activities and guided learning.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">

              {kg1Curriculum.map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} text-sm p-3 rounded-lg flex items-center gap-2 font-medium`}
                >
                  {item.icon}
                  {item.subject}
                </div>
              ))}

            </div>

            <button className="w-full bg-[#2F4C92] hover:bg-[#1d3570] text-white font-semibold py-3 rounded-lg transition">
              View Jr KG Program
            </button>

          </motion.div>


          {/* Sr KG */}
          <motion.div
            className="bg-white rounded-2xl p-7 shadow-lg border hover:shadow-xl transition"
            whileHover={{ y: -5 }}
          >

            <h3 className="text-2xl font-bold text-[#2F4C92] mb-2">
              Senior Kindergarten
            </h3>

            <p className="text-gray-600 mb-4">
              Age Group: 5 – 6 Years
            </p>

            <p className="text-gray-600 mb-6">
              Preparing children for primary school with early reading,
              logical thinking, environmental awareness, and social skills.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">

              {kg2Curriculum.map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} text-sm p-3 rounded-lg flex items-center gap-2 font-medium`}
                >
                  {item.icon}
                  {item.subject}
                </div>
              ))}

            </div>

            <button className="w-full bg-[#E87D1E] hover:bg-[#c96b17] text-white font-semibold py-3 rounded-lg transition">
              View Sr KG Program
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ClassesSection;