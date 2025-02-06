import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex">
      {/* Sidebar is always visible */}
      <div className="w-fit min-h-screen">
        <Sidebar />
      </div>

      {/* Main content area where the nested routes will be displayed */}
      <div className="flex-1">
        <Outlet /> 
      </div>
    </div>
  );
};

export default HomePage;
