import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Target, ShieldCheck, Heart, Home, Video, Trees, Palette, Book, HeartPulse } from "lucide-react";

function About() {
  const facilities = [
    {
      icon: <Home size={24} className="text-green-600" />,
      title: "Safe Classrooms",
      description: "Well-ventilated, clean, and child-friendly classrooms designed for safety and comfort."
    },
    {
      icon: <Video size={24} className="text-green-600" />,
      title: "24/7 CCTV Security",
      description: "Continuous monitoring ensures your child’s safety at all times."
    },
    {
      icon: <Trees size={24} className="text-green-600" />,
      title: "Outdoor Play Area",
      description: "Spacious, secure playgrounds for physical development and fun activities."
    },
    {
      icon: <Palette size={24} className="text-green-600" />,
      title: "Activity & Art Room",
      description: "Rooms equipped with art and craft materials to encourage creativity."
    },
    {
      icon: <Book size={24} className="text-green-600" />,
      title: "Kids Library",
      description: "A cozy library with age-appropriate books to develop early reading habits."
    },
    {
      icon: <HeartPulse size={24} className="text-green-600" />,
      title: "First Aid Ready",
      description: "Trained staff and first aid kits available for any minor emergencies."
    },
    {
      icon: <ShieldCheck size={24} className="text-green-600" />,
      title: "Clean Washrooms",
      description: "Hygienic and regularly sanitized washrooms designed for young children."
    }
  ];

  return (
    <>
      <PublicNavbar />
      <main className="pt-24 bg-white pb-20">

        {/* 1. School Introduction */}
        <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-5xl font-extrabold text-sky-900 leading-tight">
              Welcome to, <br />OctaWisdom Preschool
            </h1>
            <p className="text-xl text-black font-medium leading-relaxed">
              Located in Yashoda Nagar, Amravati, OctaWisdom Preschool is dedicated to nurturing young minds through joyful learning, creativity, and holistic development. We provide a safe, caring, and stimulating environment where every child can thrive.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 relative w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=800&auto=format&fit=crop" alt="Kids at school" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </section>

        {/* 2. Mission & Vision */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            className="bg-blue-50 p-10 rounded-3xl border-2 border-blue-100 shadow-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Star size={32} className="text-orange-500" />
              <h2 className="text-3xl font-extrabold text-sky-900">Our Vision</h2>
            </div>
            <p className="text-sky-700 mb-6">To build a strong foundation and create confident, curious learners who are ready to explore the world.</p>
            <ul className="space-y-3 text-sky-700 font-bold">
              <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-orange-500" /> Develop Creativity</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-orange-500" /> Encourage Curiosity</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-orange-500" /> Build Strong Foundations</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-10 rounded-3xl border-2 border-blue-100 shadow-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target size={32} className="text-blue-500" />
              <h2 className="text-3xl font-extrabold text-sky-900">Our Mission</h2>
            </div>
            <p className="text-sky-700 mb-6">Achieving excellence through play-based learning, experienced teachers, and holistic individual growth.</p>
            <ul className="space-y-3 text-sky-700 font-bold">
              <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-blue-500" /> Experienced Teachers</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-blue-500" /> Safe Environment</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-blue-500" /> Individual Attention</li>
            </ul>
          </motion.div>
        </section>

        {/* 3. Highlights */}
        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-sky-900 mb-8">What We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            {[
              { emoji: "🎨", title: "Creative Learning" },
              { emoji: "👩‍🏫", title: "Experienced Teachers" },
              { emoji: "🧩", title: "Activity-Based Curriculum" },
              { emoji: "🌱", title: "Child Development Focus" },
            ].map((item, i) => (
              <motion.div
                key={i} className="bg-blue-50 p-8 rounded-3xl flex flex-col items-center justify-center gap-4 border border-sky-100 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <span className="text-5xl">{item.emoji}</span>
                <h3 className="text-lg font-bold text-sky-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Top Facilities */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-sky-900 mb-4 flex items-center justify-center gap-3">
              <ShieldCheck className="text-green-500" size={36} /> Top Facilities
            </h2>
            <p className="text-sky-700 text-lg max-w-2xl mx-auto">
              We provide a safe, modern, and fun environment where children can learn, play, and grow every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {facilities.map((fac, i) => (
              <motion.div
                key={i}
                className="bg-blue-50 p-6 rounded-2xl shadow-md border border-sky-100 flex flex-col gap-4 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  {fac.icon}
                </div>
                <h3 className="text-lg font-bold text-sky-900">{fac.title}</h3>
                <p className="text-sky-700 text-sm">{fac.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-sky-900 mb-6 flex items-center justify-center gap-3">
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Safety First", emoji: "🛡️" },
              { title: "Respect", emoji: "🤝" },
              { title: "Creativity", emoji: "🎨" },
              { title: "Love & Care", emoji: "💖" },
              { title: "Discipline", emoji: "🚦" },
              { title: "Inclusiveness", emoji: "🌍" },
            ].map((val, i) => (
              <motion.div key={i} className="bg-blue-50 p-5 rounded-2xl flex flex-col items-center text-center justify-center gap-2 border border-sky-100 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <span className="text-3xl">{val.emoji}</span>
                <span className="font-bold text-sky-800">{val.title}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-sky-900 mb-4">Join Our Family</h2>
          <p className="text-xl text-sky-700 font-medium mb-8">Secure your child's spot for the upcoming academic year at OctaWisdom Preschool.</p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md transition">
            Apply for Admission Now.
          </button>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;