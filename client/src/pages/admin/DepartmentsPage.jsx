import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import DepartmentTable
from "../../components/tables/DepartmentTable";

import AddDepartmentModal
from "../../components/forms/AddDepartmentModal";

import DepartmentDetailsDrawer
from "../../components/ui/DepartmentDetailsDrawer";

import {
  getDepartments,
  getDepartmentById
}
from "../../api/departmentApi";

function DepartmentsPage() {

  const [departments,
  setDepartments] =
    useState([]);

  const [loading,
  setLoading] =
    useState(true);

  const [searchTerm,
  setSearchTerm] =
    useState("");

  const [isModalOpen,
  setIsModalOpen] =
    useState(false);

  const [drawerOpen,
  setDrawerOpen] =
    useState(false);

  const [selectedDepartment,
  setSelectedDepartment] =
    useState(null);

  const fetchDepartments =
    async () => {

      try {

        const response =
          await getDepartments();

        setDepartments(
          response.data
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

  useEffect(() => {

    fetchDepartments();

  }, []);

  const handleDepartmentClick =
    async (id) => {

      try {

        const response =
          await getDepartmentById(id);

        setSelectedDepartment(
          response.data
        );

        setDrawerOpen(true);

      } catch (error) {

        console.error(error);

      }

    };

  const filteredDepartments =
    departments.filter(
      (department) =>

        department.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  return (

    <DashboardLayout>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-gray-900">
          Departments
        </h1>

        <p className="text-gray-500 mt-1">
          Manage organization departments
        </p>

      </div>

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
            placeholder="Search departments..."
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
          Add Department
        </button>

      </div>

      <div className="bg-white border rounded-xl p-4 shadow-sm mt-4">

        {loading ? (

          <p>Loading...</p>

        ) : (

          <DepartmentTable
            departments={
              filteredDepartments
            }
            onSelectDepartment={
              handleDepartmentClick
            }
          />

        )}

      </div>

      <AddDepartmentModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        onDepartmentCreated={
          fetchDepartments
        }
      />
        <DepartmentDetailsDrawer
  department={selectedDepartment}
  isOpen={drawerOpen}
  onClose={() =>
    setDrawerOpen(false)
  }
  refreshDepartment={
    async () => {

      await fetchDepartments();

      if (
        selectedDepartment
      ) {

        const response =
          await getDepartmentById(
            selectedDepartment.id
          );

        setSelectedDepartment(
          response.data
        );

      }

    }
  }
/>

    </DashboardLayout>

  );
}

export default DepartmentsPage;