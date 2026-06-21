import { useLocation } from "react-router-dom";
import useAuthStore from "../../store/authStore";

function EmployeeNavbar() {

  const user =
    useAuthStore(
      (state) => state.user
    );

  const location =
    useLocation();

  const pageTitles = {

    "/employee/dashboard":
      "Dashboard",

    "/employee/profile":
      "My Profile",

    "/employee/attendance":
      "My Attendance",

    "/employee/leaves":
      "My Leaves",

    "/employee/payroll":
      "My Payroll",

  };

  const pageTitle =
    pageTitles[
      location.pathname
    ] || "Employee Portal";

  return (

    <div className="bg-white border-b h-16 flex items-center justify-between px-6">

      <h2 className="text-xl font-semibold">

        {pageTitle}

      </h2>

      <div className="flex items-center gap-3">

        <div className="text-right">

          <p className="font-medium">

            {user?.firstName}
            {" "}
            {user?.lastName}

          </p>

          <p className="text-xs text-gray-500">

            Employee

          </p>

        </div>

        {
        user?.profileImage ? (

          <img
            src={user.profileImage}
            alt="profile"
            className="
              w-10
              h-10
              rounded-full
              object-cover
            "
          />

        ) : (

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-blue-100
              flex
              items-center
              justify-center
              text-blue-900
              font-semibold
            "
          >

              {
                user?.firstName
                  ?.charAt(0)
                  ?.toUpperCase()
              }

              {
                user?.lastName
                  ?.charAt(0)
                  ?.toUpperCase()
              }
                
            

          </div>

        )
      }
        

      </div>

    </div>

  );

}

export default EmployeeNavbar;