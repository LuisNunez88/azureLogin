import Login from "@/pages/login/Login";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import { PrivateRoutes } from "./routes/PrivateRoutes";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <AppRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};
