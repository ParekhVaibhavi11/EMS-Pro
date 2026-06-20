import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import { updateEmployee } from "../../api/employeeApi";

function EditEmployeeModal({
  employee,
  isOpen,
  onClose,
  onEmployeeUpdated,
}) {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      phone: "",
      designation: "",
      salary: "",
    });

  useEffect(() => {

    if (employee) {

      setFormData({
        firstName:
          employee.firstName || "",

        lastName:
          employee.lastName || "",

        phone:
          employee.phone || "",

        designation:
          employee.designation || "",

        salary:
          employee.salary || "",
      });

    }

  }, [employee]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        await updateEmployee(
          employee.id,
          {
            ...formData,
            salary: Number(
              formData.salary
            ),
          }
        );

        toast.success(
          "Employee updated"
        );

        await onEmployeeUpdated();

        onClose();

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Update failed"
        );

      } finally {

        setLoading(false);

      }

    };

  if (!isOpen)
    return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-xl w-full max-w-xl">

        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-xl font-semibold">
            Edit Employee
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-5 space-y-4"
        >

          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="w-full border rounded-lg p-3"
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-900 text-white px-5 py-2 rounded-lg"
            >
              {
                loading
                  ? "Updating..."
                  : "Update Employee"
              }
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditEmployeeModal;