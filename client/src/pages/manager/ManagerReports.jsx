import { useEffect, useState }
from "react";

import ManagerLayout
from "../../layouts/ManagerLayout";

import {
  getManagerReports
}
from "../../api/managerPortalApi";

function ManagerReports() {

  const [report,
  setReport] =
    useState(null);

  useEffect(() => {

    fetchReport();

  }, []);

  const fetchReport =
    async () => {

      const response =
        await getManagerReports();

      setReport(
        response.data.data
      );

    };

  return (

    <ManagerLayout>

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-white border rounded-xl p-5">
          <p>Total Employees</p>

          <h2 className="text-2xl font-bold">
            {
              report?.totalEmployees
            }
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p>Active Employees</p>

          <h2 className="text-2xl font-bold">
            {
              report?.activeEmployees
            }
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p>Total Leaves</p>

          <h2 className="text-2xl font-bold">
            {
              report?.totalLeaves
            }
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p>Attendance Records</p>

          <h2 className="text-2xl font-bold">
            {
              report?.totalAttendance
            }
          </h2>
        </div>

      </div>

    </ManagerLayout>

  );

}

export default ManagerReports;