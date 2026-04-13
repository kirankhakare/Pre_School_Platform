import React from "react";

// const handleApply = () => {
//   window.location.href =
//     "mailto:ganeshmukhmale01@gmail.com?subject=Job Application&body=Dear Sir/Madam,%0D%0A%0D%0APlease find my CV attached.";
// };

const Careers = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-25 px-5">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900">
          Careers at OctaWisdom School of Excellence
        </h1>
        <p className="text-gray-600 mt-3">
          Join our team and help shape the future of students.
        </p>
      </div>

      {/* Vacancy Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        
        <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
          📢 We Are Hiring
        </h2>

        {/* Teacher Vacancy */}
        <div className="border-b pb-4 mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            🧑‍🏫 Primary Teacher (2 Positions)
          </h3>
          <p className="text-gray-600 mt-2">
            <strong>Qualification:</strong> Graduate / B.Ed preferred
          </p>
          <p className="text-gray-600">
            <strong>Skills:</strong> Good communication, subject knowledge, passion for teaching
          </p>
        </div>

        {/* Lady Attendant */}
        <div className="border-b pb-4 mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            👩‍🦰 Lady Attendant (1 Position)
          </h3>
          <p className="text-gray-600 mt-2">
            <strong>Qualification:</strong> Minimum 10th Pass
          </p>
          <p className="text-gray-600">
            <strong>Skills:</strong> Caring nature, handling children, basic cleanliness support
          </p>
        </div>

        {/* Apply Section */}
        <div className="text-center mt-6">
          <p className="text-gray-700 mb-3">
            📩 Send your resume to:
          </p>
          <p className="font-semibold text-blue-700">
            octawisdom2026@gmail.com
          </p>

          <p className="mt-2 text-gray-700">
            📞 Contact: 9130037728
          </p>

          <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default Careers;