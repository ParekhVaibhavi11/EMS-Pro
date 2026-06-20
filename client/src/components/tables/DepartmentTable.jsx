function DepartmentTable({
  departments,
  onSelectDepartment,
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
              Description
            </th>

            <th className="p-3 text-left">
              Manager
            </th>

          </tr>

        </thead>

        <tbody>

          {departments.map(
            (department) => (

              <tr
                key={department.id}
                onClick={() =>
                  onSelectDepartment(
                    department.id
                  )
                }
                className="
                  border-b
                  hover:bg-gray-50
                  cursor-pointer
                "
              >

                <td className="p-3">
                  {department.name}
                </td>

                <td className="p-3">
                  {
                    department.description ||
                    "-"
                  }
                </td>

                <td className="p-3">

                  {
                    department.manager
                      ?.firstName
                  }
                  {" "}
                  {
                    department.manager
                      ?.lastName
                  }

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );
}

export default DepartmentTable;