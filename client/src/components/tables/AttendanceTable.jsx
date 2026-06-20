function AttendanceTable({
  attendance
}) {

  return (

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-3 text-left">
              Employee
            </th>

            <th className="p-3 text-left">
              Designation
            </th>

            <th className="p-3 text-left">
              Date
            </th>

            <th className="p-3 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {attendance.map(
            (record) => (

              <tr
                key={record.id}
                className="
                  border-b
                  hover:bg-gray-50
                "
              >

                <td className="p-3">

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

                <td className="p-3">

                  {
                    record.employee
                      ?.designation
                  }

                </td>

                <td className="p-3">

                  {
                    new Date(
                      record.date
                    )
                    .toLocaleDateString()
                  }

                </td>

                <td className="p-3">

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold

                      ${
                        record.status === "PRESENT"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    `}
                  >
                    {record.status}
                  </span>

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );
}

export default AttendanceTable;