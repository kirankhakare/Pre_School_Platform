
import { motion } from "framer-motion";
import { Clock, Users, Heart, Flower2 } from "lucide-react";

function BusinessHoursSection() {

  const hours = [
    { day: "Monday - Friday", hours: "8:30 AM - 2:30 PM", emoji: "📚" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM", emoji: "🎨" },
    { day: "Sunday", hours: "Closed", emoji: "🏠" }
  ];

  const stats = [
    { label: "Happy Students", count: "150+", icon: "👧", color: "text-pink-500" },
    { label: "Expert Teachers", count: "15+", icon: "👩‍🏫", color: "text-blue-500" },
    { label: "Years of Excellence", count: "8+", icon: "🏆", color: "text-green-500" },
    { label: "Events Yearly", count: "25+", icon: "🎉", color: "text-purple-500" }
  ];

  return (
    <section className="py-16 px-6 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Office Hours */}
        <motion.div
          className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-[3rem] border-4 border-white shadow-xl"
          initial={{ opacity:0, x:-30 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
        >

          <div className="flex items-center gap-3 mb-6">

            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Clock className="text-orange-500" size={28} />
            </div>

            <h3 className="text-2xl font-extrabold text-sky-900">
              Office Hours
            </h3>

          </div>

          <div className="space-y-4">

            {hours.map((item,i)=>(
              <div
                key={i}
                className="flex justify-between items-center pb-2 border-b-2 border-dashed border-orange-200"
              >

                <span className="text-sky-800 font-bold flex items-center gap-2">
                  <span>{item.emoji}</span>
                  {item.day}
                </span>

                <span className="text-orange-500 font-extrabold">
                  {item.hours}
                </span>

              </div>
            ))}

          </div>

          <div className="mt-6 bg-white p-4 rounded-2xl">

            <p className="text-sky-700 font-medium flex items-center gap-2">
              <Heart size={18} className="text-pink-500"/>
              We're available on WhatsApp during school hours
            </p>

          </div>

        </motion.div>


        {/* Community Stats */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-[3rem] border-4 border-white shadow-xl"
          initial={{ opacity:0, x:30 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
        >

          <div className="flex items-center gap-3 mb-6">

            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="text-blue-500" size={28} />
            </div>

            <h3 className="text-2xl font-extrabold text-sky-900">
              Our Community
            </h3>

          </div>

          <div className="grid grid-cols-2 gap-4">

            {stats.map((stat,i)=>(
              <motion.div
                key={i}
                className="bg-white p-4 rounded-2xl text-center border-2 border-blue-100"
                whileHover={{ scale:1.05 }}
              >

                <span className="text-3xl mb-2 block">
                  {stat.icon}
                </span>

                <p className={`text-2xl font-extrabold ${stat.color}`}>
                  {stat.count}
                </p>

                <p className="text-sm text-sky-700 font-bold">
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </div>

          <div className="mt-6 text-center">

            <p className="text-sky-800 font-bold flex items-center justify-center gap-2">
              <Flower2 size={18}/>
              Join our growing family
              <Flower2 size={18}/>
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default BusinessHoursSection;

