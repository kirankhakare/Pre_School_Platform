import { FaPaintBrush, FaChild, FaLaptopCode, FaBus } from "react-icons/fa";

function FacilitiesSection() {

  const facilities = [
    {
      icon: <FaPaintBrush />,
      title: "Art & Craft",
      desc: "Creative activities that help children express imagination through drawing and crafts."
    },
    {
      icon: <FaChild />,
      title: "Safe Play Area",
      desc: "A secure and colorful play zone designed for fun and physical development."
    },
    {
      icon: <FaLaptopCode />,
      title: "Smart Learning",
      desc: "Modern teaching methods using digital tools and interactive learning techniques."
    },
  ];

  return (

    <section className="py-20 px-6 bg-gray-50">

      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92]">
          Our Facilities
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          We provide a safe, fun, and engaging environment where children
          can learn, explore, and grow with confidence.
        </p>

      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto">

        {facilities.map((item, index) => (

          <div
            key={index}
            className="bg-white p-8 rounded-2xl text-center shadow-md
            hover:shadow-xl transition duration-300 hover:-translate-y-2"
          >

            {/* Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center
            rounded-full bg-[#F4F7FF] text-[#E87D1E] text-3xl">

              {item.icon}

            </div>

            {/* Title */}
            <h3 className="mt-6 font-semibold text-lg text-gray-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default FacilitiesSection;