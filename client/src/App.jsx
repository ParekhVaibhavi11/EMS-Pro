import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/auth/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import EmployeesPage
from "./pages/admin/EmployeesPage";
import ManagersPage
from "./pages/admin/ManagersPage";


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

      </Routes>

    </>
  );
}

export default App;