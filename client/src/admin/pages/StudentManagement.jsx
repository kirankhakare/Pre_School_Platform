import { useState } from "react";
import { Eye, Edit, Trash2, Plus } from "lucide-react";

function StudentManagement() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      className: "Nursery",
      parent: "Raj Sharma",
      phone: "9876543210",
      document: "birth_certificate.pdf"
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    className: "",
    parent: "",
    phone: "",
    document: ""
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, document: e.target.files[0].name });
  };

  // Add or Update Student
  const handleSubmit = () => {

    if (!form.name || !form.className) return;

    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = { ...form, id: students[editIndex].id };
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, { ...form, id: Date.now() }]);
    }

    setForm({
      name: "",
      className: "",
      parent: "",
      phone: "",
      document: ""
    });
  };

  // Delete Student
  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  // Edit Student
  const editStudent = (index) => {
    setForm(students[index]);
    setEditIndex(index);
  };

  // View Student
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

      {/* Add Student */}

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
          {editIndex !== null ? "Update" : "Add"}
        </button>

      </div>

      {/* Student Table */}

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

            {students.map((s, index) => (

              <tr key={s.id} className="border-t text-center">

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
                    onClick={() => editStudent(index)}
                    className="text-green-600"
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => deleteStudent(index)}
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