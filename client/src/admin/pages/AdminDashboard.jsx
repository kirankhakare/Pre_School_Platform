import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  TrendingUp,
  Calendar,
  Bell,
  UserCheck,
  Clock,
  Heart,
  Star,
  AlertCircle
} from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  // Sample data - Replace with actual data from backend
  const stats = [
    {
      title: "Total Students",
      value: "156",
      icon: <Users size={32} />,
      color: "bg-pink-100 text-pink-600",
      bgColor: "from-pink-400 to-orange-400",
      subtext: "KG 1: 78 | KG 2: 78"
    },
    {
      title: "Total Teachers",
      value: "12",
      icon: <GraduationCap size={32} />,
      color: "bg-blue-100 text-blue-600",
      bgColor: "from-blue-400 to-green-400",
      subtext: "8 Full-time | 4 Part-time"
    },
    {
      title: "Total Classes",
      value: "4",
      icon: <BookOpen size={32} />,
      color: "bg-green-100 text-green-600",
      bgColor: "from-green-400 to-teal-400",
      subtext: "Play, Nursery, KG 1, KG 2"
    },
    {
      title: "Pending Fees",
      value: "₹45,000",
      icon: <DollarSign size={32} />,
      color: "bg-purple-100 text-purple-600",
      bgColor: "from-purple-400 to-pink-400",
      subtext: "12 students pending"
    }
  ];

  // Recent Activities
  const recentActivities = [
    { action: "New student admitted in KG 1", time: "5 mins ago", icon: "🎉", color: "bg-green-100" },
    { action: "Fee paid by Riya Sharma (KG 2)", time: "15 mins ago", icon: "💰", color: "bg-blue-100" },
    { action: "Attendance marked for KG 1", time: "1 hour ago", icon: "📋", color: "bg-pink-100" },
    { action: "Homework assigned to KG 2", time: "2 hours ago", icon: "📚", color: "bg-purple-100" },
    { action: "Parent-teacher meeting scheduled", time: "3 hours ago", icon: "👥", color: "bg-orange-100" },
  ];

  // Upcoming Events
  const upcomingEvents = [
    { event: "Parent-Teacher Meeting", date: "25 Mar 2024", time: "10:00 AM", icon: "👪" },
    { event: "Annual Sports Day", date: "30 Mar 2024", time: "9:00 AM", icon: "🏃" },
    { event: "KG 1 Field Trip", date: "5 Apr 2024", time: "8:30 AM", icon: "🚌" },
    { event: "Summer Break Starts", date: "15 Apr 2024", time: "N/A", icon: "🏖️" },
  ];

  // Class-wise Data
  const classData = [
    { className: "KG 1", students: 78, boys: 40, girls: 38, attendance: "94%", teacher: "Ms. Priya" },
    { className: "KG 2", students: 78, boys: 42, girls: 36, attendance: "92%", teacher: "Ms. Neha" },
  ];

  return (
    <div className="flex bg-sky-50 min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-72 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-extrabold text-sky-900">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Admin</span>
            </h1>
            <p className="text-sky-700 font-medium mt-1">Manage your preschool dashboard</p>
          </div>

          {/* Date Display */}
          <div className="bg-white px-6 py-3 rounded-2xl shadow-md border-2 border-pink-200">
            <div className="flex items-center gap-2 text-sky-800 font-bold">
              <Calendar size={20} className="text-pink-500" />
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${stat.bgColor} p-1 rounded-[2rem] shadow-lg`}
            >
              <div className="bg-white rounded-[1.8rem] p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-2xl`}>
                    {stat.icon}
                  </div>
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-sky-800 font-bold text-sm mb-1">{stat.title}</h3>
                <p className="text-3xl font-extrabold text-sky-900 mb-1">{stat.value}</p>
                <p className="text-xs text-sky-600 font-medium">{stat.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts and Tables Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Class-wise Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-6 shadow-xl border-4 border-white"
          >
            <h2 className="text-2xl font-extrabold text-sky-900 mb-6 flex items-center gap-2">
              <Users className="text-pink-500" size={28} />
              Class-wise Distribution
            </h2>

            <div className="space-y-4">
              {classData.map((cls, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-blue-50 p-4 rounded-2xl">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-sky-900">{cls.className}</h3>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-pink-500">
                      {cls.teacher}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-white p-2 rounded-xl">
                      <p className="text-2xl font-extrabold text-pink-500">{cls.students}</p>
                      <p className="text-xs text-sky-700 font-bold">Total</p>
                    </div>
                    <div className="bg-white p-2 rounded-xl">
                      <p className="text-2xl font-extrabold text-blue-500">{cls.boys}</p>
                      <p className="text-xs text-sky-700 font-bold">Boys</p>
                    </div>
                    <div className="bg-white p-2 rounded-xl">
                      <p className="text-2xl font-extrabold text-pink-400">{cls.girls}</p>
                      <p className="text-xs text-sky-700 font-bold">Girls</p>
                    </div>
                    <div className="bg-white p-2 rounded-xl">
                      <p className="text-2xl font-extrabold text-green-500">{cls.attendance}</p>
                      <p className="text-xs text-sky-700 font-bold">Attendance</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="bg-pink-100 text-pink-600 p-3 rounded-xl font-bold hover:bg-pink-200 transition-all">
                + Add Student
              </button>
              <button className="bg-blue-100 text-blue-600 p-3 rounded-xl font-bold hover:bg-blue-200 transition-all">
                View All Classes
              </button>
            </div>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-6 shadow-xl border-4 border-white"
          >
            <h2 className="text-2xl font-extrabold text-sky-900 mb-6 flex items-center gap-2">
              <Clock className="text-blue-500" size={28} />
              Recent Activities
            </h2>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-sky-50 rounded-xl">
                  <div className={`${activity.color} w-10 h-10 rounded-xl flex items-center justify-center text-xl`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sky-900">{activity.action}</p>
                    <p className="text-xs text-sky-600 font-medium">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 text-pink-500 font-bold hover:underline text-sm">
              View All Activities →
            </button>
          </motion.div>
        </div>

        {/* Upcoming Events and Notifications */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-[3rem] p-6 shadow-xl border-4 border-white"
          >
            <h2 className="text-2xl font-extrabold text-sky-900 mb-6 flex items-center gap-2">
              <Calendar className="text-orange-500" size={28} />
              Upcoming Events
            </h2>

            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{event.icon}</span>
                    <div>
                      <p className="font-bold text-sky-900">{event.event}</p>
                      <p className="text-xs text-sky-600">{event.time}</p>
                    </div>
                  </div>
                  <span className="bg-pink-100 px-3 py-1 rounded-full text-xs font-bold text-pink-600">
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fee Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-[3rem] p-6 shadow-xl border-4 border-white"
          >
            <h2 className="text-2xl font-extrabold text-sky-900 mb-6 flex items-center gap-2">
              <DollarSign className="text-green-500" size={28} />
              Fee Summary
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sky-900">Total Collection (March)</span>
                  <span className="text-2xl font-extrabold text-green-600">₹2,45,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-sky-600 mt-2">85% collected | 15% pending</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-pink-50 p-3 rounded-xl text-center">
                  <p className="text-sm text-sky-700 font-bold">Paid</p>
                  <p className="text-2xl font-extrabold text-pink-500">132</p>
                  <p className="text-xs text-sky-600">students</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-xl text-center">
                  <p className="text-sm text-sky-700 font-bold">Pending</p>
                  <p className="text-2xl font-extrabold text-yellow-500">24</p>
                  <p className="text-xs text-sky-600">students</p>
                </div>
              </div>

              <button className="w-full bg-white border-2 border-green-200 text-green-600 font-bold p-3 rounded-xl hover:bg-green-50 transition-all">
                Generate Fee Report
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white p-4 rounded-[2rem] shadow-lg border-4 border-white flex flex-wrap gap-3 justify-center"
        >
          <button className="bg-pink-100 text-pink-600 px-4 py-2 rounded-xl font-bold hover:bg-pink-200 transition-all flex items-center gap-2">
            <UserCheck size={18} /> Mark Attendance
          </button>
          <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl font-bold hover:bg-blue-200 transition-all flex items-center gap-2">
            <Bell size={18} /> Send Announcement
          </button>
          <button className="bg-green-100 text-green-600 px-4 py-2 rounded-xl font-bold hover:bg-green-200 transition-all flex items-center gap-2">
            <TrendingUp size={18} /> Generate Report
          </button>
          <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-xl font-bold hover:bg-purple-200 transition-all flex items-center gap-2">
            <Heart size={18} /> Add Event
          </button>
        </motion.div>
      </main>
    </div>
  );
}

export default AdminDashboard;