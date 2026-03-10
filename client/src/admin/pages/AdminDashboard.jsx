import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

import DashboardHeader from "../components/AdminDashboard/DashboardHeader";
import StatsCards from "../components/AdminDashboard/StatsCards";
import ClassDistribution from "../components/AdminDashboard/ClassDistribution";
import RecentActivities from "../components/AdminDashboard/RecentActivities";
import UpcomingEvents from "../components/AdminDashboard/UpcomingEvents";
import FeeSummary from "../components/AdminDashboard/FeeSummary";
import QuickActions from "../components/AdminDashboard/QuickAction";

function AdminDashboard() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="bg-sky-50 min-h-screen">

      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main
        className={`
  min-h-screen overflow-y-auto
  pt-6 px-4 lg:px-8
  transition-all duration-200
  ${collapsed ? "lg:ml-20" : "lg:ml-72"}
  `}
      >

        <DashboardHeader />
        <StatsCards />

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <ClassDistribution />
          <RecentActivities />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <UpcomingEvents />
          <FeeSummary />
        </div>

        <QuickActions />

      </main>

    </div>
  );
}

export default AdminDashboard;