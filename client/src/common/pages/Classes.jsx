import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import classImg from '../../assets/class.png';

import artsImg from '../../assets/arts.png';
import libraryImg from '../../assets/library.png';
import musicImg from '../../assets/music.png';
import playImg from '../../assets/play.png';
import puzzleImg from '../../assets/puzzle.png';
import dramaImg from '../../assets/drama.png';

import {
  BookOpen,
  Paintbrush,
  Music,
  Gamepad2,
  Apple,
  Clock,
  Users,
  Calendar,
  Star,
  Heart,
  Sun,
  Cloud,
  Flower2,
  Backpack,
  Scissors,
  PenTool,
  Globe
} from "lucide-react";

function Classes() {
  // KG 1 Curriculum Data
  const kg1Curriculum = [
    { icon: <BookOpen size={28} />, subject: "Language Arts", description: "Alphabet recognition, phonics, simple words", color: "bg-pink-100 text-pink-600" },
    { icon: <Paintbrush size={28} />, subject: "Creative Arts", description: "Coloring, finger painting, craft activities", color: "bg-orange-100 text-orange-600" },
    { icon: <Music size={28} />, subject: "Music & Movement", description: "Action songs, rhymes, dance", color: "bg-purple-100 text-purple-600" },
    { icon: <Gamepad2 size={28} />, subject: "Play-based Learning", description: "Educational games, puzzles, blocks", color: "bg-green-100 text-green-600" },
    { icon: <Apple size={28} />, subject: "Healthy Habits", description: "Personal hygiene, fruits, good manners", color: "bg-red-100 text-red-600" },
    { icon: <PenTool size={28} />, subject: "Pre-Writing", description: "Tracing, patterns, grip practice", color: "bg-blue-100 text-blue-600" },
  ];

  // KG 2 Curriculum Data
  const kg2Curriculum = [
    { icon: <BookOpen size={28} />, subject: "Language Development", description: "Reading readiness, sight words, storytelling", color: "bg-pink-100 text-pink-600" },
    { icon: <Scissors size={28} />, subject: "Fine Motor Skills", description: "Cutting, pasting, clay modeling", color: "bg-orange-100 text-orange-600" },
    { icon: <Music size={28} />, subject: "Rhythmic Activities", description: "Musical instruments, rhythm, group songs", color: "bg-purple-100 text-purple-600" },
    { icon: <Globe size={28} />, subject: "Environmental Studies", description: "Seasons, animals, community helpers", color: "bg-green-100 text-green-600" },
    { icon: <PenTool size={28} />, subject: "Pre-Math Skills", description: "Numbers, shapes, patterns, sorting", color: "bg-red-100 text-red-600" },
    { icon: <Backpack size={28} />, subject: "Social Skills", description: "Sharing, teamwork, classroom etiquette", color: "bg-blue-100 text-blue-600" },
  ];

  // Daily Schedule
  const dailySchedule = [
    { time: "08:30 - 09:00", activity: "Welcome & Free Play", icon: "🌞" },
    { time: "09:00 - 09:30", activity: "Circle Time (Greetings & Songs)", icon: "🎵" },
    { time: "09:30 - 10:15", activity: "Learning Activity 1", icon: "📚" },
    { time: "10:15 - 10:30", activity: "Snack Break", icon: "🍎" },
    { time: "10:30 - 11:15", activity: "Outdoor Play / Gross Motor", icon: "⚽" },
    { time: "11:15 - 11:45", activity: "Learning Activity 2", icon: "🎨" },
    { time: "11:45 - 12:00", activity: "Story Time & Wrap-up", icon: "📖" },
  ];

  // Class Teachers
  const teachers = [
    {
      name: "Ms. Priya Sharma",
      class: "Jr. KG",
      qualification: "B.Ed in Early Childhood Education",
      experience: "5 Years",
      image: "👩‍🏫"
    },
    {
      name: "Mr. Rohit Patil",
      class: "Jr. KG",
      qualification: "Diploma in Preschool Education",
      experience: "4 Years",
      image: "👨‍🏫"
    },
    {
      name: "Ms. Anjali Deshmukh",
      class: "Sr. KG",
      qualification: "B.Ed in Primary Education",
      experience: "6 Years",
      image: "👩‍🏫"
    },
    {
      name: "Mr. Sameer Kulkarni",
      class: "Sr. KG",
      qualification: "M.Ed in Early Childhood Education",
      experience: "7 Years",
      image: "👨‍🏫"
    }
  ];
  return (
    <>
      <PublicNavbar />

      <main className="pt-24 bg-gradient-to-b from-sky-50 via-white to-sky-50 pb-20 overflow-hidden">

        {/* Floating Decorative Elements */}


        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
          <img
            src={classImg}
            alt="Class Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative max-w-5xl mx-auto text-center text-white px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-bold shadow-lg mb-6">
                🎓 Welcome to Adhyayan Kids
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                A Happy Place <br />
                <span className="text-yellow-300">Where Little Minds Grow</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-10 p-4 sm:p-6 rounded-3xl">
                At <span className="font-bold">Adhyayan Kids Preschool</span>, we nurture curiosity, creativity, and confidence through fun learning activities, storytelling, music, and play-based education.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button className="bg-yellow-400 text-sky-900 font-bold text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl" whileHover={{ scale: 1.05 }}>
                  Explore Classes 🎒
                </motion.button>
                <motion.button className="bg-white text-pink-500 font-bold text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl" whileHover={{ scale: 1.05 }}>
                  Admission Enquiry 📚
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Classes Section */}
        <section className="relative px-6 py-20 bg-white">

          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

              {/* JR KG Card */}
              <motion.div
                className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-[2rem] p-6 sm:p-8 shadow-xl border-2 sm:border-4 relative overflow-hidden group"
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-3xl sm:text-5xl font-black text-sky-900">JR.KG</h2>
                    <span className="text-5xl sm:text-7xl">🐼</span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 mb-6 border-2 border-pink-200">
                    <p className="text-lg text-sky-800 font-bold flex items-center gap-2">
                      <Users className="text-pink-500" size={24} />
                      Age Group: 3.5 - 4.5 Years
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-2xl font-bold text-sky-900 flex items-center gap-2">
                      <Star className="fill-yellow-400 text-yellow-400" size={28} />
                      Learning Focus
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {kg1Curriculum.slice(0, 4).map((item, i) => (
                        <motion.div key={i} className={`${item.color} p-2 sm:p-3 rounded-xl flex items-center gap-2 text-sm sm:text-base font-bold`} whileHover={{ scale: 1.05 }}>
                          {item.icon}
                          <span>{item.subject}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-pink-400 to-orange-400 text-white font-bold text-xl py-4 px-6 rounded-3xl shadow-lg border-4 border-white hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore KG 1 Program 🐼
                  </motion.button>

                </div>
              </motion.div>


              {/* SR KG Card */}
              <motion.div
                className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-[2rem] p-6 sm:p-8 shadow-xl border-2 sm:border-4 relative overflow-hidden group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-green-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-3xl sm:text-5xl font-black text-sky-900">SR.KG</h2>
                    <span className="text-5xl sm:text-7xl">🐼</span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 mb-6 border-2 border-blue-200">
                    <p className="text-lg text-sky-800 font-bold flex items-center gap-2">
                      <Users className="text-blue-500" size={24} />
                      Age Group: 4.5 - 5.5 Years
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-2xl font-bold text-sky-900 flex items-center gap-2">
                      <Star className="fill-yellow-400 text-yellow-400" size={28} />
                      Learning Focus
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {kg2Curriculum.slice(0, 4).map((item, i) => (
                        <motion.div key={i} className={`${item.color} p-2 sm:p-3 rounded-xl flex items-center gap-2 text-sm sm:text-base font-bold`} whileHover={{ scale: 1.05 }}>
                          {item.icon}
                          <span>{item.subject}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold text-xl py-4 px-6 rounded-3xl shadow-lg border-4 border-white hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore KG 2 Program 🐨
                  </motion.button>

                </div>
              </motion.div>

            </div>

          </div>

        </section>

        {/* Full Curriculum Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold text-sky-900 text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Complete Learning <span className="text-pink-500">Curriculum</span>
            </motion.h2>
            <motion.p
              className="text-xl text-sky-700 text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              A balanced approach to early childhood education
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* KG 1 Full Curriculum */}
              <motion.div
                className="bg-pink-50 p-8 rounded-[3rem] border-4 border-white shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-sky-900 mb-6 flex items-center gap-3">
                  <span className="w-12 h-12 bg-pink-400 rounded-2xl text-white flex items-center justify-center text-2xl">1</span>
                  KG 1 Curriculum
                </h3>
                <div className="grid gap-4">
                  {kg1Curriculum.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ x: 10 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className={`${item.color} p-3 rounded-xl`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sky-900 text-lg">{item.subject}</h4>
                        <p className="text-sky-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* KG 2 Full Curriculum */}
              <motion.div
                className="bg-blue-50 p-8 rounded-[3rem] border-4 border-white shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-sky-900 mb-6 flex items-center gap-3">
                  <span className="w-12 h-12 bg-blue-400 rounded-2xl text-white flex items-center justify-center text-2xl">2</span>
                  KG 2 Curriculum
                </h3>
                <div className="grid gap-4">
                  {kg2Curriculum.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ x: 10 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className={`${item.color} p-3 rounded-xl`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sky-900 text-lg">{item.subject}</h4>
                        <p className="text-sky-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Daily Schedule Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold text-sky-900 mb-4 flex items-center justify-center gap-3">
                <Clock className="text-orange-500" size={40} />
                Daily Schedule
              </h2>
              <p className="text-xl text-sky-700">A fun-filled day of learning and play!</p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {dailySchedule.map((item, i) => (
                <motion.div key={i} className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl shadow-md border-2 border-orange-100 hover:border-orange-300 transition-colors" whileHover={{ scale: 1.02 }}>
                  <div className="text-2xl sm:text-3xl bg-orange-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center">{item.icon}</div>
                  <div className="flex-1">
                    <span className="font-bold text-pink-500 text-sm sm:text-lg">{item.time}</span>
                    <p className="font-bold text-sky-900 text-sm sm:text-base">{item.activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Class Teachers Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold text-sky-900 text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet Our <span className="text-purple-500">Wonderful Teachers</span>
            </motion.h2>
            <motion.p
              className="text-xl text-sky-700 text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Nurturing young minds with love and expertise
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {teachers.map((teacher, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-[2rem] border-2 sm:border-4 shadow-xl relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -right-5 -top-5 w-24 h-24 bg-purple-200 rounded-full opacity-50 group-hover:scale-150 transition-transform"></div>

                  <div className="relative z-10">
                    <div className="text-6xl sm:text-7xl mb-4 bg-white w-20 sm:w-24 h-20 sm:h-24 rounded-full flex items-center justify-center mx-auto border-4 border-pink-200">{teacher.image}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-sky-900 text-center mb-2">{teacher.name}</h3>
                    <p className="text-pink-500 font-bold text-center mb-4 text-sm sm:text-base">{teacher.class} Class Teacher</p>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 space-y-2">
                      <p className="flex items-center gap-2 text-sky-700">
                        <Heart size={18} className="text-pink-500" />
                        <span className="font-bold">{teacher.qualification}</span>
                      </p>
                      <p className="flex items-center gap-2 text-sky-700">
                        <Star size={18} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{teacher.experience} Experience</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Section Heading */}
            <motion.h2
              className="text-4xl font-extrabold text-sky-900 text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Explore Our <span className="text-pink-500">Interactive Zones</span>
            </motion.h2>

            {/* Zig-Zag Grid */}
            <div className="flex flex-col gap-16">
              {[
                {
                  icon: "🎨",
                  title: "Art Corner",
                  desc: "Daily creative activities including painting, sketching, and craft work. Helps develop fine motor skills, imagination, and color recognition. Activities include clay modeling, watercolors, and DIY crafts.",
                  benefits: ["Boost creativity", "Improve focus", "Enhance coordination"],
                  age: "Ages 3-6",
                  bgImg: artsImg
                },
                {
                  icon: "📚",
                  title: "Reading Book",
                  desc: "Story time & library sessions designed to enhance language skills and comprehension. Includes group storytelling, interactive reading, and early literacy games.",
                  benefits: ["Enhance vocabulary", "Encourage love for books", "Improve listening skills"],
                  age: "Ages 2-6",
                  bgImg: libraryImg
                },
                {
                  icon: "🎵",
                  title: "Music Zone",
                  desc: "Singing, rhythm games, and musical instrument activities. Develops auditory skills, memory, and emotional expression. Includes drums, xylophone, and sing-along sessions.",
                  benefits: ["Boost memory", "Develop rhythm", "Encourage expression"],
                  age: "Ages 3-6",
                  bgImg: musicImg
                },
                {
                  icon: "⚽",
                  title: "Play Area",
                  desc: "Indoor & outdoor games to promote physical activity and teamwork. Activities include ball games, obstacle courses, and cooperative play. Supports gross motor development and social interaction.",
                  benefits: ["Enhance physical fitness", "Teamwork skills", "Coordination improvement"],
                  age: "Ages 2-6",
                  bgImg: playImg
                },
                {
                  icon: "🧩",
                  title: "Puzzle Time",
                  desc: "Brain development games like jigsaw puzzles, matching, and problem-solving activities. Helps develop logic, critical thinking, and patience. Includes group challenges and individual tasks.",
                  benefits: ["Boost problem-solving", "Enhance focus", "Encourage perseverance"],
                  age: "Ages 3-6",
                  bgImg: puzzleImg
                },
                {
                  icon: "🎭",
                  title: "Drama Play",
                  desc: "Role play, skits, and expressive activities to build confidence and communication. Includes puppet shows, costume role-play, and storytelling. Nurtures creativity, empathy, and teamwork.",
                  benefits: ["Boost confidence", "Enhance communication", "Encourage creativity"],
                  age: "Ages 3-6",
                  bgImg: dramaImg
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
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
                  <motion.div
                    className="md:w-1/2 text-center md:text-left p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.2 }}
                  >
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-sky-900 mb-4">{item.title}</h3>
                    <p className="text-sky-800 font-medium leading-relaxed mb-4">{item.desc}</p>

                    {/* Benefits List */}
                    <ul className="list-disc list-inside text-sky-700 mb-2">
                      {item.benefits.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>

                    {/* Age info */}
                    <p className="text-pink-500 font-semibold">Suitable for: {item.age}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action - Admission Enquiry */}
        <section className="py-20 px-6 bg-white">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-pink-400 to-purple-400 p-12 rounded-[4rem] shadow-2xl border-4 border-white text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full opacity-20 transform -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full opacity-20 transform translate-x-20 translate-y-20"></div>

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-7xl mb-6"
              >
                🎈
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Ready to Start the Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
                Give your child the best start with our kindergarten programs. Limited seats available!
              </p>

              <motion.button
                className="bg-white text-pink-500 font-bold text-2xl py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all border-4 border-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Enquire Now 🎒
              </motion.button>

              <p className="text-white mt-6 font-medium flex items-center justify-center gap-2">
                <Flower2 size={20} />
                Admissions open for academic year 2024-25
                <Flower2 size={20} />
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Classes;