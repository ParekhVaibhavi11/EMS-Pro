import { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import { createEmployee } from "../../api/employeeApi";

function AddEmployeeModal({
  isOpen,
  onClose,
  onEmployeeCreated,
}) {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      designation: "",
      salary: "",
      gender: "",
      address: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await createEmployee({
        ...formData,
        salary: Number(
          formData.salary
        ),
      });

      toast.success(
        "Employee created successfully"
      );

      onEmployeeCreated();

      onClose();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to create employee"
      );

    } finally {

      setLoading(false);

    }

  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">

      <div className="bg-white rounded-xl w-full max-w-2xl shadow-lg">

        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-xl font-semibold">
            Add Employee
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-5"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border rounded-lg p-3"
              required
            />

            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border rounded-lg p-3"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg p-3"
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg p-3"
              required
            />

            <input
              name="designation"
              placeholder="Designation"
              value={formData.designation}
              onChange={handleChange}
              className="border rounded-lg p-3"
              required
            />

            <input
              name="salary"
              type="number"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              className="border rounded-lg p-3"
              required
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border rounded-lg p-3"
            >
              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Other">
                Other
              </option>

            </select>

            <input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-lg p-3"
            />

          </div>

          <div className="flex justify-end gap-3 mt-6">

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
                  ? "Creating..."
                  : "Create Employee"
              }
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddEmployeeModal;