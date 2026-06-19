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

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Employees",
    icon: Users,
  },
  {
    name: "Managers",
    icon: UserCog,
  },
  {
    name: "Departments",
    icon: Building2,
  },
  {
    name: "Attendance",
    icon: Calendar,
  },
  {
    name: "Leaves",
    icon: FileText,
  },
  {
    name: "Payroll",
    icon: Wallet,
  },
  {
    name: "Reports",
    icon: BarChart3,
  },
  {
    name: "Settings",
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
            <button
              key={item.name}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              <item.icon size={18} />

              <span>
                {item.name}
              </span>
            </button>
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