import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Search } from "lucide-react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import LeavesTable
from "../../components/tables/LeavesTable";



import {
  getLeaves,
  approveLeave,
  rejectLeave
}
from "../../api/leaveApi";

function LeavesPage() {

  const [leaves,
  setLeaves] =
    useState([]);

  const [loading,
  setLoading] =
    useState(true);

  const [searchTerm,
  setSearchTerm] =
    useState("");



  const fetchLeaves =
    async () => {

      try {

        const response =
          await getLeaves();

        setLeaves(
          response.data
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

  useEffect(() => {

    fetchLeaves();

  }, []);

  const handleApprove =
    async (id) => {

      try {

        await approveLeave(id);

        toast.success(
          "Leave approved"
        );

        fetchLeaves();

      } catch {

        toast.error(
          "Failed"
        );

      }

    };

  const handleReject =
    async (id) => {

      try {

        await rejectLeave(id);

        toast.success(
          "Leave rejected"
        );

        fetchLeaves();

      } catch {

        toast.error(
          "Failed"
        );

      }

    };

  const filteredLeaves =
    leaves.filter(
      (leave) => {

        const name =
          `${leave.employee?.firstName}
           ${leave.employee?.lastName}`;

        return name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      }
    );

  const approvedCount =
    leaves.filter(
      (l) =>
        l.status ===
        "APPROVED"
    ).length;

  const rejectedCount =
    leaves.filter(
      (l) =>
        l.status ===
        "REJECTED"
    ).length;

  const pendingCount =
    leaves.filter(
      (l) =>
        l.status ===
        "PENDING"
    ).length;

  return (

    <DashboardLayout>

      <div className="mb-6">

        <h1 className="text-3xl font-bold">
          Leave Management
        </h1>

        <p className="text-gray-500">
          Manage leave requests
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

        <div className="bg-white border rounded-xl p-5">

          <h3 className="text-gray-500">
            Approved
          </h3>

          <p className="text-3xl font-bold text-green-600">
            {approvedCount}
          </p>

        </div>

        <div className="bg-white border rounded-xl p-5">

          <h3 className="text-gray-500">
            Pending
          </h3>

          <p className="text-3xl font-bold text-yellow-600">
            {pendingCount}
          </p>

        </div>

        <div className="bg-white border rounded-xl p-5">

          <h3 className="text-gray-500">
            Rejected
          </h3>

          <p className="text-3xl font-bold text-red-600">
            {rejectedCount}
          </p>

        </div>

      </div>

      <div className="mb-4">

  <div className="relative">

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
      placeholder="Search employee..."
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

</div>

      <div className="bg-white border rounded-xl p-4 shadow-sm">

        {loading ? (

          <p>Loading...</p>

        ) : (

          <LeavesTable
            leaves={filteredLeaves}
            onApprove={
              handleApprove
            }
            onReject={
              handleReject
            }
          />

        )}

      </div>

      

    </DashboardLayout>

  );
}

export default LeavesPage;