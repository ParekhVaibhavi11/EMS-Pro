import { useEffect, useState }
from "react";

import toast
from "react-hot-toast";

import ManagerLayout
from "../../layouts/ManagerLayout";

import {

  getManagerLeaves,

  approveLeave,

  rejectLeave

}
from "../../api/managerPortalApi";

function ManagerLeaves() {

  const [leaves,
  setLeaves] =
    useState([]);

  useEffect(() => {

    fetchLeaves();

  }, []);

  const fetchLeaves =
    async () => {

      const response =
        await getManagerLeaves();

      setLeaves(
        response.data.data
      );

    };

  const handleApprove =
    async (id) => {

      await approveLeave(id);

      toast.success(
        "Approved"
      );

      fetchLeaves();

    };

  const handleReject =
    async (id) => {

      await rejectLeave(id);

      toast.success(
        "Rejected"
      );

      fetchLeaves();

    };

  return (

    <ManagerLayout>

      <div className="bg-white border rounded-xl p-6">

        <h1 className="text-2xl font-bold mb-5">
          Leave Requests
        </h1>

        <table className="w-full">

          <thead>

            <tr>

              <th>Employee</th>

              <th>Type</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {leaves.map(
              (leave) => (

                <tr key={leave.id}>

                  <td>

                    {
                      leave.employee
                        ?.firstName
                    }
                    {" "}
                    {
                      leave.employee
                        ?.lastName
                    }

                  </td>

                  <td>
                    {
                      leave.leaveType
                    }
                  </td>

                  <td>
                    {
                      leave.status
                    }
                  </td>

                  <td>

                    {
                      leave.status ===
                      "PENDING" && (

                        <div className="flex gap-2">

                          <button
                            onClick={() =>
                              handleApprove(
                                leave.id
                              )
                            }
                            className="bg-green-600 text-white px-3 py-1 rounded"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() =>
                              handleReject(
                                leave.id
                              )
                            }
                            className="bg-red-600 text-white px-3 py-1 rounded"
                          >
                            Reject
                          </button>

                        </div>

                      )
                    }

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </ManagerLayout>

  );

}

export default ManagerLeaves;