import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Search } from "lucide-react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import PayrollTable
from "../../components/tables/PayrollTable";

import CreatePayrollModal
from "../../components/forms/CreatePayrollModal";

import {
  getPayrolls,
  markPayrollPaid
}
from "../../api/payrollApi";

function PayrollPage() {

  const [payrolls,
  setPayrolls] =
    useState([]);

  const [loading,
  setLoading] =
    useState(true);

  const [searchTerm,
  setSearchTerm] =
    useState("");

  const [modalOpen,
  setModalOpen] =
    useState(false);

  const fetchPayrolls =
    async () => {

      try {

        const response =
          await getPayrolls();

        setPayrolls(
          response.data
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

  useEffect(() => {

    fetchPayrolls();

  }, []);

  const handleMarkPaid =
    async (id) => {

      try {

        await markPayrollPaid(id);

        toast.success(
          "Payroll marked as paid"
        );

        fetchPayrolls();

      } catch {

        toast.error(
          "Failed"
        );

      }

    };

  const filteredPayrolls =
    payrolls.filter(
      (payroll) => {

        const name =
          `${payroll.employee?.firstName}
           ${payroll.employee?.lastName}`;

        return name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      }
    );

  const paidCount =
    payrolls.filter(
      (p) =>
        p.paymentStatus ===
        "PAID"
    ).length;

  const pendingCount =
    payrolls.filter(
      (p) =>
        p.paymentStatus ===
        "PENDING"
    ).length;

  const totalAmount =
    payrolls.reduce(
      (sum, payroll) =>
        sum +
        Number(
          payroll.netSalary
        ),
      0
    );

  return (

    <DashboardLayout>

      <div className="mb-6">

        <h1 className="text-3xl font-bold">
          Payroll
        </h1>

        <p className="text-gray-500">
          Manage employee salaries
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

        <div className="bg-white border rounded-xl p-5">

          <h3 className="text-gray-500">
            Paid
          </h3>

          <p className="text-3xl font-bold text-green-600">
            {paidCount}
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
            Total Payroll
          </h3>

          <p className="text-3xl font-bold text-blue-900">
            ₹{totalAmount.toLocaleString()}
          </p>

        </div>

      </div>

      {/* Search + Button */}

      <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">

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

        <button
          onClick={() =>
            setModalOpen(true)
          }
          className="
            bg-blue-900
            text-white
            px-5
            py-3
            rounded-lg
          "
        >
          Generate Payroll
        </button>

      </div>

      {/* Table */}

      <div className="bg-white border rounded-xl p-4 shadow-sm">

        {loading ? (

          <p>Loading...</p>

        ) : (

          <PayrollTable
            payrolls={
              filteredPayrolls
            }
            onMarkPaid={
              handleMarkPaid
            }
          />

        )}

      </div>

      <CreatePayrollModal
        isOpen={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        onPayrollCreated={
          fetchPayrolls
        }
      />

    </DashboardLayout>

  );
}

export default PayrollPage;