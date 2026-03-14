import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../common/components/layout/PublicLayout";

import Home from "../common/pages/Home";
import About from "../common/pages/About";
import Classes from "../common/pages/Classes";
import Admission from "../common/pages/Admission";
import Contact from "../common/pages/Contact";
import PrivacyPolicy from "../common/pages/PrivacyPolicy";
import Register from "../common/pages/Register";

import AdminLogin from "../admin/pages/AdminLogin";
import AdminDashboard from "../admin/pages/AdminDashboard";
import ManageUsers from "../admin/pages/ManageUsers";
import AdminLayout from "../admin/layout/AdminLayout";

import ProtectedRoute from "../components/ProtectedRoute";

import FeeMangement from "../admin/pages/FeeMangement";
import Announcement from "../admin/pages/Announcement";
import GalleryAdmin from "../admin/pages/GalleryAdmin";
import { Settings } from "lucide-react";

import StudentManagement from "../admin/pages/StudentManagement";
import TeacherManagement from "../admin/pages/TeacherManagement";
import ClassManagement from "../admin/pages/ClassManagement";


function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN PANEL */}
        <Route path="/admin" element={<AdminLayout />}>

          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="student" element={<StudentManagement />} />

          <Route path="teacher" element={<TeacherManagement />} />

          <Route path="class" element={<ClassManagement />} />

          <Route path="fees" element={<FeeMangement />} />

          <Route path="announcements" element={<Announcement />} />

          <Route path="gallery" element={<GalleryAdmin />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default AppRoutes;