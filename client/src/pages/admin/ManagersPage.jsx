import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout
from "../../layouts/DashboardLayout";

import ManagerTable
from "../../components/tables/ManagerTable";

import {
  getManagers,
  getManagerById,
  deactivateManager,
  activateManager
}
from "../../api/managerApi";

import AddManagerModal
from "../../components/forms/AddManagerModal";

import ManagerDetailsDrawer
from "../../components/ui/ManagerDetailsDrawer";

import EditManagerModal
from "../../components/forms/EditManagerModal";

import { Search } from "lucide-react";

function ManagersPage() {

  const [managers, setManagers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedManager,
  setSelectedManager] =
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

  const [currentPage,
  setCurrentPage] =
    useState(1);

  const [editModalOpen,
  setEditModalOpen] =
    useState(false);

  useEffect(() => {

    fetchManagers();

  }, []);

  const fetchManagers =
    async () => {

      try {

        const response =
          await getManagers();

        setManagers(
          response.data
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

  const handleManagerClick =
    async (id) => {

      try {

        const response =
          await getManagerById(id);

        setSelectedManager(
          response.data
        );

        setDrawerOpen(true);

      } catch (error) {

        console.error(error);

      }

    };

  const filteredManagers =
    managers.filter(
      (manager) => {

        const matchesSearch =
          `${manager.firstName}
           ${manager.lastName}`
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

        const matchesStatus =
          statusFilter === "ALL"
            ? true
            : statusFilter ===
              "ACTIVE"
            ? manager.isActive
            : !manager.isActive;

        return (
          matchesSearch &&
          matchesStatus
        );

      }
    );

  const startIndex =
    (currentPage - 1)
    * ITEMS_PER_PAGE;

  const paginatedManagers =
    filteredManagers.slice(
      startIndex,
      startIndex +
      ITEMS_PER_PAGE
    );

  const handleDeactivate =
  async (id) => {

    try {

      await deactivateManager(id);

      toast.success(
        "Manager deactivated"
      );

      await fetchManagers();

      if (selectedManager) {

        const response =
          await getManagerById(id);

        setSelectedManager(
          response.data
        );

      }

    } catch (error) {

      toast.error(
        "Failed to deactivate"
      );

    }

  };

  const handleActivate =
  async (id) => {

    try {

      await activateManager(id);

      toast.success(
        "Manager activated"
      );

      await fetchManagers();

      if (selectedManager) {

        const response =
          await getManagerById(id);

        setSelectedManager(
          response.data
        );

      }

    } catch (error) {

      toast.error(
        "Failed to activate"
      );

    }

  };

  return (
    <DashboardLayout>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-gray-900">
          Managers
        </h1>

        <p className="text-gray-500 mt-1">
          Manage all managers in the organization
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
            placeholder="Search managers..."
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
            All Managers
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
          Add Manager
        </button>

      </div>

      <div className="bg-white border rounded-xl p-4 shadow-sm mt-4">

        {loading ? (

          <p>Loading...</p>

        ) : (

          <ManagerTable
            managers={paginatedManagers}
            onSelectManager={
              handleManagerClick
            }
          />

        )}

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
            filteredManagers.length
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

      <AddManagerModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        onManagerCreated={
          fetchManagers
        }
      />

      <ManagerDetailsDrawer
        manager={selectedManager}
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

      <EditManagerModal
        manager={selectedManager}
        isOpen={editModalOpen}
        onClose={() =>
          setEditModalOpen(false)
        }
        onManagerUpdated={
          async () => {

            await fetchManagers();

            if (selectedManager) {

              const response =
                await getManagerById(
                  selectedManager.id
                );

              setSelectedManager(
                response.data
              );

            }

          }
        }
      />

    </DashboardLayout>
  );
}

export default ManagersPage;