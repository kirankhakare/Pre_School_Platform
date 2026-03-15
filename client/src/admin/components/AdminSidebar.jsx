import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  Megaphone,
  Images,
  Settings,
  Baby,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

function AdminSidebar({ collapsed, setCollapsed }) {

  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={22} />,
      label: "Dashboard"
    },
    {
      path: "/admin/student",
      icon: <Users size={22} />,
      label: "Student Management"
    },
    {
      path: "/admin/teacher",
      icon: <GraduationCap size={22} />,
      label: "Teacher Management"
    },
    {
      path: "/admin/classes",
      icon: <BookOpen size={22} />,
      label: "Class Management"
    },
    {
      path: "/admin/fees",
      icon: <DollarSign size={22} />,
      label: "Fee Management"
    },
    {
      path: "/admin/announcements",
      icon: <Megaphone size={22} />,
      label: "Announcements"
    },
    {
      path: "/admin/gallery",
      icon: <Images size={22} />,
      label: "Gallery"
    },
    {
      path: "/admin/settings",
      icon: <Settings size={22} />,
      label: "Settings"
    }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-md p-2 rounded-lg"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 h-screen
        ${collapsed ? "w-20" : "w-72"}
        bg-sky-50 border-r-4 border-amber-500
        shadow-xl flex flex-col
        z-50 transition-all duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        `}
      >

        {/* Logo */}
        <div className="p-6 border-b-4 border-amber-500 flex items-center">

          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow">
            <img src="/logo.jpeg" alt="logo" className="w-9" />
          </div>

          {!collapsed && (
            <div className="ml-3">
              <h1 className="font-bold text-sky-900 text-lg">OctaWisdom</h1>
              <p className="text-xs text-amber-500 font-bold">Admin Panel</p>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto hidden lg:block p-2"
          >
            {collapsed ? <Menu size={18} /> : <X size={18} />}
          </button>

        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">

          {menuItems.map((item, index) => (

            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-xl font-semibold transition
                ${collapsed ? "justify-center" : "gap-3"}
                ${
                  isActive
                    ? "bg-sky-800 text-white"
                    : "text-sky-800 hover:bg-sky-100"
                }`
              }
            >
              {item.icon}
              {!collapsed && item.label}
            </NavLink>

          ))}

        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="p-4 border-t-4 border-amber-500 flex items-center gap-2">
            <Baby size={18} className="text-sky-500" />
            <p className="text-xs font-bold text-sky-800">
              KG1 & KG2 Management
            </p>
          </div>
        )}

      </aside>
    </>
  );
}

export default AdminSidebar;