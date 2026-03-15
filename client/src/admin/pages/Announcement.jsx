import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

function AnnouncementManagement() {

  const [announcements, setAnnouncements] = useState([]);

  const [form, setForm] = useState({
    title: "",
    message: "",
    target: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Announcement
  const addAnnouncement = () => {

    if (!form.title || !form.message || !form.target) return;

    setAnnouncements([
      ...announcements,
      {
        id: Date.now(),
        ...form,
        date: new Date().toLocaleDateString()
      }
    ]);

    setForm({
      title: "",
      message: "",
      target: ""
    });
  };

  // Delete Announcement
  const deleteAnnouncement = (index) => {
    const updated = announcements.filter((_, i) => i !== index);
    setAnnouncements(updated);
  };

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold text-sky-900 mb-6">
        Announcement Management
      </h1>

      {/* Announcement Form */}

      <div className="bg-white shadow rounded-xl p-4 mb-6 flex gap-3 flex-wrap">

        <input
          type="text"
          name="title"
          placeholder="Announcement Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 rounded w-48"
        />

        <input
          type="text"
          name="message"
          placeholder="Announcement Message"
          value={form.message}
          onChange={handleChange}
          className="border p-2 rounded w-72"
        />

        <select
          name="target"
          value={form.target}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Send To</option>
          <option value="All">All</option>
          <option value="Playgroup">Playgroup</option>
          <option value="Nursery">Nursery</option>
          <option value="Jr KG">Jr KG</option>
          <option value="Sr KG">Sr KG</option>
          <option value="Specific Parent">Specific Parent</option>
        </select>

        <button
          onClick={addAnnouncement}
          className="bg-sky-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} />
          Send
        </button>

      </div>

      {/* Announcement Table */}

      <div className="bg-white shadow rounded-xl p-4">

        <table className="w-full border">

          <thead className="bg-sky-100">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Message</th>
              <th className="p-3">Send To</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>

            {announcements.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No announcements yet
                </td>
              </tr>
            )}

            {announcements.map((a, index) => (

              <tr key={a.id} className="border-t text-center">

                <td className="p-3">{a.title}</td>
                <td>{a.message}</td>
                <td>{a.target}</td>
                <td>{a.date}</td>

                <td>
                  <button
                    onClick={() => deleteAnnouncement(index)}
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

export default AnnouncementManagement;