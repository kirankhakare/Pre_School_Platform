import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen">

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="h-full"
                >

                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div
                            className="h-screen bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://theindianschool.in/uploads/posts/L-16972674476964-pre-primary-magic-years-main.jpg')",
                            }}
                        ></div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div
                            className="h-screen bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://theindianschool.in/uploads/posts/L-16972253161054-vission-and-mission-main.jpg')",
                            }}
                        ></div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div
                            className="h-screen bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://littlerock.edu.in/wp-content/uploads/2022/04/100A6679-1-scaled.jpg')",
                            }}
                        ></div>
                    </SwiperSlide>

                    {/* Slide 4 */}
                    <SwiperSlide>
                        <div
                            className="h-screen bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://theindianschool.in/uploads/posts/L-16972265261870-why-the-indian-school-main.jpg')",
                            }}
                        ></div>
                    </SwiperSlide>

                </Swiper>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center z-20 px-6">
                    <div className="max-w-3xl text-white">
                        {/* <h1 className="text-5xl md:text-7xl font-extrabold">
                            <span className="text-white">Octa</span>
                            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Wisdom
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold mt-3 text-blue-200">
                            School Of Excellence
                        </h2> */}
                    </div>
                </div>

                {/* Buttons at bottom-right */}
                <div className="absolute bottom-8 right-8 flex gap-4 flex-wrap z-20">
                    <button className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 rounded-xl font-bold shadow-md transition">
                        Admission Open
                    </button>

                    <button className="bg-white hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg">
                        Learn More...
                    </button>
                </div>

            </section>

            {/* About Section */}
            <section className="py-10 bg-white px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-gray-800 text-center py-10">
                    About Our School
                </h2>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                    {/* Image */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                            alt="Kids Classroom"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <p className="mt-4 text-gray-800 text-xl leading-relaxed">
                            OctaWisdom School of Excellence focuses on the overall development of children
                            through joyful learning activities, creative exploration, and
                            experienced teachers who nurture young minds with care and love.
                            Our mission is to create a safe, inspiring, and playful environment
                            where every child can grow confidently.
                        </p>

                        {/* Features */}
                        <div className="mt-8 grid grid-cols-2 gap-6">

                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🎨</span>
                                <p className="font-semibold text-gray-700">Creative Learning</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-3xl">👩‍🏫</span>
                                <p className="font-semibold text-gray-700">Expert Teachers</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🧩</span>
                                <p className="font-semibold text-gray-700">Activity Based Education</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🌱</span>
                                <p className="font-semibold text-gray-700">Child Development</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate('/about')}
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md transition"
                    >
                        Learn More...
                    </button>
                </div>
            </section>

            {/* Classes Section */}
            <section className="bg-white py-10 px-6 lg:px-20">

                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center text-gray-800">
                        Our Classes
                    </h2>

                    <p className="text-center text-gray-700 text-xl mt-3 mb-12">
                        We offer structured early childhood programs designed to nurture creativity,
                        confidence, and curiosity in young learners.
                    </p>

                    {/* Classes Grid */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Nursery */}
                        <div className="bg-blue-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300 hover:-translate-y-2">

                            <div className="text-5xl mb-4">🧸</div>

                            <h3 className="text-2xl font-semibold text-gray-800">
                                Nursery
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Age Group: 3 – 4 Years
                            </p>

                            <p className="text-gray-600 mt-4">
                                Children learn basic communication, alphabets, numbers,
                                colors, and social interaction through fun activities.
                            </p>

                        </div>


                        {/* Jr KG */}
                        <div className="bg-blue-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300 hover:-translate-y-2">

                            <div className="text-5xl mb-4">🎨</div>

                            <h3 className="text-2xl font-semibold text-gray-800">
                                Jr. KG
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Age Group: 4 – 5 Years
                            </p>

                            <p className="text-gray-600 mt-4">
                                Focus on language development, basic mathematics,
                                drawing, storytelling, and creative learning.
                            </p>

                        </div>


                        {/* Sr KG */}
                        <div className="bg-blue-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300 hover:-translate-y-2">

                            <div className="text-5xl mb-4">📚</div>

                            <h3 className="text-2xl font-semibold text-gray-800">
                                Sr. KG
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Age Group: 5 – 6 Years
                            </p>

                            <p className="text-gray-600 mt-4">
                                Preparing children for primary school with reading,
                                writing, logical thinking, and interactive activities.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate('/classes')}
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md transition"
                    >
                        Learn More...
                    </button>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-10 px-6 bg-white">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Facilities
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        We provide a safe, fun, and engaging environment where children can
                        learn, explore, and grow through creative activities and modern learning tools.
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid md:grid-cols-4 gap-8">

                    {/* Card 1 */}
                    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
                        <div className="text-4xl mb-4">🎨</div>
                        <h3 className="text-xl font-semibold text-gray-800">Art & Craft</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Encouraging creativity through drawing, painting, and fun craft activities.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
                        <div className="text-4xl mb-4">🧸</div>
                        <h3 className="text-xl font-semibold text-gray-800">Safe Play Area</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            A secure and colorful play zone designed for fun physical activities.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
                        <div className="text-4xl mb-4">📚</div>
                        <h3 className="text-xl font-semibold text-gray-800">Smart Learning</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Modern teaching methods with digital tools and interactive learning.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
                        <div className="text-4xl mb-4">🚌</div>
                        <h3 className="text-xl font-semibold text-gray-800">Transport Facility</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Safe and reliable transport service for students across nearby areas.
                        </p>
                    </div>

                </div>

            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white py-10 px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        We focus on providing a nurturing and inspiring environment
                        where children learn with joy, creativity, and confidence.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
                        <div className="text-4xl mb-4">👩‍🏫</div>
                        <h3 className="font-semibold text-xl text-gray-800">
                            Experienced Teachers
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Our qualified teachers specialize in early childhood education
                            and provide personalized attention to every child.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
                        <div className="text-4xl mb-4">🛡️</div>
                        <h3 className="font-semibold text-xl text-gray-800">
                            Safe Environment
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Our campus is fully secure with CCTV monitoring, clean classrooms,
                            and child-friendly infrastructure.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
                        <div className="text-4xl mb-4">🎵</div>
                        <h3 className="font-semibold text-xl text-gray-800">
                            Activity Based Learning
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Children learn through fun activities, music, storytelling,
                            games, and creative projects.
                        </p>
                    </div>

                </div>

            </section>

            {/* School Gallery Section */}
            <section className="py-10 px-6 bg-white">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        School Gallery
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Explore joyful moments of our students through fun activities,
                        celebrations, and learning experiences at our school.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">

                    {/* Image 1 */}
                    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
                        <img
                            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                            alt="gallery"
                            className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
                        <img
                            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
                            alt="gallery"
                            className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
                        <img
                            src="https://media.istockphoto.com/id/1151224308/photo/teachers-with-children-learning-at-preschool.jpg?s=612x612&w=0&k=20&c=8DTKc4VYvTuPddcrgoCYBH9hjKQdV5qzkgg0nOEhuoo="
                            alt="gallery"
                            className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                        />
                    </div>

                    {/* Image 4 */}
                    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                            alt="gallery"
                            className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                        />
                    </div>

                </div>

                {/* Button */}
                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => navigate('/gallery')}
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md transition"
                    >
                        Learn More...
                    </button>
                </div>

            </section>

            {/* Admission CTA */}
            <section className="bg-white text-gray-800 py-10 px-6 text-center">

                <div className="max-w-3xl mx-auto">

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Enroll Your Child Today
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-6 text-lg text-black/90">
                        Give your child the best start to their educational journey with
                        fun learning, caring teachers, and a safe environment.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-10 flex-wrap">

                        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md transition">
                            Apply for Admission
                        </button>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Home;