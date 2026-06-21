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

import ProtectedRoute from "./components/routes/ProtectedRoute";

import EmployeeDashboard
from "./pages/employee/EmployeeDashboard";

import MyProfile
from "./pages/employee/MyProfile";

import MyAttendance
from "./pages/employee/MyAttendance";

import MyLeaves
from "./pages/employee/MyLeaves";

import MyPayroll
from "./pages/employee/MyPayroll";

import ManagerDashboard from "./pages/manager/ManagerDashboard";
import ManagerProfile from "./pages/manager/ManagerProfile";
import TeamPage from "./pages/manager/TeamPage";
import ManagerAttendance from "./pages/manager/ManagerAttendance";
import ManagerLeaves from "./pages/manager/ManagerLeaves";
import ManagerReports from "./pages/manager/ManagerReports";

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
          element={
            <ProtectedRoute
              allowedRoles={["ADMIN"]}
            >
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employees"
          element={
          <ProtectedRoute
            allowedRoles={["ADMIN"]}
          >
            <EmployeesPage />
          </ProtectedRoute>
          }
        />

        <Route
          path="/managers"
          element={
           <ProtectedRoute
            allowedRoles={["ADMIN"]}
          >
            <ManagersPage />
          </ProtectedRoute>
        }
        />

        <Route
          path="/departments"
          element={
          <ProtectedRoute
            allowedRoles={["ADMIN"]}
          >
          <DepartmentsPage />
          </ProtectedRoute>
          }
        />

        <Route

          path="/attendance"
          element={
          <ProtectedRoute
            allowedRoles={["ADMIN"]}
          >
          <AttendancePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaves"
          element={
          <ProtectedRoute
            allowedRoles={["ADMIN"]}
          >
          <LeavesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payroll"
          element={
          <ProtectedRoute
            allowedRoles={["ADMIN"]}
          >
          <PayrollPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
          <ProtectedRoute
            allowedRoles={["ADMIN"]}
          >
          <ReportsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
          <ProtectedRoute
            allowedRoles={["ADMIN"]}
          >
          <SettingsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/dashboard"
          element={<EmployeeDashboard />}
        />

        <Route
          path="/employee/profile"
          element={<MyProfile />}
        />

        <Route
          path="/employee/attendance"
          element={<MyAttendance />}
        />

        <Route
          path="/employee/leaves"
          element={<MyLeaves />}
        />

        <Route
          path="/employee/payroll"
          element={<MyPayroll />}
        />


        <Route
          path="/manager/dashboard"
          element={<ManagerDashboard />}
        />

        <Route
          path="/manager/profile"
          element={<ManagerProfile />}
        />

        <Route
          path="/manager/team"
          element={<TeamPage />}
        />

        <Route
          path="/manager/attendance"
          element={<ManagerAttendance />}
        />

        <Route
          path="/manager/leaves"
          element={<ManagerLeaves />}
        />

        <Route
          path="/manager/reports"
          element={<ManagerReports />}
        />

      </Routes>

    </>
  );
}

export default App;