import { useEffect, useState }
from "react";

import EmployeeLayout
from "../../layouts/EmployeeLayout";

import {
  getEmployeeAttendance
}
from "../../api/employeePortalApi";

function MyAttendance() {

  const [attendance,
  setAttendance] =
    useState([]);

  useEffect(() => {

    fetchAttendance();

  }, []);

  const fetchAttendance =
    async () => {

      const response =
        await getEmployeeAttendance();

      setAttendance(
        response.data
      );

    };

  return (

    <EmployeeLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Attendance
      </h1>

      <div className="bg-white border rounded-xl p-4">

        <table className="w-full">

          <thead>

            <tr>

              <th>Date</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {attendance.map(
              (record) => (

                <tr key={record.id}>

                  <td>
                    {
                      new Date(
                        record.date
                      ).toLocaleDateString()
                    }
                  </td>

                  <td>
                    {record.status}
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

export default MyAttendance;