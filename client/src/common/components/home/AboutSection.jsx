import { useNavigate } from "react-router-dom";

function AboutSection() {

  const navigate = useNavigate();

  return (

    <section className="py-20 px-6 bg-gray-50">

      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92]">
          About Our School
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          OctaWisdom School of Excellence is dedicated to nurturing young minds
          through joyful learning, creativity, and strong moral values.
        </p>

      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 mt-14 max-w-7xl mx-auto items-center">

        {/* Image */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            alt="Classroom"
            className="rounded-2xl shadow-xl w-full object-cover"
          />

        </div>

        {/* Content */}
        <div>

          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-[#2F4C92]">OctaWisdom School of Excellence</span>,
            we believe every child is unique and full of potential. Our mission is to
            create a safe and inspiring learning environment where children develop
            confidence, creativity, and curiosity.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Through activity-based education, experienced teachers, and a friendly
            atmosphere, we help children build strong academic foundations while
            encouraging imagination and social development.
          </p>

          {/* Feature Points */}
          <div className="grid grid-cols-2 gap-6 mt-8">

            <div className="flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              <p className="font-medium text-gray-700">Creative Learning</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">👩‍🏫</span>
              <p className="font-medium text-gray-700">Expert Teachers</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🧩</span>
              <p className="font-medium text-gray-700">Activity Based Education</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🌱</span>
              <p className="font-medium text-gray-700">Child Development</p>
            </div>

          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/about")}
            className="mt-10 bg-[#E87D1E] hover:bg-[#cf6b14] text-white px-7 py-3 rounded-full font-semibold shadow-md transition hover:scale-105"
          >
            Learn More →
          </button>

        </div>

      </div>

    </section>

  );
}

export default AboutSection;