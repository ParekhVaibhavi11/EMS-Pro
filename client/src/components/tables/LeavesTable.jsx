function LeavesTable({
  leaves,
  onApprove,
  onReject,
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
              Type
            </th>

            <th className="p-3 text-left">
              From
            </th>

            <th className="p-3 text-left">
              To
            </th>

            <th className="p-3 text-left">
              Status
            </th>

            <th className="p-3 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {leaves.map(
            (leave) => (

              <tr
                key={leave.id}
                className="border-b"
              >

                <td className="p-3">

                  {
                    leave.employee
                      ?.firstName
                  }
                  {" "}
                  {
                    leave.employee
                      ?.lastName
                  }

                </td>

                <td className="p-3">
                  {leave.leaveType}
                </td>

                <td className="p-3">
                  {
                    new Date(
                      leave.startDate
                    ).toLocaleDateString()
                  }
                </td>

                <td className="p-3">
                  {
                    new Date(
                      leave.endDate
                    ).toLocaleDateString()
                  }
                </td>

                <td className="p-3">

                  <span
                    className={`
                      px-3 py-1
                      rounded-full
                      text-xs font-medium

                      ${
                        leave.status ===
                        "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : leave.status ===
                            "REJECTED"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {leave.status}
                  </span>

                </td>

               <td className="p-3">

  {leave.status === "PENDING" ? (

    <div className="flex gap-2">

      <button
        onClick={() =>
          onApprove(
            leave.id
          )
        }
        className="
          bg-green-600
          hover:bg-green-700
          text-white
          px-3 py-1
          rounded-lg
          text-sm
        "
      >
        Approve
      </button>

      <button
        onClick={() =>
          onReject(
            leave.id
          )
        }
        className="
          bg-red-600
          hover:bg-red-700
          text-white
          px-3 py-1
          rounded-lg
          text-sm
        "
      >
        Reject
      </button>

    </div>

  ) : (

    <span className="text-gray-400 text-sm">
      Completed
    </span>

  )}

</td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );
}

export default LeavesTable;