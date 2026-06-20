

import {
  Pencil,
  Trash2,
  X
} from "lucide-react";

function EmployeeDetailsDrawer({
  employee,
  isOpen,
  onClose,
  onEdit,
  onDeactivate,
  onActivate,
}) {

  if (!isOpen || !employee)
    return null;

  return (
    <>

      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      <div
        className="
          fixed
          top-0
          right-0
          h-screen
          w-full
          md:w-[450px]
          bg-white
          z-50
          shadow-xl
          overflow-y-auto
        "
      >

        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-xl font-semibold">
            Employee Details
          </h2>

          <button onClick={onClose}>
            <X size={22} />
          </button>

        </div>

        <div className="p-5 space-y-4">

          <div>
            <p className="text-gray-500">
              Employee Code
            </p>

            <h3 className="font-semibold">
              {employee.employeeCode}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Name
            </p>

            <h3 className="font-semibold">
              {employee.firstName}
              {" "}
              {employee.lastName}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Email
            </p>

            <h3 className="font-semibold">
              {employee.user?.email}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Status
            </p>

            <span
              className={`
                inline-block
                px-3 py-1 rounded-full text-sm font-medium
                ${
                  employee.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
              `}
            >
              {employee.isActive
                ? "Active"
                : "Inactive"}
            </span>
          </div>

          <div>
            <p className="text-gray-500">
              Designation
            </p>

            <h3 className="font-semibold">
              {employee.designation}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Salary
            </p>

            <h3 className="font-semibold">
              ₹{employee.salary}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Phone
            </p>

            <h3 className="font-semibold">
              {employee.phone}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Gender
            </p>

            <h3 className="font-semibold">
              {employee.gender}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Address
            </p>

            <h3 className="font-semibold">
              {employee.address}
            </h3>
          </div>

        </div>
        <div className="flex justify-between items-center mt-10 pt-6 border-t">

          <button
            onClick={() => onEdit(employee)}
            className="
              flex items-center gap-2
              bg-blue-900
              text-white
              px-5 py-3
              rounded-lg
              hover:bg-blue-600
              transition
            "
          >
            <Pencil size={18} />
            Edit Employee
          </button>

         <button
            onClick={() => {

              if (employee.isActive) {
                onDeactivate(employee.id);
              } else {
                onActivate(employee.id);
              }

            }}
            className={`
              flex items-center gap-2
              px-5 py-3 rounded-lg text-white
              transition

              ${
                employee.isActive
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }
            `}
          >
            <Trash2 size={18} />

            {
              employee.isActive
                ? "Deactivate"
                : "Activate"
            }
          </button>

        </div>
      </div>

    </>
  );
}

export default EmployeeDetailsDrawer;