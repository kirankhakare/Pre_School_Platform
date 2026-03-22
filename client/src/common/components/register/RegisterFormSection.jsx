import React, { useState } from "react";
import { Mail, Lock, Users, MapPin } from "lucide-react";
import axios from "axios";

const RegisterForms = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    address: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const API = "http://localhost:5000/api/auth";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      name: "",
      address: "",
      role: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.email || !form.password || !form.role) {
      alert("Please fill all required fields");
      return;
    }

    if (!isLogin && (!form.name || !form.address)) {
      alert("Please fill all fields");
      return;
    }

    if (!isLogin && form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      if (isLogin) {
        const res = await axios.post(
          `${API}/login`,
          {
            email: form.email,
            password: form.password,
            role: form.role
          },
          { withCredentials: true }
        );

        alert("Login Successful");
        console.log(res.data);

      } else {
        const res = await axios.post(
          `${API}/register`,
          {
            name: form.name,
            email: form.email,
            password: form.password,
            role: form.role,
            address: form.address
          },
          { withCredentials: true }
        );

        alert("Registration Successful");
        console.log(res.data);

        setIsLogin(true);
        resetForm();
      }

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-blue-50 to-purple-100">

      <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-10 shadow-2xl">

        {/* Switch Buttons */}
        <div className="flex justify-center mb-8 gap-3">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 sm:py-3 rounded-full font-semibold transition ${
              isLogin
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 sm:py-3 rounded-full font-semibold transition ${
              !isLogin
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          {!isLogin && (
            <div>
              <label className="font-semibold flex gap-2 mb-1 text-sm">
                <Users size={16} /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          )}

          {/* Address */}
          {!isLogin && (
            <div>
              <label className="font-semibold flex gap-2 mb-1 text-sm">
                <MapPin size={16} /> Address
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          )}

          {/* Role */}
          <div>
            <label className="font-semibold flex gap-2 mb-1 text-sm">
              <Users size={16} /> Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Choose Role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold flex gap-2 mb-1 text-sm">
              <Mail size={16} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold flex gap-2 mb-1 text-sm">
              <Lock size={16} /> Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div>
              <label className="font-semibold flex gap-2 mb-1 text-sm">
                <Lock size={16} /> Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition shadow-md disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login to Portal"
              : "Create Account"}
          </button>

        </form>

        {/* Toggle */}
        <div className="text-center mt-5 text-sm">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-500 font-semibold"
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-500 font-semibold"
              >
                Login
              </button>
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default RegisterForms;