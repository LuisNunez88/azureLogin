import { Navbar } from "@/components/Navbar";
import Dashboard from "@/pages/dashboard/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => (
  <div>
    <Navbar />
    <div className="">
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  </div>
);
