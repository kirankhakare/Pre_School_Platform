import { useNavigate } from "react-router-dom";

function AdmissionCTA() {

  const navigate = useNavigate();

  return (

    <section className="py-20 bg-blue-50 text-center">

      <h2 className="text-4xl font-bold">
        Enroll Your Child Today
      </h2>

      <p className="mt-4 text-gray-600">
        Give your child the best start to their learning journey.
      </p>

      <button
        onClick={() => navigate("/admission")}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Apply for Admission
      </button>

    </section>
  );
}

export default AdmissionCTA;