
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

function ContactInfoCardsSection() {

  const contactCards = [
    {
      title: "Call Us",
      value: "+91 98765 43210",
      subtitle: "Mon–Sat during school hours",
      icon: Phone,
      emoji: "📞",
      bg: "from-pink-50 to-orange-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      border: "border-pink-100"
    },
    {
      title: "Email Us",
      value: "info@mjmschool.com",
      subtitle: "We reply within 24 hours",
      icon: Mail,
      emoji: "📧",
      bg: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      border: "border-blue-100"
    },
    {
      title: "Visit Us",
      value: "Nagpur, Maharashtra",
      subtitle: "Come see our campus",
      icon: MapPin,
      emoji: "📍",
      bg: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      border: "border-green-100"
    },
    {
      title: "WhatsApp",
      value: "+91 98765 43210",
      subtitle: "Quick support & updates",
      icon: MessageCircle,
      emoji: "💬",
      bg: "from-purple-50 to-indigo-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      border: "border-purple-100"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${card.bg} p-6 rounded-3xl shadow-lg border-2 ${card.border}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >

                <div className="flex items-center gap-3 mb-4">

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                    <Icon size={24} className={card.iconColor} />
                  </div>

                  <span className="text-2xl">
                    {card.emoji}
                  </span>

                </div>

                <h3 className="text-lg font-extrabold text-sky-900 mb-1">
                  {card.title}
                </h3>

                <p className="text-sky-800 font-bold mb-1">
                  {card.value}
                </p>

                <p className="text-sm text-sky-700">
                  {card.subtitle}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default ContactInfoCardsSection;

