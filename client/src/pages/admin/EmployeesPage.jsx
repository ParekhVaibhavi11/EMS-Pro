import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

import EditEmployeeModal
from "../../components/forms/EditEmployeeModal";

import {
  deactivateEmployee,
  activateEmployee
}
from "../../api/employeeApi";

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

  const [statusFilter,
  setStatusFilter] =
    useState("ALL");

  const [searchTerm,
    setSearchTerm] =
      useState("");

  const ITEMS_PER_PAGE = 5;

  const [currentPage, setCurrentPage] =
    useState(1);

  const [editModalOpen,
    setEditModalOpen] =
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

 const filteredEmployees =
  employees.filter(
    (employee) => {

      const matchesSearch =
        `${employee.firstName}
         ${employee.lastName}`
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        );

      const matchesStatus =
        statusFilter === "ALL"
          ? true
          : statusFilter ===
            "ACTIVE"
          ? employee.isActive
          : !employee.isActive;

      return (
        matchesSearch &&
        matchesStatus
      );

    }
  );

  const startIndex =
  (currentPage - 1)
  * ITEMS_PER_PAGE;

  const paginatedEmployees =
    filteredEmployees.slice(
      startIndex,
      startIndex +
        ITEMS_PER_PAGE
    );

  const handleDeactivate =
  async (id) => {

    try {

      await deactivateEmployee(id);

      toast.success(
        "Employee deactivated"
      );

      fetchEmployees();

      setDrawerOpen(false);

    } catch (error) {

      toast.error(
        "Failed to deactivate"
      );

    }

  };

  const handleActivate =
  async (id) => {

    try {

      await activateEmployee(id);

      toast.success(
        "Employee activated"
      );

      await fetchEmployees();

      setDrawerOpen(false);

    } catch (error) {

      toast.error(
        "Failed to activate"
      );

    }

  };

  return (
    <DashboardLayout>

      <div className="flex flex-col md:flex-row gap-4 justify-between">

        <div className="relative flex-1">

          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            placeholder="Search employees..."
            className="
              w-full
              border
              rounded-lg
              py-3
              pl-10
              pr-4
            "
          />

        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
          className="
            border
            rounded-lg
            px-4
            py-3
            min-w-[150px]
            bg-white
          "
        >
          <option value="ALL">
            All Employees
          </option>

          <option value="ACTIVE">
            Active
          </option>

          <option value="INACTIVE">
            Inactive
          </option>

        </select>

        <button
          onClick={() =>
            setIsModalOpen(true)
          }
          className="
            bg-blue-900
            text-white
            px-5
            py-3
            rounded-lg
            whitespace-nowrap
          "
        >
          Add Employee
        </button>

      </div>

      <div className="flex justify-center gap-2 mt-4">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(
            currentPage - 1
          )
        }
        className="
          px-4 py-2
          border
          rounded-lg
          disabled:opacity-50
        "
      >
        Previous
      </button>

      <span className="px-4 py-2">
        Page {currentPage}
      </span>

      <button
        disabled={
          startIndex +
          ITEMS_PER_PAGE >=
          filteredEmployees.length
        }
        onClick={() =>
          setCurrentPage(
            currentPage + 1
          )
        }
        className="
          px-4 py-2
          border
          rounded-lg
          disabled:opacity-50
        "
      >
        Next
      </button>


</div>

      <div className="bg-white border rounded-xl p-4 shadow-sm mt-4">

        {loading ? (

          <p>Loading...</p>

        ) : (

          <EmployeeTable
            employees={paginatedEmployees}
            onSelectEmployee={handleEmployeeClick}
          />

        )}

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
        onEdit={() =>
          setEditModalOpen(true)
        }
        onDeactivate={
          handleDeactivate
        }
        onActivate={
          handleActivate
        }
      />

      <EditEmployeeModal
        employee={selectedEmployee}
        isOpen={editModalOpen}
        onClose={() =>
          setEditModalOpen(false)
        }
        onEmployeeUpdated={
          async () => {

            await fetchEmployees();

            if (selectedEmployee) {

              const response =
                await getEmployeeById(
                  selectedEmployee.id
                );

              setSelectedEmployee(
                response.data
              );
            }

          }
        }
      />

    </DashboardLayout>
  );
}

export default EmployeesPage;