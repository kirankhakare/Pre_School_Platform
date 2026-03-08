import { motion } from "framer-motion";
import {
  BookOpen,
  Paintbrush,
  Music,
  Gamepad2,
  Apple,
  PenTool,
  Scissors,
  Globe,
  Backpack,
  Users,
  Star
} from "lucide-react";

function ClassesSection() {

  /* KG1 Curriculum */
  const kg1Curriculum = [
    {
      icon: <BookOpen size={28} />,
      subject: "Language Arts",
      description: "Alphabet recognition, phonics, simple words",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Paintbrush size={28} />,
      subject: "Creative Arts",
      description: "Coloring, finger painting, craft activities",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Music size={28} />,
      subject: "Music & Movement",
      description: "Action songs, rhymes, dance",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Gamepad2 size={28} />,
      subject: "Play-based Learning",
      description: "Educational games, puzzles, blocks",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Apple size={28} />,
      subject: "Healthy Habits",
      description: "Personal hygiene, fruits, good manners",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <PenTool size={28} />,
      subject: "Pre-Writing",
      description: "Tracing, patterns, grip practice",
      color: "bg-blue-100 text-blue-600"
    },
  ];

  /* KG2 Curriculum */
  const kg2Curriculum = [
    {
      icon: <BookOpen size={28} />,
      subject: "Language Development",
      description: "Reading readiness, sight words, storytelling",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Scissors size={28} />,
      subject: "Fine Motor Skills",
      description: "Cutting, pasting, clay modeling",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Music size={28} />,
      subject: "Rhythmic Activities",
      description: "Musical instruments, rhythm, group songs",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Globe size={28} />,
      subject: "Environmental Studies",
      description: "Seasons, animals, community helpers",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <PenTool size={28} />,
      subject: "Pre-Math Skills",
      description: "Numbers, shapes, patterns, sorting",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Backpack size={28} />,
      subject: "Social Skills",
      description: "Sharing, teamwork, classroom etiquette",
      color: "bg-blue-100 text-blue-600"
    },
  ];

  return (
    <section className="relative px-6 py-20 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* JR KG CARD */}
          <motion.div
            className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-[2rem] p-8 shadow-xl border-4 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
          >

            <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 group-hover:scale-150 transition-transform"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 group-hover:scale-150 transition-transform"></div>

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-5xl font-black text-sky-900">JR.KG</h2>
                <span className="text-7xl">🐼</span>
              </div>

              <div className="bg-white/80 rounded-3xl p-4 mb-6 border-2 border-pink-200">
                <p className="text-lg text-sky-800 font-bold flex items-center gap-2">
                  <Users className="text-pink-500" />
                  Age Group: 3.5 - 4.5 Years
                </p>
              </div>

              {/* Learning Focus */}
              <div className="space-y-4 mb-8">

                <h3 className="text-2xl font-bold text-sky-900 flex items-center gap-2">
                  <Star className="fill-yellow-400 text-yellow-400" />
                  Learning Focus
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  {kg1Curriculum.slice(0,4).map((item, i) => (

                    <motion.div
                      key={i}
                      className={`${item.color} p-3 rounded-xl flex items-center gap-2 font-bold`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.icon}
                      <span>{item.subject}</span>
                    </motion.div>

                  ))}

                </div>

              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl py-4 rounded-3xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Explore KG 1 Program 🐼
              </motion.button>

            </div>

          </motion.div>


          {/* SR KG CARD */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-green-50 rounded-[2rem] p-8 shadow-xl border-4 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
          >

            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 group-hover:scale-150 transition-transform"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-green-200 rounded-full opacity-30 group-hover:scale-150 transition-transform"></div>

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-5xl font-black text-sky-900">SR.KG</h2>
                <span className="text-7xl">🐨</span>
              </div>

              <div className="bg-white/80 rounded-3xl p-4 mb-6 border-2 border-blue-200">
                <p className="text-lg text-sky-800 font-bold flex items-center gap-2">
                  <Users className="text-blue-500" />
                  Age Group: 4.5 - 5.5 Years
                </p>
              </div>

              {/* Learning Focus */}
              <div className="space-y-4 mb-8">

                <h3 className="text-2xl font-bold text-sky-900 flex items-center gap-2">
                  <Star className="fill-yellow-400 text-yellow-400" />
                  Learning Focus
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  {kg2Curriculum.slice(0,4).map((item, i) => (

                    <motion.div
                      key={i}
                      className={`${item.color} p-3 rounded-xl flex items-center gap-2 font-bold`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.icon}
                      <span>{item.subject}</span>
                    </motion.div>

                  ))}

                </div>

              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl py-4 rounded-3xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Explore KG 2 Program 🐨
              </motion.button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ClassesSection;