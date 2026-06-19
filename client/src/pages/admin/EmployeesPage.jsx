import { useEffect, useState } from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import EmployeeTable
from "../../components/tables/EmployeeTable";

import { getEmployees }
from "../../api/employeeApi";

import AddEmployeeModal
from "../../components/forms/AddEmployeeModal";

import EmployeeDetailsDrawer
from "../../components/ui/EmployeeDetailsDrawer";

import {
  getEmployeeById
}
from "../../api/employeeApi";

import { Search } from "lucide-react";

function EmployeesPage() {

  const [employees, setEmployees] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [isModalOpen, setIsModalOpen] =
  useState(false);

  const [selectedEmployee,
  setSelectedEmployee] =
    useState(null);

  const [drawerOpen,
  setDrawerOpen] =
    useState(false);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const handleEmployeeClick =
  async (id) => {

    try {

      const response =
        await getEmployeeById(id);

      setSelectedEmployee(
        response.data
      );

      setDrawerOpen(true);

    } catch (error) {

      console.error(error);

    }

  };

  const fetchEmployees =
    async () => {

      try {

        const response =
          await getEmployees();

        setEmployees(
          response.data
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div className="flex justify-between items-center">

          <h1 className="text-3xl font-bold">
            Employees
          </h1>
          <button
            onClick={() =>
              setIsModalOpen(true)
            }
            className="bg-blue-900 text-white px-4 py-2 rounded-lg"
          >
            Add Employee
          </button>

        </div>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search employees..."
            className="w-full border rounded-lg py-3 pl-10 pr-4"
          />

        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm">

          {loading ? (

            <p>
              Loading...
            </p>

          ) : (

            <EmployeeTable
              employees={employees}
              onSelectEmployee={
                handleEmployeeClick
              }
            />

          )}

        </div>

      </div>
      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        onEmployeeCreated={
          fetchEmployees
        }
      />

      <EmployeeDetailsDrawer
        employee={selectedEmployee}
        isOpen={drawerOpen}
        onClose={() =>
          setDrawerOpen(false)
        }
      />

    </DashboardLayout>
  );
}

export default EmployeesPage;