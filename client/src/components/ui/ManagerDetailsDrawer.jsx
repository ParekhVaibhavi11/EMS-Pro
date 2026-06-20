import {
  X,
  Pencil,
  Trash2
} from "lucide-react";

function ManagerDetailsDrawer({
  manager,
  isOpen,
  onClose,
  onEdit,
  onDeactivate,
  onActivate,
}) {

  if (!isOpen || !manager)
    return null;

  return (

    <div
      className="
        fixed inset-0
        bg-black/30
        z-50
      "
    >

      <div
        className="
          absolute right-0 top-0
          h-full
          w-full md:w-[450px]
          bg-white
          shadow-xl
          p-6
          overflow-y-auto
        "
      >

        <div className="flex justify-between items-center">

          <h2 className="text-xl font-semibold">
            Manager Details
          </h2>

          <button
            onClick={onClose}
          >
            <X size={22} />
          </button>

        </div>

        <div className="mt-6 space-y-5">

          <div>

            <p className="text-gray-500">
              Full Name
            </p>

            <p className="font-medium">
              {manager.firstName}
              {" "}
              {manager.lastName}
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Email
            </p>

            <p className="font-medium">
              {manager.user?.email}
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Phone
            </p>

            <p className="font-medium">
              {manager.phone}
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Designation
            </p>

            <p className="font-medium">
              {manager.designation}
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Salary
            </p>

            <p className="font-medium">
              ₹
              {manager.salary}
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Department
            </p>

            <p className="font-medium">
              {
                manager.department
                  ?.name ||
                "Not Assigned"
              }
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Status
            </p>

            <span
              className={`
                px-3 py-1
                rounded-full
                text-sm

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

          </div>

        </div>

        <div
          className="
            flex justify-between
            mt-10 pt-6 border-t
          "
        >

          <button
            onClick={() =>
              onEdit(manager)
            }
            className="
              flex items-center gap-2
              bg-blue-900
              text-white
              px-5 py-3
              rounded-lg
            "
          >
            <Pencil size={18} />
            Edit
          </button>

        <button
          onClick={() => {

            if (manager.isActive) {
              onDeactivate(manager.id);
            } else {
              onActivate(manager.id);
            }

          }}
          className={`
            flex items-center
            justify-center
            gap-2
            px-5 py-3
            rounded-lg
            text-white
            font-medium
            transition

            ${
              manager.isActive
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }
          `}
        >
          {
            manager.isActive
              ? "Deactivate Manager"
              : "Activate Manager"
          }
        </button>

        </div>

      </div>

    </div>

  );
}

export default ManagerDetailsDrawer;