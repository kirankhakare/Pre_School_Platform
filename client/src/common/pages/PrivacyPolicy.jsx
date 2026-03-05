import { motion } from "framer-motion";
import { Shield, BookOpen, UserCheck, Lock, Share2, Image as ImageIcon, Cookie, Database, Scale, Mail, MapPin, Phone } from "lucide-react";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
    const sections = [
        {
            title: "1. Introduction",
            icon: <BookOpen className="text-pink-500" size={28} />,
            content: (
                <>
                    <p className="mb-3">Welcome to <strong>Adhyayan Kids Academy</strong>.</p>
                    <p className="mb-3">We respect your privacy and are committed to protecting the personal information of our students, parents, teachers, and website visitors.</p>
                    <p>This Privacy Policy explains how we collect, use, store, and protect your information.</p>
                </>
            )
        },
        {
            title: "2. Information We Collect",
            icon: <Database className="text-blue-500" size={28} />,
            content: (
                <div className="space-y-4">
                    <p>We may collect the following types of information:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
                            <h4 className="font-bold text-sky-900 mb-2">A) Student Information</h4>
                            <ul className="list-disc list-inside text-sky-700 text-sm space-y-1">
                                <li>Full Name & Date of Birth</li>
                                <li>Gender & Class Details</li>
                                <li>Attendance Records</li>
                                <li>Academic Performance</li>
                                <li>Photos (for gallery/events)</li>
                            </ul>
                        </div>
                        <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
                            <h4 className="font-bold text-sky-900 mb-2">B) Parent/Guardian Info</h4>
                            <ul className="list-disc list-inside text-sky-700 text-sm space-y-1">
                                <li>Name & Contact Number</li>
                                <li>Email & Address</li>
                                <li>Emergency Contact Details</li>
                            </ul>
                        </div>
                        <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
                            <h4 className="font-bold text-sky-900 mb-2">C) Teacher Information</h4>
                            <ul className="list-disc list-inside text-sky-700 text-sm space-y-1">
                                <li>Name & Contact Details</li>
                                <li>Qualification</li>
                                <li>Assigned Classes</li>
                            </ul>
                        </div>
                        <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
                            <h4 className="font-bold text-sky-900 mb-2">D) Website Usage Data</h4>
                            <ul className="list-disc list-inside text-sky-700 text-sm space-y-1">
                                <li>IP Address & Browser type</li>
                                <li>Device information</li>
                                <li>Cookies (for better experience)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "3. How We Use the Information",
            icon: <UserCheck className="text-orange-500" size={28} />,
            content: (
                <>
                    <p className="mb-4">We use collected information for:</p>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-4 text-sky-700">
                        <li className="flex items-center gap-2"><span className="text-orange-400">✔️</span> Admission processing</li>
                        <li className="flex items-center gap-2"><span className="text-orange-400">✔️</span> Managing student records</li>
                        <li className="flex items-center gap-2"><span className="text-orange-400">✔️</span> Attendance tracking</li>
                        <li className="flex items-center gap-2"><span className="text-orange-400">✔️</span> Fee management</li>
                        <li className="flex items-center gap-2"><span className="text-orange-400">✔️</span> Communication with parents</li>
                        <li className="flex items-center gap-2"><span className="text-orange-400">✔️</span> Sending announcements</li>
                        <li className="flex items-center gap-2"><span className="text-orange-400">✔️</span> Improving our services</li>
                        <li className="flex items-center gap-2"><span className="text-orange-400">✔️</span> Website functionality</li>
                    </ul>
                    <p className="font-bold text-pink-600 bg-pink-50 inline-block px-4 py-2 rounded-lg border border-pink-100 mt-2">
                        🚨 We do NOT sell or rent your personal data.
                    </p>
                </>
            )
        },
        {
            title: "4. Data Protection & Security",
            icon: <Lock className="text-green-500" size={28} />,
            content: (
                <>
                    <p className="mb-4">We take appropriate security measures:</p>
                    <ul className="space-y-2 text-sky-700 bg-green-50/50 p-4 rounded-xl border border-green-100 mb-4">
                        <li className="flex items-center gap-2">🛡️ Password-protected accounts</li>
                        <li className="flex items-center gap-2">🛡️ Role-based access (Admin, Teacher, Parent)</li>
                        <li className="flex items-center gap-2">🛡️ Encrypted authentication (JWT)</li>
                        <li className="flex items-center gap-2">🛡️ Secure database storage</li>
                        <li className="flex items-center gap-2">🛡️ Limited access to authorized staff only</li>
                    </ul>
                    <p className="font-bold text-sky-900">We ensure that children’s data is handled with extra care.</p>
                </>
            )
        },
        {
            title: "5. Sharing of Information",
            icon: <Share2 className="text-purple-500" size={28} />,
            content: (
                <>
                    <p className="mb-3">We do not share personal data with third parties except:</p>
                    <ul className="list-disc list-inside text-sky-700 space-y-1">
                        <li>When required by law</li>
                        <li>For emergency situations</li>
                        <li>With parent consent (for events or media)</li>
                    </ul>
                </>
            )
        },
        {
            title: "6. Use of Photos & Media",
            icon: <ImageIcon className="text-pink-500" size={28} />,
            content: (
                <>
                    <p className="mb-3">Photos taken during school activities may be:</p>
                    <ul className="list-disc list-inside text-sky-700 space-y-1 mb-4">
                        <li>Displayed on the website gallery</li>
                        <li>Shared with parents</li>
                        <li>Used for promotional purposes (with consent)</li>
                    </ul>
                    <p className="text-sm text-sky-600 italic">* Parents can request removal of their child’s photo at any time.</p>
                </>
            )
        },
        {
            title: "7. Cookies Policy",
            icon: <Cookie className="text-amber-500" size={28} />,
            content: (
                <>
                    <p className="mb-3">Our website may use cookies to:</p>
                    <ul className="list-disc list-inside text-sky-700 space-y-1 mb-4">
                        <li>Improve user experience</li>
                        <li>Analyze website traffic</li>
                        <li>Remember login sessions</li>
                    </ul>
                    <p className="text-sm text-sky-600">Users can disable cookies in their browser settings at any time.</p>
                </>
            )
        },
        {
            title: "8. Data Retention",
            icon: <Database className="text-indigo-500" size={28} />,
            content: (
                <>
                    <p className="mb-3">We retain student and parent information:</p>
                    <ul className="list-disc list-inside text-sky-700 space-y-1">
                        <li>During the child's enrollment period</li>
                        <li>As required by educational regulations</li>
                        <li>Until a deletion request is made (where legally applicable)</li>
                    </ul>
                </>
            )
        },
        {
            title: "9. Parents’ Rights",
            icon: <Scale className="text-sky-500" size={28} />,
            content: (
                <>
                    <p className="mb-4">Parents have the primary right to protect their child's data. You have the right to:</p>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div className="bg-white p-3 rounded-lg border border-sky-100 shadow-sm flex items-center gap-2 text-sky-800 font-medium">
                            <span className="text-xl">🔍</span> Access your child’s data
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-sky-100 shadow-sm flex items-center gap-2 text-sky-800 font-medium">
                            <span className="text-xl">✏️</span> Request correction of incorrect data
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-sky-100 shadow-sm flex items-center gap-2 text-sky-800 font-medium">
                            <span className="text-xl">🗑️</span> Request deletion (subject to policy)
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-sky-100 shadow-sm flex items-center gap-2 text-sky-800 font-medium">
                            <span className="text-xl">🛑</span> Withdraw consent for photo usage
                        </div>
                    </div>
                </>
            )
        }
    ];

    return (
        <>
            <PublicNavbar />

            <main className="pt-24 pb-20 bg-sky-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-6">

                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-6 border-2 border-pink-100">
                            <Shield size={48} className="text-pink-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 mb-4">Privacy Policy</h1>
                        <p className="text-lg text-sky-700 font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                    </motion.div>

                    {/* Policy Sections */}
                    <div className="space-y-6">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-sky-100 hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-sky-50">
                                    <div className="bg-sky-50 p-2 rounded-xl shrink-0">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-sky-900">{section.title}</h2>
                                </div>
                                <div className="text-sky-800 text-base md:text-lg leading-relaxed">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}

                        {/* 10. Contact Us */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl shadow-lg border-none text-white mt-12"
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <span>🔟</span> Contact Us
                            </h2>
                            <p className="text-blue-100 font-medium mb-6 text-lg">
                                If you have questions about this Privacy Policy, please safely contact us:
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                    <div className="bg-white text-indigo-500 p-2 rounded-full shrink-0"><MapPin size={24} /></div>
                                    <div>
                                        <p className="text-sm text-blue-200">Address</p>
                                        <p className="font-bold text-lg">Adhyayan Kids School, Pune (xxxxxx)</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                    <div className="bg-white text-indigo-500 p-2 rounded-full shrink-0"><Phone size={24} /></div>
                                    <div>
                                        <p className="text-sm text-blue-200">Phone</p>
                                        <p className="font-bold text-lg">+91 xxxxxxxxxx</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                    <div className="bg-white text-indigo-500 p-2 rounded-full shrink-0"><Mail size={24} /></div>
                                    <div>
                                        <p className="text-sm text-blue-200">Email</p>
                                        <p className="font-bold text-lg">adhyayan26@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default PrivacyPolicy;
