import React, { useState } from "react";
import { Mail, Lock, Users } from "lucide-react";
import { Link } from "react-router-dom"; // optional if you are using react-router

const RegisterForms = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 shadow-xl">
        {/* Switch Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-8 py-3 rounded-full font-bold transition ${
              isLogin
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`px-8 py-3 rounded-full font-bold transition ${
              !isLogin
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Register
          </button>
        </div>

        <form className="space-y-6">
          {/* Register Name Field */}
          {!isLogin && (
            <div>
              <label className="font-bold flex gap-2 mb-2">
                <Users size={18} /> Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-2xl border-2 border-green-200"
              />
            </div>
          )}

          {/* Role Selection */}
          <div>
            <label className="font-bold text-sky-900 flex gap-2 mb-2">
              <Users size={18} /> Select Role
            </label>
            <select className="w-full p-4 rounded-2xl border-2 border-pink-200">
              <option>Choose Role</option>
              <option>Admin</option>
              <option>Teacher</option>
              <option>Parent</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="font-bold flex gap-2 mb-2">
              <Mail size={18} /> Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-2xl border-2 border-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-bold flex gap-2 mb-2">
              <Lock size={18} /> Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-4 rounded-2xl border-2 border-purple-200"
            />
          </div>

          {/* Register Confirm Password */}
          {!isLogin && (
            <div>
              <label className="font-bold flex gap-2 mb-2">
                <Lock size={18} /> Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-4 rounded-2xl border-2 border-orange-200"
              />
            </div>
          )}

          {/* Submit Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl py-4 rounded-2xl">
            {isLogin ? "Login to Portal" : "Create Account"}
          </button>
        </form>

        {/* Conditional Link Below Form */}
        <div className="text-center mt-6">
          {isLogin ? (
            <p className="text-sm text-sky-700">
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="font-bold text-blue-500 hover:underline"
              >
                Register here
              </button>
            </p>
          ) : (
            <p className="text-sm text-sky-700">
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="font-bold text-blue-500 hover:underline"
              >
                Login here
              </button>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegisterForms;