import { motion } from "framer-motion";

import artsImg from "../../../assets/arts.png";
import libraryImg from "../../../assets/library.png";
import musicImg from "../../../assets/music.png";
import playImg from "../../../assets/play.png";
import puzzleImg from "../../../assets/puzzle.png";
import dramaImg from "../../../assets/drama.png";

function InteractiveZones() {

  const zones = [
    {
      icon: "🎨",
      title: "Art Corner",
      desc: "Daily creative activities including painting, sketching, and craft work. Helps develop fine motor skills, imagination, and color recognition.",
      benefits: [
        "Boost creativity",
        "Improve focus",
        "Enhance coordination"
      ],
      age: "Ages 3-6",
      bgImg: artsImg
    },

    {
      icon: "📚",
      title: "Reading Book",
      desc: "Story time & library sessions designed to enhance language skills and comprehension. Includes group storytelling and interactive reading.",
      benefits: [
        "Enhance vocabulary",
        "Encourage love for books",
        "Improve listening skills"
      ],
      age: "Ages 2-6",
      bgImg: libraryImg
    },

    {
      icon: "🎵",
      title: "Music Zone",
      desc: "Singing, rhythm games, and musical instrument activities that help develop auditory skills, memory, and emotional expression.",
      benefits: [
        "Boost memory",
        "Develop rhythm",
        "Encourage expression"
      ],
      age: "Ages 3-6",
      bgImg: musicImg
    },

    {
      icon: "⚽",
      title: "Play Area",
      desc: "Indoor & outdoor games that promote physical activity and teamwork including ball games and obstacle courses.",
      benefits: [
        "Enhance physical fitness",
        "Teamwork skills",
        "Improve coordination"
      ],
      age: "Ages 2-6",
      bgImg: playImg
    },

    {
      icon: "🧩",
      title: "Puzzle Time",
      desc: "Brain development games like jigsaw puzzles, matching games and logic-based activities to improve problem solving.",
      benefits: [
        "Boost problem-solving",
        "Enhance focus",
        "Encourage patience"
      ],
      age: "Ages 3-6",
      bgImg: puzzleImg
    },

    {
      icon: "🎭",
      title: "Drama Play",
      desc: "Role play, skits and storytelling activities that help build confidence and communication skills.",
      benefits: [
        "Boost confidence",
        "Enhance communication",
        "Encourage creativity"
      ],
      age: "Ages 3-6",
      bgImg: dramaImg
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-sky-900 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Explore Our Interactive Zones
        </motion.h2>

        {/* Zig-Zag Layout */}
        <div className="flex flex-col gap-16">

          {zones.map((item, i) => (

            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-8 
              ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              {/* Image */}
              <div className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">

                <img
                  src={item.bgImg}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />

                <div className="absolute inset-0 bg-black/40"></div>

              </div>

              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left p-6">

                <div className="text-6xl mb-4">{item.icon}</div>

                <h3 className="text-2xl font-bold text-sky-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-sky-800 font-medium leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Benefits */}
                <ul className="list-disc list-inside text-sky-700 mb-3">
                  {item.benefits.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                {/* Age */}
                <p className="text-pink-500 font-semibold">
                  Suitable for: {item.age}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default InteractiveZones;