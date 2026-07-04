import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Attendance from "../pages/Attendance/Attendance";
import Notes from "../pages/Notes/Notes";
import ProtectedRoute from "./ProtectedRoute";
import Assignments from "../pages/Assignments/Assignments";
import Analytics from "../pages/Analytics/Analytics";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/notes"element={<Notes />}/>

        <Route path="/assignments" element={<Assignments />} />

        <Route path="/analytics" element={<Analytics />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Attendance />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;