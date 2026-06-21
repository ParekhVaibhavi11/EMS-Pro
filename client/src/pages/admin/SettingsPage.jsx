import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
  getProfile,
  updateProfile,
  changePassword,
  getSystemSettings,
  updateSystemSettings
}
from "../../api/settingsApi";

function SettingsPage() {

  const [profile,
  setProfile] =
    useState(null);

  const [systemSettings,
  setSystemSettings] =
    useState(null);

  const [passwordData,
  setPasswordData] =
    useState({
      currentPassword: "",
      newPassword: "",
    });

  useEffect(() => {

    fetchProfile();
    fetchSystemSettings();

  }, []);

  const fetchProfile =
    async () => {

      try {

        const response =
          await getProfile();

        setProfile(
          response.data
        );

      } catch (error) {

        console.error(error);

      }

    };

  const handleProfileChange =
    (e) => {

      setProfile({
        ...profile,
        [e.target.name]:
          e.target.value,
      });

    };

  const handlePasswordChange =
    (e) => {

      setPasswordData({
        ...passwordData,
        [e.target.name]:
          e.target.value,
      });

    };

  const handleProfileSave =
    async () => {

      try {

        await updateProfile(
          profile
        );

        toast.success(
          "Profile updated"
        );

      } catch {

        toast.error(
          "Update failed"
        );

      }

    };

  const handlePasswordSave =
    async () => {

      try {

        await changePassword(
          passwordData
        );

        toast.success(
          "Password changed"
        );

        setPasswordData({
          currentPassword: "",
          newPassword: "",
        });

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Failed"
        );

      }

    };

  const fetchSystemSettings =
  async () => {

    try {

      const response =
        await getSystemSettings();

      setSystemSettings(
        response.data
      );

    } catch (error) {

      console.error(error);

    }

  };

  if (!profile)
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );

  return (

    <DashboardLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500">
            Manage your account
          </p>

        </div>

        {/* Profile Section */}

        <div className="bg-white border rounded-xl p-6 shadow-sm">

          <h2 className="text-xl font-semibold mb-5">
            Profile Information
          </h2>

          <div className="flex flex-col md:flex-row gap-8">

            {/* Avatar */}

            <div className="flex flex-col items-center">

              <div className="
                w-28 h-28
                rounded-full
                bg-blue-100
                flex
                items-center
                justify-center
                text-4xl
                font-bold
                text-blue-900
              ">

                {
                  profile.username
                  ?.charAt(0)
                  ?.toUpperCase()
                }

              </div>

              <p className="text-sm text-gray-500 mt-3">
                Profile Image Coming Soon
              </p>

            </div>

            {/* Form */}

            <div className="flex-1 space-y-4">

              <input
                name="username"
                value={profile.username}
                onChange={
                  handleProfileChange
                }
                placeholder="Username"
                className="
                  w-full
                  border
                  rounded-lg
                  p-3
                "
              />

              <input
                name="email"
                value={profile.email}
                onChange={
                  handleProfileChange
                }
                placeholder="Email"
                className="
                  w-full
                  border
                  rounded-lg
                  p-3
                "
              />

              <button
                onClick={
                  handleProfileSave
                }
                className="
                  bg-blue-900
                  text-white
                  px-5
                  py-3
                  rounded-lg
                "
              >
                Save Profile
              </button>

            </div>

          </div>

        </div>

        {/* Password Section */}

        <div className="bg-white border rounded-xl p-6 shadow-sm">

          <h2 className="text-xl font-semibold mb-5">
            Change Password
          </h2>

          <div className="space-y-4">

            <input
              type="password"
              name="currentPassword"
              value={
                passwordData.currentPassword
              }
              onChange={
                handlePasswordChange
              }
              placeholder="Current Password"
              className="
                w-full
                border
                rounded-lg
                p-3
              "
            />

            <input
              type="password"
              name="newPassword"
              value={
                passwordData.newPassword
              }
              onChange={
                handlePasswordChange
              }
              placeholder="New Password"
              className="
                w-full
                border
                rounded-lg
                p-3
              "
            />

            <button
              onClick={
                handlePasswordSave
              }
              className="
                bg-green-600
                text-white
                px-5
                py-3
                rounded-lg
              "
            >
              Change Password
            </button>

          </div>

        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">

          <h2 className="text-xl font-semibold mb-5">
            Organization Settings
          </h2>

          <div className="space-y-4">

            <input
              value={
                systemSettings?.companyName || ""
              }
              onChange={(e) =>
                setSystemSettings({
                  ...systemSettings,
                  companyName:
                    e.target.value
                })
              }
              placeholder="Company Name"
              className="
                w-full
                border
                rounded-lg
                p-3
              "
            />

            <input
              value={
                systemSettings?.companyLogo || ""
              }
              onChange={(e) =>
                setSystemSettings({
                  ...systemSettings,
                  companyLogo:
                    e.target.value
                })
              }
              placeholder="Company Logo URL"
              className="
                w-full
                border
                rounded-lg
                p-3
              "
            />

            <input
              type="color"
              value={
                systemSettings?.themeColor ||
                "#1E3A8A"
              }
              onChange={(e) =>
                setSystemSettings({
                  ...systemSettings,
                  themeColor:
                    e.target.value
                })
              }
              className="h-12"
            />

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={
                  systemSettings
                    ?.emailNotifications
                }
                onChange={(e) =>
                  setSystemSettings({
                    ...systemSettings,
                    emailNotifications:
                      e.target.checked
                  })
                }
              />

              Email Notifications

            </label>

            <button
              onClick={async () => {

                await updateSystemSettings(
                  systemSettings
                );

                toast.success(
                  "Settings Updated"
                );

              }}
              className="
                bg-blue-900
                text-white
                px-5
                py-3
                rounded-lg
              "
            >
              Save Settings
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );
}

export default SettingsPage;