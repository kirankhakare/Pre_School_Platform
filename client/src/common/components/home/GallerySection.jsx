function GallerySection() {

  const images = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
  ];

  return (

    <section className="py-16 bg-white px-6">

      <h2 className="text-4xl font-bold text-center">
        School Gallery
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">

        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            className="rounded-xl shadow hover:scale-105 transition"
          />

        ))}

      </div>

    </section>
  );
}

export default GallerySection;