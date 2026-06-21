import { useEffect, useState }
from "react";

import ManagerLayout
from "../../layouts/ManagerLayout";

import {
  getManagerProfile
}
from "../../api/managerPortalApi";

function ManagerProfile() {

  const [profile,
  setProfile] =
    useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile =
    async () => {

      const response =
        await getManagerProfile();

      setProfile(
        response.data.data
      );

    };

  return (

    <ManagerLayout>

      <div className="bg-white border rounded-xl p-6">

        <h1 className="text-2xl font-bold mb-5">
          My Profile
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <strong>Name:</strong>
            {" "}
            {profile?.firstName}
            {" "}
            {profile?.lastName}
          </div>

          <div>
            <strong>Email:</strong>
            {" "}
            {profile?.user?.email}
          </div>

          <div>
            <strong>Designation:</strong>
            {" "}
            {profile?.designation}
          </div>

          <div>
            <strong>Department:</strong>
            {" "}
            {
              profile
              ?.managedDepartment
              ?.name
            }
          </div>

        </div>

      </div>

    </ManagerLayout>

  );

}

export default ManagerProfile;