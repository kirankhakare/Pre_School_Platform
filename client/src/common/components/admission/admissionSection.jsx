import { motion } from "framer-motion";

import visitImg from "../../../assets/visit.png";
import formImg from "../../../assets/form.png";
import documentsImg from "../../../assets/documents.png";
import interactionImg from "../../../assets/interaction.png";
import feeImg from "../../../assets/fee.png";
import welcomeImg from "../../../assets/welcome.png";

function AdmissionProcessSection() {

  const admissionSteps = [
    {
      step: 1,
      title: "Inquiry & Visit",
      description: `Parents are welcome to visit our school campus and explore the learning environment.
Our staff will guide you through classrooms, play areas, and facilities.
You can interact with teachers and understand our teaching approach.`,
      image: visitImg
    },
    {
      step: 2,
      title: "Application Form",
      description: `Parents need to fill out the admission application form with basic details.
The form helps us understand the child’s background and learning needs.`,
      image: formImg
    },
    {
      step: 3,
      title: "Document Submission",
      description: `Parents must submit required documents like birth certificate and photos.
Our staff verifies the documents and records student information.`,
      image: documentsImg
    },
    {
      step: 4,
      title: "Interaction Session",
      description: `A friendly interaction session is arranged between the child and teachers.
This helps us understand the child’s comfort level.`,
      image: interactionImg
    },
    {
      step: 5,
      title: "Fee Payment",
      description: `Once admission is confirmed, parents can proceed with fee payment.
Payment receipt and admission confirmation will be provided.`,
      image: feeImg
    },
    {
      step: 6,
      title: "Welcome Kit",
      description: `Students receive a welcome kit including books, bag, uniform, diary and ID card.`,
      image: welcomeImg
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#2F4C92] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Simple Admission Process
        </motion.h2>

        <p className="text-center text-gray-600 mb-16">
          Just 6 easy steps to secure your child's seat
        </p>

        {/* Steps */}
        <div className="space-y-16">

          {admissionSteps.map((step, index) => (

            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >

              {/* Image */}
              <div
                className={`relative bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition
                ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >

                {/* Step Badge */}
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-[#E87D1E] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  {step.step}
                </div>

                <div className="w-full h-60 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50">

                  <img
                    src={step.image}
                    alt={step.title}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition"
                  />

                </div>

              </div>

              {/* Text */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>

                <h3 className="text-2xl md:text-3xl font-bold text-[#2F4C92] mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default AdmissionProcessSection;