import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/cards/StatCard";

import {
  Users,
  UserCog,
  Building2,
  Wallet,
  Plus
} from "lucide-react";

import { useEffect, useState }
from "react";

import {
  getDashboardStats
}
from "../../api/reportApi";

function AdminDashboard() {

  const [stats,
  setStats] =
    useState(null);

  const fetchDashboardStats =
  async () => {

    try {

      const response =
        await getDashboardStats();

      setStats(
        response.data
      );

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    fetchDashboardStats();

  }, []);


  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            EMS Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Real-time overview of employees, attendance, payroll and leave management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <StatCard
            title="Employees"
            value={stats?.totalEmployees || 0}
            icon={Users}
          />

          <StatCard
            title="Managers"
            value={stats?.totalManagers || 0}
            icon={UserCog}
          />

          <StatCard
            title="Departments"
            value={stats?.totalDepartments || 0}
            icon={Building2}
          />

          <StatCard
            title="Payroll Records"
            value={stats?.totalPayrolls || 0}
            icon={Wallet}
          />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <StatCard
            title="Active Employees"
            value={stats?.activeEmployees || 0}
            icon={Users}
          />

          <StatCard
            title="Total Leaves"
            value={stats?.totalLeaves || 0}
            icon={UserCog}
          />

          <StatCard
            title="Pending Leaves"
            value={stats?.pendingLeaves || 0}
            icon={Building2}
          />

          <StatCard
            title="Paid Payrolls"
            value={stats?.paidPayrolls || 0}
            icon={Wallet}
          />

        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

          <h2 className="text-xl font-semibold mb-4">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-3">

            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Plus size={16} />
              Employee
            </button>

            <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Plus size={16} />
              Manager
            </button>

            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center gap-2">
              <Plus size={16} />
              Department
            </button>

          </div>

        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

        <h2 className="text-xl font-semibold mb-4">
          Organization Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-blue-50 rounded-lg p-4">

            <p className="text-gray-500 text-sm">
              Present Today
            </p>

            <p className="text-3xl font-bold text-blue-900">
              {stats?.attendanceToday || 0}
            </p>

          </div>

          <div className="bg-green-50 rounded-lg p-4">

            <p className="text-gray-500 text-sm">
              Paid Payrolls
            </p>

            <p className="text-3xl font-bold text-green-700">
              {stats?.paidPayrolls || 0}
            </p>

          </div>

          <div className="bg-yellow-50 rounded-lg p-4">

            <p className="text-gray-500 text-sm">
              Pending Leaves
            </p>

            <p className="text-3xl font-bold text-yellow-700">
              {stats?.pendingLeaves || 0}
            </p>

          </div>

        </div>

</div>

      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;