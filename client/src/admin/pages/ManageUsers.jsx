import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download
} from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";

function ManageUsers() {

  const [activeTab, setActiveTab] = useState("students");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  const studentsData = [
    { id: 1, name: "Aarav Sharma", class: "KG 1", age: 4, parent: "Mr. Rajesh Sharma", contact: "+91 98765 43210", email: "rajesh@example.com", attendance: "95%", status: "active", avatar: "👦" },
    { id: 2, name: "Ananya Patel", class: "KG 1", age: 4, parent: "Mrs. Priya Patel", contact: "+91 98765 43211", email: "priya@example.com", attendance: "92%", status: "active", avatar: "👧" },
    { id: 3, name: "Vihaan Kumar", class: "KG 1", age: 4, parent: "Mr. Amit Kumar", contact: "+91 98765 43212", email: "amit@example.com", attendance: "88%", status: "active", avatar: "👦" },
    { id: 4, name: "Ishita Singh", class: "KG 1", age: 4, parent: "Mr. Vikram Singh", contact: "+91 98765 43213", email: "vikram@example.com", attendance: "96%", status: "active", avatar: "👧" },
    { id: 5, name: "Reyansh Gupta", class: "KG 2", age: 5, parent: "Mr. Sunil Gupta", contact: "+91 98765 43214", email: "sunil@example.com", attendance: "93%", status: "active", avatar: "👦" },
    { id: 6, name: "Myra Verma", class: "KG 2", age: 5, parent: "Mrs. Neha Verma", contact: "+91 98765 43215", email: "neha@example.com", attendance: "97%", status: "active", avatar: "👧" },
    { id: 7, name: "Kabir Malhotra", class: "KG 2", age: 5, parent: "Mr. Rahul Malhotra", contact: "+91 98765 43216", email: "rahul@example.com", attendance: "89%", status: "inactive", avatar: "👦" },
    { id: 8, name: "Aadhya Reddy", class: "KG 2", age: 5, parent: "Mr. Suresh Reddy", contact: "+91 98765 43217", email: "suresh@example.com", attendance: "94%", status: "active", avatar: "👧" },
  ];

  const filteredStudents = studentsData.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.parent.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass =
      selectedClass === "all" || student.class === selectedClass;

    return matchesSearch && matchesClass;
  });

  return (

    <div className="flex bg-sky-50 min-h-screen">

      <AdminSidebar />

      <main className="flex-1 p-4 md:p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-sky-900">
              Manage Users
            </h1>
            <p className="text-sky-600">
              Manage students and teachers
            </p>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2">
            <Plus size={18} />
            Add User
          </button>

        </div>


        {/* Tabs */}
        <div className="flex gap-3 mb-6">

          <button
            onClick={() => setActiveTab("students")}
            className={`px-5 py-2 rounded-xl font-semibold ${
              activeTab === "students"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-white"
            }`}
          >
            Students
          </button>

          <button
            onClick={() => setActiveTab("teachers")}
            className={`px-5 py-2 rounded-xl font-semibold ${
              activeTab === "teachers"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-white"
            }`}
          >
            Teachers
          </button>

        </div>


        {/* Search Filter */}
        <div className="bg-white p-4 rounded-2xl shadow mb-6">

          <div className="flex flex-col md:flex-row gap-3">

            <div className="flex-1 relative">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

            </div>


            {activeTab === "students" && (

              <select
                className="border rounded-lg px-3 py-2"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="all">All Classes</option>
                <option value="KG 1">KG 1</option>
                <option value="KG 2">KG 2</option>
              </select>

            )}

            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2">
              <Download size={18} />
              Export
            </button>

          </div>

        </div>


        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Avatar</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Class</th>
                <th className="p-3 text-left">Parent</th>
                <th className="p-3 text-left">Contact</th>
                <th className="p-3 text-left">Attendance</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredStudents.map((student) => (

                <tr key={student.id} className="border-t">

                  <td className="p-3 text-xl">{student.avatar}</td>

                  <td className="p-3 font-semibold">
                    {student.name}
                  </td>

                  <td className="p-3">{student.class}</td>

                  <td className="p-3">{student.parent}</td>

                  <td className="p-3">{student.contact}</td>

                  <td className="p-3">{student.attendance}</td>

                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      student.status === "active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}>
                      {student.status}
                    </span>
                  </td>

                  <td className="p-3 flex gap-2">

                    <button className="p-2 bg-blue-100 rounded">
                      <Eye size={16}/>
                    </button>

                    <button className="p-2 bg-green-100 rounded">
                      <Edit size={16}/>
                    </button>

                    <button className="p-2 bg-red-100 rounded">
                      <Trash2 size={16}/>
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* Mobile Cards */}
        <div className="md:hidden grid gap-4">

          {filteredStudents.map((student) => (

            <div
              key={student.id}
              className="bg-white p-4 rounded-xl shadow"
            >

              <div className="flex items-center gap-3 mb-3">

                <div className="text-2xl">
                  {student.avatar}
                </div>

                <div>

                  <h3 className="font-bold">
                    {student.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {student.class}
                  </p>

                </div>

              </div>

              <p className="text-sm">
                Parent: {student.parent}
              </p>

              <p className="text-sm">
                Contact: {student.contact}
              </p>

              <p className="text-sm">
                Attendance: {student.attendance}
              </p>

              <div className="flex gap-2 mt-3">

                <button className="flex-1 bg-blue-100 py-2 rounded">
                  <Eye size={16}/>
                </button>

                <button className="flex-1 bg-green-100 py-2 rounded">
                  <Edit size={16}/>
                </button>

                <button className="flex-1 bg-red-100 py-2 rounded">
                  <Trash2 size={16}/>
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default ManageUsers;