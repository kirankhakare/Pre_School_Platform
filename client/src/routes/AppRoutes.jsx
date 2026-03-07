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

import TeacherLogin from "../teacher/pages/TeacherLogin";
import TeacherDashboard from "../teacher/pages/TeacherDashboard";

import ParentLogin from "../parent/pages/ParentLogin";
import ParentDashboard from "../parent/pages/ParentDashboard";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (

    <BrowserRouter>

      <Routes>

        {/* 🌍 PUBLIC LAYOUT */}
        <Route element={<PublicLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Route>


        {/* 🔐 ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/admin/students/all" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <ManageUsers />
          </ProtectedRoute>
        } />


        {/* 🔐 TEACHER */}
        <Route path="/teacher/login" element={<TeacherLogin />} />

        <Route path="/teacher/dashboard" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherDashboard />
          </ProtectedRoute>
        } />


        {/* 🔐 PARENT */}
        <Route path="/parent/login" element={<ParentLogin />} />

        <Route path="/parent/dashboard" element={
          <ProtectedRoute allowedRoles={['parent']}>
            <ParentDashboard />
          </ProtectedRoute>
        } />

      </Routes>

    </BrowserRouter>

  );
}

export default AppRoutes;