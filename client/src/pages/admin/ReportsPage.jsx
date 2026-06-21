import { useEffect, useState }
from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
  getReportsSummary
}
from "../../api/reportApi";

function ReportsPage() {

  const [report,
  setReport] =
    useState(null);

  useEffect(() => {

    fetchReport();

  }, []);

  const fetchReport =
    async () => {

      try {

        const response =
          await getReportsSummary();

        setReport(
          response.data
        );

      } catch (error) {

        console.error(error);

      }

    };

  return (

    <DashboardLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Reports & Analytics
        </h1>

        {/* Employee Report */}

        <div className="bg-white rounded-xl border p-6">

          <h2 className="text-xl font-semibold mb-4">
            Employee Report
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div>
              Total Employees:
              {" "}
              {report?.employeeReport
                ?.totalEmployees}
            </div>

            <div>
              Active:
              {" "}
              {report?.employeeReport
                ?.activeEmployees}
            </div>

            <div>
              Inactive:
              {" "}
              {report?.employeeReport
                ?.inactiveEmployees}
            </div>

          </div>

        </div>

        {/* Attendance */}

        <div className="bg-white rounded-xl border p-6">

          <h2 className="text-xl font-semibold mb-4">
            Attendance Report
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              Present:
              {" "}
              {report?.attendanceReport
                ?.presentEmployees}
            </div>

            <div>
              Absent:
              {" "}
              {report?.attendanceReport
                ?.absentEmployees}
            </div>

          </div>

        </div>

        {/* Leave */}

        <div className="bg-white rounded-xl border p-6">

          <h2 className="text-xl font-semibold mb-4">
            Leave Report
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              Approved:
              {" "}
              {report?.leaveReport
                ?.approvedLeaves}
            </div>

            <div>
              Rejected:
              {" "}
              {report?.leaveReport
                ?.rejectedLeaves}
            </div>

          </div>

        </div>

        {/* Payroll */}

        <div className="bg-white rounded-xl border p-6">

          <h2 className="text-xl font-semibold mb-4">
            Payroll Report
          </h2>

          <div>

            Total Salary Paid:

            <span className="font-bold text-green-600 ml-2">

              ₹
              {
                Number(
                  report?.payrollReport
                  ?.totalPayrollAmount || 0
                ).toLocaleString()
              }

            </span>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default ReportsPage;