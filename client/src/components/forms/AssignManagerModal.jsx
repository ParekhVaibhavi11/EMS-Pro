import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getManagers }
from "../../api/managerApi";

import {
  assignManager
}
from "../../api/departmentApi";

function AssignManagerModal({
  isOpen,
  onClose,
  departmentId,
  onAssigned,
}) {

  const [managers,
  setManagers] =
    useState([]);

  const [selectedManager,
  setSelectedManager] =
    useState("");

  useEffect(() => {

    if (isOpen) {

      fetchManagers();

    }

  }, [isOpen]);

  const fetchManagers =
    async () => {

      try {

        const response =
          await getManagers();

        setManagers(
        response.data.filter(
          (manager) =>
            manager.isActive
        )
      );

      } catch (error) {

        console.error(error);

      }

    };

  const handleAssign =
    async () => {

      try {

        await assignManager(
          departmentId,
          selectedManager
        );

        toast.success(
          "Manager assigned"
        );

        await onAssigned();

        onClose();

      } catch {

        toast.error(
          "Assignment failed"
        );

      }

    };

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-full max-w-md">

        <h2 className="text-xl font-semibold mb-5">
          Assign Manager
        </h2>

        <select
          value={selectedManager}
          onChange={(e) =>
            setSelectedManager(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        >

          <option value="">
            Select Manager
          </option>

          {managers?.map(
            (manager) => (

              <option
                key={manager.id}
                value={manager.id}
                disabled={!manager.isActive}
              >
                {manager.firstName}
                {" "}
                {manager.lastName}
                {!manager.isActive
                  ? " (Inactive)"
                  : ""}
              </option>
            )
          )}

        </select>

        <div className="flex justify-end gap-3 mt-5">

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
            onClick={handleAssign}
            className="
              bg-blue-900
              text-white
              px-4 py-2
              rounded-lg
            "
          >
            Assign
          </button>

        </div>

      </div>

    </div>

  );
}

export default AssignManagerModal;