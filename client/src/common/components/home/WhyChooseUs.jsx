import { FaChalkboardTeacher, FaShieldAlt, FaMusic } from "react-icons/fa";

function WhyChooseUs() {

  const items = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Experienced Teachers",
      desc: "Our trained educators nurture each child with care and personalized attention."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Environment",
      desc: "Secure campus with child-friendly infrastructure and complete safety measures."
    },
    {
      icon: <FaMusic />,
      title: "Activity Based Learning",
      desc: "Learning through music, storytelling, play, and creative activities."
    },
  ];

  return (

    <section className="py-20 bg-white px-6">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92]">
          Why Choose Us
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          We focus on creating a nurturing and inspiring environment
          where children learn with joy, creativity, and confidence.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14 max-w-7xl mx-auto">

        {items.map((item, index) => (

          <div
            key={index}
            className="bg-gray-50 p-8 text-center rounded-2xl shadow-md
            hover:shadow-xl transition duration-300 hover:-translate-y-2"
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

export default WhyChooseUs;