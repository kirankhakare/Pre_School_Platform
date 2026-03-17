import { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Trash2 } from "lucide-react";

function AnnouncementManagement() {

  const API = "http://localhost:5000/api/announcements";

  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch announcements
  const fetchAnnouncements = async () => {
    try {

      const res = await axios.get(`${API}/all`);

      console.log("Fetched Data:", res.data);

      if (res.data && res.data.data) {
        setAnnouncements(res.data.data);
      }

    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);


  // Add announcement
  const addAnnouncement = async () => {

    if (!title || !message || !target) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(`${API}/create`, {
        title,
        message,
        target
      });

      console.log("Created:", res.data);

      if (res.data && res.data.data) {

        // Add new announcement to table instantly
        setAnnouncements([res.data.data, ...announcements]);

        setTitle("");
        setMessage("");
        setTarget("");

      }

    } catch (error) {
      console.error("Create Error:", error);
    }

    setLoading(false);
  };


  // Delete announcement
  const deleteAnnouncement = async (id) => {

    if (!window.confirm("Delete this announcement?")) return;

    try {

      await axios.delete(`${API}/delete/${id}`);

      setAnnouncements(
        announcements.filter((a) => a._id !== id)
      );

    } catch (error) {
      console.error("Delete Error:", error);
    }
  };


  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold text-sky-900 mb-6">
        Announcement Management
      </h1>


      {/* FORM */}

      <div className="bg-white shadow rounded-xl p-4 mb-6 flex gap-3 flex-wrap">

        <input
          type="text"
          placeholder="Announcement Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-48"
        />

        <input
          type="text"
          placeholder="Announcement Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 rounded w-72"
        />

        <select
          value={target}
          onChange={(e) => setTarget(e.target.value)}
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
          disabled={loading}
          className="bg-sky-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} />
          {loading ? "Sending..." : "Send"}
        </button>

      </div>


      {/* TABLE */}

      <div className="bg-white shadow rounded-xl p-4">

        <table className="w-full border">

          <thead className="bg-sky-100">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Message</th>
              <th className="p-3">Target</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>

            {announcements.length === 0 ? (

              <tr>
                <td colSpan="5" className="text-center p-4">
                  No announcements yet
                </td>
              </tr>

            ) : (

              announcements.map((a) => (

                <tr key={a._id} className="border-t text-center">

                  <td className="p-3">{a.title}</td>

                  <td>{a.message}</td>

                  <td>{a.target}</td>

                  <td>
                    {a.createdAt
                      ? new Date(a.createdAt).toLocaleDateString()
                      : ""}
                  </td>

                  <td>

                    <button
                      onClick={() => deleteAnnouncement(a._id)}
                      className="text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default AnnouncementManagement;