import React, { useState } from "react";
import { Heart, Star, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const RegisterInfoCards = () => {

  const [isLogin] = useState(true);

  return (
    <section className="py-12 px-6">

      <div className="max-w-7xl mx-auto space-y-6">

        {/* Portal Access Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-[3rem] border-4 border-white shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-pink-500 fill-pink-500" size={28} />
            <h3 className="text-xl font-extrabold text-sky-900">
              Portal Access
            </h3>
          </div>

          <div className="space-y-3">

            <p className="text-sky-800 font-bold flex items-center gap-2">
              <span className="text-2xl">👩‍💼</span> Admin : Full system control
            </p>

            <p className="text-sky-800 font-bold flex items-center gap-2">
              <span className="text-2xl">👩‍🏫</span> Teacher : Class management
            </p>

            <p className="text-sky-800 font-bold flex items-center gap-2">
              <span className="text-2xl">👪</span> Parent : Child progress
            </p>

          </div>
        </motion.div>


        {/* Benefits Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-orange-50 p-8 rounded-[3rem] border-4 border-white shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">

            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
              <Star className="text-orange-500 fill-orange-400" size={24} />
            </div>

            <h3 className="text-2xl font-extrabold text-sky-900">
              {isLogin ? "Portal Benefits" : "Why Register?"}
            </h3>

          </div>

          <ul className="space-y-4">

            <li className="flex items-center gap-3 text-sky-800 font-bold">
              <CheckCircle2 size={20} className="text-orange-500" />
              Track progress & attendance
            </li>

            <li className="flex items-center gap-3 text-sky-800 font-bold">
              <CheckCircle2 size={20} className="text-orange-500" />
              Download receipts & reports
            </li>

            <li className="flex items-center gap-3 text-sky-800 font-bold">
              <CheckCircle2 size={20} className="text-orange-500" />
              Receive announcements
            </li>

            <li className="flex items-center gap-3 text-sky-800 font-bold">
              <CheckCircle2 size={20} className="text-orange-500" />
              Secure communication
            </li>

          </ul>

        </motion.div>


        {/* Quick Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 p-8 rounded-[3rem] border-4 border-white shadow-xl"
        >

          <div className="flex items-center gap-3 mb-6">

            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
              <Target className="text-blue-500" size={24} />
            </div>

            <h3 className="text-2xl font-extrabold text-sky-900">
              Quick Stats
            </h3>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded-2xl text-center border-2 border-blue-100">
              <span className="text-2xl block mb-2">👥</span>
              <p className="text-xl font-extrabold text-blue-500">500+</p>
              <p className="text-sm font-bold text-sky-800">Users</p>
            </div>

            <div className="bg-white p-4 rounded-2xl text-center border-2 border-blue-100">
              <span className="text-2xl block mb-2">📱</span>
              <p className="text-xl font-extrabold text-blue-500">24/7</p>
              <p className="text-sm font-bold text-sky-800">Access</p>
            </div>

            <div className="bg-white p-4 rounded-2xl text-center border-2 border-blue-100">
              <span className="text-2xl block mb-2">🔒</span>
              <p className="text-xl font-extrabold text-blue-500">100%</p>
              <p className="text-sm font-bold text-sky-800">Secure</p>
            </div>

            <div className="bg-white p-4 rounded-2xl text-center border-2 border-blue-100">
              <span className="text-2xl block mb-2">🌟</span>
              <p className="text-xl font-extrabold text-blue-500">8+</p>
              <p className="text-sm font-bold text-sky-800">Years</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default RegisterInfoCards;