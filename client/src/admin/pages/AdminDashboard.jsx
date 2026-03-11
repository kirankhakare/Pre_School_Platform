import DashboardHeader from "../components/AdminDashboard/DashboardHeader";
import StatsCards from "../components/AdminDashboard/StatsCards";
import ClassDistribution from "../components/AdminDashboard/ClassDistribution";
import RecentActivities from "../components/AdminDashboard/RecentActivities";
import UpcomingEvents from "../components/AdminDashboard/UpcomingEvents";
import FeeSummary from "../components/AdminDashboard/FeeSummary";
import QuickActions from "../components/AdminDashboard/QuickAction";

function AdminDashboard() {

  return (
    <div>

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

    </div>
  );
}

export default AdminDashboard;