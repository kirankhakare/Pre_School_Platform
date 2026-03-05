import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
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
    { name: "Ms. Priya Sharma", qualification: "Montessori Certified", experience: "8 years", image: "👩‍🏫", class: "KG 1" },
    { name: "Ms. Neha Gupta", qualification: "Early Childhood Education", experience: "6 years", image: "👩‍🏫", class: "KG 2" },
  ];

  return (
    <>
      <PublicNavbar />
      
      <main className="pt-24 bg-gradient-to-b from-sky-50 via-white to-sky-50 pb-20 overflow-hidden">
        
        {/* Floating Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-40 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-30"
            animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-60 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        {/* Header Section with Cartoon Style */}
        <section className="relative px-6 pt-10 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-gradient-to-r from-pink-400 to-orange-400 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg mb-6 border-4 border-white">
                🎓 Our Little Learners
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-sky-900 mb-4">
                Adhyayan Kids <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Classes</span>
              </h1>
              <p className="text-xl text-sky-700 max-w-3xl mx-auto font-medium bg-white/50 p-4 rounded-3xl">
                Where curiosity meets learning! Discover our engaging programs for KG 1 and KG 2 students.
              </p>
            </motion.div>

            {/* Class Cards - KG 1 and KG 2 */}
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* KG 1 Card */}
              <motion.div
                className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-[4rem] p-8 shadow-xl border-4 border-white relative overflow-hidden group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative Elements */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-5xl font-black text-sky-900">KG 1</h2>
                    <span className="text-7xl">🐼</span>
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
                    <div className="grid grid-cols-2 gap-3">
                      {kg1Curriculum.slice(0, 4).map((item, i) => (
                        <motion.div
                          key={i}
                          className={`${item.color} p-3 rounded-2xl flex items-center gap-2 text-sm font-bold`}
                          whileHover={{ scale: 1.05 }}
                        >
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

              {/* KG 2 Card */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-[4rem] p-8 shadow-xl border-4 border-white relative overflow-hidden group"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative Elements */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-green-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-5xl font-black text-sky-900">KG 2</h2>
                    <span className="text-7xl">🐨</span>
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
                    <div className="grid grid-cols-2 gap-3">
                      {kg2Curriculum.slice(0, 4).map((item, i) => (
                        <motion.div
                          key={i}
                          className={`${item.color} p-3 rounded-2xl flex items-center gap-2 text-sm font-bold`}
                          whileHover={{ scale: 1.05 }}
                        >
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
        <section className="py-20 px-6 bg-gradient-to-r from-yellow-50 to-orange-50">
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

            <div className="max-w-3xl mx-auto">
              {dailySchedule.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 mb-4 bg-white p-4 rounded-2xl shadow-md border-2 border-orange-100 hover:border-orange-300 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="text-3xl bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-pink-500 text-lg">{item.time}</span>
                    <p className="font-bold text-sky-900">{item.activity}</p>
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

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teachers.map((teacher, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-[3rem] border-4 border-white shadow-xl relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -right-5 -top-5 w-24 h-24 bg-purple-200 rounded-full opacity-50 group-hover:scale-150 transition-transform"></div>
                  
                  <div className="relative z-10">
                    <div className="text-7xl mb-4 bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto border-4 border-pink-200">
                      {teacher.image}
                    </div>
                    <h3 className="text-2xl font-bold text-sky-900 text-center mb-2">{teacher.name}</h3>
                    <p className="text-pink-500 font-bold text-center mb-4">{teacher.class} Class Teacher</p>
                    
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

        {/* Interactive Features Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-sky-100 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🎨", title: "Art Corner", desc: "Daily creative activities", color: "bg-pink-100" },
                { icon: "📚", title: "Reading Nook", desc: "Story time & library", color: "bg-blue-100" },
                { icon: "🎵", title: "Music Zone", desc: "Singing & instruments", color: "bg-purple-100" },
                { icon: "⚽", title: "Play Area", desc: "Indoor & outdoor games", color: "bg-green-100" },
                { icon: "🧩", title: "Puzzle Time", desc: "Brain development games", color: "bg-yellow-100" },
                { icon: "🎭", title: "Drama Play", desc: "Role play & expression", color: "bg-orange-100" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`${item.color} p-6 rounded-3xl text-center border-4 border-white shadow-lg hover:shadow-xl transition-all`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-sky-900 mb-2">{item.title}</h3>
                  <p className="text-sky-600 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action - Admission Enquiry */}
        <section className="py-20 px-6">
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