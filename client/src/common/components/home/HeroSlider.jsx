import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";

function HeroSlider() {

  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://theindianschool.in/uploads/posts/L-16972674476964-pre-primary-magic-years-main.jpg",
      label: "Welcome to OctaWisdom School",
      title: "Admissions Open 2026-27",
      subtitle:
        "Give your child the best start to learning with creative activities and joyful education.",
      button: "Apply Now →",
      link: "/admission",
    },
    {
      image:
        "https://theindianschool.in/uploads/posts/L-16972253161054-vission-and-mission-main.jpg",
      label: "Creative Learning Environment",
      title: "Fun Based Education",
      subtitle:
        "We help children grow with confidence, creativity, and curiosity.",
      button: "Explore Classes →",
      link: "/classes",
    },
    {
      image:
        "https://littlerock.edu.in/wp-content/uploads/2022/04/100A6679-1-scaled.jpg",
      label: "Safe & Friendly Campus",
      title: "Caring Teachers & Smart Learning",
      subtitle:
        "A nurturing environment where children learn through play and discovery.",
      button: "View Facilities →",
      link: "/gallery",
    },
  ];

  return (
    <section className="relative h-screen w-full">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            <div
              className="relative h-screen bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="max-w-xl text-white">

                  {/* Label */}
                  <p className="text-sm md:text-base bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full inline-block mb-6">
                    {slide.label}
                  </p>

                  {/* Heading */}
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-6 text-lg text-gray-200">
                    {slide.subtitle}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => navigate(slide.link)}
                    className="mt-8 px-8 py-3 rounded-full text-white font-semibold 
                    bg-gradient-to-r from-blue-500 to-purple-600
                    hover:scale-105 transition shadow-lg"
                  >
                    {slide.button}
                  </button>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}
      </Swiper>

    </section>
  );
}

export default HeroSlider;