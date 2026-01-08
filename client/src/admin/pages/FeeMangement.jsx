import { useState, useEffect } from "react";
import axios from "axios";
import { Plus, CheckCircle, XCircle, FileText, Trash2 } from "lucide-react";

function FeeManagement() {

  const API = "http://localhost:5000/api/fees";

  const [fees, setFees] = useState([]);

  const [form, setForm] = useState({
    student: "",
    className: "",
    amount: ""
  });


  // Fetch Fees
  const fetchFees = async () => {
    try {

      const res = await axios.get(`${API}/all`);

      if (res.data.success) {
        setFees(res.data.data);
      }

    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };


  useEffect(() => {
    fetchFees();
  }, []);


  // Handle Form Input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  // Add Fee
  const addFee = async () => {

    if (!form.student || !form.amount) {
      alert("Please fill required fields");
      return;
    }

    try {

      const res = await axios.post(`${API}/create`, form);

      if (res.data.success) {
        fetchFees();
      }

      setForm({
        student: "",
        className: "",
        amount: ""
      });

    } catch (error) {
      console.log("Create Error:", error);
    }

  };


  // Toggle Paid / Unpaid
  const toggleStatus = async (id) => {

    try {

      const res = await axios.put(`${API}/toggle/${id}`);

      if (res.data.success) {
        fetchFees();
      }

    } catch (error) {
      console.log("Toggle Error:", error);
    }

  };


  // Delete Fee
  const deleteFee = async (id) => {

    if (!window.confirm("Delete this fee record?")) return;

    try {

      const res = await axios.delete(`${API}/delete/${id}`);

      if (res.data.success) {
        fetchFees();
      }

    } catch (error) {
      console.log("Delete Error:", error);
    }

  };


  // Generate Receipt
  const generateReceipt = (fee) => {

    alert(`
Receipt Generated

Student: ${fee.student}
Class: ${fee.className}
Amount: ₹${fee.amount}
Status: ${fee.status}
`);

  };


  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold text-sky-900 mb-6">
        Fee Management
      </h1>


      {/* FORM */}

      <div className="bg-white shadow rounded-xl p-4 mb-6 flex gap-3 flex-wrap">

        <input
          type="text"
          name="student"
          placeholder="Student Name"
          value={form.student}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="className"
          value={form.className}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Class</option>
          <option>Playgroup</option>
          <option>Nursery</option>
          <option>Jr KG</option>
          <option>Sr KG</option>
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Fee Amount"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          onClick={addFee}
          className="bg-sky-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} />
          Add Fee
        </button>

      </div>



      {/* TABLE */}

      <div className="bg-white shadow rounded-xl p-4">

        <table className="w-full border">

          <thead className="bg-sky-100">

            <tr>
              <th className="p-3">Student</th>
              <th className="p-3">Class</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>

          </thead>


          <tbody>

            {fees.length === 0 && (

              <tr>
                <td colSpan="5" className="text-center p-4">
                  No fee records
                </td>
              </tr>

            )}


            {fees.map((f) => (

              <tr key={f._id} className="border-t text-center">

                <td className="p-3">{f.student}</td>
                <td>{f.className}</td>
                <td>₹{f.amount}</td>

                <td>
                  <span
                    className={
                      f.status === "Paid"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {f.status}
                  </span>
                </td>

                <td className="flex justify-center gap-4 p-3">

                  <button
                    onClick={() => toggleStatus(f._id)}
                    className="text-green-600"
                  >
                    {f.status === "Paid" ? (
                      <XCircle size={18} />
                    ) : (
                      <CheckCircle size={18} />
                    )}
                  </button>

                  <button
                    onClick={() => generateReceipt(f)}
                    className="text-blue-600"
                  >
                    <FileText size={18} />
                  </button>

                  <button
                    onClick={() => deleteFee(f._id)}
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

export default FeeManagement;