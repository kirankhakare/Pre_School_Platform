import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../common/pages/Home";
import About from "../common/pages/About";
import Classes from "../common/pages/Classes";
import Admission from "../common/pages/Admission";
import Contact from "../common/pages/Contact";
import PrivacyPolicy from "../common/pages/PrivacyPolicy";
// import Terms from "../common/pages/Terms";
import Register from "../common/pages/Register";

import AdminLogin from "../admin/pages/AdminLogin";
import AdminDashboard from "../admin/pages/AdminDashboard";

import TeacherLogin from "../teacher/pages/TeacherLogin";
import TeacherDashboard from "../teacher/pages/TeacherDashboard";

import ParentLogin from "../parent/pages/ParentLogin";
import ParentDashboard from "../parent/pages/ParentDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="/terms" element={<Terms />} /> */}

        {/* 🔐 Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* 🔐 Teacher */}
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

        {/* 🔐 Parent */}
        <Route path="/parent/login" element={<ParentLogin />} />
        <Route path="/parent/dashboard" element={<ParentDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;