import { useEffect, useState }
from "react";

import ManagerLayout
from "../../layouts/ManagerLayout";

import {
  getManagerAttendance
}
from "../../api/managerPortalApi";

function ManagerAttendance() {

  const [attendance,
  setAttendance] =
    useState([]);

  useEffect(() => {

    fetchAttendance();

  }, []);

  const fetchAttendance =
    async () => {

      const response =
        await getManagerAttendance();

      setAttendance(
        response.data.data
      );

    };

  return (

    <ManagerLayout>

      <div className="bg-white border rounded-xl p-6">

        <h1 className="text-2xl font-bold mb-5">
          Team Attendance
        </h1>

        <table className="w-full">

          <thead>

            <tr>

              <th>Employee</th>

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
                      record.employee
                      ?.firstName
                    }
                    {" "}
                    {
                      record.employee
                      ?.lastName
                    }

                  </td>

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

    </ManagerLayout>

  );

}

export default ManagerAttendance;