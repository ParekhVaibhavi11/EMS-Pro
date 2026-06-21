import { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import { createManager }
from "../../api/managerApi";

function AddManagerModal({
  isOpen,
  onClose,
  onManagerCreated,
}) {

  const [loading, setLoading] =
    useState(false);

  const [credentials,
setCredentials] =
  useState(null);

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      designation: "",
      salary: "",
    });

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

        const response =
  await createManager({

    ...formData,

    salary: Number(
      formData.salary
    ),

  });

setCredentials(

  response.data
    .credentials

);

toast.success(
  "Manager created successfully"
);

await onManagerCreated();

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          designation: "",
          salary: "",
        });

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Failed to create manager"
        );

      } finally {

        setLoading(false);

      }

    };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-xl w-full max-w-xl">

        {
  credentials && (

    <div className="p-6 border-b bg-green-50">

      <h3 className="font-bold text-green-700 text-lg">

        Manager Credentials Generated

      </h3>

      <div className="mt-4 space-y-2">

        <p>

          <strong>
            Username:
          </strong>

          {" "}

          {credentials.username}

        </p>

        <p>

          <strong>
            Password:
          </strong>

          {" "}

          {credentials.password}

        </p>

      </div>

      <button
        type="button"
        onClick={() => {

          navigator.clipboard.writeText(

`Username: ${credentials.username}
Password: ${credentials.password}`

          );

          toast.success(
            "Copied"
          );

        }}
        className="
          mt-4
          bg-blue-900
          text-white
          px-4
          py-2
          rounded-lg
        "
      >
        Copy Credentials
      </button>

    </div>

  )
}

        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-xl font-semibold">
            Add Manager
          </h2>

          <button
            onClick={onClose}
          >
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
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
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
              className="border px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="
                bg-blue-900
                text-white
                px-5 py-2
                rounded-lg
              "
            >
              {
                loading
                  ? "Creating..."
                  : "Create Manager"
              }
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddManagerModal;