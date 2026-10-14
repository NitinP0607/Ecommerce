
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { backendUrl, token, navigate, setToken } =
    useContext(ShopContext);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        setLoading(false);
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          backendUrl + "/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setUser(response.data.user);
        } else {
          toast.error(response.data.message || "Unable to load profile");
        }
      } catch (error) {
        const message =
          error.response?.data?.message ||
          "Unable to load your profile";

        toast.error(message);

        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          setToken("");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, backendUrl, navigate, setToken]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading your profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4">
        <h2 className="text-xl font-medium">Profile unavailable</h2>
        <p className="text-gray-500 text-sm text-center">
          We couldn't load your account information.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-black text-white px-6 py-2 text-sm"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const details = [
    {
      label: "Full Name",
      value: user.name,
    },
    {
      label: "Email Address",
      value: user.email,
    },
    {
      label: "Account Status",
      value: user.isAccountVerified ? "Verified" : "Not Verified",
    },
    {
      label: "Customer ID",
      value: user.id,
    },
  ];

  return (
    <div className="w-[90%] max-w-5xl mx-auto my-12 sm:my-16 text-gray-800">
      {/* Page heading */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <h1 className="prata-regular text-3xl">My Profile</h1>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        <p className="text-sm text-gray-500">
          Manage your NITRA account and personal information.
        </p>
      </div>

      {/* Profile header */}
      <div className="border border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
          <span className="text-3xl font-medium">
            {user.name?.charAt(0).toUpperCase() || "U"}
          </span>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-medium">{user.name}</h2>
          <p className="text-sm text-gray-500 mt-1 break-all">
            {user.email}
          </p>

          <span
            className={`inline-flex items-center gap-2 mt-3 text-xs px-3 py-1 rounded-full ${
              user.isAccountVerified
                ? "bg-green-50 text-green-700"
                : "bg-yellow-50 text-yellow-700"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                user.isAccountVerified ? "bg-green-600" : "bg-yellow-600"
              }`}
            />
            {user.isAccountVerified
              ? "Email Verified"
              : "Email Not Verified"}
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="border border-gray-800 px-5 py-2 text-sm hover:bg-black hover:text-white transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Account information */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">
          Personal Information
        </h3>

        <div className="border border-gray-200 divide-y divide-gray-200">
          {details.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 px-5 py-4"
            >
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-sm font-medium break-all">
                {item.value || "Not available"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Account security */}
      <div className="mt-8 border border-gray-200 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="font-medium">Account Security</h3>
          <p className="text-sm text-gray-500 mt-1">
            Keep your login credentials secure. Never share your password
            or verification codes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
