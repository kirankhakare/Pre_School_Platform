import React, { useState } from "react";
import { motion } from "framer-motion";
import loginImg from "../../../assets/login.png"; // Your image path

const RegisterHero = () => {
  const [isLogin] = useState(true);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center "
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundSize: "cover", // Ensures image covers the container
        backgroundPosition: "center", // Centers image
        backgroundRepeat: "no-repeat", // Avoids repeating
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/80 md:bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          {/* Top Badge */}
          <div className="inline-block text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-xl md:text-2xl font-bold  mb-6 bg-black/30">
            {isLogin ? "🎒 Welcome Back!" : "🎈 Join Our Family"}
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white/80 mb-4 leading-snug sm:leading-tight md:leading-tight">
            {isLogin ? (
              <>
                Login to{" "}
               
                  Your Account
                
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

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white font-medium max-w-xl mx-auto bg-black/30 md:bg-black/30  p-3 sm:p-4 rounded-2xl sm:rounded-3xl">
            {isLogin
              ? "Access your portal and stay connected with your child's journey"
              : "Register to access parent/teacher/admin portal and get updates"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterHero;