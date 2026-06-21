import { useEffect, useState }
from "react";

import ManagerLayout
from "../../layouts/ManagerLayout";

import {
  getManagerTeam
}
from "../../api/managerPortalApi";

function TeamPage() {

  const [employees,
  setEmployees] =
    useState([]);

  useEffect(() => {

    fetchTeam();

  }, []);

  const fetchTeam =
    async () => {

      const response =
        await getManagerTeam();

      setEmployees(
        response.data.data
      );

    };

  return (

    <ManagerLayout>

      <div className="bg-white border rounded-xl p-6">

        <h1 className="text-2xl font-bold mb-5">
          Team Members
        </h1>

        <table className="w-full">

          <thead>

            <tr>

              <th>Code</th>

              <th>Name</th>

              <th>Designation</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {employees.map(
              (employee) => (

                <tr
                  key={employee.id}
                >

                  <td>
                    {
                      employee.employeeCode
                    }
                  </td>

                  <td>
                    {
                      employee.firstName
                    }
                    {" "}
                    {
                      employee.lastName
                    }
                  </td>

                  <td>
                    {
                      employee.designation
                    }
                  </td>

                  <td>
                    {
                      employee.isActive
                      ? "Active"
                      : "Inactive"
                    }
                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </ManagerLayout>

  );

}

export default TeamPage;