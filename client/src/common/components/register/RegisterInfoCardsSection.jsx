import React, { useState } from "react";
import { Heart, Star, Target, CheckCircle2, Users, Smartphone, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const RegisterInfoCards = () => {

  const [isLogin] = useState(true);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-100">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >

        {/* 🔹 Portal Access */}
        <motion.div
          variants={item}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-pink-100 rounded-xl">
              <Heart className="text-pink-500" size={22} />
            </div>
            <h3 className="text-lg font-bold text-gray-800">
              Portal Access
            </h3>
          </div>

          <div className="space-y-3 text-gray-700 font-medium">
            <p>Admin – Full system control</p>
            <p>Teacher – Class & student management</p>
            <p>Parent – Track child progress</p>
          </div>
        </motion.div>

        {/* 🔹 Benefits */}
        <motion.div
          variants={item}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-orange-100 rounded-xl">
              <Star className="text-orange-500" size={22} />
            </div>
            <h3 className="text-lg font-bold text-gray-800">
              {isLogin ? "Portal Benefits" : "Why Register?"}
            </h3>
          </div>

          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-orange-500" />
              Track progress & attendance
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-orange-500" />
              Download reports & receipts
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-orange-500" />
              Get announcements instantly
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-orange-500" />
              Secure communication system
            </li>
          </ul>
        </motion.div>

        {/* 🔹 Quick Stats */}
        <motion.div
          variants={item}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Target className="text-blue-500" size={22} />
            </div>
            <h3 className="text-lg font-bold text-gray-800">
              Quick Stats
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded-xl text-center border">
              <Users className="mx-auto mb-1 text-blue-500" size={22} />
              <p className="text-lg font-bold text-blue-600">500+</p>
              <p className="text-xs text-gray-600">Users</p>
            </div>

            <div className="bg-white p-4 rounded-xl text-center border">
              <Smartphone className="mx-auto mb-1 text-blue-500" size={22} />
              <p className="text-lg font-bold text-blue-600">24/7</p>
              <p className="text-xs text-gray-600">Access</p>
            </div>

            <div className="bg-white p-4 rounded-xl text-center border">
              <ShieldCheck className="mx-auto mb-1 text-blue-500" size={22} />
              <p className="text-lg font-bold text-blue-600">100%</p>
              <p className="text-xs text-gray-600">Secure</p>
            </div>

            <div className="bg-white p-4 rounded-xl text-center border">
              <Sparkles className="mx-auto mb-1 text-blue-500" size={22} />
              <p className="text-lg font-bold text-blue-600">8+</p>
              <p className="text-xs text-gray-600">Years</p>
            </div>

          </div>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default RegisterInfoCards;