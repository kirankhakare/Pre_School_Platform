import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

function FAQSection() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the ideal age for KG 1 admission?",
      answer:
        "Children between 3.5 to 4.5 years as of 31st March are eligible for KG 1 admission.",
    },
    {
      question: "Is there any admission test?",
      answer:
        "No, we conduct a friendly interaction session to understand the child's comfort level.",
    },
    {
      question: "What is the student-teacher ratio?",
      answer:
        "We maintain a 15:1 student-teacher ratio to ensure personal attention for every child.",
    },
    {
      question: "Are parents allowed during the first few days?",
      answer:
        "Yes, we follow a gradual settling program where parents can stay with the child initially.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#2F4C92] text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="text-gray-600 text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Everything you need to know about admissions
        </motion.p>

        {/* FAQ List */}

        <div className="space-y-4">

          {faqs.map((faq, i) => (

            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >

              {/* Question */}

              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-left p-5"
              >

                <div className="flex items-center gap-3">

                  <HelpCircle className="text-[#E87D1E]" />

                  <span className="font-semibold text-[#2F4C92]">
                    {faq.question}
                  </span>

                </div>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />

              </button>

              {/* Answer */}

              {openIndex === i && (

                <motion.div
                  className="px-5 pb-5 text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {faq.answer}
                </motion.div>

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default FAQSection;