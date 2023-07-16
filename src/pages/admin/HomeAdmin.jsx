import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/SidebarAdmin";

function HomeAdmin() {
  return (
    <main className="flex">
      <Sidebar />
      <div>HomeAdmin</div>
      <Outlet />
    </main>
  );
}

export default HomeAdmin;
