import { useEffect, useState }
from "react";

import EmployeeLayout
from "../../layouts/EmployeeLayout";

import {
  getEmployeeLeaves
}
from "../../api/employeePortalApi";

function MyLeaves() {

  const [leaves,
  setLeaves] =
    useState([]);

  useEffect(() => {

    fetchLeaves();

  }, []);

  const fetchLeaves =
    async () => {

      const response =
        await getEmployeeLeaves();

      setLeaves(
        response.data
      );

    };

  return (

    <EmployeeLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Leaves
      </h1>

      <div className="bg-white border rounded-xl p-4">

        <table className="w-full">

          <thead>

            <tr>

              <th>Type</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {leaves.map(
              (leave) => (

                <tr key={leave.id}>

                  <td>
                    {leave.leaveType}
                  </td>

                  <td>
                    {leave.status}
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

export default MyLeaves;