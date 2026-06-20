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

      </Routes>

    </>
  );
}

export default App;