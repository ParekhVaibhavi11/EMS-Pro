import {
  LayoutDashboard,
  Users,
  UserCog,
  Building2,
  Calendar,
  FileText,
  Wallet,
  BarChart3,
  Settings,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Employees",
    path: "/employees",
    icon: Users,
  },
  {
    name: "Managers",
    path: "/managers",
    icon: UserCog,
  },
  {
    name: "Departments",
    path: "/departments",
    icon: Building2,
  },
  {
    name: "Attendance",
    path: "/attendance",
    icon: Calendar,
  },
  {
    name: "Leaves",
    path: "/leaves",
    icon: FileText,
  },
  {
    name: "Payroll",
    path: "/payroll",
    icon: Wallet,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar({
  isOpen,
  setIsOpen,
}) {
  return (
    <>
      <div
        className={`
          fixed lg:static
          top-0 left-0
          h-screen
          w-64
          bg-blue-900
          text-white
          z-50
          transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="flex items-center justify-between p-5 border-b border-blue-800">

          <h1 className="text-xl font-bold">
            EMS Pro
          </h1>

          <button
            className="lg:hidden"
            onClick={() =>
              setIsOpen(false)
            }
          >
            <X size={22} />
          </button>

        </div>

        <nav className="p-4 space-y-2">

          {menuItems.map((item) => (
            <Link
                key={item.name}
                to={item.path}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                <item.icon size={18} />

                <span>
                  {item.name}
                </span>
              </Link>
          ))}

        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={() =>
            setIsOpen(false)
          }
        />
      )}
    </>
  );
}

export default Sidebar;