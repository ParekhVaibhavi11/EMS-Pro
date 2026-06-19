function EmployeeTable({
  employees,
  onSelectEmployee,
}) {

  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>
          <tr className="border-b">

            <th className="text-left p-3">
              Code
            </th>

            <th className="text-left p-3">
              Name
            </th>

            <th className="text-left p-3">
              Designation
            </th>

            <th className="text-left p-3">
              Email
            </th>

          </tr>
        </thead>

        <tbody>

          {employees.map(
            (employee) => (
              <tr
                key={employee.id}
                onClick={() =>
                  onSelectEmployee(employee.id)
                }
                className="
                  border-b
                  hover:bg-gray-50
                  cursor-pointer
                "
              >

                <td className="p-3">
                  {employee.employeeCode}
                </td>

                <td className="p-3">
                  {employee.firstName}
                  {" "}
                  {employee.lastName}
                </td>

                <td className="p-3">
                  {employee.designation}
                </td>

                <td className="p-3">
                  {employee.user?.email}
                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;