import PublicNavbar from "../components/PublicNavbar";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Star,
  Target,
  ShieldCheck,
  Home,
  Video,
  Trees,
  Palette,
  Book,
  HeartPulse,
  Users,
  Smile,
  Clock,
  Award,
  Quote,
} from "lucide-react";

function About() {
  const facilities = [
    {
      icon: <Home size={24} className="text-[#E87D1E]" />,
      title: "Safe Classrooms",
      description:
        "Well-ventilated, clean, and child-friendly classrooms designed for safety and comfort.",
    },
    {
      icon: <Video size={24} className="text-[#E87D1E]" />,
      title: "24/7 CCTV Security",
      description:
        "Continuous monitoring ensures your child’s safety at all times.",
    },
    {
      icon: <Trees size={24} className="text-[#E87D1E]" />,
      title: "Outdoor Play Area",
      description:
        "Spacious playgrounds for physical development and fun activities.",
    },
    {
      icon: <Palette size={24} className="text-[#E87D1E]" />,
      title: "Art & Activity Room",
      description:
        "Special rooms equipped with materials that encourage creativity.",
    },
    {
      icon: <Book size={24} className="text-[#E87D1E]" />,
      title: "Kids Library",
      description:
        "Age-appropriate books that help develop early reading habits.",
    },
    {
      icon: <HeartPulse size={24} className="text-[#E87D1E]" />,
      title: "First Aid Ready",
      description:
        "Trained staff and first aid kits available for emergencies.",
    },
    {
      icon: <ShieldCheck size={24} className="text-[#E87D1E]" />,
      title: "Clean Washrooms",
      description:
        "Hygienic and regularly sanitized washrooms designed for children.",
    },
  ];

  const stats = [
    { icon: <Users size={32} />, value: "500+", label: "Happy Children" },
    { icon: <Smile size={32} />, value: "50+", label: "Qualified Staff" },
    { icon: <Clock size={32} />, value: "10+", label: "Years of Excellence" },
    { icon: <Award size={32} />, value: "100%", label: "Parent Satisfaction" },
  ];

  const approaches = [
    {
      title: "Play-Based Learning",
      description:
        "We believe children learn best through play. Our curriculum integrates fun activities with educational goals.",
    },
    {
      title: "Holistic Development",
      description:
        "Focus on cognitive, social, emotional, and physical growth through a balanced daily routine.",
    },
    {
      title: "Individual Attention",
      description:
        "Low teacher-student ratios ensure every child gets the guidance and care they deserve.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Aryan (Age 4)",
      quote:
        "OctaWisdom has been a second home for my son. The teachers are caring and the facilities are top-notch. He looks forward to going to school every day!",
    },
    {
      name: "Rahul Deshmukh",
      role: "Parent of Kiara (Age 3)",
      quote:
        "The progress I've seen in my daughter's confidence and communication skills is remarkable. Thank you, OctaWisdom team!",
    },
  ];

  const team = [
    {
      name: "Mrs. Sunita Patil",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Ms. Anjali Rao",
      role: "Head of Curriculum",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Mr. Vikram Joshi",
      role: "Activity Coordinator",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <>
      <PublicNavbar />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative h-[500px] flex items-center justify-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-[#2F4C92]/70" />
          </div>
          <motion.div
            className="relative z-10 text-center px-6 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Welcome to OctaWisdom
            </h1>
            <p className="text-xl md:text-2xl">
              Where every child's potential is nurtured with love, care, and
              creativity.
            </p>
          </motion.div>
        </section>

        {/* INTRO */}
        <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F4C92] leading-tight">
              About Our Preschool
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Located in Yashoda Nagar, Amravati, OctaWisdom Preschool is
              dedicated to nurturing young minds through joyful learning,
              creativity and holistic development. We provide a safe, caring
              environment where every child can thrive.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=800&q=80"
                alt="Children playing with colorful toys"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-[#FFF3E6]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-[#E87D1E] flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#2F4C92]">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* VISION MISSION */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            className="bg-gray-50 p-10 rounded-3xl shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Star size={30} className="text-[#E87D1E]" />
              <h2 className="text-3xl font-bold text-[#2F4C92]">Our Vision</h2>
            </div>
            <p className="text-gray-700 mb-6">
              To build a strong foundation and create confident learners ready
              to explore the world.
            </p>
            <ul className="space-y-3 text-gray-700 font-semibold">
              <li className="flex gap-2">
                <CheckCircle2 className="text-[#E87D1E]" /> Develop Creativity
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-[#E87D1E]" /> Encourage Curiosity
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-[#E87D1E]" /> Build Strong
                Foundations
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-10 rounded-3xl shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target size={30} className="text-[#E87D1E]" />
              <h2 className="text-3xl font-bold text-[#2F4C92]">Our Mission</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Achieving excellence through play-based learning, experienced
              teachers and holistic growth.
            </p>
            <ul className="space-y-3 text-gray-700 font-semibold">
              <li className="flex gap-2">
                <CheckCircle2 className="text-[#E87D1E]" /> Experienced Teachers
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-[#E87D1E]" /> Safe Environment
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-[#E87D1E]" /> Individual Attention
              </li>
            </ul>
          </motion.div>
        </section>

        {/* OUR APPROACH */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2F4C92]">Our Approach</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                We combine modern teaching methods with traditional values to
                create a nurturing learning environment.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {approaches.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-[#2F4C92] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2F4C92]">Our Facilities</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A safe, modern and fun environment where children can learn and
              grow every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {facilities.map((fac, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-12 h-12 bg-[#FFF3E6] flex items-center justify-center rounded-full mb-4">
                  {fac.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2F4C92] mb-2">
                  {fac.title}
                </h3>
                <p className="text-gray-600 text-sm">{fac.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MEET THE TEAM */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2F4C92]">Meet Our Team</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Passionate educators dedicated to your child's growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#2F4C92]">
                      {member.name}
                    </h3>
                    <p className="text-[#E87D1E]">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2F4C92]">What Parents Say</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Hear from families who trust us with their little ones.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-md relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <Quote className="text-[#E87D1E] absolute top-4 right-4 opacity-20" size={40} />
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-[#2F4C92]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center bg-[#2F4C92] text-white">
          <h2 className="text-4xl font-bold mb-4">Join Our Family</h2>
          <p className="text-lg mb-8">
            Secure your child's spot for the upcoming academic year.
          </p>
          <button className="bg-[#E87D1E] hover:bg-[#cf6b14] px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105">
            Apply for Admission
          </button>
        </section>
      </main>
    </>
  );
}

export default About;