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
import Kg1Student from "../admin/pages/Kg1Student";
import Kg2Student from "../admin/pages/Kg2Student";
import StudentsAdd from "../admin/pages/StudentsAdd";

import AllTeacher from "../admin/pages/AllTeacher";
import AddTeacher from "../admin/pages/AddTeacher";
import AssignClass from "../admin/pages/AssignClass";

import ClassManegement from "../admin/pages/ClassManegement";
import FeeMangement from "../admin/pages/FeeMangement";
import Announcement from "../admin/pages/Announcement";
import GalleryAdmin from "../admin/pages/GalleryAdmin";
import { Settings } from "lucide-react";


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

          <Route path="students/all" element={<ManageUsers />} />

          <Route path="students/kg1" element={<Kg1Student />} />

          <Route path="students/kg2" element={<Kg2Student />} />

          <Route path="students/add" element={<StudentsAdd />} />

          <Route path="teachers/all" element={<AllTeacher />} />

          <Route path="teachers/add" element={<AddTeacher />} />

          <Route path="teachers/assign" element={<AssignClass />} />

          <Route path="classes" element={<ClassManegement />} />

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