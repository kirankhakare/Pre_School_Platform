import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../common/components/layout/PublicLayout";
import ScrollToTop from "../common/ScrollToTop";
import Home from "../common/pages/Home";
import About from "../common/pages/About";
import Classes from "../common/pages/Classes";
import Admission from "../common/pages/Admission";
import Contact from "../common/pages/Contact";
import PrivacyPolicy from "../common/pages/PrivacyPolicy";
import Register from "../common/pages/Register";
import Gallery from "../common/pages/Gallery";
import Career from "../common/pages/Career";

import AdminLogin from "../admin/pages/AdminLogin";
import AdminDashboard from "../admin/pages/AdminDashboard";
import AdminLayout from "../admin/layout/AdminLayout";

import FeeMangement from "../admin/pages/FeeMangement";
import Announcement from "../admin/pages/Announcement";
import GalleryAdmin from "../admin/pages/GalleryAdmin";
import { Settings } from "lucide-react";

import StudentManagement from "../admin/pages/StudentManagement";
import TeacherManagement from "../admin/pages/TeacherManagement";
import ClassManagement from "../admin/pages/ClassManagement";

// ✅ TEACHER IMPORTS
import TeacherLayout from "../teacher/layout/TeacherLayout";
import TeacherDashboard from "../teacher/pages/TeacherDashboard";
import MarkAttendance from "../teacher/pages/MarkAttendance";
import MonthlyAttendance from "../teacher/pages/MonthlyAttendance";
import AddHomework from "../teacher/pages/AddHomework";
import StudentProgress from "../teacher/pages/StudentProgress";
import Terms from "../common/pages/Terms";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        {/* PUBLIC..*/}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/common-gallery" element={<Gallery />} />
          <Route path="/career" element={<Career/>} />
        </Route>

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN PANEL */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="student" element={<StudentManagement />} />
          <Route path="teacher" element={<TeacherManagement />} />
          <Route path="classes" element={<ClassManagement />} />
          <Route path="fees" element={<FeeMangement />} />
          <Route path="announcements" element={<Announcement />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* ✅ TEACHER PANEL (SEPARATE) */}
        <Route path="/teacher" element={<TeacherLayout />}>

          <Route index element={<TeacherDashboard />} />
          <Route path="dashboard" element={<TeacherDashboard />} />

          {/* Attendance */}
          <Route path="attendance/mark" element={<MarkAttendance />} />
          <Route path="attendance/monthly" element={<MonthlyAttendance />} />

          {/* Homework */}
          <Route path="homework" element={<AddHomework />} />

          {/* Student Progress */}
          <Route path="students" element={<StudentProgress />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;