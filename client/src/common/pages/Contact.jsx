import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Youtube,
  Heart,
  Flower2,
  Star,
  Users,
  School,
  CalendarCheck,
  ChevronRight,
  Copy,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Contact Information
  const contactInfo = [
    {
      icon: <Phone size={32} />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: "Call now",
      color: "bg-pink-100 text-pink-600",
      hoverColor: "hover:bg-pink-200"
    },
    {
      icon: <Mail size={32} />,
      title: "Email Us",
      details: ["admissions@adhyayan.edu", "info@adhyayan.edu"],
      action: "Send email",
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-200"
    },
    {
      icon: <MapPin size={32} />,
      title: "Visit Us",
      details: ["123 Rainbow Street,", "Pune - 411001, Maharashtra"],
      action: "Get directions",
      color: "bg-green-100 text-green-600",
      hoverColor: "hover:bg-green-200"
    },
    {
      icon: <Clock size={32} />,
      title: "School Hours",
      details: ["Mon - Fri: 8:30 AM - 2:30 PM", "Sat: 9:00 AM - 1:00 PM"],
      action: "All timings",
      color: "bg-purple-100 text-purple-600",
      hoverColor: "hover:bg-purple-200"
    }
  ];

  // Social Media Links
  const socialMedia = [
    { name: "Facebook", icon: <Facebook size={28} />, color: "bg-blue-500", hover: "hover:bg-blue-600", link: "#" },
    { name: "Instagram", icon: <Instagram size={28} />, color: "bg-pink-500", hover: "hover:bg-pink-600", link: "#" },
    { name: "YouTube", icon: <Youtube size={28} />, color: "bg-red-500", hover: "hover:bg-red-600", link: "#" },
    { name: "WhatsApp", icon: <MessageCircle size={28} />, color: "bg-green-500", hover: "hover:bg-green-600", link: "#" },
  ];

  // FAQs
  const quickFaqs = [
    { 
      question: "How can I schedule a campus tour?", 
      answer: "Call us or fill the contact form to book a personalized campus tour.",
      icon: "🏫"
    },
    { 
      question: "What documents should I bring for admission?", 
      answer: "Birth certificate, photos, and ID proof as mentioned in admission section.",
      icon: "📄"
    },
    { 
      question: "Is there a waiting list for KG classes?", 
      answer: "Limited seats available. Early applications get priority.",
      icon: "⏳"
    },
  ];

  // Copy to clipboard function
  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <PublicNavbar />
      
      <main className="pt-24 bg-gradient-to-b from-sky-50 via-white to-sky-50 pb-20 overflow-hidden">
        
        {/* Floating Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-40 left-20 w-32 h-32 bg-pink-200 rounded-full opacity-20"
            animate={{ 
              y: [0, 50, 0], 
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-40 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20"
            animate={{ 
              y: [0, -40, 0], 
              x: [0, 30, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 18, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-60 right-40 w-24 h-24 bg-yellow-200 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative px-6 pt-10 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg mb-6 border-4 border-white">
                📞 Get in Touch
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-sky-900 mb-4">
                We'd Love to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Hear From You</span>
              </h1>
              <p className="text-xl text-sky-700 max-w-3xl mx-auto font-medium bg-white/50 p-4 rounded-3xl">
                Have questions about admissions, curriculum, or want to schedule a visit? We're here to help!
              </p>
            </motion.div>

            {/* Floating Contact Cards */}
            <div className="flex justify-center gap-4 flex-wrap mb-12">
              {["📞 Call", "💬 Chat", "📧 Email", "👋 Visit"].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-pink-200 font-bold text-sky-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={`${info.color} p-6 rounded-[2rem] shadow-xl border-4 border-white relative overflow-hidden group cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Decorative background */}
                  <div className="absolute -right-5 -top-5 w-20 h-20 bg-white rounded-full opacity-30 group-hover:scale-150 transition-transform"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                      {info.icon}
                    </div>
                    
                    <h3 className="text-xl font-extrabold text-sky-900 mb-3">{info.title}</h3>
                    
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sky-800 font-medium mb-1">{detail}</p>
                    ))}
                    
                    <div className="mt-4 flex items-center gap-2 text-pink-500 font-bold">
                      <span>{info.action}</span>
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section - Form & Map */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-sky-100 to-white p-8 rounded-[4rem] shadow-2xl border-4 border-white">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-pink-100"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-pink-500" size={28} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-sky-900">Send us a Message</h3>
                </div>
                
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sky-800 font-bold mb-2 text-sm">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full p-4 rounded-2xl border-2 border-pink-200 focus:border-pink-400 outline-none font-medium text-sky-900 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sky-800 font-bold mb-2 text-sm">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full p-4 rounded-2xl border-2 border-blue-200 focus:border-blue-400 outline-none font-medium text-sky-900 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sky-800 font-bold mb-2 text-sm">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="w-full p-4 rounded-2xl border-2 border-green-200 focus:border-green-400 outline-none font-medium text-sky-900 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sky-800 font-bold mb-2 text-sm">Subject</label>
                      <select className="w-full p-4 rounded-2xl border-2 border-purple-200 focus:border-purple-400 outline-none font-medium text-sky-900">
                        <option>Select Topic</option>
                        <option>Admission Enquiry</option>
                        <option>Schedule a Tour</option>
                        <option>General Question</option>
                        <option>Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sky-800 font-bold mb-2 text-sm">Your Message</label>
                    <textarea 
                      rows="4"
                      placeholder="Type your message here..."
                      className="w-full p-4 rounded-2xl border-2 border-orange-200 focus:border-orange-400 outline-none font-medium text-sky-900 transition-all"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold text-xl py-4 px-6 rounded-2xl shadow-lg border-4 border-white hover:shadow-xl transition-all flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={24} />
                    Send Message
                  </motion.button>
                </form>

                {/* Quick Reply Promise */}
                <motion.div 
                  className="mt-6 bg-green-50 p-4 rounded-2xl flex items-center gap-3 border-2 border-green-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-green-500" size={24} />
                  <p className="text-sky-800 font-medium">We reply within 24 hours on weekdays</p>
                </motion.div>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Google Map Integration */}
                <div className="bg-white p-6 rounded-[3rem] shadow-xl border-4 border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <MapPin className="text-blue-500" size={20} />
                    </div>
                    <h4 className="text-xl font-extrabold text-sky-900">Our Location</h4>
                  </div>
                  
                  <div className="rounded-2xl overflow-hidden border-4 border-white shadow-lg h-64">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.218708415473!2d73.85674401478888!3d18.52443968740718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f1c1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sky-800 font-bold">123 Rainbow Street, Pune</p>
                    <motion.button 
                      className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      Get Directions
                    </motion.button>
                  </div>
                </div>

                {/* Quick Contact Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-pink-50 p-4 rounded-2xl border-4 border-white text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl mb-2">📞</div>
                    <p className="font-bold text-sky-900 text-sm">Call Us Now</p>
                    <p className="text-pink-500 text-xs mt-1">Toll Free</p>
                  </motion.div>

                  <motion.div 
                    className="bg-green-50 p-4 rounded-2xl border-4 border-white text-center relative cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleCopyEmail("admissions@adhyayan.edu")}
                  >
                    <div className="text-3xl mb-2">📧</div>
                    <p className="font-bold text-sky-900 text-sm">Copy Email</p>
                    {copied && (
                      <motion.div 
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Copied!
                      </motion.div>
                    )}
                  </motion.div>

                  <motion.div 
                    className="bg-purple-50 p-4 rounded-2xl border-4 border-white text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl mb-2">💬</div>
                    <p className="font-bold text-sky-900 text-sm">Live Chat</p>
                    <p className="text-purple-500 text-xs mt-1">Online Now</p>
                  </motion.div>

                  <motion.div 
                    className="bg-orange-50 p-4 rounded-2xl border-4 border-white text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl mb-2">📅</div>
                    <p className="font-bold text-sky-900 text-sm">Schedule Visit</p>
                    <p className="text-orange-500 text-xs mt-1">Book Now</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-extrabold text-sky-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Connect With Us on <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Social Media</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-sky-700 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Follow us for daily updates, events, and fun activities!
            </motion.p>

            <div className="flex flex-wrap justify-center gap-6">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className={`${social.color} text-white p-4 rounded-2xl shadow-lg border-4 border-white flex items-center gap-3 ${social.hover} transition-all`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  {social.icon}
                  <span className="font-bold">{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Media Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
              {[
                { label: "Facebook Followers", count: "5.2K", emoji: "👍" },
                { label: "Instagram Followers", count: "8.7K", emoji: "📸" },
                { label: "YouTube Subscribers", count: "3.1K", emoji: "▶️" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-4 rounded-2xl shadow-md border-2 border-pink-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-2xl mb-1">{stat.emoji}</div>
                  <p className="text-2xl font-extrabold text-pink-500">{stat.count}</p>
                  <p className="text-sm text-sky-700 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick FAQs Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl font-extrabold text-sky-900 text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Quick <span className="text-green-500">Answers</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-sky-700 text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Commonly asked questions
            </motion.p>

            <div className="space-y-4">
              {quickFaqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-md border-2 border-green-100 hover:border-green-300 transition-all cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{faq.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-sky-900 mb-2">{faq.question}</h3>
                      <p className="text-sky-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-sky-700 font-medium">
                For more questions, check our{" "}
                <a href="/faq" className="text-pink-500 font-bold underline">
                  full FAQ page
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Business Hours & Stats */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Business Hours */}
              <motion.div
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-[3rem] border-4 border-white shadow-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="text-orange-500" size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-sky-900">Office Hours</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "8:30 AM - 2:30 PM", emoji: "📚" },
                    { day: "Saturday", hours: "9:00 AM - 1:00 PM", emoji: "🎨" },
                    { day: "Sunday", hours: "Closed", emoji: "🏠" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b-2 border-dashed border-orange-200">
                      <span className="text-sky-800 font-bold flex items-center gap-2">
                        <span>{item.emoji}</span>
                        {item.day}
                      </span>
                      <span className="text-orange-500 font-extrabold">{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-white p-4 rounded-2xl">
                  <p className="text-sky-700 font-medium flex items-center gap-2">
                    <Heart size={18} className="text-pink-500" />
                    We're available on WhatsApp during school hours
                  </p>
                </div>
              </motion.div>

              {/* School Stats */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-[3rem] border-4 border-white shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="text-blue-500" size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-sky-900">Our Community</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Happy Students", count: "150+", icon: "👧", color: "text-pink-500" },
                    { label: "Expert Teachers", count: "15+", icon: "👩‍🏫", color: "text-blue-500" },
                    { label: "Years of Excellence", count: "8+", icon: "🏆", color: "text-green-500" },
                    { label: "Events Yearly", count: "25+", icon: "🎉", color: "text-purple-500" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-white p-4 rounded-2xl text-center border-2 border-blue-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-3xl mb-2 block">{stat.icon}</span>
                      <p className={`text-2xl font-extrabold ${stat.color}`}>{stat.count}</p>
                      <p className="text-sm text-sky-700 font-bold">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sky-800 font-bold flex items-center justify-center gap-2">
                    <Flower2 size={18} />
                    Join our growing family
                    <Flower2 size={18} />
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action - Visit Us */}
        <section className="pt-20 px-6">
          <motion.div
            className="max-w-5xl mx-auto bg-gradient-to-r from-pink-400 to-purple-400 p-12 rounded-[4rem] shadow-2xl border-4 border-white text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-white rounded-full opacity-10 transform -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-10 transform translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-7xl mb-6"
              >
                🏫
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Come Visit Our Academy!
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
                See our classrooms, meet our teachers, and experience the joyful learning environment
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-pink-500 font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all border-4 border-white flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CalendarCheck size={24} />
                  Schedule a Tour
                </motion.button>
                <motion.button
                  className="bg-transparent text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg border-4 border-white hover:bg-white hover:text-pink-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now: +91 98765 43210
                </motion.button>
              </div>
              
              <p className="text-white mt-8 font-medium flex items-center justify-center gap-2">
                <Star size={20} className="fill-white" />
                Virtual tours also available for out-of-town parents
                <Star size={20} className="fill-white" />
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;