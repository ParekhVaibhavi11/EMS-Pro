import { User, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../api/axios";
import useAuthStore from "../../store/authStore";

function LoginPage() {

  const navigate = useNavigate();

  const login = useAuthStore(
    (state) => state.login
  );

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const response =
        await api.post(
          "/auth/login",
          formData
        );

      const { user, token } =
        response.data.data;

      login(user, token);

      toast.success(
        "Login successful"
      );

      if (user.role === "ADMIN") {
        navigate("/admin");
      }

      if (user.role === "MANAGER") {
        navigate("/manager");
      }

      if (user.role === "EMPLOYEE") {
        navigate("/employee");
      }

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-8">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-blue-900">
            EMS Pro
          </h1>

          <p className="text-gray-500 mt-2">
            Employee Management System
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default LoginPage;