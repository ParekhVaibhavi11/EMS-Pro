import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/auth/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import EmployeesPage
from "./pages/admin/EmployeesPage";
import ManagersPage
from "./pages/admin/ManagersPage";
import DepartmentsPage
from "./pages/admin/DepartmentsPage";
import AttendancePage
from "./pages/admin/AttendancePage";
import LeavesPage
from "./pages/admin/LeavesPage";
import PayrollPage
from "./pages/admin/PayrollPage";
import ReportsPage
from "./pages/admin/ReportsPage";
import SettingsPage
from "./pages/admin/SettingsPage";


function App() {
  return (
    <>
      <Toaster />

      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/employees"
          element={<EmployeesPage />}
        />

        <Route
          path="/managers"
          element={<ManagersPage />}
        />

        <Route
          path="/departments"
          element={<DepartmentsPage />}
        />

        <Route
          path="/attendance"
          element={<AttendancePage />}
        />
        <Route
          path="/leaves"
          element={<LeavesPage />}
        />

        <Route
          path="/payroll"
          element={<PayrollPage />}
        />

        <Route
          path="/reports"
          element={<ReportsPage />}
        />

        <Route
          path="/settings"
          element={<SettingsPage />}
        />

      </Routes>

    </>
  );
}

export default App;