import { useEffect, useState }
from "react";

import EmployeeLayout
from "../../layouts/EmployeeLayout";

import {
  getEmployeePayroll
}
from "../../api/employeePortalApi";

function MyPayroll() {

  const [payrolls,
  setPayrolls] =
    useState([]);

  useEffect(() => {

    fetchPayrolls();

  }, []);

  const fetchPayrolls =
    async () => {

      const response =
        await getEmployeePayroll();

      setPayrolls(
        response.data
      );

    };

  return (

    <EmployeeLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Payroll
      </h1>

      <div className="bg-white border rounded-xl p-4">

        <table className="w-full">

          <thead>

            <tr>

              <th>Month</th>

              <th>Year</th>

              <th>Net Salary</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {payrolls.map(
              (payroll) => (

                <tr key={payroll.id}>

                  <td>
                    {payroll.month}
                  </td>

                  <td>
                    {payroll.year}
                  </td>

                  <td>
                    ₹{payroll.netSalary}
                  </td>

                  <td>
                    {
                      payroll.paymentStatus
                    }
                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </EmployeeLayout>

  );

}

export default MyPayroll;