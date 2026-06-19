import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/cards/StatCard";

import {
  Users,
  UserCog,
  Building2,
  Wallet,
  Plus
} from "lucide-react";

function AdminDashboard() {

  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your organization efficiently.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <StatCard
            title="Employees"
            value="1"
            icon={Users}
          />

          <StatCard
            title="Managers"
            value="1"
            icon={UserCog}
          />

          <StatCard
            title="Departments"
            value="3"
            icon={Building2}
          />

          <StatCard
            title="Payroll"
            value="₹0"
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
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="border-l-4 border-blue-500 pl-4">
              Employee John Doe created
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              Manager Rahul Sharma assigned
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              Department Engineering added
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;