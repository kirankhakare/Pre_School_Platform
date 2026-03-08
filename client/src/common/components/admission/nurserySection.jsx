
import { motion } from "framer-motion";
import nurseryImg from "../../../assets/nursery.png";
import artsImg from "../../../assets/arts.png";
import storyImg from "../../../assets/story.png";
import musicImg from "../../../assets/music.png";
import learningImg from "../../../assets/learning.png";

function NurserySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-sky-900">
            Nursery Program
          </h2>

          <p className="text-lg text-sky-700 mt-4 max-w-2xl mx-auto">
            Our nursery program provides a warm and joyful environment where
            children begin their learning journey through play, creativity,
            exploration, and social interaction.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16">

          {/* Image */}
          <motion.div
            className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={nurseryImg}
              alt="Nursery Class"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-2xl font-bold text-sky-900 mb-4">
              Age Group: 2.5 – 3.5 Years
            </h3>

            <p className="text-sky-700 leading-relaxed mb-6">
              Our nursery program focuses on developing curiosity, creativity,
              and communication skills in young learners. Through play-based
              learning, storytelling, music, and interactive activities,
              children build confidence and social skills in a nurturing
              environment.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                🎨 Creative Activities
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                📚 Storytelling
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                🎵 Music & Rhymes
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                🤝 Social Interaction
              </div>

            </div>

          </motion.div>

        </div>

        {/* Nursery Activities Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            whileHover={{ y: -5 }}
          >
            <img
              src={artsImg}
              alt="Creative Activity"
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="p-4 text-center font-semibold text-sky-900">
              Creative Art
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            whileHover={{ y: -5 }}
          >
            <img
              src={storyImg}
              alt="Storytelling"
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="p-4 text-center font-semibold text-sky-900">
              Story Time
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            whileHover={{ y: -5 }}
          >
            <img
              src={musicImg}
              alt="Music and Rhymes"
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="p-4 text-center font-semibold text-sky-900">
              Music & Rhymes
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            whileHover={{ y: -5 }}
          >
            <img
              src={learningImg}
              alt="Play Learning"
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="p-4 text-center font-semibold text-sky-900">
              Play Learning
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default NurserySection;

