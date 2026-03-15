import { useState } from "react";
import { Eye, Edit, Trash2, Plus } from "lucide-react";

function ClassManagement() {

  const [classes, setClasses] = useState([
    { id: 1, className: "Playgroup", teacher: "Mrs. Sharma", students: 20 },
    { id: 2, className: "Nursery", teacher: "Mrs. Patil", students: 25 },
    { id: 3, className: "Jr KG", teacher: "Mrs. Joshi", students: 22 },
    { id: 4, className: "Sr KG", teacher: "Mrs. Kulkarni", students: 24 }
  ]);

  const [newClass, setNewClass] = useState({
    className: "",
    teacher: "",
    students: ""
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  // Add or Update Class
  const handleAdd = () => {

    if (!newClass.className || !newClass.teacher) return;

    if (editIndex !== null) {
      const updated = [...classes];
      updated[editIndex] = { ...newClass, id: classes[editIndex].id };
      setClasses(updated);
      setEditIndex(null);
    } else {
      setClasses([
        ...classes,
        { ...newClass, id: Date.now() }
      ]);
    }

    setNewClass({
      className: "",
      teacher: "",
      students: ""
    });
  };

  // Delete
  const deleteClass = (index) => {
    const updated = classes.filter((_, i) => i !== index);
    setClasses(updated);
  };

  // Edit
  const editClass = (index) => {
    setNewClass(classes[index]);
    setEditIndex(index);
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

      {/* Add Class */}

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
          {editIndex !== null ? "Update Class" : "Add Class"}
        </button>

      </div>

      {/* Table */}

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

            {classes.map((c, index) => (

              <tr key={c.id} className="border-t text-center">

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
                    onClick={() => editClass(index)}
                    className="text-green-600"
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => deleteClass(index)}
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