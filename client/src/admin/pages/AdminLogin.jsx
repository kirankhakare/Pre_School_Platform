import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  School,
  Baby,
  Heart,
  Flower2,
  Shield
} from "lucide-react";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Login:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 flex items-center justify-center p-4 overflow-hidden">
      
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-48 h-48 bg-pink-200 rounded-full opacity-30"
          animate={{ y: [0, 50, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-56 h-56 bg-blue-200 rounded-full opacity-30"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-40 w-32 h-32 bg-yellow-200 rounded-full opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-[4rem] shadow-2xl border-4 border-pink-200 overflow-hidden">
          
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-8 text-center relative">
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-white p-4 rounded-2xl shadow-lg border-4 border-pink-200">
                <School className="text-pink-500" size={40} />
              </div>
            </div>
            
            <h2 className="text-3xl font-extrabold text-white mt-4">Admin Login</h2>
            <p className="text-pink-100 font-medium mt-2">Access your dashboard</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 pt-12 space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                <Mail size={18} className="text-pink-500" />
                Email Address
              </label>
              <input
                type="email"
                placeholder="admin@adhyayan.edu"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-4 rounded-2xl border-2 border-pink-200 focus:border-pink-400 outline-none font-medium text-sky-900 transition-all bg-pink-50/30"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sky-800 font-bold mb-2 flex items-center gap-2">
                <Lock size={18} className="text-blue-500" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full p-4 rounded-2xl border-2 border-blue-200 focus:border-blue-400 outline-none font-medium text-sky-900 transition-all bg-blue-50/30"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600"
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
              className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold text-xl py-4 px-6 rounded-2xl shadow-lg border-4 border-white hover:shadow-xl transition-all flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Shield size={24} />
              Login to Admin Panel
            </motion.button>

            {/* Demo Credentials */}
            <div className="bg-yellow-50 p-4 rounded-2xl border-2 border-yellow-200">
              <p className="text-xs text-sky-700 font-bold flex items-center gap-2 mb-2">
                <Baby size={14} className="text-yellow-600" />
                Demo Credentials:
              </p>
              <p className="text-xs text-sky-600">Email: admin@adhyayan.edu</p>
              <p className="text-xs text-sky-600">Password: admin123</p>
            </div>
          </form>

          {/* Footer */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 text-center border-t-4 border-white">
            <p className="text-sky-800 font-bold flex items-center justify-center gap-2">
              <Heart size={16} className="text-pink-500 fill-pink-500" />
              Secure Admin Access
              <Heart size={16} className="text-pink-500 fill-pink-500" />
            </p>
          </div>
        </div>

        {/* Back to Main Site Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <Link to="/" className="text-sky-700 font-bold hover:text-pink-500 transition-colors">
            ← Back to Main Website
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AdminLogin;