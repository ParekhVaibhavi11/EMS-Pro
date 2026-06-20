function ManagerTable({
  managers,
  onSelectManager,
}) {

  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-3 text-left">
              Name
            </th>

            <th className="p-3 text-left">
              Department
            </th>

            <th className="p-3 text-left">
              Email
            </th>

            <th className="p-3 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {managers.map(
            (manager) => (

              <tr
                key={manager.id}
                onClick={() =>
                  onSelectManager(
                    manager.id
                  )
                }
                className="
                  border-b
                  cursor-pointer
                  hover:bg-gray-50
                "
              >

                <td className="p-3">

                  {manager.firstName}
                  {" "}
                  {manager.lastName}

                </td>

                <td className="p-3">

                  {
                    manager.department
                      ?.name ||
                    "-"
                  }

                </td>

                <td className="p-3">

                  {
                    manager.user
                      ?.email
                  }

                </td>

                <td className="p-3">

                  <span
                    className={`
                      px-3 py-1
                      rounded-full
                      text-xs

                      ${
                        manager.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {
                      manager.isActive
                        ? "Active"
                        : "Inactive"
                    }
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

export default ManagerTable;