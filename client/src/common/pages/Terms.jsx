import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  CreditCard,
  Scale,
  Mail,
  MapPin,
  Phone,
  CheckCircle2
} from "lucide-react";

import PublicNavbar from "../components/PublicNavbar";

function Terms() {

  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: <FileText className="text-blue-500" size={24} />,
      content: (
        <p className="text-gray-700">
          By accessing and using our website and services, you agree to comply
          with these Terms and Conditions. If you do not agree, please do not use our platform.
        </p>
      )
    },

    {
      title: "2. User Responsibilities",
      icon: <UserCheck className="text-green-500" size={24} />,
      content: (
        <ul className="space-y-2">
          {[
            "Provide accurate information during registration",
            "Maintain confidentiality of login credentials",
            "Use the platform only for lawful purposes",
            "Respect school policies and guidelines"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 size={16} className="text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      )
    },

    {
      title: "3. Account Security",
      icon: <ShieldCheck className="text-purple-500" size={24} />,
      content: (
        <p className="text-gray-700">
          Users are responsible for maintaining the security of their accounts.
          Any unauthorized use should be reported immediately.
        </p>
      )
    },

    {
      title: "4. Payments & Fees",
      icon: <CreditCard className="text-orange-500" size={24} />,
      content: (
        <ul className="space-y-2">
          {[
            "All fees must be paid on time",
            "Late payments may incur penalties",
            "Refund policies depend on school guidelines"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 size={16} className="text-orange-500" />
              {item}
            </li>
          ))}
        </ul>
      )
    },

    {
      title: "5. Prohibited Activities",
      icon: <AlertTriangle className="text-red-500" size={24} />,
      content: (
        <ul className="space-y-2">
          {[
            "Misuse of the platform",
            "Unauthorized data access",
            "Sharing login credentials",
            "Any illegal activity"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 size={16} className="text-red-500" />
              {item}
            </li>
          ))}
        </ul>
      )
    },

    {
      title: "6. Limitation of Liability",
      icon: <Scale className="text-indigo-500" size={24} />,
      content: (
        <p className="text-gray-700">
          We are not responsible for any direct or indirect damages resulting from
          the use of our platform. Users access the system at their own risk.
        </p>
      )
    },

    {
      title: "7. Changes to Terms",
      icon: <FileText className="text-pink-500" size={24} />,
      content: (
        <p className="text-gray-700">
          We reserve the right to update these Terms at any time. Continued use
          of the platform means you accept the updated Terms.
        </p>
      )
    }
  ];

  return (
    <>
      <PublicNavbar />

      <main className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">

        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex p-4 bg-white rounded-full shadow mb-4">
              <FileText size={40} className="text-blue-500" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Terms & Conditions
            </h1>

            <p className="text-gray-600 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/80 backdrop-blur p-5 sm:p-6 rounded-2xl shadow border hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  {section.icon}
                  <h2 className="font-semibold text-lg text-gray-800">
                    {section.title}
                  </h2>
                </div>

                <div className="text-sm sm:text-base">
                  {section.content}
                </div>
              </motion.div>
            ))}

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl mt-10"
            >
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> Pramanda, Lane 7, Yashoda Nagar No. 2, Amravati, 444606
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> +91 8767192113
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} /> octawisdom2026@gmail.com
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </>
  );
}

export default Terms;