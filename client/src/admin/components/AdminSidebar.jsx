import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
    School,
    Baby,
    ChevronDown
} from "lucide-react";
import { useState } from "react";

function AdminSidebar() {
    const [isStudentsOpen, setIsStudentsOpen] = useState(false);
    const [isTeachersOpen, setIsTeachersOpen] = useState(false);

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
                { path: "/admin/students/add", label: "Add New Student", icon: "➕" }
            ],
            isOpen: isStudentsOpen,
            setOpen: setIsStudentsOpen
        },
        {
            icon: <GraduationCap size={22} />,
            label: "Teacher Management",
            submenu: [
                { path: "/admin/teachers/all", label: "All Teachers", icon: "👩‍🏫" },
                { path: "/admin/teachers/add", label: "Add Teacher", icon: "➕" },
                { path: "/admin/teachers/assign", label: "Assign Class", icon: "📋" }
            ],
            isOpen: isTeachersOpen,
            setOpen: setIsTeachersOpen
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
        <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            className="w-72 bg-gradient-to-b from-sky-50 to-white border-r-4 border-pink-200 min-h-screen fixed left-0 top-0 overflow-y-auto shadow-xl"
        >
            {/* Logo Section */}
            <div className="p-6 border-b-4 border-pink-200 bg-gradient-to-r from-pink-100 to-purple-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
                        <School className="text-pink-500" size={28} />
                    </div>
                    <div>
                        <h1 className="text-xl font-extrabold text-sky-900">Adhyayan</h1>
                        <p className="text-xs text-pink-500 font-bold">Admin Panel</p>
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="p-4 space-y-2">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        {item.submenu ? (
                            // Dropdown Menu
                            <div>
                                <button
                                    onClick={() => item.setOpen(!item.isOpen)}
                                    className="w-full flex items-center justify-between p-3 rounded-2xl text-sky-800 font-bold hover:bg-pink-50 transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-pink-500">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                    <ChevronDown
                                        size={18}
                                        className={`transform transition-transform ${item.isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Submenu */}
                                {item.isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="ml-4 mt-2 space-y-1"
                                    >
                                        {item.submenu.map((sub, idx) => (
                                            <NavLink
                                                key={idx}
                                                to={sub.path}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 p-3 rounded-xl font-medium transition-all ${isActive
                                                        ? "bg-gradient-to-r from-pink-400 to-orange-400 text-white"
                                                        : "text-sky-700 hover:bg-pink-50"
                                                    }`
                                                }
                                            >
                                                <span className="text-lg">{sub.icon}</span>
                                                <span>{sub.label}</span>
                                            </NavLink>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ) : (
                            // Single Menu Item
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-2xl font-bold transition-all ${isActive
                                        ? "bg-gradient-to-r from-pink-400 to-orange-400 text-white shadow-md"
                                        : "text-sky-800 hover:bg-pink-50"
                                    }`
                                }
                            >
                                <span className="text-pink-500">{item.icon}</span>
                                <span>{item.label}</span>
                            </NavLink>
                        )}
                    </div>
                ))}

                {/* Logout Button */}
                <button className="w-full flex items-center gap-3 p-3 rounded-2xl text-red-500 font-bold hover:bg-red-50 transition-all mt-8">
                    <LogOut size={22} />
                    <span>Logout</span>
                </button>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-pink-100 to-purple-100 border-t-4 border-white">
                <div className="flex items-center gap-2">
                    <Baby className="text-pink-500" size={20} />
                    <p className="text-xs text-sky-800 font-bold">KG 1 & KG 2 Management</p>
                </div>
            </div>
        </motion.aside>
    );
}

export default AdminSidebar;