import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, BookOpen, Music, Users, ShieldCheck, MapPin, Send } from "lucide-react";

// Dummy Data
const classes = [
    { name: "Playgroup", age: "1.5 - 2.5 Years", color: "bg-pink-100 border-pink-300 text-pink-700", icon: "🧸" },
    { name: "Nursery", age: "2.5 - 3.5 Years", color: "bg-blue-100 border-blue-300 text-blue-700", icon: "🎨" },
    { name: "Jr. KG", age: "3.5 - 4.5 Years", color: "bg-green-100 border-green-300 text-green-700", icon: "📚" },
    { name: "Sr. KG", age: "4.5 - 5.5 Years", color: "bg-yellow-100 border-yellow-300 text-yellow-700", icon: "🎓" },
];

const facilities = [
    { title: "Safe Environment", icon: <ShieldCheck size={32} />, desc: "24/7 CCTV & secure campus." },
    { title: "Creative Arts", icon: <Music size={32} />, desc: "Music, dance, and craft classes." },
    { title: "Expert Teachers", icon: <Users size={32} />, desc: "Caring & qualified educators." },
    { title: "Smart Classes", icon: <BookOpen size={32} />, desc: "Interactive digital learning." },
];

const testimonials = [
    { name: "Sarah Jenkins", parentOf: "Leo, Nursery", text: "My son absolutely loves coming here! The teachers are so warm and the environment is perfect for learning." },
    { name: "David & Emily", parentOf: "Mia, Sr. KG", text: "We have seen such a wonderful growth in Mia's confidence and skills. Highly recommend TinyTots!" },
];

