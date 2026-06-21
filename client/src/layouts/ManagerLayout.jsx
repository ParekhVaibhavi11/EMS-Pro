import ManagerSidebar
from "../components/manager/ManagerSidebar";

import ManagerNavbar
from "../components/manager/ManagerNavbar";

function ManagerLayout({
  children
}) {

  return (

    <div className="flex min-h-screen">

      <ManagerSidebar />

      <div className="flex-1">

        <ManagerNavbar />

        <main className="p-6">

          {children}

        </main>

      </div>

    </div>

  );

}

export default ManagerLayout;