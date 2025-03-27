import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Style from "./style.module.css";

const DashboardLayout = () => {
  return (
    <div className={Style.dashboardWrapper}>
      <Sidebar />
      <div className={Style.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
