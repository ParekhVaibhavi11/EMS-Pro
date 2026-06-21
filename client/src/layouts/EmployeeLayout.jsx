import EmployeeSidebar
from "../components/employee/EmployeeSidebar";

import EmployeeNavbar
from "../components/employee/EmployeeNavbar";

function EmployeeLayout({
  children,
}) {

  return (

    <div className="flex min-h-screen">

      <EmployeeSidebar />

      <div className="flex-1">

        <EmployeeNavbar />

        <main
          className="
            p-6
            max-w-7xl
          "
        >

          {children}

        </main>

      </div>

    </div>

  );

}

export default EmployeeLayout;