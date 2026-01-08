import PublicNavbar from "../components/PublicNavbar";
import { motion } from "framer-motion";

function Gallery() {

  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
  ];

  return (
    <>
      <PublicNavbar />

      <main className="pt-24 pb-20 bg-white">

        {/* PAGE HEADER */}
        <section className="text-center py-16 px-6">

          <h1 className="text-4xl md:text-5xl font-bold text-[#2F4C92]">
            School Gallery
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore joyful moments of our students through activities,
            celebrations and learning experiences at OctaWisdom Preschool.
          </p>

        </section>

        {/* GALLERY GRID */}
        <section className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {images.map((img, index) => (

              <motion.div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >

                <img
                  src={img}
                  alt="School Activity"
                  className="w-full h-64 object-cover
                  group-hover:scale-110 transition duration-500"
                />

              </motion.div>

            ))}

          </div>

        </section>

      </main>
    </>
  );
}

export default Gallery;