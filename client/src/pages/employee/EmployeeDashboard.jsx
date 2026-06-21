import { useEffect, useState } from "react";

import EmployeeLayout
from "../../layouts/EmployeeLayout";

import {
  getEmployeeDashboard
}
from "../../api/employeePortalApi";

function EmployeeDashboard() {

  const [data,
  setData] =
    useState(null);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard =
    async () => {

      const response =
        await getEmployeeDashboard();

      setData(
        response.data
      );

    };

  return (

    <EmployeeLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-white border rounded-xl p-5">
          <p className="text-gray-500">
            Present Days
          </p>

          <p className="text-3xl font-bold">
            {
              data?.attendanceCount || 0
            }
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-gray-500">
            Approved Leaves
          </p>

          <p className="text-3xl font-bold text-green-600">
            {
              data?.approvedLeaves || 0
            }
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-gray-500">
            Pending Leaves
          </p>

          <p className="text-3xl font-bold text-yellow-600">
            {
              data?.pendingLeaves || 0
            }
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-gray-500">
            Latest Salary
          </p>

          <p className="text-3xl font-bold text-blue-900">
            ₹{
              data?.latestPayroll
                ?.netSalary || 0
            }
          </p>
        </div>

      </div>

    </EmployeeLayout>

  );

}

export default EmployeeDashboard;