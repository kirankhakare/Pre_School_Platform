import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

function ContactInfoCardsSection() {

  const contactCards = [
    {
      title: "Call Us",
      value: "+91 8767192113",
      subtitle: "Mon–Sat during school hours",
      icon: Phone
    },
    {
      title: "Email Us",
      value: "octawisdom@gmail.com",
      subtitle: "We reply within 24 hours",
      icon: Mail
    },
    {
      title: "Visit Us",
      value: "Pramanda, Lane 7, Yashoda Nagar No.2, Amravati, 444606",
      subtitle: "Come see our campus",
      icon: MapPin
    },
    {
      title: "WhatsApp",
      value: "+91 8767192113",
      subtitle: "Quick support & updates",
      icon: MessageCircle
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {contactCards.map((card, index) => {

            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >

                {/* Icon */}
                <div className="w-12 h-12 bg-[#FFF3E6] flex items-center justify-center rounded-xl mb-4">

                  <Icon size={24} className="text-[#E87D1E]" />

                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#2F4C92] mb-1">
                  {card.title}
                </h3>

                {/* Value */}
                <p className="font-semibold text-gray-800 mb-1 break-words">
                  {card.value}
                </p>

                {/* Subtitle */}
                <p className="text-sm text-gray-500">
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