
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
You can interact with teachers and understand our teaching approach.
This visit helps parents feel confident about their child's early education journey.`,
      image: visitImg
    },
    {
      step: 2,
      title: "Application Form",
      description: `Parents need to fill out the admission application form with basic details.
The form helps us understand the child’s background and learning needs.
All information is kept secure and used only for admission purposes.
Our team is always available to assist parents during the form filling process.`,
      image: formImg
    },
    {
      step: 3,
      title: "Document Submission",
      description: `Parents must submit required documents for verification.
This may include birth certificate, passport-size photos, and ID proof.
Our staff carefully verifies the documents to ensure accurate records.
This step helps us maintain a safe and organized student database.`,
      image: documentsImg
    },
    {
      step: 4,
      title: "Interaction Session",
      description: `A short interaction session is arranged between the child and teachers.
This helps us understand the child’s comfort level and communication skills.
It is not a test but a friendly conversation for the child.
Parents can also ask questions and know more about our school.`,
      image: interactionImg
    },
    {
      step: 5,
      title: "Fee Payment",
      description: `Once admission is confirmed, parents can proceed with fee payment.
Multiple payment options are available for convenience.
A receipt and admission confirmation will be provided.
This step officially secures the child’s seat for the academic year.`,
      image: feeImg
    },
    {
      step: 6,
      title: "Welcome Kit",
      description: `After completing all steps, the child becomes part of our school family.
Students receive a welcome kit with basic learning materials.
Teachers help children settle comfortably in their new class.
We ensure every child begins their learning journey with joy.`,
      image: welcomeImg
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-sky-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Simple Admission Process
        </motion.h2>

        <p className="text-center text-sky-700 mb-16">
          Just 6 easy steps to secure your child's seat
        </p>

        {/* Steps */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">

          {admissionSteps.map((step, index) => (

            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              {/* Image Card */}
              <div
                className={`relative bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition
                ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >

                {/* Step Number */}
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.step}
                </div>

                <div className="w-full h-60 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="max-h-full max-w-full object-contain transition duration-500 hover:scale-105"
                  />
                </div>

              </div>

              {/* Text Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>

                <h3 className="text-3xl font-bold text-sky-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-sky-700 text-lg leading-relaxed whitespace-pre-line mt-2">
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

