function WhyChooseUs() {

  const items = [
    {
      icon: "👩‍🏫",
      title: "Experienced Teachers",
    },
    {
      icon: "🛡️",
      title: "Safe Environment",
    },
    {
      icon: "🎵",
      title: "Activity Based Learning",
    },
  ];

  return (

    <section className="py-16 bg-white px-6">

      <h2 className="text-4xl font-bold text-center">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">

        {items.map((item, index) => (

          <div
            key={index}
            className="bg-blue-50 p-8 text-center rounded-xl shadow"
          >

            <div className="text-4xl">{item.icon}</div>

            <h3 className="text-xl font-semibold mt-4">
              {item.title}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;