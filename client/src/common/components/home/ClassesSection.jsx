function ClassesSection() {

  const classes = [
    {
      title: "Nursery",
      age: "3 - 4 Years",
      icon: "🧸",
    },
    {
      title: "Jr KG",
      age: "4 - 5 Years",
      icon: "🎨",
    },
    {
      title: "Sr KG",
      age: "5 - 6 Years",
      icon: "📚",
    },
  ];

  return (

    <section className="py-16 bg-white px-6">

      <h2 className="text-4xl font-bold text-center text-gray-800">
        Our Classes
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">

        {classes.map((item, index) => (

          <div
            key={index}
            className="bg-blue-50 p-8 rounded-xl text-center shadow hover:shadow-xl transition"
          >

            <div className="text-4xl">{item.icon}</div>

            <h3 className="text-xl font-semibold mt-4">
              {item.title}
            </h3>

            <p className="text-gray-500">
              Age: {item.age}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ClassesSection;