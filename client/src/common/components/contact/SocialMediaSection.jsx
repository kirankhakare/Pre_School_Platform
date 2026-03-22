import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

function SocialMediaSection() {

  const socialLinks = [
    {
      name: "Instagram",
      description: "See daily classroom fun & activities",
      icon: Instagram,
      emoji: "📸",
      link: "https://www.instagram.com/octawisdom2026/"
    },
    {
      name: "Facebook",
      description: "Stay updated with school events",
      icon: Facebook,
      emoji: "👍",
      link: "https://www.facebook.com/share/1J1bknVzhh/"
    },
    {
      name: "WhatsApp",
      description: "Chat with us instantly",
      icon: MessageCircle,
      emoji: "💬",
      link: "https://wa.me/918767192113"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92] mb-4">
            Follow Our Journey
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Stay connected with our school community and see the joyful moments
            happening every day.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {socialLinks.map((social, index) => {

            const Icon = social.icon;

            return (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >

                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">

                  <div className="w-12 h-12 bg-[#FFF3E6] flex items-center justify-center rounded-xl">

                    <Icon size={22} className="text-[#E87D1E]" />

                  </div>

                  <span className="text-2xl">
                    {social.emoji}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#2F4C92] mb-2">
                  {social.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600">
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