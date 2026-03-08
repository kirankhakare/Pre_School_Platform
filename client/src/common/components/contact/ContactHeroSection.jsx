
import { motion } from "framer-motion";
import contactImg from '../../../assets/contact.png';
function ContactHero() {
  return (
    <section className="relative px-6 pt-20 pb-20 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactImg}
          alt="Preschool"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">

       

      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative z-20">

        <motion.div
          className="text-center mb-12 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Badge */}
          <div className="inline-block bg-black/30 text-white px-8 py-3 rounded-full text-2xl font-bold  mb-6  border-white">
            📞 Get in Touch
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white/80 mb-4 leading-tight">
            We'd Love to
           
              Hear From You
            
          </h1>

          {/* Subtitle */}
          <p className="text-xl max-w-3xl mx-auto font-medium bg-black/30  p-4 rounded-3xl shadow-sm">
            Have questions about admissions, curriculum, or want to schedule a visit?
            We're here to help!
          </p>

        </motion.div>

        {/* Quick Contact Chips */}
        <div className="flex justify-center gap-4 flex-wrap">

          {["📞 Call", "💬 Chat", "📧 Email", "👋 Visit"].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-pink-200 font-bold text-sky-900 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.06 }}
            >
              {item}
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ContactHero;