function Middle() {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-sky-50 to-pink-50 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="flex-1 text-center md:text-left space-y-6"
                        initial="hidden" animate="visible" variants={fadeInUp}
                    >
                        <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm text-pink-600 font-bold border border-pink-100 flex items-center gap-2 w-max mx-auto md:mx-0">
                            <Star size={16} className="fill-pink-500" /> Admissions Open 2026-2027
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-sky-900 leading-tight">
                            A Fun Place For <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                                Growing Minds!
                            </span>
                        </h1>
                        <p className="text-xl text-sky-700 max-w-lg mx-auto md:mx-0 font-medium">
                            We nurture creativity, curiosity, and character in a safe and colorful environment. Join the TinyTots family today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                                Enroll Now <ArrowRight size={20} />
                            </button>
                            <button className="bg-white hover:bg-sky-50 text-sky-800 font-bold text-lg py-4 px-8 rounded-full shadow-md border-2 border-sky-100 transition-all hover:-translate-y-1">
                                Book a Tour
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 relative"
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring" }}
                    >
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-pink-300 rounded-[3rem] rotate-6 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=800&auto=format&fit=crop"
                                alt="Happy Kids"
                                className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white"
                            />
                            {/* Floating badges */}
                            {/* <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border-2 border-yellow-100 animate-bounce">
                                <span className="text-3xl">🎨</span>
                                <span className="font-bold text-sky-900">Creative</span>
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border-2 border-green-100 animate-bounce" style={{ animationDelay: '1s' }}>
                                <span className="text-3xl">🧩</span>
                                <span className="font-bold text-sky-900">Playful</span>
                            </div> */}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About / Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                    >
                        <h2 className="text-4xl font-extrabold text-sky-900 mb-6">Welcome to Our Family</h2>
                        <p className="text-xl text-sky-700 leading-relaxed font-medium">
                            Our mission is to foster a love of learning through play, exploration, and creative expression. We envision a world where every child is empowered to reach their full potential.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.img
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
                            alt="Kids playing"
                            className="rounded-[3rem] shadow-xl w-full h-80 object-cover border-8 border-pink-50"
                            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        />
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        >
                            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 shadow-sm flex gap-4">
                                <div className="bg-orange-100 p-3 rounded-2xl h-max text-orange-500">
                                    <Heart size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-sky-900 mb-2">Our Vision</h3>
                                    <p className="text-sky-700 font-medium">To create a nurturing and stimulating environment where children feel safe to explore, discover, and develop a lifelong passion for learning.</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 shadow-sm flex gap-4">
                                <div className="bg-blue-100 p-3 rounded-2xl h-max text-blue-500">
                                    <Star size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-sky-900 mb-2">Our Mission</h3>
                                    <p className="text-sky-700 font-medium">To provide high-quality early childhood education that promotes cognitive, social, emotional, and physical development.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Classes Overview */}
            <section className="py-20 bg-sky-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    >
                        <h2 className="text-4xl font-extrabold text-sky-900 mb-4">Our Programs</h2>
                        <p className="text-xl text-sky-700 font-medium max-w-2xl mx-auto">Tailored learning experiences for every stage of your child's early development.</p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        {classes.map((cls, idx) => (
                            <motion.div
                                key={idx}
                                className={`p-8 rounded-[2.5rem] border-2 shadow-sm bg-white hover:shadow-xl transition-all hover:-translate-y-2 group`}
                                variants={fadeInUp}
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${cls.color}`}>
                                    {cls.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-sky-900 mb-2 group-hover:text-pink-500 transition-colors">{cls.name}</h3>
                                <p className="text-sky-600 font-bold mb-4">{cls.age}</p>
                                <p className="text-sky-700 mb-6 font-medium">Age-appropriate activities focusing on motor skills and basic concepts.</p>
                                <a href="#" className="flex items-center gap-2 text-pink-500 font-bold hover:text-pink-600 transition-colors">
                                    Learn more <ArrowRight size={16} />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Facilities */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    >
                        <h2 className="text-4xl font-extrabold text-sky-900 mb-4">Top-Notch Facilities</h2>
                        <p className="text-xl text-sky-700 font-medium max-w-2xl mx-auto">Everything your child needs to grow, learn, and play safely.</p>
                    </motion.div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        {facilities.map((fac, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-sky-50 p-8 rounded-3xl text-center hover:bg-sky-100 transition-colors"
                                variants={fadeInUp}
                            >
                                <div className="text-pink-500 flex justify-center mb-4">
                                    {fac.icon}
                                </div>
                                <h3 className="text-xl font-bold text-sky-900 mb-3">{fac.title}</h3>
                                <p className="text-sky-700 font-medium">{fac.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 bg-pink-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    >
                        <div>
                            <h2 className="text-4xl font-extrabold text-sky-900 mb-4">Moments of Joy</h2>
                            <p className="text-xl text-sky-700 font-medium">A glimpse into our daily fun activities.</p>
                        </div>
                        <button className="bg-white text-pink-500 font-bold py-3 px-6 rounded-full border-2 border-pink-200 hover:bg-pink-100 transition-colors flex items-center gap-2">
                            View All <ArrowRight size={18} />
                        </button>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <motion.img src="https://static.vecteezy.com/system/resources/previews/036/196/521/non_2x/primary-school-illustration-of-students-children-and-school-building-with-the-concept-of-learning-and-knowledge-in-flat-cartoon-background-vector.jpg" alt="Gallery 1" className="w-full h-48 md:h-64 object-cover rounded-3xl" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} />
                        <motion.img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=400&auto=format&fit=crop" alt="Gallery 2" className="w-full h-48 md:h-64 object-cover rounded-3xl md:mt-8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} />
                        <motion.img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=400&auto=format&fit=crop" alt="Gallery 3" className="w-full h-48 md:h-64 object-cover rounded-3xl" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} />
                        <motion.img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop" alt="Gallery 4" className="w-full h-48 md:h-64 object-cover rounded-3xl md:mt-8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    >
                        <h2 className="text-4xl font-extrabold text-sky-900 mb-4">Happy Parents</h2>
                        <p className="text-xl text-sky-700 font-medium">Don't just take our word for it.</p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        {testimonials.map((testi, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-yellow-50 p-8 rounded-[2.5rem] border-2 border-yellow-100 relative"
                                variants={fadeInUp}
                            >
                                <div className="text-yellow-400 flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-yellow-400" />)}
                                </div>
                                <p className="text-lg text-sky-800 font-medium italic mb-6">"{testi.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center font-bold text-pink-700">
                                        {testi.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sky-900">{testi.name}</h4>
                                        <p className="text-sm text-sky-600 font-medium">Parent of {testi.parentOf}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact & Admission Form Section */}
            <section className="py-20 bg-blue-500 relative overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        className="flex-1 text-white space-y-6"
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Ready to start your child's journey?</h2>
                        <p className="text-xl text-blue-100 font-medium">
                            Enrollments for the upcoming academic year are now open. Get in touch with us to schedule a visit or ask any questions.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-full"><MapPin size={24} /></div>
                                <span className="text-lg font-medium">123 Playful Lane, Kidsville wonderland</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-2xl"
                        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-sky-900 mb-6 text-center">Quick Enquiry</h3>
                        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                            <div>
                                <input type="text" placeholder="Parent's Name" className="w-full px-5 py-4 rounded-2xl bg-sky-50 border border-sky-100 focus:bg-white focus:border-pink-300 focus:outline-none transition-all text-sky-900 font-medium placeholder:text-sky-400" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-2xl bg-sky-50 border border-sky-100 focus:bg-white focus:border-pink-300 focus:outline-none transition-all text-sky-900 font-medium placeholder:text-sky-400" />
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number" className="w-full px-5 py-4 rounded-2xl bg-sky-50 border border-sky-100 focus:bg-white focus:border-pink-300 focus:outline-none transition-all text-sky-900 font-medium placeholder:text-sky-400" />
                            </div>
                            <button
                                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 mt-4"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default Middle;
