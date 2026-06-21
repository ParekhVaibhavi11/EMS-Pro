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

import ProtectedRoute
from "./routes/ProtectedRoute";

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
          element={
            <ProtectedRoute
              allowedRoles={["EMPLOYEE"]}
            >
            <EmployeeDashboard />
          </ProtectedRoute>
        }
        />

        <Route
          path="/employee/profile"
          element={
            <ProtectedRoute
              allowedRoles={["EMPLOYEE"]}
            >
          <MyProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/attendance"
          element={
            <ProtectedRoute
              allowedRoles={["EMPLOYEE"]}
            >
          <MyAttendance />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/leaves"
          element={
          <ProtectedRoute
              allowedRoles={["EMPLOYEE"]}
            >
          <MyLeaves />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/payroll"
          element={
          <ProtectedRoute
              allowedRoles={["EMPLOYEE"]}
            >
          <MyPayroll />
            </ProtectedRoute>
          }
        />


        <Route
          path="/manager/dashboard"
          element={
          <ProtectedRoute
              allowedRoles={["MANAGER"]}
            >
          <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager/profile"
          element={
          <ProtectedRoute
              allowedRoles={["MANAGER"]}
            >
          <ManagerProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager/team"
          element={
          <ProtectedRoute
              allowedRoles={["MANAGER"]}
            >
          <TeamPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager/attendance"
          element={
          <ProtectedRoute
              allowedRoles={["MANAGER"]}
            >
          <ManagerAttendance />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager/leaves"
          element={
          <ProtectedRoute
              allowedRoles={["MANAGER"]}
            >
          <ManagerLeaves />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager/reports"
          element={
            <ProtectedRoute
              allowedRoles={["MANAGER"]}
            >
          <ManagerReports />
            </ProtectedRoute>
          }
        />

      </Routes>

    </>
  );
}

export default App;