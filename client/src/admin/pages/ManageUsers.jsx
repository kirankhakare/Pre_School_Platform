import { useState } from "react";
import { motion } from "framer-motion";
import {
    Search,
    Filter,
    Plus,
    Edit,
    Trash2,
    Eye,
    Download,
    Mail,
    Phone,
    MoreVertical,
    UserCheck,
    UserX,
    Star,
    BookOpen,
    Calendar
} from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";

function ManageUsers() {
    const [activeTab, setActiveTab] = useState("students");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClass, setSelectedClass] = useState("all");

    // Sample Student Data - KG 1 & KG 2
    const studentsData = [
        // KG 1 Students
        { id: 1, name: "Aarav Sharma", class: "KG 1", age: 4, parent: "Mr. Rajesh Sharma", contact: "+91 98765 43210", email: "rajesh@example.com", attendance: "95%", status: "active", avatar: "👦", gender: "boy" },
        { id: 2, name: "Ananya Patel", class: "KG 1", age: 4, parent: "Mrs. Priya Patel", contact: "+91 98765 43211", email: "priya@example.com", attendance: "92%", status: "active", avatar: "👧", gender: "girl" },
        { id: 3, name: "Vihaan Kumar", class: "KG 1", age: 4, parent: "Mr. Amit Kumar", contact: "+91 98765 43212", email: "amit@example.com", attendance: "88%", status: "active", avatar: "👦", gender: "boy" },
        { id: 4, name: "Ishita Singh", class: "KG 1", age: 4, parent: "Mr. Vikram Singh", contact: "+91 98765 43213", email: "vikram@example.com", attendance: "96%", status: "active", avatar: "👧", gender: "girl" },
        // KG 2 Students
        { id: 5, name: "Reyansh Gupta", class: "KG 2", age: 5, parent: "Mr. Sunil Gupta", contact: "+91 98765 43214", email: "sunil@example.com", attendance: "93%", status: "active", avatar: "👦", gender: "boy" },
        { id: 6, name: "Myra Verma", class: "KG 2", age: 5, parent: "Mrs. Neha Verma", contact: "+91 98765 43215", email: "neha@example.com", attendance: "97%", status: "active", avatar: "👧", gender: "girl" },
        { id: 7, name: "Kabir Malhotra", class: "KG 2", age: 5, parent: "Mr. Rahul Malhotra", contact: "+91 98765 43216", email: "rahul@example.com", attendance: "89%", status: "inactive", avatar: "👦", gender: "boy" },
        { id: 8, name: "Aadhya Reddy", class: "KG 2", age: 5, parent: "Mr. Suresh Reddy", contact: "+91 98765 43217", email: "suresh@example.com", attendance: "94%", status: "active", avatar: "👧", gender: "girl" },
    ];

    // Sample Teachers Data
    const teachersData = [
        { id: 1, name: "Ms. Priya Sharma", class: "KG 1", subject: "All Subjects", experience: "8 years", contact: "+91 98765 43220", email: "priya.sharma@adhyayan.edu", students: 78, status: "active", avatar: "👩‍🏫" },
        { id: 2, name: "Ms. Neha Gupta", class: "KG 2", subject: "All Subjects", experience: "6 years", contact: "+91 98765 43221", email: "neha.gupta@adhyayan.edu", students: 78, status: "active", avatar: "👩‍🏫" },
        { id: 3, name: "Ms. Anjali Desai", class: "Nursery", subject: "All Subjects", experience: "5 years", contact: "+91 98765 43222", email: "anjali.desai@adhyayan.edu", students: 65, status: "active", avatar: "👩‍🏫" },
        { id: 4, name: "Ms. Kavita Joshi", class: "Playgroup", subject: "All Subjects", experience: "4 years", contact: "+91 98765 43223", email: "kavita.joshi@adhyayan.edu", students: 45, status: "inactive", avatar: "👩‍🏫" },
    ];

    const filteredStudents = studentsData.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.parent.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesClass = selectedClass === "all" || student.class === selectedClass;
        return matchesSearch && matchesClass;
    });

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
                            Manage <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Users</span>
                        </h1>
                        <p className="text-sky-700 font-medium mt-1">Manage students and teachers</p>
                    </div>

                    <button className="bg-gradient-to-r from-pink-400 to-orange-400 text-white px-6 py-3 rounded-2xl font-bold shadow-lg border-4 border-white hover:shadow-xl transition-all flex items-center gap-2">
                        <Plus size={20} />
                        Add New User
                    </button>
                </motion.div>

                {/* Tabs */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setActiveTab("students")}
                        className={`px-6 py-3 rounded-2xl font-bold text-lg transition-all border-4 border-white shadow-md ${activeTab === "students"
                            ? "bg-gradient-to-r from-pink-400 to-orange-400 text-white"
                            : "bg-white text-sky-900 hover:bg-pink-50"
                            }`}
                    >
                        Students (156)
                    </button>
                    <button
                        onClick={() => setActiveTab("teachers")}
                        className={`px-6 py-3 rounded-2xl font-bold text-lg transition-all border-4 border-white shadow-md ${activeTab === "teachers"
                            ? "bg-gradient-to-r from-blue-400 to-green-400 text-white"
                            : "bg-white text-sky-900 hover:bg-blue-50"
                            }`}
                    >
                        Teachers (12)
                    </button>
                </div>

                {/* Search and Filter Bar */}
                <div className="bg-white p-4 rounded-[2rem] shadow-xl border-4 border-white mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name or parent name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 outline-none font-medium"
                            />
                        </div>

                        {/* Class Filter */}
                        {activeTab === "students" && (
                            <div className="flex gap-2">
                                <select
                                    value={selectedClass}
                                    onChange={(e) => setSelectedClass(e.target.value)}
                                    className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-400 outline-none font-medium"
                                >
                                    <option value="all">All Classes</option>
                                    <option value="KG 1">KG 1</option>
                                    <option value="KG 2">KG 2</option>
                                </select>
                            </div>
                        )}

                        {/* Export Button */}
                        <button className="bg-green-100 text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-200 transition-all flex items-center gap-2">
                            <Download size={20} />
                            Export
                        </button>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-[3rem] shadow-xl border-4 border-white overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-pink-100 to-purple-100">
                                <tr>
                                    <th className="px-6 py-4 text-left font-extrabold text-sky-900">Avatar</th>
                                    <th className="px-6 py-4 text-left font-extrabold text-sky-900">Name</th>
                                    {activeTab === "students" ? (
                                        <>
                                            <th className="px-6 py-4 text-left font-extrabold text-sky-900">Class</th>
                                            <th className="px-6 py-4 text-left font-extrabold text-sky-900">Parent Name</th>
                                            <th className="px-6 py-4 text-left font-extrabold text-sky-900">Contact</th>
                                            <th className="px-6 py-4 text-left font-extrabold text-sky-900">Attendance</th>
                                        </>
                                    ) : (
                                        <>
                                            <th className="px-6 py-4 text-left font-extrabold text-sky-900">Class</th>
                                            <th className="px-6 py-4 text-left font-extrabold text-sky-900">Experience</th>
                                            <th className="px-6 py-4 text-left font-extrabold text-sky-900">Contact</th>
                                            <th className="px-6 py-4 text-left font-extrabold text-sky-900">Students</th>
                                        </>
                                    )}
                                    <th className="px-6 py-4 text-left font-extrabold text-sky-900">Status</th>
                                    <th className="px-6 py-4 text-left font-extrabold text-sky-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-pink-100">
                                {activeTab === "students" ? (
                                    filteredStudents.map((student, index) => (
                                        <motion.tr
                                            key={student.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="hover:bg-pink-50 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-2xl">
                                                    {student.avatar}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-bold text-sky-900">{student.name}</p>
                                                    <p className="text-xs text-sky-600">Age: {student.age} years</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-bold">
                                                    {student.class}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-sky-800">{student.parent}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-sky-900">{student.contact}</span>
                                                    <span className="text-xs text-sky-600">{student.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`font-extrabold ${parseInt(student.attendance) >= 90 ? 'text-green-500' : 'text-orange-500'
                                                    }`}>
                                                    {student.attendance}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${student.status === 'active'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-red-100 text-red-600'
                                                    }`}>
                                                    {student.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    <button className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-all">
                                                        <Eye size={18} />
                                                    </button>
                                                    <button className="p-2 bg-green-100 text-green-600 rounded-xl hover:bg-green-200 transition-all">
                                                        <Edit size={18} />
                                                    </button>
                                                    <button className="p-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-all">
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))
                                ) : (
                                    teachersData.map((teacher, index) => (
                                        <motion.tr
                                            key={teacher.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="hover:bg-blue-50 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                                                    {teacher.avatar}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="font-bold text-sky-900">{teacher.name}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                                                    {teacher.class}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-sky-800">{teacher.experience}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-sky-900">{teacher.contact}</span>
                                                    <span className="text-xs text-sky-600">{teacher.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-extrabold text-purple-600">{teacher.students}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${teacher.status === 'active'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-red-100 text-red-600'
                                                    }`}>
                                                    {teacher.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    <button className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-all">
                                                        <Eye size={18} />
                                                    </button>
                                                    <button className="p-2 bg-green-100 text-green-600 rounded-xl hover:bg-green-200 transition-all">
                                                        <Edit size={18} />
                                                    </button>
                                                    <button className="p-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-all">
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-6 border-t-2 border-pink-100 flex justify-between items-center">
                        <p className="text-sky-700 font-medium">
                            Showing 1-8 of {activeTab === "students" ? "156" : "12"} users
                        </p>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 font-bold hover:bg-pink-200 transition-all">
                                1
                            </button>
                            <button className="w-10 h-10 rounded-xl bg-white text-sky-700 font-bold hover:bg-pink-50 transition-all">
                                2
                            </button>
                            <button className="w-10 h-10 rounded-xl bg-white text-sky-700 font-bold hover:bg-pink-50 transition-all">
                                3
                            </button>
                            <button className="w-10 h-10 rounded-xl bg-white text-sky-700 font-bold hover:bg-pink-50 transition-all">
                                ...
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ManageUsers;