import {
  LayoutDashboard,
  ClipboardList,
  BookOpen,
  Users,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const TeacherSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/teacher/dashboard",
    },
    {
      name: "Mark Attendance",
      icon: <ClipboardList size={20} />,
      path: "/teacher/attendance/mark",
    },
    {
      name: "Monthly Attendance",
      icon: <ClipboardList size={20} />,
      path: "/teacher/attendance/monthly",
    },
    {
      name: "Homework",
      icon: <BookOpen size={20} />,
      path: "/teacher/homework",
    },
    {
      name: "Student Progress",
      icon: <Users size={20} />,
      path: "/teacher/students",
    },
  ];

  return (
    <div
      className={`h-screen bg-[#0f172a] text-white fixed top-0 left-0 z-50 transition-all duration-300
      ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-gray-700">
        
        {/* Title */}
        {isOpen && (
          <h1 className="text-lg font-semibold tracking-wide">
            Teacher Panel
          </h1>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded hover:bg-gray-700 transition"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu */}
      <div className="mt-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link to={item.path} key={index}>
              <div
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg cursor-pointer transition-all
                ${isActive ? "bg-blue-600" : "hover:bg-gray-800"}`}
              >
                {item.icon}
                {isOpen && (
                  <span className="text-sm font-medium">
                    {item.name}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TeacherSidebar;