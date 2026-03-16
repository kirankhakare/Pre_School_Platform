import { useNavigate } from "react-router-dom";

function GallerySection() {

  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
  ];

  return (

    <section className="py-20 bg-gray-50 px-6">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-[#2F4C92]">
          School Gallery
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Explore joyful moments of our students through activities,
          celebrations, and learning experiences.
        </p>

      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 max-w-7xl mx-auto">

        {images.map((img, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md group"
          >

            <img
              src={img}
              alt="School Activity"
              className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
            />

          </div>

        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">

        <button
          onClick={() => navigate("/gallery")}
          className="bg-[#E87D1E] hover:bg-[#cf6b14] text-white px-8 py-3
          rounded-full font-semibold shadow-md transition hover:scale-105"
        >
          View Full Gallery →
        </button>

      </div>

    </section>

  );
}

export default GallerySection;