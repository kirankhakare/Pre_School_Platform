import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  Baby,
  School,
  Heart,
  Flower2,
  Star,
  Target,
  CheckCircle2,
  Puzzle,
  BookOpen,
  Music,
  MonitorPlay,
  ShieldCheck,
  MapPin,
  Users
} from "lucide-react";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

function RegisterPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  // Form state
  const [loginForm, setLoginForm] = useState({
    role: "",
    email: "", // Changed from username to email since backend expects email
    password: ""
  });

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    role: "",
    password: "",
    confirmPassword: ""
  });

  // Handle login form changes
  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  // Handle register form changes
  const handleRegisterChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value
    });
  };

  // Handle login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginForm.email,
          password: loginForm.password,
          role: loginForm.role
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to login");
      }

      console.log("Login Success:", data);

      // Store user info briefly (typically you'd use Context/Redux)
      localStorage.setItem("userInfo", JSON.stringify(data));
      login(data);

      // Route based on role selected vs role returned
      if (data.role === "admin") navigate("/admin/dashboard");
      else if (data.role === "teacher") navigate("/teacher/dashboard");
      else navigate("/parent/dashboard");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle register submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (registerForm.password !== registerForm.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: registerForm.name,
          email: registerForm.email,
          password: registerForm.password,
          role: registerForm.role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to register");
      }

      console.log("Register Success:", data);

      localStorage.setItem("userInfo", JSON.stringify(data));
      login(data);

      if (data.role === "admin") navigate("/admin/dashboard");
      else if (data.role === "teacher") navigate("/teacher/dashboard");
      else navigate("/parent/dashboard");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PublicNavbar />

      <main className="pt-24 bg-sky-50 pb-20 overflow-hidden">

        {/* Floating Decorative Elements - Same as Classes/Admission pages */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-60 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-blob animation-delay-4000"></div>

        {/* Hero Section - Same as Classes/Admission */}
        <section className="relative bg-gradient-to-b from-sky-100 to-white py-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-gradient-to-r from-pink-400 to-orange-400 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg mb-6 border-4 border-white">
                {isLogin ? "🎒 Welcome Back!" : "🎈 Join Our Family"}
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-sky-900 mb-4">
                {isLogin ? (
                  <>Login to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Your Account</span></>
                ) : (
                  <>Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Account</span></>
                )}
              </h1>
              <p className="text-xl text-sky-700 font-medium max-w-2xl mx-auto bg-white/50 p-4 rounded-3xl">
                {isLogin
                  ? "Access your portal and stay connected with your child's journey"
                  : "Register to access parent/teacher/admin portal and get updates"
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Toggle Buttons - Matching Classes page design */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-4">
              <motion.button
                onClick={() => setIsLogin(true)}
                className={`px-12 py-4 rounded-3xl font-bold text-xl transition-all border-4 border-white shadow-lg ${isLogin
                  ? "bg-gradient-to-r from-pink-400 to-orange-400 text-white"
                  : "bg-white text-sky-900 hover:bg-pink-50"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">🔐</span>
                Login
              </motion.button>
              <motion.button
                onClick={() => setIsLogin(false)}
                className={`px-12 py-4 rounded-3xl font-bold text-xl transition-all border-4 border-white shadow-lg ${!isLogin
                  ? "bg-gradient-to-r from-blue-400 to-green-400 text-white"
                  : "bg-white text-sky-900 hover:bg-blue-50"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">✨</span>
                Register
              </motion.button>
            </div>
          </div>
        </section>

        {/* Auth Forms Section - Matching Classes page card design */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">

              {/* Left Column - Form */}
              <motion.div
                key={isLogin ? "login-form" : "register-form"}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[4rem] p-8 shadow-xl border-4 border-white relative overflow-hidden group"
              >
                {/* Decorative Elements - Same as Classes page */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  {/* Header with Icon - Same style as Classes page */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
                      {isLogin ? (
                        <School className="text-pink-500" size={32} />
                      ) : (
                        <Users className="text-pink-500" size={32} />
                      )}
                    </div>
                    <h2 className="text-3xl font-extrabold text-sky-900">
                      {isLogin ? "Login to Portal" : "Create New Account"}
                    </h2>
                  </div>

                  {isLogin ? (
                    /* Updated Login Form with 3 fields */
                    <form onSubmit={handleLoginSubmit} className="space-y-6">
                      {/* Error Message */}
                      {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                          <span className="block sm:inline">{error}</span>
                        </div>
                      )}

                      {/* Select Role Field */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <Users size={18} className="text-pink-500" />
                          Select Role
                        </label>
                        <select
                          name="role"
                          value={loginForm.role}
                          onChange={handleLoginChange}
                          required
                          className="w-full p-4 rounded-2xl border-2 border-pink-200 focus:border-pink-400 outline-none font-medium text-sky-900 transition-all bg-pink-50/30 appearance-none cursor-pointer"
                        >
                          <option value="">Choose your role</option>
                          <option value="admin">👩‍💼 Admin</option>
                          <option value="teacher">👩‍🏫 Teacher</option>
                          <option value="parent">👪 Parent</option>
                        </select>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <Mail size={18} className="text-blue-500" />
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={loginForm.email}
                          onChange={handleLoginChange}
                          placeholder="Enter your email"
                          required
                          className="w-full p-4 rounded-2xl border-2 border-blue-200 focus:border-blue-400 outline-none font-medium text-sky-900 transition-all bg-blue-50/30"
                        />
                      </div>

                      {/* Password Field */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <Lock size={18} className="text-purple-500" />
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={loginForm.password}
                            onChange={handleLoginChange}
                            placeholder="Enter your password"
                            required
                            className="w-full p-4 rounded-2xl border-2 border-purple-200 focus:border-purple-400 outline-none font-medium text-sky-900 transition-all bg-purple-50/30"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-600"
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>

                      {/* Remember Me & Forgot Password */}
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 accent-pink-500" />
                          <span className="text-sm text-sky-700 font-bold">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-pink-500 font-bold hover:underline">
                          Forgot Password?
                        </a>
                      </div>

                      {/* Login Button */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-pink-400 to-orange-400 text-white font-bold text-xl py-4 px-6 rounded-2xl shadow-lg border-4 border-white hover:shadow-xl transition-all disabled:opacity-70"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {loading ? "Logging in..." : "Login to Portal 🔐"}
                      </motion.button>
                    </form>
                  ) : (
                    /* Updated Registration Form with 7 fields */
                    <form onSubmit={handleRegisterSubmit} className="space-y-5">
                      {/* Error Message */}
                      {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                          <span className="block sm:inline">{error}</span>
                        </div>
                      )}
                      {/* Full Name */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <User size={18} className="text-pink-500" />
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={registerForm.name}
                          onChange={handleRegisterChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full p-4 rounded-2xl border-2 border-pink-200 focus:border-pink-400 outline-none font-medium text-sky-900 transition-all bg-pink-50/30"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <Mail size={18} className="text-blue-500" />
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={registerForm.email}
                          onChange={handleRegisterChange}
                          placeholder="your.email@example.com"
                          required
                          className="w-full p-4 rounded-2xl border-2 border-blue-200 focus:border-blue-400 outline-none font-medium text-sky-900 transition-all bg-blue-50/30"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <Phone size={18} className="text-green-500" />
                          Mobile No <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={registerForm.mobile}
                          onChange={handleRegisterChange}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full p-4 rounded-2xl border-2 border-green-200 focus:border-green-400 outline-none font-medium text-sky-900 transition-all bg-green-50/30"
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <MapPin size={18} className="text-orange-500" />
                          Address <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="address"
                          value={registerForm.address}
                          onChange={handleRegisterChange}
                          placeholder="Enter your complete address"
                          required
                          rows="3"
                          className="w-full p-4 rounded-2xl border-2 border-orange-200 focus:border-orange-400 outline-none font-medium text-sky-900 transition-all bg-orange-50/30 resize-none"
                        />
                      </div>

                      {/* Select Role */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <Users size={18} className="text-purple-500" />
                          Select Role <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="role"
                          value={registerForm.role}
                          onChange={handleRegisterChange}
                          required
                          className="w-full p-4 rounded-2xl border-2 border-purple-200 focus:border-purple-400 outline-none font-medium text-sky-900 transition-all bg-purple-50/30 appearance-none cursor-pointer"
                        >
                          <option value="">Choose your role</option>
                          <option value="admin">👩‍💼 Admin</option>
                          <option value="teacher">👩‍🏫 Teacher</option>
                          <option value="parent">👪 Parent</option>
                        </select>
                      </div>

                      {/* Password */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <Lock size={18} className="text-indigo-500" />
                          Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={registerForm.password}
                            onChange={handleRegisterChange}
                            placeholder="Create a password"
                            required
                            className="w-full p-4 rounded-2xl border-2 border-indigo-200 focus:border-indigo-400 outline-none font-medium text-sky-900 transition-all bg-indigo-50/30"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-400 hover:text-indigo-600"
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>

                      {/* Confirm Password */}
                      <div>
                        <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                          <Lock size={18} className="text-red-500" />
                          Confirm Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={registerForm.confirmPassword}
                            onChange={handleRegisterChange}
                            placeholder="Re-enter password"
                            required
                            className="w-full p-4 rounded-2xl border-2 border-red-200 focus:border-red-400 outline-none font-medium text-sky-900 transition-all bg-red-50/30"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-400 hover:text-red-600"
                          >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>

                      {/* Terms */}
                      <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-2xl">
                        <input type="checkbox" className="mt-1 w-5 h-5 accent-pink-500" required />
                        <label className="text-sm text-sky-700 font-bold">
                          I agree to the{" "}
                          <a href="#" className="text-pink-500 hover:underline">Terms of Service</a>{" "}
                          and{" "}
                          <a href="#" className="text-pink-500 hover:underline">Privacy Policy</a>
                        </label>
                      </div>

                      {/* Register Button */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold text-xl py-4 px-6 rounded-2xl shadow-lg border-4 border-white hover:shadow-xl transition-all disabled:opacity-70"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {loading ? "Creating..." : "Create Account ✨"}
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Right Column - Info Cards (Same as before) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Role-specific benefits cards */}
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-[3rem] border-4 border-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="text-pink-500 fill-pink-500" size={28} />
                    <h3 className="text-xl font-extrabold text-sky-900">Portal Access</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sky-800 font-bold flex items-center gap-2">
                      <span className="text-2xl">👩‍💼</span> Admin: Full system control
                    </p>
                    <p className="text-sky-800 font-bold flex items-center gap-2">
                      <span className="text-2xl">👩‍🏫</span> Teacher: Class management
                    </p>
                    <p className="text-sky-800 font-bold flex items-center gap-2">
                      <span className="text-2xl">👪</span> Parent: Child's progress
                    </p>
                  </div>
                </div>

                {/* Other cards remain the same */}
                <div className="bg-orange-50 p-8 rounded-[3rem] border-4 border-white shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                      <Star className="text-orange-500 fill-orange-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-sky-900">Benefits</h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Track progress & attendance",
                      "Download receipts & reports",
                      "Receive announcements",
                      "Secure communication"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sky-800 font-bold">
                        <CheckCircle2 size={20} className="text-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-8 rounded-[3rem] border-4 border-white shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                      <Target className="text-blue-500" size={24} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-sky-900">Quick Stats</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { number: "500+", label: "Users", icon: "👥" },
                      { number: "24/7", label: "Access", icon: "📱" },
                      { number: "100%", label: "Secure", icon: "🔒" },
                      { number: "8+", label: "Years", icon: "🌟" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl text-center border-2 border-blue-100">
                        <span className="text-2xl mb-2 block">{stat.icon}</span>
                        <p className="text-xl font-extrabold text-blue-500">{stat.number}</p>
                        <p className="text-sm font-bold text-sky-800">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Switch View Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <div className="inline-block bg-white px-8 py-4 rounded-full shadow-md border-2 border-pink-200">
                <p className="text-sky-900 font-bold text-lg">
                  {isLogin ? "New to Adhyayan Kids Academy?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-3 text-pink-500 hover:text-pink-600 font-extrabold underline"
                  >
                    {isLogin ? "Register here" : "Login here"}
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rest of the sections remain the same */}
        <section className="py-20 bg-white border-y-2 border-sky-100 mt-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-sky-900 mb-4">Why Join Our Portal?</h2>
            <p className="text-xl text-sky-700 font-medium max-w-2xl mx-auto mb-16">Stay connected with your institution</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Puzzle size={36} />, title: "Daily Updates", color: "text-pink-500 bg-pink-50" },
                { icon: <BookOpen size={36} />, title: "Reports", color: "text-blue-500 bg-blue-50" },
                { icon: <Music size={36} />, title: "Notifications", color: "text-purple-500 bg-purple-50" },
                { icon: <MonitorPlay size={36} />, title: "Gallery", color: "text-green-500 bg-green-50" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`${item.color} p-8 rounded-3xl flex flex-col items-center justify-center gap-4 border-4 border-white shadow-sm hover:shadow-md transition-shadow`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.icon}
                  <h3 className="text-lg font-bold text-sky-900">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default RegisterPage;