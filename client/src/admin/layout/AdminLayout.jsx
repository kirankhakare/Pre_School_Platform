import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

function AdminLayout() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-sky-50">

      {/* Sidebar (CONSTANT) */}
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-200
        ${collapsed ? "lg:ml-20" : "lg:ml-72"} p-6`}
      >
        <Outlet />
      </div>

    </div>
  );
}

export default AdminLayout;