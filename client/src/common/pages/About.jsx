import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Star, Target, CheckCircle2, Puzzle, BookOpen, Music, MonitorPlay, ShieldCheck, Heart } from "lucide-react";

function About() {
  return (
    <>
      <PublicNavbar />

      <main className="pt-24 bg-sky-50 pb-20">

        {/* 1. School Introduction (Hero) */}
        <section className="relative bg-gradient-to-b from-sky-100 to-white py-20 px-6 overflow-hidden">
          <div className="absolute top-10 right-10 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            <motion.div
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm text-pink-600 font-bold border border-pink-100">
                Established 2018 • Pune
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-sky-900 leading-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Adhyayan Kids Academy</span>
              </h1>
              <p className="text-xl text-sky-700 font-medium leading-relaxed">
                We are a child-centered preschool dedicated to nurturing young minds in a safe, joyful, and stimulating environment. Offering tailored programs for Playgroup, Nursery, Jr. KG, and Sr. KG.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 relative w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-300">
                <img src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=800&auto=format&fit=crop" alt="Kids at school" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2 & 3. Vision & Mission */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              className="bg-orange-50 p-10 rounded-[3rem] border-2 border-orange-100 shadow-sm relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-bl-full opacity-50 transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-500 mb-6 shadow-sm">
                  <Star size={32} className="fill-orange-400" />
                </div>
                <h2 className="text-3xl font-extrabold text-sky-900 mb-4">Our Vision</h2>
                <p className="text-sky-800 text-lg font-medium mb-6">To build a strong foundation and create confident, curious learners who are ready to explore the world.</p>
                <ul className="space-y-3 text-sky-700 font-bold">
                  <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-orange-500" /> Develop Creativity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-orange-500" /> Encourage Curiosity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-orange-500" /> Build Strong Foundation</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="bg-blue-50 p-10 rounded-[3rem] border-2 border-blue-100 shadow-sm relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-bl-full opacity-50 transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-500 mb-6 shadow-sm">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-extrabold text-sky-900 mb-4">Our Mission</h2>
                <p className="text-sky-800 text-lg font-medium mb-6">Achieving excellence through play-based learning, experienced teachers, and holistic individual growth.</p>
                <ul className="space-y-3 text-sky-700 font-bold">
                  <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-blue-500" /> Experienced Teachers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-blue-500" /> Safe Environment</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-blue-500" /> Individual Attention</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Teaching Methodology */}
        <section className="py-20 bg-white border-y-2 border-sky-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-sky-900 mb-4">How We Teach</h2>
            <p className="text-xl text-sky-700 font-medium max-w-2xl mx-auto mb-16">Engagement is key! We blend modern techniques with structured play.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Puzzle size={36} />, title: "Play-based Learning", color: "text-pink-500 bg-pink-50" },
                { icon: <BookOpen size={36} />, title: "Storytelling", color: "text-blue-500 bg-blue-50" },
                { icon: <Music size={36} />, title: "Music & Dance", color: "text-purple-500 bg-purple-50" },
                { icon: <MonitorPlay size={36} />, title: "Smart Tools", color: "text-green-500 bg-green-50" }
              ].map((item, i) => (
                <motion.div
                  key={i} className={`${item.color} p-8 rounded-3xl flex flex-col items-center justify-center gap-4 border border-white/50 shadow-sm hover:shadow-md transition-shadow`}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                >
                  {item.icon}
                  <h3 className="text-lg font-bold text-sky-900">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 & 6. Infrastructure & Values */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Facilities */}
          <div>
            <div className="mb-10">
              <h2 className="text-4xl font-extrabold text-sky-900 mb-4 flex items-center gap-3">
                <ShieldCheck className="text-green-500" size={40} /> Top Facilities
              </h2>
              <p className="text-lg text-sky-700 font-medium">Safety builds trust. We provide a world-class environment.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Safe Classrooms", "24/7 CCTV Security", "Outdoor Play Area",
                "Activity & Art Room", "Kids Library", "Clean Washrooms", "First Aid Ready"
              ].map((fac, i) => (
                <motion.div
                  key={i} className="bg-white p-4 rounded-xl shadow-sm border border-sky-100 flex items-center gap-3 font-bold text-sky-800"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">✓</div>
                  {fac}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <div className="mb-10">
              <h2 className="text-4xl font-extrabold text-sky-900 mb-4 flex items-center gap-3">
                <Heart className="text-pink-500 fill-pink-500" size={40} /> Our Core Values
              </h2>
              <p className="text-lg text-sky-700 font-medium">The principles that guide everything we do.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Safety First", bg: "bg-red-50", text: "text-red-600", emoji: "🛡️" },
                { title: "Respect", bg: "bg-blue-50", text: "text-blue-600", emoji: "🤝" },
                { title: "Creativity", bg: "bg-yellow-50", text: "text-yellow-600", emoji: "🎨" },
                { title: "Love & Care", bg: "bg-pink-50", text: "text-pink-600", emoji: "💖" },
                { title: "Discipline", bg: "bg-indigo-50", text: "text-indigo-600", emoji: "🚦" },
                { title: "Inclusiveness", bg: "bg-green-50", text: "text-green-600", emoji: "🌍" },
              ].map((val, i) => (
                <motion.div
                  key={i} className={`${val.bg} p-5 rounded-2xl flex flex-col items-center text-center justify-center gap-2`}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                >
                  <span className="text-3xl">{val.emoji}</span>
                  <span className={`font-bold ${val.text}`}>{val.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Why Choose Us (CTA / Final Marketing section) */}
        <section className="py-20 bg-gradient-to-r from-pink-400 to-purple-500 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-white flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">Why Choose Adhyayan?</h2>
              <p className="text-xl text-pink-100 font-medium max-w-xl">
                We are more than just a preschool. We are a community dedicated to your child's success.
              </p>
              <ul className="space-y-4 text-lg font-bold">
                <li className="flex items-center gap-3"><span className="bg-white/30 p-1 rounded-full"><CheckCircle2 size={24} /></span> Experienced & Warm Staff</li>
                <li className="flex items-center gap-3"><span className="bg-white/30 p-1 rounded-full"><CheckCircle2 size={24} /></span> Small Class Sizes</li>
                <li className="flex items-center gap-3"><span className="bg-white/30 p-1 rounded-full"><CheckCircle2 size={24} /></span> Regular Parent Communication</li>
                <li className="flex items-center gap-3"><span className="bg-white/30 p-1 rounded-full"><CheckCircle2 size={24} /></span> Digital Updates & Management System 😉</li>
              </ul>
            </div>
            <motion.div
              className="flex-1 w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-2xl text-center"
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <span className="text-6xl mb-4 block">🎓</span>
              <h3 className="text-2xl font-bold text-sky-900 mb-4">Join Our Family</h3>
              <p className="text-sky-700 font-medium mb-8">Secure your child's spot for the upcoming academic year.</p>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-md transition-transform active:scale-95">
                Apply for Admission Now
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
export default About;