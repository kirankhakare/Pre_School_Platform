
import { motion } from "framer-motion";

function FAQSection() {

  const faqs = [
    {
      question: "What is the ideal age for KG 1 admission?",
      answer: "Children between 3.5 to 4.5 years as of 31st March are eligible for KG 1 admission.",
      icon: "❓"
    },
    {
      question: "Is there any admission test?",
      answer: "No, we conduct a friendly interaction session to understand the child's comfort level.",
      icon: "❓"
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain a 15:1 student-teacher ratio for personalized attention.",
      icon: "❓"
    },
    {
      question: "Are parents allowed during the first few days?",
      answer: "Yes, we have a gradual settling program where parents can stay with the child initially.",
      icon: "❓"
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-sky-900 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="text-xl text-sky-700 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Everything you need to know about KG admissions
        </motion.p>

        {/* FAQ Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">

          {faqs.map((faq, i) => (

            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border-2 border-purple-100 hover:border-purple-300 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
            >

              <div className="flex items-start gap-4">

                <span className="text-2xl">{faq.icon}</span>

                <div>
                  <h3 className="text-lg font-bold text-sky-900 mb-2">
                    {faq.question}
                  </h3>

                  <p className="text-sky-600">
                    {faq.answer}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQSection;

