import { motion } from "framer-motion";
import {
  Shield,
  BookOpen,
  UserCheck,
  Lock,
  Share2,
  Image as ImageIcon,
  Cookie,
  Database,
  Scale,
  Mail,
  MapPin,
  Phone,
  CheckCircle2
} from "lucide-react";

import PublicNavbar from "../components/PublicNavbar";


function PrivacyPolicy() {

  const sections = [
    {
      title: "1. Introduction",
      icon: <BookOpen className="text-pink-500" size={24} />,
      content: (
        <>
          <p>Welcome to <strong>OctaWisdom School Of Excellence </strong>.</p>
          <p>We respect your privacy and protect your data.</p>
          <p>This policy explains how your information is used and secured.</p>
        </>
      )
    },

    {
      title: "2. Information We Collect",
      icon: <Database className="text-blue-500" size={24} />,
      content: (
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Student Info",
              items: ["Name & DOB", "Attendance", "Performance", "Photos"]
            },
            {
              title: "Parent Info",
              items: ["Name", "Contact", "Email", "Address"]
            },
            {
              title: "Teacher Info",
              items: ["Name", "Qualification", "Classes"]
            },
            {
              title: "Website Data",
              items: ["IP Address", "Device", "Cookies"]
            }
          ].map((box, i) => (
            <div key={i} className="bg-sky-50 p-4 rounded-xl border">
              <h4 className="font-semibold mb-2">{box.title}</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                {box.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },

    {
      title: "3. How We Use Data",
      icon: <UserCheck className="text-orange-500" size={24} />,
      content: (
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Admission processing",
            "Student records",
            "Attendance tracking",
            "Fee management",
            "Parent communication",
            "Announcements",
            "Improve services",
            "Website functionality"
          ].map((item, i) => (
            <p key={i} className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 size={16} className="text-orange-500" />
              {item}
            </p>
          ))}
        </div>
      )
    },

    {
      title: "4. Security",
      icon: <Lock className="text-green-500" size={24} />,
      content: (
        <ul className="space-y-2">
          {[
            "Password protected accounts",
            "Role-based access",
            "JWT authentication",
            "Secure database",
            "Limited staff access"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700">
              <Shield size={16} className="text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      )
    },

    {
      title: "5. Sharing",
      icon: <Share2 className="text-purple-500" size={24} />,
      content: (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Legal requirements</li>
          <li>Emergency situations</li>
          <li>With consent</li>
        </ul>
      )
    },

    {
      title: "6. Media Usage",
      icon: <ImageIcon className="text-pink-500" size={24} />,
      content: (
        <p className="text-gray-700">
          Photos may be used for events, gallery, or promotions with consent.
        </p>
      )
    },

    {
      title: "7. Cookies",
      icon: <Cookie className="text-amber-500" size={24} />,
      content: (
        <p className="text-gray-700">
          We use cookies for better experience and analytics.
        </p>
      )
    },

    {
      title: "8. Data Retention",
      icon: <Database className="text-indigo-500" size={24} />,
      content: (
        <p className="text-gray-700">
          Data is stored during enrollment or as per legal rules.
        </p>
      )
    },

    {
      title: "9. Rights",
      icon: <Scale className="text-sky-500" size={24} />,
      content: (
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Access data",
            "Correct data",
            "Delete data",
            "Withdraw consent"
          ].map((item, i) => (
            <div key={i} className="bg-white p-3 rounded-lg border text-sm">
              {item}
            </div>
          ))}
        </div>
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
              <Shield size={40} className="text-pink-500" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Privacy Policy
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

export default PrivacyPolicy;