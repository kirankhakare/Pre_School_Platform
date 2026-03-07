import { useNavigate } from "react-router-dom";

function AboutSection() {

  const navigate = useNavigate();

  return (

    <section className="py-16 px-6 bg-white">

      <h2 className="text-4xl font-bold text-center text-gray-800">
        About Our School
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">

        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          className="rounded-xl shadow-lg"
        />

        <div>

          <p className="text-lg text-gray-700 leading-relaxed">
            OctaWisdom School of Excellence focuses on the overall
            development of children through joyful learning activities,
            creative exploration and experienced teachers.
          </p>

          <button
            onClick={() => navigate("/about")}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;