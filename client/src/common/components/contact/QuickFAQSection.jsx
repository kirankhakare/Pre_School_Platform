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
        "Our school operates Monday to Friday from 8:30 AM to 2:30 PM and Saturday from 9:00 AM to 1:00 PM."
    },
    {
      question: "Do you offer extracurricular activities?",
      answer:
        "Yes! We provide activities like art, music, storytelling, dance and fun events throughout the year."
    },
    {
      question: "How can I apply for admission?",
      answer:
        "You can visit our school campus during office hours or contact us via phone, email or WhatsApp for admission details."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="flex items-center justify-center gap-3 mb-4">

            <HelpCircle className="text-[#E87D1E]" size={30} />

            <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92]">
              Quick Questions
            </h2>

          </div>

          <p className="text-gray-600 max-w-xl mx-auto">
            Here are some common questions parents ask before contacting us.
          </p>

        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >

                  <span className="font-semibold text-[#2F4C92]">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="text-[#E87D1E]" />
                  </motion.div>

                </button>

                {/* Answer */}
                <AnimatePresence>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 text-gray-600"
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