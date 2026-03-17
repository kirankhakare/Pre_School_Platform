import { useState, useEffect } from "react";
import axios from "axios";
import { Eye, Edit, Trash2, Plus } from "lucide-react";

function TeacherManagement() {

  const API = "http://localhost:5000/api/teachers";

  const [teachers, setTeachers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    className: "",
    performance: "",
    salary: ""
  });

  const [editId, setEditId] = useState(null);


  // Fetch Teachers
  const fetchTeachers = async () => {
    try {

      const res = await axios.get(`${API}/all`);

      if (res.data.success) {
        setTeachers(res.data.data);
      }

    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);



  // Handle Input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };



  // Add or Update Teacher
  const handleSubmit = async () => {

    if (!form.name || !form.className) {
      alert("Please fill required fields");
      return;
    }

    try {

      if (editId) {

        const res = await axios.put(`${API}/update/${editId}`, form);

        if (res.data.success) {
          fetchTeachers();
          setEditId(null);
        }

      } else {

        const res = await axios.post(`${API}/create`, form);

        if (res.data.success) {
          fetchTeachers();
        }

      }

      setForm({
        name: "",
        className: "",
        performance: "",
        salary: ""
      });

    } catch (error) {
      console.log("Save Error:", error);
    }

  };



  // Delete Teacher
  const deleteTeacher = async (id) => {

    if (!window.confirm("Delete this teacher?")) return;

    try {

      const res = await axios.delete(`${API}/delete/${id}`);

      if (res.data.success) {
        fetchTeachers();
      }

    } catch (error) {
      console.log("Delete Error:", error);
    }

  };



  // Edit Teacher
  const editTeacher = (t) => {

    setForm({
      name: t.name,
      className: t.className,
      performance: t.performance,
      salary: t.salary
    });

    setEditId(t._id);

  };



  // View Performance
  const viewPerformance = (teacher) => {

    alert(`
Teacher: ${teacher.name}
Class: ${teacher.className}
Performance: ${teacher.performance}
Salary: ${teacher.salary}
`);

  };



  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold text-sky-900 mb-6">
        Teacher Management
      </h1>


      {/* FORM */}

      <div className="bg-white shadow rounded-xl p-4 mb-6 flex gap-3 flex-wrap">

        <input
          type="text"
          name="name"
          placeholder="Teacher Name"
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
          name="performance"
          placeholder="Performance"
          value={form.performance}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-sky-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} />
          {editId ? "Update Teacher" : "Add Teacher"}
        </button>

      </div>



      {/* TABLE */}

      <div className="bg-white shadow rounded-xl p-4">

        <table className="w-full border">

          <thead className="bg-sky-100">

            <tr>
              <th className="p-3">Teacher Name</th>
              <th className="p-3">Assigned Class</th>
              <th className="p-3">Performance</th>
              <th className="p-3">Salary</th>
              <th className="p-3">Actions</th>
            </tr>

          </thead>


          <tbody>

            {teachers.length === 0 && (

              <tr>
                <td colSpan="5" className="text-center p-4">
                  No teachers found
                </td>
              </tr>

            )}


            {teachers.map((t) => (

              <tr key={t._id} className="border-t text-center">

                <td className="p-3">{t.name}</td>
                <td>{t.className}</td>
                <td>{t.performance}</td>
                <td>₹{t.salary}</td>

                <td className="flex justify-center gap-4 p-3">

                  <button
                    onClick={() => viewPerformance(t)}
                    className="text-blue-600"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => editTeacher(t)}
                    className="text-green-600"
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => deleteTeacher(t._id)}
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

export default TeacherManagement;