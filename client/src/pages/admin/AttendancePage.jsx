import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import AttendanceTable
from "../../components/tables/AttendanceTable";

import MarkAttendanceModal
from "../../components/forms/MarkAttendanceModal";

import {
  getAttendance
}
from "../../api/attendanceApi";

function AttendancePage() {

  const [attendance,
  setAttendance] =
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

  const fetchAttendance =
    async () => {

      try {

        const response =
          await getAttendance();

        setAttendance(
          response.data
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

  useEffect(() => {

    fetchAttendance();

  }, []);

  const filteredAttendance =
    attendance.filter(
      (record) => {

        const name =
          `${record.employee?.firstName}
           ${record.employee?.lastName}`;

        return name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      }
    );

  const presentCount =
    attendance.filter(
      (a) =>
        a.status === "PRESENT"
    ).length;

  const absentCount =
    attendance.filter(
      (a) =>
        a.status === "ABSENT"
    ).length;

  return (

    <DashboardLayout>

      <div className="mb-6">

        <h1 className="text-3xl font-bold">
          Attendance
        </h1>

        <p className="text-gray-500">
          Manage employee attendance
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

        <div className="bg-white border rounded-xl p-5">

          <h3 className="text-gray-500 text-sm">
            Present
          </h3>

          <p className="text-3xl font-bold text-green-600">
            {presentCount}
          </p>

        </div>

        <div className="bg-white border rounded-xl p-5">

          <h3 className="text-gray-500 text-sm">
            Absent
          </h3>

          <p className="text-3xl font-bold text-red-600">
            {absentCount}
          </p>

        </div>

        <div className="bg-white border rounded-xl p-5">

          <h3 className="text-gray-500 text-sm">
            Total Records
          </h3>

          <p className="text-3xl font-bold text-blue-900">
            {attendance.length}
          </p>

        </div>

      </div>

      {/* Search */}

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
          Mark Attendance
        </button>

      </div>

      {/* Table */}

      <div className="bg-white border rounded-xl p-4 shadow-sm">

        {loading ? (

          <p>Loading...</p>

        ) : (

          <AttendanceTable
            attendance={
              filteredAttendance
            }
          />

        )}

      </div>

      <MarkAttendanceModal
        isOpen={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        onAttendanceMarked={
          fetchAttendance
        }
      />

    </DashboardLayout>

  );
}

export default AttendancePage;