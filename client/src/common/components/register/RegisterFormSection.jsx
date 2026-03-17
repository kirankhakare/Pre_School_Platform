import React, { useState } from "react";
import { Mail, Lock, Users, MapPin } from "lucide-react";
import axios from "axios";

const RegisterForms = () => {

  const [isLogin, setIsLogin] = useState(true);

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

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

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

        if (form.password !== form.confirmPassword) {
          alert("Passwords do not match");
          return;
        }

        const res = await axios.post(
          `${API}/register`,
          {
            name: form.name,
            email: form.email,
            password: form.password,
            role: form.role
          },
          { withCredentials: true }
        );

        alert("Registration Successful");
        console.log(res.data);

        setIsLogin(true);
      }

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (

    <section className="py-12 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 shadow-xl">

        {/* Switch Buttons */}

        <div className="flex justify-center mb-8 gap-4">

          <button
            onClick={() => setIsLogin(true)}
            className={`px-8 py-3 rounded-full font-bold ${
              isLogin
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`px-8 py-3 rounded-full font-bold ${
              !isLogin
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Register
          </button>

        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}

          {!isLogin && (

            <div>

              <label className="font-bold flex gap-2 mb-2">
                <Users size={18} /> Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-4 rounded-2xl border"
              />

            </div>

          )}

          {/* Address */}

          {!isLogin && (

            <div>

              <label className="font-bold flex gap-2 mb-2">
                <MapPin size={18} /> Address
              </label>

              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full p-4 rounded-2xl border"
              />

            </div>

          )}

          {/* Role */}

          <div>

            <label className="font-bold flex gap-2 mb-2">
              <Users size={18} /> Role
            </label>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border"
            >

              <option value="">Choose Role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>

            </select>

          </div>

          {/* Email */}

          <div>

            <label className="font-bold flex gap-2 mb-2">
              <Mail size={18} /> Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full p-4 rounded-2xl border"
            />

          </div>

          {/* Password */}

          <div>

            <label className="font-bold flex gap-2 mb-2">
              <Lock size={18} /> Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-4 rounded-2xl border"
            />

          </div>

          {/* Confirm Password */}

          {!isLogin && (

            <div>

              <label className="font-bold flex gap-2 mb-2">
                <Lock size={18} /> Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full p-4 rounded-2xl border"
              />

            </div>

          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-2xl"
          >
            {isLogin ? "Login to Portal" : "Create Account"}
          </button>

        </form>

        {/* Toggle text */}

        <div className="text-center mt-6">

          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-500 font-bold"
              >
                Register here
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-500 font-bold"
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