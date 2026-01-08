import { useNavigate } from "react-router-dom";

function AdmissionCTA() {

  const navigate = useNavigate();

  return (

    <section className="py-20 bg-[#2F4C92] text-white text-center px-6">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Enroll Your Child Today
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-200">
          Give your child the best start to their educational journey
          with joyful learning, caring teachers, and a safe environment.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/admission")}
          className="mt-10 bg-[#E87D1E] hover:bg-[#cf6b14]
          text-white px-8 py-3 rounded-full
          font-semibold shadow-lg transition duration-300 hover:scale-105"
        >
          Apply for Admission →
        </button>

      </div>

    </section>

  );
}

export default AdmissionCTA;