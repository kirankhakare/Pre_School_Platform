import { FaBaby, FaPaintBrush, FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ClassesSection() {

  const navigate = useNavigate();

  const classes = [
    {
      title: "Nursery",
      age: "3 - 4 Years",
      icon: <FaBaby />,
      desc: "A joyful introduction to learning through play, storytelling, and basic activities."
    },
    {
      title: "Jr KG",
      age: "4 - 5 Years",
      icon: <FaPaintBrush />,
      desc: "Creative learning with drawing, early writing skills, and interactive activities."
    },
    {
      title: "Sr KG",
      age: "5 - 6 Years",
      icon: <FaBookOpen />,
      desc: "Preparing children for primary school with reading, writing and logical thinking."
    },
  ];

  return (

    <section className="py-20 bg-gray-50 px-6">

      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92]">
          Our Classes
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Structured programs designed to nurture creativity,
          confidence, and curiosity in young learners.
        </p>

      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto">

        {classes.map((item, index) => (

          <div
            key={index}
            className="bg-white p-8 rounded-2xl text-center shadow-md
            hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >

            {/* Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center
            rounded-full bg-[#F4F7FF] text-[#E87D1E] text-3xl">

              {item.icon}

            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-6 text-gray-800">
              {item.title}
            </h3>

            {/* Age */}
            <p className="text-[#2F4C92] font-medium mt-1">
              Age: {item.age}
            </p>

            {/* Description */}
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">

        <button
          onClick={() => navigate("/classes")}
          className="bg-[#E87D1E] hover:bg-[#cf6b14] text-white px-8 py-3
          rounded-full font-semibold shadow-md transition hover:scale-105"
        >
          Explore All Classes →
        </button>

      </div>

    </section>

  );
}

export default ClassesSection;