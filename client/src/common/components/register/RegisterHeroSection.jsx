import React, { useState } from "react";
import { motion } from "framer-motion";
import loginImg from "../../../assets/login.png";

const RegisterHero = () => {
  const [isLogin] = useState(true);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-purple-900/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center px-4 sm:px-6 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >

          {/* 🔹 Badge */}
          <div className="inline-block text-white px-5 sm:px-7 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold mb-6 bg-white/10 backdrop-blur-md border border-white/20 shadow">
            {isLogin ? "Welcome Back" : "Join Our Platform"}
          </div>

          {/* 🔹 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {isLogin ? (
              <>
                Login to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Your Account
                </span>
              </>
            ) : (
              <>
                Create{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Account
                </span>
              </>
            )}
          </h1>

          {/* 🔹 Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium max-w-2xl mx-auto mt-2 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
            {isLogin
              ? "Access your portal and stay connected with your child's journey in a secure and smart way."
              : "Register to access parent, teacher, or admin dashboard and stay updated with real-time information."}
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default RegisterHero;