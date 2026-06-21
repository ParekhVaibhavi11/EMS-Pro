import { useEffect, useState } from "react";

import ManagerLayout
from "../../layouts/ManagerLayout";

import {
  getManagerDashboard
}
from "../../api/managerPortalApi";

function ManagerDashboard() {

  const [stats,
  setStats] =
    useState(null);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard =
    async () => {

      const response =
        await getManagerDashboard();

      setStats(
        response.data.data
      );

    };

  return (

    <ManagerLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Manager Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white border rounded-xl p-5">
            <p>Department</p>

            <h2 className="text-2xl font-bold">
              {stats?.department}
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p>Team Size</p>

            <h2 className="text-2xl font-bold">
              {stats?.teamSize}
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p>Pending Leaves</p>

            <h2 className="text-2xl font-bold">
              {stats?.pendingLeaves}
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p>Present Today</p>

            <h2 className="text-2xl font-bold">
              {stats?.attendanceToday}
            </h2>
          </div>

        </div>

      </div>

    </ManagerLayout>

  );

}

export default ManagerDashboard;