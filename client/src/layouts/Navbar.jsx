import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar({ setIsOpen }) {

  const location = useLocation();

  const pageTitles = {
    "/admin": "Dashboard",
    "/employees": "Employees",
    "/departments": "Departments",
    "/managers": "Managers",
    "/attendance": "Attendance",
    "/leaves": "Leave Management",
    "/payroll": "Payroll",
    "/reports": "Reports",
    "/settings": "Settings",
  };

  const pageTitle =
    pageTitles[location.pathname] ||
    "EMS Pro";

  return (
    <div className="bg-white border-b h-16 flex items-center justify-between px-5">

      <button
        className="lg:hidden"
        onClick={() =>
          setIsOpen(true)
        }
      >
        <Menu size={24} />
      </button>

      <h2 className="font-semibold text-lg text-gray-900">
        {pageTitle}
      </h2>

      <div className="flex items-center gap-3">

        <div className="text-right hidden sm:block">

          <p className="text-sm font-medium">
            Administrator
          </p>

          <p className="text-xs text-gray-500">
            EMS Admin
          </p>

        </div>

        <div
          className="
            w-10 h-10
            rounded-full
            bg-blue-100
            flex items-center justify-center
            text-blue-900
            font-semibold
          "
        >
          A
        </div>

      </div>

    </div>
  );
}

export default Navbar;