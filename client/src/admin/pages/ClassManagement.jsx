import { useState, useEffect } from "react";
import axios from "axios";
import { Eye, Edit, Trash2, Plus } from "lucide-react";

function ClassManagement() {

  const API = "http://localhost:5000/api/classes";

  const [classes, setClasses] = useState([]);

  const [newClass, setNewClass] = useState({
    className: "",
    teacher: "",
    students: ""
  });

  const [editId, setEditId] = useState(null);


  // Fetch Classes
  const fetchClasses = async () => {
    try {

      const res = await axios.get(`${API}/all`);

      if (res.data.success) {
        setClasses(res.data.data);
      }

    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);



  // Handle Input
  const handleChange = (e) => {
    setNewClass({
      ...newClass,
      [e.target.name]: e.target.value
    });
  };



  // Add or Update Class
  const handleAdd = async () => {

    if (!newClass.className || !newClass.teacher) {
      alert("Please fill required fields");
      return;
    }

    try {

      if (editId) {

        const res = await axios.put(`${API}/update/${editId}`, newClass);

        if (res.data.success) {
          fetchClasses();
          setEditId(null);
        }

      } else {

        const res = await axios.post(`${API}/create`, newClass);

        if (res.data.success) {
          fetchClasses();
        }

      }

      setNewClass({
        className: "",
        teacher: "",
        students: ""
      });

    } catch (error) {
      console.log("Save Error:", error);
    }

  };



  // Delete Class
  const deleteClass = async (id) => {

    if (!window.confirm("Delete this class?")) return;

    try {

      const res = await axios.delete(`${API}/delete/${id}`);

      if (res.data.success) {
        fetchClasses();
      }

    } catch (error) {
      console.log("Delete Error:", error);
    }

  };



  // Edit Class
  const editClass = (c) => {

    setNewClass({
      className: c.className,
      teacher: c.teacher,
      students: c.students
    });

    setEditId(c._id);

  };



  // View Students
  const viewStudents = (className) => {
    alert(`Viewing students of ${className}`);
  };



  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold text-sky-900 mb-6">
        Class Management
      </h1>


      {/* FORM */}

      <div className="bg-white shadow rounded-xl p-4 mb-6 flex gap-3 flex-wrap">

        <input
          type="text"
          name="className"
          placeholder="Class Name"
          value={newClass.className}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="teacher"
          placeholder="Assign Teacher"
          value={newClass.teacher}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="students"
          placeholder="Students"
          value={newClass.students}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          onClick={handleAdd}
          className="bg-sky-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} />
          {editId ? "Update Class" : "Add Class"}
        </button>

      </div>



      {/* TABLE */}

      <div className="bg-white shadow rounded-xl p-4">

        <table className="w-full border">

          <thead className="bg-sky-100">

            <tr>
              <th className="p-3">Class</th>
              <th className="p-3">Teacher</th>
              <th className="p-3">Students</th>
              <th className="p-3">Actions</th>
            </tr>

          </thead>


          <tbody>

            {classes.length === 0 && (

              <tr>
                <td colSpan="4" className="text-center p-4">
                  No classes found
                </td>
              </tr>

            )}


            {classes.map((c) => (

              <tr key={c._id} className="border-t text-center">

                <td className="p-3">{c.className}</td>
                <td>{c.teacher}</td>
                <td>{c.students}</td>

                <td className="p-3 flex justify-center gap-4">

                  <button
                    onClick={() => viewStudents(c.className)}
                    className="text-blue-600"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => editClass(c)}
                    className="text-green-600"
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => deleteClass(c._id)}
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

export default ClassManagement;