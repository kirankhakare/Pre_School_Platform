import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Baby,
  School,
  CalendarCheck,
  FileText,
  CheckCircle,
  Clock,
  Users,
  GraduationCap,
  Heart,
  Star,
  Flower2,
  Gift,
  ClipboardList,
  Upload,
  Download,
  Mail,
  Phone,
  MapPin,
  AlertCircle
} from "lucide-react";
import visitImg from "../../assets/visit.png";
import formImg from "../../assets/form.png";
import documentsImg from "../../assets/documents.png";
import interactionImg from "../../assets/interaction.png";
import feeImg from "../../assets/fee.png";
import welcomeImg from "../../assets/welcome.png";

import nurseryImg from "../../assets/nursery.png";

import artsImg from "../../assets/arts.png";
import storyImg from "../../assets/story.png";
import musicImg from "../../assets/music.png";
import learningImg from "../../assets/learning.png";

function Admission() {
  // Admission Steps Data
  const admissionSteps = [
    {
      step: 1,
      title: "Inquiry & Visit",
      description: `Parents are welcome to visit our school campus and explore the learning environment.
Our staff will guide you through classrooms, play areas, and facilities.
You can interact with teachers and understand our teaching approach.
This visit helps parents feel confident about their child's early education journey.`,
      icon: "👋",
      image: visitImg
    },
    {
      step: 2,
      title: "Application Form",
      description: `Parents need to fill out the admission application form with basic details.
The form helps us understand the child’s background and learning needs.
All information is kept secure and used only for admission purposes.
Our team is always available to assist parents during the form filling process.`,
      icon: "📝",
      image: formImg
    },
    {
      step: 3,
      title: "Document Submission",
      description: `Parents must submit required documents for verification.
This may include birth certificate, passport-size photos, and ID proof.
Our staff carefully verifies the documents to ensure accurate records.
This step helps us maintain a safe and organized student database.`,
      icon: "📄",
      image: documentsImg
    },
    {
      step: 4,
      title: "Interaction Session",
      description: `A short interaction session is arranged between the child and teachers.
This helps us understand the child’s comfort level and communication skills.
It is not a test but a friendly conversation for the child.
Parents can also ask questions and know more about our school.`,
      icon: "🤝",
      image: interactionImg
    },
    {
      step: 5,
      title: "Fee Payment",
      description: `Once admission is confirmed, parents can proceed with fee payment.
Multiple payment options are available for convenience.
A receipt and admission confirmation will be provided.
This step officially secures the child’s seat for the academic year.`,
      icon: "💰",
      image: feeImg
    },
    {
      step: 6,
      title: "Welcome Kit",
      description: `After completing all steps, the child becomes part of our school family.
Students receive a welcome kit with basic learning materials.
Teachers help children settle comfortably in their new class.
We ensure every child begins their learning journey with joy.`,
      icon: "🎁",
      image: welcomeImg
    },
  ];
  // Fee Structure Data
  const feeStructure = [
    {
      class: "JR.KG",
      ageGroup: "3.5 - 4.5 Years",
      admissionFee: "₹15,000",
      tuitionFee: "₹3,500/month",
      activityFee: "₹1,000/month",
      totalAnnual: "₹55,000",
      color: "from-pink-400 to-orange-400",
      emoji: "🐼"
    },
    {
      class: "SR.KG",
      ageGroup: "4.5 - 5.5 Years",
      admissionFee: "₹15,000",
      tuitionFee: "₹3,500/month",
      activityFee: "₹1,000/month",
      totalAnnual: "₹55,000",
      color: "from-blue-400 to-green-400",
      emoji: "🐨"
    },
  ];

  // Required Documents
  const requiredDocuments = [
    { name: "Child's Birth Certificate", icon: "📜", color: "bg-pink-50 text-pink-600" },
    { name: "Passport Size Photos (4 copies)", icon: "📸", color: "bg-blue-50 text-blue-600" },
    { name: "Parent's ID Proof", icon: "🆔", color: "bg-green-50 text-green-600" },
    { name: "Address Proof", icon: "🏠", color: "bg-purple-50 text-purple-600" },
    { name: "Medical History/Records", icon: "🏥", color: "bg-orange-50 text-orange-600" },
    { name: "Previous School Records (if any)", icon: "📚", color: "bg-yellow-50 text-yellow-600" },
  ];

  // Important Dates
  const importantDates = [
    { event: "Admission Starts", date: "1st November 2024", icon: "📅", color: "text-green-600" },
    { event: "Last Date to Apply", date: "15th March 2025", icon: "⏰", color: "text-red-600" },
    { event: "Interaction Sessions", date: "20th - 30th March 2025", icon: "🤝", color: "text-blue-600" },
    { event: "Results Announcement", date: "5th April 2025", icon: "📢", color: "text-purple-600" },
    { event: "Fee Submission", date: "10th - 20th April 2025", icon: "💰", color: "text-orange-600" },
    { event: "Academic Year Begins", date: "15th June 2025", icon: "🎓", color: "text-pink-600" },
  ];

  // FAQ Data
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

  const radius = 220; // circle size

  return (
    <>
      <PublicNavbar />

      <main className="pt-24 bg-gradient-to-b from-sky-50 via-white to-sky-50 pb-20 overflow-hidden">



        {/* Hero Section */}
        <section
          className="relative px-4 sm:px-6 md:px-8 pt-10 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/admission img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for better text visibility */}
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg mb-6 border-4 border-white">
                🎒 Admissions Open 2024-25
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Join Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
                  Adhyayan Kids
                </span>{" "}
                Family
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white max-w-full sm:max-w-3xl mx-auto font-medium p-4 rounded-3xl">
                Give your child the best start in life. Apply for KG 1 and KG 2 admissions today!
              </p>
            </motion.div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
              {[
                { icon: <Baby size={28} />, label: "Age 3.5+", color: "bg-pink-100" },
                { icon: <School size={28} />, label: "Limited Seats", color: "bg-blue-100" },
                { icon: <Clock size={28} />, label: "8:30 AM - 12:30 PM", color: "bg-green-100" },
                { icon: <Users size={28} />, label: "15:1 Ratio", color: "bg-purple-100" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`${item.color} p-4 rounded-2xl text-center border-2 border-white shadow-md`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-sky-900 mb-2 flex justify-center">{item.icon}</div>
                  <p className="font-bold text-sky-900 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fee Structure Cards - KG 1 and KG 2 */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold text-sky-900 text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Fee Structure <span className="text-pink-500">2024-25</span>
            </motion.h2>
            <motion.p
              className="text-xl text-sky-700 text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Transparent and affordable fee structure for both KG classes
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {feeStructure.map((fee, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${fee.color} p-1 rounded-[3rem] shadow-xl`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white rounded-[2.8rem] p-8 h-full relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-4xl font-black text-sky-900">{fee.class}</h3>
                        <span className="text-6xl">{fee.emoji}</span>
                      </div>

                      <p className="text-lg text-sky-700 font-bold mb-6 flex items-center gap-2">
                        <Users size={20} className="text-pink-500" />
                        {fee.ageGroup}
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center pb-2 border-b-2 border-dashed border-pink-200">
                          <span className="text-sky-800 font-bold">Admission Fee</span>
                          <span className="text-2xl font-extrabold text-pink-500">{fee.admissionFee}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b-2 border-dashed border-blue-200">
                          <span className="text-sky-800 font-bold">Tuition Fee</span>
                          <span className="text-2xl font-extrabold text-blue-500">{fee.tuitionFee}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b-2 border-dashed border-green-200">
                          <span className="text-sky-800 font-bold">Activity Fee</span>
                          <span className="text-2xl font-extrabold text-green-500">{fee.activityFee}</span>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                          <span className="text-xl font-bold text-sky-900">Total Annual</span>
                          <span className="text-3xl font-black text-purple-600">{fee.totalAnnual}</span>
                        </div>
                      </div>

                      <motion.button
                        className={`w-full bg-gradient-to-r ${fee.color} text-white font-bold text-xl py-4 px-6 rounded-2xl shadow-lg border-4 border-white hover:shadow-xl transition-all`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Apply for {fee.class} 🎒
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-sky-900">
                Nursery <span className="text-pink-500">Program</span>
              </h2>

              <p className="text-lg text-sky-700 mt-4 max-w-2xl mx-auto">
                Our nursery program provides a warm and joyful environment where
                children begin their learning journey through play, creativity,
                exploration, and social interaction.
              </p>
            </div>


            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16">
              {/* Image */}
              <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={nurseryImg}
                  alt="Nursery Class"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>


              {/* Information */}
              <div>

                <h3 className="text-2xl font-bold text-sky-900 mb-4">
                  Age Group: 2.5 – 3.5 Years
                </h3>

                <p className="text-sky-700 leading-relaxed mb-6">
                  Our nursery program focuses on developing curiosity, creativity,
                  and communication skills in young learners. Through play-based
                  learning, storytelling, music, and interactive activities,
                  children build confidence and social skills in a nurturing
                  environment.
                </p>


                {/* Features */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                    🎨 Creative Activities
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                    📚 Storytelling
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                    🎵 Music & Rhymes
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                    🤝 Social Interaction
                  </div>

                </div>

              </div>

            </div>


            {/* Nursery Activities Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <img
                  src={artsImg}
                  alt="Creative Activity"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="p-4 text-center font-semibold text-sky-900">
                  Creative Art
                </div>
              </div>


              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <img
                  src={storyImg}
                  alt="Storytelling"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="p-4 text-center font-semibold text-sky-900">
                  Story Time
                </div>
              </div>


              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <img
                  src={musicImg}
                  alt="Music and Rhymes"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="p-4 text-center font-semibold text-sky-900">
                  Music & Rhymes
                </div>
              </div>


              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <img
                  src={learningImg}
                  alt="Play Learning"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="p-4 text-center font-semibold text-sky-900">
                  Play Learning
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Admission Process Steps */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <motion.h2
              className="text-4xl font-extrabold text-center text-sky-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Simple <span className="text-pink-500">Admission Process</span>
            </motion.h2>

            <p className="text-center text-sky-700 mb-16">
              Just 6 easy steps to secure your child's seat
            </p>

            <div className="space-y-12 sm:space-y-16 md:space-y-20">

              {admissionSteps.map((step, index) => {

                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* IMAGE - always first */}
                    <div className="relative bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">
                      {/* Step Number */}
                      <div
                        className={`absolute -top-5 ${index % 2 === 0 ? "-left-5" : "-right-5"
                          } w-14 h-14 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg`}
                      >
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

                    {/* TEXT - always second */}
                    <div>
                      <h3 className="text-3xl font-bold text-sky-900 mb-3">{step.title}</h3>
                      <p className="text-sky-700 text-lg leading-relaxed whitespace-pre-line mt-2">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {/* Documents List */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-extrabold text-sky-900 mb-4 flex items-center gap-3">
                  <FileText className="text-pink-500" size={40} />
                  Required Documents
                </h2>
                <p className="text-lg text-sky-700 font-medium mb-8">
                  Please keep these documents ready before applying
                </p>

                <div className="space-y-4">
                  {requiredDocuments.map((doc, i) => (
                    <motion.div
                      key={i}
                      className={`${doc.color} p-4 rounded-2xl flex items-center gap-4 border-2 border-white shadow-md`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-3xl">{doc.icon}</span>
                      <span className="font-bold text-sky-900">{doc.name}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 bg-yellow-50 p-6 rounded-3xl border-2 border-yellow-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sky-800 font-medium flex items-center gap-2">
                    <AlertCircle className="text-yellow-600" />
                    Submit self-attested copies of all documents
                  </p>
                </motion.div>
              </motion.div>

              {/* Important Dates */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-extrabold text-sky-900 mb-4 flex items-center gap-3">
                  <CalendarCheck className="text-blue-500" size={40} />
                  Important Dates
                </h2>
                <p className="text-lg text-sky-700 font-medium mb-8">
                  Mark your calendar for these key dates
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-[3rem] border-4 border-white shadow-xl">
                  {importantDates.map((date, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between py-3 border-b-2 border-dashed border-blue-200 last:border-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{date.icon}</span>
                        <span className="font-bold text-sky-900">{date.event}</span>
                      </div>
                      <span className={`font-extrabold ${date.color}`}>{date.date}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Countdown Timer */}
                <motion.div
                  className="mt-8 bg-pink-50 p-6 rounded-3xl border-4 border-white text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-sky-800 font-bold mb-2">Applications Closing Soon!</p>
                  <p className="text-4xl font-black text-pink-500">15 Days Left</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold text-sky-900 text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Frequently Asked <span className="text-purple-500">Questions</span>
            </motion.h2>
            <motion.p
              className="text-xl text-sky-700 text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Everything you need to know about KG admissions
            </motion.p>

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
                      <h3 className="text-lg font-bold text-sky-900 mb-2">{faq.question}</h3>
                      <p className="text-sky-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Application Form Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 bg-gradient-to-br from-sky-100 to-white p-6 sm:p-8 md:p-10 rounded-[3rem] md:rounded-[4rem] shadow-2xl border-4 border-white">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-extrabold text-sky-900 mb-6">Get in Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Phone className="text-pink-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-sky-600">Call us</p>
                      <p className="font-bold text-sky-900">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Mail className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-sky-600">Email us</p>
                      <p className="font-bold text-sky-900">admissions@adhyayan.edu</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <MapPin className="text-green-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-sky-600">Visit us</p>
                      <p className="font-bold text-sky-900">123 School Road, Pune</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-3xl border-4 border-white">
                  <h4 className="text-xl font-bold text-sky-900 mb-3 flex items-center gap-2">
                    <Gift className="text-purple-500" />
                    Early Bird Benefits
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sky-700">
                      <CheckCircle size={18} className="text-green-500" />
                      10% discount on annual fee
                    </li>
                    <li className="flex items-center gap-2 text-sky-700">
                      <CheckCircle size={18} className="text-green-500" />
                      Free welcome kit included
                    </li>
                    <li className="flex items-center gap-2 text-sky-700">
                      <CheckCircle size={18} className="text-green-500" />
                      Priority class selection
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Quick Application Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-pink-100"
              >
                <h3 className="text-3xl font-extrabold text-sky-900 mb-6 text-center">
                  Quick Enquiry Form
                </h3>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sky-800 font-bold mb-2">Parent's Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full p-4 rounded-2xl border-2 border-pink-200 focus:border-pink-400 outline-none font-medium text-sky-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sky-800 font-bold mb-2">Child's Name</label>
                    <input
                      type="text"
                      placeholder="Enter child's name"
                      className="w-full p-4 rounded-2xl border-2 border-blue-200 focus:border-blue-400 outline-none font-medium text-sky-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sky-800 font-bold mb-2">Applying for</label>
                    <select className="w-full p-4 rounded-2xl border-2 border-green-200 focus:border-green-400 outline-none font-medium text-sky-900">
                      <option>Select Class</option>
                      <option>KG 1 (Age 3.5 - 4.5 Years)</option>
                      <option>KG 2 (Age 4.5 - 5.5 Years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sky-800 font-bold mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit number"
                      className="w-full p-4 rounded-2xl border-2 border-purple-200 focus:border-purple-400 outline-none font-medium text-sky-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sky-800 font-bold mb-2">Email ID</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-4 rounded-2xl border-2 border-orange-200 focus:border-orange-400 outline-none font-medium text-sky-900"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold text-xl py-4 px-6 rounded-2xl shadow-lg border-4 border-white hover:shadow-xl transition-all mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Enquiry 🚀
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="pt-20 px-6 bg-white">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-green-400 to-blue-400 p-12 rounded-[4rem] shadow-2xl border-4 border-white text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full opacity-20 transform -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full opacity-20 transform translate-x-20 translate-y-20"></div>

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-7xl mb-6"
              >
                🎉
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Limited Seats Available!
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
                Don't miss the opportunity. Apply now for KG 1 and KG 2 admissions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-green-500 font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all border-4 border-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply for KG 1 🐼
                </motion.button>
                <motion.button
                  className="bg-white text-blue-500 font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all border-4 border-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply for KG 2 🐨
                </motion.button>
              </div>

              <p className="text-white mt-6 font-medium flex items-center justify-center gap-2">
                <Flower2 size={20} />
                Hurry! Early bird benefits ending soon
                <Flower2 size={20} />
              </p>
            </div>
          </motion.div>
        </section>
      </main >

      <Footer />
    </>
  );
}

export default Admission;