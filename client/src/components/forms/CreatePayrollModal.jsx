import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  createPayroll
}
from "../../api/payrollApi";

import {
  getEmployees
}
from "../../api/employeeApi";

function CreatePayrollModal({
  isOpen,
  onClose,
  onPayrollCreated,
}) {

  const [employees,
  setEmployees] =
    useState([]);

  const [formData,
  setFormData] =
    useState({
      employeeId: "",
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      bonus: 0,
      deductions: 0,
      tax: 0,
    });

  useEffect(() => {

    if (isOpen) {

      fetchEmployees();

    }

  }, [isOpen]);

  const fetchEmployees =
    async () => {

      const response =
        await getEmployees();

      setEmployees(
        response.data || []
      );

    };

  const handleChange =
    (e) => {

      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });

    };

  const handleSubmit =
    async () => {

      try {

        await createPayroll({
          ...formData,
          month:
            Number(formData.month),
          year:
            Number(formData.year),
          bonus:
            Number(formData.bonus),
          deductions:
            Number(
              formData.deductions
            ),
          tax:
            Number(formData.tax),
        });

        toast.success(
          "Payroll generated"
        );

        await onPayrollCreated();

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

      <div className="bg-white rounded-xl p-6 w-full max-w-lg">

        <h2 className="text-xl font-semibold mb-5">
          Generate Payroll
        </h2>

        <div className="space-y-4">

          <select
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
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

          <input
            type="number"
            name="month"
            value={formData.month}
            onChange={handleChange}
            placeholder="Month"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Year"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="bonus"
            value={formData.bonus}
            onChange={handleChange}
            placeholder="Bonus"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="deductions"
            value={formData.deductions}
            onChange={handleChange}
            placeholder="Deductions"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="tax"
            value={formData.tax}
            onChange={handleChange}
            placeholder="Tax"
            className="w-full border rounded-lg p-3"
          />

        </div>

        <div className="flex justify-end gap-3 mt-5">

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-900 text-white px-4 py-2 rounded-lg"
          >
            Generate
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreatePayrollModal;