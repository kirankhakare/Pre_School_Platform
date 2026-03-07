function FacilitiesSection() {

  const facilities = [
    { icon: "🎨", title: "Art & Craft" },
    { icon: "🧸", title: "Play Area" },
    { icon: "📚", title: "Smart Learning" },
    { icon: "🚌", title: "Transport" },
  ];

  return (

    <section className="py-16 px-6 bg-white">

      <h2 className="text-4xl font-bold text-center">
        Our Facilities
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">

        {facilities.map((item, index) => (

          <div
            key={index}
            className="bg-blue-50 p-8 text-center rounded-xl shadow"
          >

            <div className="text-4xl">{item.icon}</div>

            <h3 className="mt-4 font-semibold">
              {item.title}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FacilitiesSection;