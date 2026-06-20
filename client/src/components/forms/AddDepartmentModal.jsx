import { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import {
  createDepartment
}
from "../../api/departmentApi";

function AddDepartmentModal({
  isOpen,
  onClose,
  onDepartmentCreated,
}) {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
    });

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        await createDepartment(
          formData
        );

        toast.success(
          "Department created"
        );

        await onDepartmentCreated();

        onClose();

      } catch {

        toast.error(
          "Failed to create department"
        );

      } finally {

        setLoading(false);

      }

    };

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-full max-w-lg p-6">

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-xl font-semibold">
            Add Department
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            placeholder="Department Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name:
                  e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description:
                  e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="
              w-full
              bg-blue-900
              text-white
              py-3
              rounded-lg
            "
          >
            {
              loading
                ? "Creating..."
                : "Create Department"
            }
          </button>

        </form>

      </div>

    </div>

  );
}

export default AddDepartmentModal;