import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  markAttendance
}
from "../../api/attendanceApi";

import {
  getEmployees
}
from "../../api/employeeApi";

function MarkAttendanceModal({
  isOpen,
  onClose,
  onAttendanceMarked,
}) {

  const [employees,
  setEmployees] =
    useState([]);

  const [employeeId,
  setEmployeeId] =
    useState("");

  const [status,
  setStatus] =
    useState("PRESENT");

  useEffect(() => {

    if (isOpen) {

      fetchEmployees();

    }

  }, [isOpen]);

  const fetchEmployees =
    async () => {

      try {

        const response =
          await getEmployees();

        setEmployees(
          response.data || []
        );

      } catch (error) {

        console.error(error);

      }

    };

  const handleSubmit =
    async () => {

      try {

        await markAttendance({
          employeeId,
          status
        });

        toast.success(
          "Attendance marked"
        );

        await onAttendanceMarked();

        onClose();

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Failed"
        );

      }

    };

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-full max-w-md">

        <h2 className="text-xl font-semibold mb-5">
          Mark Attendance
        </h2>

        <select
          value={employeeId}
          onChange={(e) =>
            setEmployeeId(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
            mb-4
          "
        >

          <option value="">
            Select Employee
          </option>

          {employees.map(
            (employee) => (

              <option
                key={employee.id}
                value={employee.id}
              >
                {employee.firstName}
                {" "}
                {employee.lastName}
              </option>

            )
          )}

        </select>

        <select
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
            mb-5
          "
        >

          <option value="PRESENT">
            PRESENT
          </option>

          <option value="ABSENT">
            ABSENT
          </option>

        </select>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="
              border
              px-4 py-2
              rounded-lg
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              bg-blue-900
              text-white
              px-4 py-2
              rounded-lg
            "
          >
            Save
          </button>

        </div>

      </div>

    </div>

  );
}

export default MarkAttendanceModal;