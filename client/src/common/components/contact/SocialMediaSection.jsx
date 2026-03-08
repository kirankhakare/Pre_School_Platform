
import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

function SocialMediaSection() {

  const socialLinks = [
    {
      name: "Instagram",
      description: "See daily classroom fun & activities",
      icon: Instagram,
      emoji: "📸",
      link: "https://instagram.com",
      bg: "from-pink-50 to-rose-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      border: "border-pink-100"
    },
    {
      name: "Facebook",
      description: "Stay updated with school events",
      icon: Facebook,
      emoji: "👍",
      link: "https://facebook.com",
      bg: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      border: "border-blue-100"
    },
    {
      name: "WhatsApp",
      description: "Chat with us instantly",
      icon: MessageCircle,
      emoji: "💬",
      link: "https://wa.me/919876543210",
      bg: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      border: "border-green-100"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4">
            Follow Our Journey
          </h2>

          <p className="text-sky-700 max-w-xl mx-auto">
            Stay connected with our school community and see the joyful moments
            happening every day.
          </p>

        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {socialLinks.map((social, index) => {

            const Icon = social.icon;

            return (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${social.bg} p-6 rounded-3xl shadow-lg border-2 ${social.border} block`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >

                <div className="flex items-center gap-4 mb-4">

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${social.iconBg}`}>
                    <Icon className={social.iconColor} size={24} />
                  </div>

                  <span className="text-2xl">
                    {social.emoji}
                  </span>

                </div>

                <h3 className="text-xl font-extrabold text-sky-900 mb-2">
                  {social.name}
                </h3>

                <p className="text-sky-700">
                  {social.description}
                </p>

              </motion.a>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default SocialMediaSection;

