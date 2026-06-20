import { useState } from "react";

import AssignManagerModal
from "../forms/AssignManagerModal";

function DepartmentDetailsDrawer({
  department,
  isOpen,
  onClose,
  refreshDepartment,
}) {

  const [assignOpen,
  setAssignOpen] =
    useState(false);

  if (!isOpen || !department)
    return null;

  return (

    <>
      <div className="fixed inset-0 bg-black/30 z-50">

        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-full
            md:w-[450px]
            bg-white
            shadow-xl
            p-6
          "
        >

          <div className="flex justify-between">

            <h2 className="text-xl font-semibold">
              Department Details
            </h2>

            <button
              onClick={onClose}
            >
              ✕
            </button>

          </div>

          <div className="space-y-5 mt-6">

            <div>

              <p className="text-gray-500">
                Name
              </p>

              <p className="font-medium">
                {department.name}
              </p>

            </div>

            <div>

              <p className="text-gray-500">
                Description
              </p>

              <p className="font-medium">
                {
                  department.description ||
                  "-"
                }
              </p>

            </div>

            <div>

              <p className="text-gray-500">
                Manager
              </p>

              <p className="font-medium">

                {
                  department.manager
                    ? `${department.manager.firstName} ${department.manager.lastName}`
                    : "Not Assigned"
                }

              </p>

            </div>

          </div>

          <button
            onClick={() =>
              setAssignOpen(true)
            }
            className="
              mt-8
              bg-blue-900
              text-white
              px-5 py-3
              rounded-lg
            "
          >
            Assign Manager
          </button>

        </div>

      </div>

      <AssignManagerModal
        isOpen={assignOpen}
        onClose={() =>
          setAssignOpen(false)
        }
        departmentId={
          department.id
        }
        onAssigned={
          refreshDepartment
        }
      />
    </>
  );
}

export default DepartmentDetailsDrawer;