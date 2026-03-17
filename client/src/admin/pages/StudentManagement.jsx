import { useState, useEffect } from "react";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import axios from "axios";

function StudentManagement() {

  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    className: "",
    parent: "",
    phone: "",
    document: ""
  });

  const API = "http://localhost:5000/api/students";

  // Fetch Students
  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${API}/all`);
      setStudents(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle File
  const handleFile = (e) => {
    setForm({ ...form, document: e.target.files[0].name });
  };

  // Add or Update
  const handleSubmit = async () => {

    if (!form.name || !form.className) return;

    try {

      if (editId) {

        await axios.put(`${API}/update/${editId}`, form);

      } else {

        await axios.post(`${API}/create`, form);

      }

      fetchStudents();

      setForm({
        name: "",
        className: "",
        parent: "",
        phone: "",
        document: ""
      });

      setEditId(null);

    } catch (error) {
      console.error(error);
    }
  };

  // Delete
  const deleteStudent = async (id) => {
    try {

      await axios.delete(`${API}/delete/${id}`);
      fetchStudents();

    } catch (error) {
      console.error(error);
    }
  };

  // Edit
  const editStudent = (student) => {
    setForm(student);
    setEditId(student._id);
  };

  // View
  const viewStudent = (student) => {
    alert(`
Student Name: ${student.name}
Class: ${student.className}
Parent: ${student.parent}
Phone: ${student.phone}
Document: ${student.document}
`);
  };

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold text-sky-900 mb-6">
        Student Management
      </h1>

      {/* Form */}

      <div className="bg-white shadow rounded-xl p-4 mb-6 flex gap-3 flex-wrap">

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="className"
          value={form.className}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Assign Class</option>
          <option>Playgroup</option>
          <option>Nursery</option>
          <option>Jr KG</option>
          <option>Sr KG</option>
        </select>

        <input
          type="text"
          name="parent"
          placeholder="Parent Name"
          value={form.parent}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="file"
          onChange={handleFile}
          className="border p-2 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-sky-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} />
          {editId ? "Update" : "Add"}
        </button>

      </div>

      {/* Table */}

      <div className="bg-white shadow rounded-xl p-4">

        <table className="w-full border">

          <thead className="bg-sky-100">
            <tr>
              <th className="p-3">Student Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Parent</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Document</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            {students.map((s) => (

              <tr key={s._id} className="border-t text-center">

                <td className="p-3">{s.name}</td>
                <td>{s.className}</td>
                <td>{s.parent}</td>
                <td>{s.phone}</td>
                <td>{s.document}</td>

                <td className="flex justify-center gap-4 p-3">

                  <button
                    onClick={() => viewStudent(s)}
                    className="text-blue-600"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => editStudent(s)}
                    className="text-green-600"
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => deleteStudent(s._id)}
                    className="text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StudentManagement;