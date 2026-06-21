import { useLocation }
from "react-router-dom";

import useAuthStore
from "../../store/authStore";

function ManagerNavbar() {

  const user =
    useAuthStore(
      (state) => state.user
    );

  const location =
    useLocation();

  const pageTitles = {

    "/manager/dashboard":
      "Dashboard",

    "/manager/profile":
      "My Profile",

    "/manager/team":
      "My Team",

    "/manager/attendance":
      "Attendance",

    "/manager/leaves":
      "Leave Requests",

    "/manager/reports":
      "Reports",

  };

  return (

    <div className="bg-white border-b h-16 flex items-center justify-between px-6">

      <h2 className="font-semibold text-lg">

        {
          pageTitles[
            location.pathname
          ]
        }

      </h2>

      <div className="flex items-center gap-3">

        <div className="text-right">

          <p className="font-medium">

            {user?.firstName}
            {" "}
            {user?.lastName}

          </p>

          <p className="text-xs text-gray-500">

            Manager

          </p>

        </div>

        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">

          
            {
              user?.firstName?.charAt(0)
              ?.toUpperCase()
            }
            {
              user?.lastName?.charAt(0)
              ?.toUpperCase()
            }
              

        </div>

      </div>

    </div>

  );

}

export default ManagerNavbar;