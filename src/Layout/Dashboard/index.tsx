import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Style from "./style.module.css";
import ProtectedRoute from "../../components/ProtectedRoute";

const DashboardLayout = () => {
  return (
    <ProtectedRoute>
      <div className={Style.dashboardWrapper}>
        <Sidebar />
        <div className={Style.content}>
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
