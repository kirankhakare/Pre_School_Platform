import { motion } from "framer-motion";
import nurseryImg from "../../../assets/nursery.png";
import artsImg from "../../../assets/arts.png";
import storyImg from "../../../assets/story.png";
import musicImg from "../../../assets/music.png";
import learningImg from "../../../assets/learning.png";

function NurserySection() {
  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92]">
            Nursery Program
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Our nursery program provides a warm and joyful environment where
            children begin their learning journey through play, creativity,
            exploration and social interaction.
          </p>

        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

          {/* Image */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <img
              src={nurseryImg}
              alt="Nursery Class"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />

          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <h3 className="text-2xl font-bold text-[#2F4C92] mb-4">
              Age Group: 3 – 4 Years
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our nursery program focuses on developing curiosity,
              creativity and communication skills in young learners.
              Through play-based learning, storytelling, music and
              interactive activities, children build confidence and
              social skills in a nurturing environment.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white border-l-4 border-[#E87D1E] p-4 rounded-xl shadow-sm">
                🎨 Creative Activities
              </div>

              <div className="bg-white border-l-4 border-[#E87D1E] p-4 rounded-xl shadow-sm">
                📚 Storytelling
              </div>

              <div className="bg-white border-l-4 border-[#E87D1E] p-4 rounded-xl shadow-sm">
                🎵 Music & Rhymes
              </div>

              <div className="bg-white border-l-4 border-[#E87D1E] p-4 rounded-xl shadow-sm">
                🤝 Social Interaction
              </div>

            </div>

          </motion.div>

        </div>

        {/* Activities Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {[ 
            { img: artsImg, title: "Creative Art" },
            { img: storyImg, title: "Story Time" },
            { img: musicImg, title: "Music & Rhymes" },
            { img: learningImg, title: "Play Learning" }
          ].map((item, i) => (

            <motion.div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
              whileHover={{ y: -6 }}
            >

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-4 text-center font-semibold text-[#2F4C92]">
                {item.title}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default NurserySection;