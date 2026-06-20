import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({
  children,
}) {

  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <div className="flex min-h-screen">

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex-1">

        <Navbar
          setIsOpen={setIsOpen}
        />

        <main className="p-6 max-w-7xl">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;