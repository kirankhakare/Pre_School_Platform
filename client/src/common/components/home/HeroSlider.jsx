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
      link: "/common-gallery",
    },
  ];

  return (
    <section className="relative h-[90vh] md:h-screen w-full">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4500 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            <div
              className="relative h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/55"></div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

                <div className="max-w-xl text-white">

                  {/* Label */}
                  <p className="text-xs md:text-sm bg-white/20 backdrop-blur-md px-4 py-1 rounded-full inline-block mb-5">
                    {slide.label}
                  </p>

                  {/* Title */}
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-5 text-base md:text-lg text-gray-200 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => navigate(slide.link)}
                    className="mt-8 px-7 py-3 rounded-full text-white font-semibold
                    bg-[#E87D1E] hover:bg-[#cf6b14]
                    transition-all duration-300 shadow-lg hover:scale-105"
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