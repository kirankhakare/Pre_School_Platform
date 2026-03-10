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
  LogOut,
  Baby,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

function AdminSidebar({ collapsed, setCollapsed }) {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);
  const [teachersOpen, setTeachersOpen] = useState(false);

  const menuItems = [
    {
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={22} />,
      label: "Dashboard"
    },
    {
      icon: <Users size={22} />,
      label: "Student Management",
      submenu: [
        { path: "/admin/students/kg1", label: "KG 1 Students", icon: "🐼" },
        { path: "/admin/students/kg2", label: "KG 2 Students", icon: "🐨" },
        { path: "/admin/students/all", label: "All Students", icon: "👥" },
        { path: "/admin/students/add", label: "Add Student", icon: "➕" }
      ]
    },
    {
      icon: <GraduationCap size={22} />,
      label: "Teacher Management",
      submenu: [
        { path: "/admin/teachers/all", label: "All Teachers", icon: "👩‍🏫" },
        { path: "/admin/teachers/add", label: "Add Teacher", icon: "➕" },
        { path: "/admin/teachers/assign", label: "Assign Class", icon: "📋" }
      ]
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
  ${collapsed ? "w-20" : "w-72"}
  bg-sky-50 border-r-4 border-amber-500
  fixed top-0 left-0
  h-screen
  shadow-xl
  flex flex-col
  z-50
  transform transition-all duration-200
  ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0
  `}
      >

        {/* Mobile Close */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

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

          {/* Desktop Toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto hidden lg:block p-2 rounded hover:bg-sky-100"
          >
            {collapsed ? <Menu size={18} /> : <X size={18} />}
          </button>

        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">

          {menuItems.map((item, index) => (

            <div key={index}>

              {item.submenu && !collapsed ? (

                <>
                  <button
                    onClick={() =>
                      item.label === "Student Management"
                        ? setStudentsOpen(!studentsOpen)
                        : setTeachersOpen(!teachersOpen)
                    }
                    className="w-full flex justify-between items-center p-3 rounded-xl font-semibold text-sky-800 hover:bg-sky-100"
                  >

                    <div className="flex gap-3 items-center">
                      {item.icon}
                      {item.label}
                    </div>

                    <ChevronDown size={18} />

                  </button>

                  {(item.label === "Student Management" ? studentsOpen : teachersOpen) && (

                    <div className="ml-6 mt-2 space-y-1">

                      {item.submenu.map((sub, i) => (

                        <NavLink
                          key={i}
                          to={sub.path}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded-lg
                            ${isActive ? "bg-amber-500 text-white" : "hover:bg-sky-100"}`
                          }
                        >
                          <span>{sub.icon}</span>
                          {sub.label}
                        </NavLink>

                      ))}

                    </div>

                  )}

                </>

              ) : (

                <NavLink
                  to={item.path || "#"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-xl font-semibold
                    ${collapsed ? "justify-center" : "gap-3"}
                    ${isActive ? "bg-sky-800 text-white" : "text-sky-800 hover:bg-sky-100"}`
                  }
                >
                  {item.icon}
                  {!collapsed && item.label}
                </NavLink>

              )}

            </div>

          ))}

        </nav>

        {/* Logout */}
        <div className="p-4">

          <button
            className={`w-full flex items-center p-3 rounded-xl text-red-500 hover:bg-red-50 font-semibold
            ${collapsed ? "justify-center" : "gap-3"}`}
          >
            <LogOut size={22} />
            {!collapsed && "Logout"}
          </button>

        </div>

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