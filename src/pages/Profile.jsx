import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { backendUrl, token, navigate, setToken } =
    useContext(ShopContext);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        setLoading(false);
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `${backendUrl}/api/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.success) {
          setUser(response.data.user);
        } else {
          toast.error(
            response.data.message || "Unable to load profile"
          );
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Unable to load your profile"
        );

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

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      toast.error("New password must be at least 8 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    try {
      setChangingPassword(true);

      // Create this protected backend endpoint:
      // POST /api/user/change-password
      const response = await axios.post(
        `${backendUrl}/api/user/change-password`,
        { currentPassword, newPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        toast.success("Password changed successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setShowPasswordForm(false);
      } else {
        toast.error(
          response.data.message || "Unable to change password"
        );
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to change password"
      );
    } finally {
      setChangingPassword(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-sm">
          Loading your profile...
        </p>
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
    { label: "Full Name", value: user.name },
    { label: "Email Address", value: user.email },
    {
      label: "Account Status",
      value: user.isAccountVerified ? "Verified" : "Not Verified",
    },
    {
      label: "Customer ID",
      value: user.id || user._id,
    },
  ];

  const actions = [
    {
      title: "My Orders",
      description: "Track orders and view your purchase history.",
      icon: "📦",
      onClick: () => navigate("/orders"),
    },
    {
      title: "My Cart",
      description: "Review items in your cart and proceed to checkout.",
      icon: "🛒",
      onClick: () => navigate("/cart"),
    },
    {
      title: "Change Password",
      description: "Update your password to keep your account secure.",
      icon: "🔒",
      onClick: () => setShowPasswordForm((value) => !value),
    },
  ];

  return (
    <div className="w-[90%] max-w-5xl mx-auto my-12 sm:my-16 text-gray-800">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <h1 className="prata-regular text-3xl">My Profile</h1>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        <p className="text-sm text-gray-500">
          Manage your NITRA account and personal information.
        </p>
      </div>

      <div className="border border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
          <span className="text-3xl font-medium">
            {user.name?.charAt(0).toUpperCase() || "U"}
          </span>
        </div>

        <div className="flex-1 min-w-0">
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
                user.isAccountVerified
                  ? "bg-green-600"
                  : "bg-yellow-600"
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

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">My Account</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action) => (
            <button
              key={action.title}
              type="button"
              onClick={action.onClick}
              className="border border-gray-200 p-5 text-left hover:border-gray-800 transition-colors"
            >
              <span className="text-2xl">{action.icon}</span>
              <h4 className="font-medium mt-4">{action.title}</h4>
              <p className="text-sm text-gray-500 mt-2">
                {action.description}
              </p>
              <span className="inline-block text-sm mt-4 underline">
                {action.title === "Change Password" &&
                showPasswordForm
                  ? "Close"
                  : "Open"}{" "}
                →
              </span>
            </button>
          ))}
        </div>
      </div>

      {showPasswordForm && (
        <form
          onSubmit={handleChangePassword}
          className="mt-6 border border-gray-200 p-5 sm:p-6 space-y-4"
        >
          <h3 className="text-lg font-medium">Change Password</h3>

          <div>
            <label className="block text-sm mb-2">
              Current Password
            </label>
            <input
              type="password"
              autoComplete="current-password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">New Password</label>
            <input
              type="password"
              autoComplete="new-password"
              minLength={8}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              autoComplete="new-password"
              minLength={8}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            disabled={changingPassword}
            className="bg-black text-white px-6 py-2 text-sm disabled:opacity-50"
          >
            {changingPassword ? "Updating..." : "Update Password"}
          </button>
        </form>
      )}

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

      <div className="mt-8 border border-gray-200 p-5 sm:p-6">
        <h3 className="font-medium">Account Security</h3>
        <p className="text-sm text-gray-500 mt-1">
          Never share your password or verification codes with anyone.
        </p>
      </div>
    </div>
  );
};

export default Profile;