
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

function QuickFAQSection() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What age groups do you accept?",
      answer:
        "We welcome children from Nursery to Upper Kindergarten. Our programs focus on early childhood development through play-based learning."
    },
    {
      question: "What are the school timings?",
      answer:
        "Our school operates Monday to Friday from 8:30 AM to 2:30 PM, and Saturday from 9:00 AM to 1:00 PM."
    },
    {
      question: "Do you offer extracurricular activities?",
      answer:
        "Yes! We provide activities like art, music, storytelling, dance, and fun events throughout the year."
    },
    {
      question: "How can I apply for admission?",
      answer:
        "You can visit our school campus during office hours or contact us through phone, email, or WhatsApp for admission details."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">

      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">

          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="text-orange-500" size={32} />
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">
              Quick Questions
            </h2>
          </div>

          <p className="text-sky-700 max-w-xl mx-auto">
            Here are some common questions parents ask before contacting us.
          </p>

        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md border-2 border-orange-100 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >

                  <span className="font-bold text-sky-900">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-orange-500" />
                  </motion.div>

                </button>

                {/* Answer */}
                <AnimatePresence>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-sky-700"
                    >
                      {faq.answer}
                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default QuickFAQSection;

