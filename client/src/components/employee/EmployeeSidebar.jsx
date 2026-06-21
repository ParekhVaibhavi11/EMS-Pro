import {
  LayoutDashboard,
  User,
  CalendarDays,
  FileText,
  Wallet,
  LogOut
}
from "lucide-react";

import {
  Link,
  useLocation
}
from "react-router-dom";

import useAuthStore
from "../../store/authStore";


function EmployeeSidebar() {

  const location =
    useLocation();

    const logout =
  useAuthStore(
    (state) => state.logout
  );

  const menuItems = [

    {
      name: "Dashboard",
      path:
        "/employee/dashboard",
      icon:
        LayoutDashboard
    },

    {
      name: "My Profile",
      path:
        "/employee/profile",
      icon:
        User
    },

    {
      name: "Attendance",
      path:
        "/employee/attendance",
      icon:
        CalendarDays
    },

    {
      name: "Leaves",
      path:
        "/employee/leaves",
      icon:
        FileText
    },

    {
      name: "Payroll",
      path:
        "/employee/payroll",
      icon:
        Wallet
    }

  ];

  return (

    <aside
      className="
        w-64
        bg-blue-950
        text-white
        min-h-screen
      "
    >

      <div
        className="
          p-6
          text-2xl
          font-bold
          border-b
          border-blue-800
        "
      >
        Employee Portal
      </div>

      <nav className="p-4 space-y-2">

        {menuItems.map(
          (item) => (

          <Link
            key={item.name}
            to={item.path}
            className={`
                relative
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                transition

                ${
                location.pathname === item.path
                ? "bg-blue-800 text-white"
                : "hover:bg-blue-900"
                }
            `}
            >

            {
                location.pathname ===
                item.path && (

                <div
                    className="
                    absolute
                    left-0
                    top-2
                    bottom-2
                    w-1
                    bg-yellow-400
                    rounded-r
                    "
                />

                )
            }

            <item.icon size={18} />

            <span>
                {item.name}
            </span>

            </Link>

          )
        )}

      </nav>

      <div className="p-4 mt-auto">

        <button
            onClick={logout}
            className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            bg-red-600
            hover:bg-red-800
            "
        >

            <LogOut size={18} />

            Logout

        </button>

        </div>
      

    </aside>

    

  );

}

export default EmployeeSidebar;