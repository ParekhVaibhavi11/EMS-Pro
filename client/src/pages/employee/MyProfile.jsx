import { useEffect, useState }
from "react";

import EmployeeLayout
from "../../layouts/EmployeeLayout";

import {
  getEmployeeProfile
}
from "../../api/employeePortalApi";

function MyProfile() {

  const [profile,
  setProfile] =
    useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile =
    async () => {

      const response =
        await getEmployeeProfile();

      setProfile(
        response.data
      );

    };

  return (

    <EmployeeLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-white border rounded-xl p-6">

        <pre>
          {
            JSON.stringify(
              profile,
              null,
              2
            )
          }
        </pre>

      </div>

    </EmployeeLayout>

  );

}

export default MyProfile;