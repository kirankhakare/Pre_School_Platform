import { useState } from "react";
import { Plus, CheckCircle, XCircle, FileText, Trash2 } from "lucide-react";

function FeeManagement() {

  const [fees, setFees] = useState([
    {
      id: 1,
      student: "Aarav Sharma",
      className: "Nursery",
      amount: 5000,
      status: "Unpaid"
    }
  ]);

  const [form, setForm] = useState({
    student: "",
    className: "",
    amount: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Fee Structure
  const addFee = () => {

    if (!form.student || !form.amount) return;

    setFees([
      ...fees,
      {
        id: Date.now(),
        student: form.student,
        className: form.className,
        amount: form.amount,
        status: "Unpaid"
      }
    ]);

    setForm({
      student: "",
      className: "",
      amount: ""
    });
  };

  // Mark Paid / Unpaid
  const toggleStatus = (index) => {
    const updated = [...fees];
    updated[index].status =
      updated[index].status === "Paid" ? "Unpaid" : "Paid";
    setFees(updated);
  };

  // Delete Fee
  const deleteFee = (index) => {
    const updated = fees.filter((_, i) => i !== index);
    setFees(updated);
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

      {/* Fee Form */}

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

      {/* Fee Table */}

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

            {fees.map((f, index) => (

              <tr key={f.id} className="border-t text-center">

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
                    onClick={() => toggleStatus(index)}
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
                    onClick={() => deleteFee(index)}
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