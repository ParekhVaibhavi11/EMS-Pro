import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileText,
  BarChart3,
  UserCircle,
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

function ManagerSidebar() {

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
        "/manager/dashboard",
      icon:
        LayoutDashboard
    },

    {
      name: "Profile",
      path:
        "/manager/profile",
      icon:
        UserCircle
    },

    {
      name: "Team",
      path:
        "/manager/team",
      icon:
        Users
    },

    {
      name: "Attendance",
      path:
        "/manager/attendance",
      icon:
        CalendarDays
    },

    {
      name: "Leaves",
      path:
        "/manager/leaves",
      icon:
        FileText
    },

    {
      name: "Reports",
      path:
        "/manager/reports",
      icon:
        BarChart3
    }

  ];

  return (

    <aside className="w-64 bg-blue-950 text-white min-h-screen flex flex-col">

      <div className="p-6 text-2xl font-bold border-b border-blue-800">

        Manager Portal

      </div>

      <nav className="p-4 space-y-2 flex-1">

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

                ${
                  location.pathname === item.path
                  ? "bg-blue-800"
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
                    "
                  />

                )
              }

              <item.icon size={18} />

              {item.name}

            </Link>

          )
        )}

      </nav>

      <div className="p-4">

        <button
          onClick={logout}
          className="
            w-full
            bg-red-600
            py-3
            rounded-lg
            flex
            items-center
            justify-center
            gap-2
          "
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>

  );

}

export default ManagerSidebar;