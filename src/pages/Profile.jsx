import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import {
  FiUser,
  FiMail,
  FiShield,
  FiPackage,
  FiShoppingBag,
  FiLock,
  FiLogOut,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
  FiEye,
  FiEyeOff,
  FiKey,
  FiX,
} from "react-icons/fi";

const Profile = () => {
  const { backendUrl, token, navigate, setToken } =
    useContext(ShopContext);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    let active = true;

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

        if (!active) return;

        if (response.data.success) {
          setUser(response.data.user);
        } else {
          toast.error(
            response.data.message || "Unable to load profile"
          );
        }
      } catch (error) {
        if (!active) return;

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
        if (active) setLoading(false);
      }
    };

    fetchProfile();

    return () => {
      active = false;
    };
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

    if (currentPassword === newPassword) {
      toast.error("Choose a different password");
      return;
    }

    try {
      setChangingPassword(true);

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
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-gray-500">
        <div className="h-9 w-9 rounded-full border-2 border-gray-200 border-t-black animate-spin" />
        <p className="text-sm">Loading your account...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          <FiUser size={26} />
        </div>
        <h2 className="text-xl font-semibold mt-5">
          Profile unavailable
        </h2>
        <p className="text-sm text-gray-500 mt-2 max-w-sm">
          We couldn't load your account information. Please sign in
          again to continue.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition"
        >
          Go to Login <FiArrowRight className="inline ml-2" />
        </button>
      </div>
    );
  }

  const isVerified = Boolean(user.isAccountVerified);
  const displayName = user.name || "NITRA Customer";
  const customerId = user.id || user._id;

  const details = [
    {
      label: "Full name",
      value: displayName,
      icon: FiUser,
    },
    {
      label: "Email address",
      value: user.email || "Not available",
      icon: FiMail,
    },
    {
      label: "Account status",
      value: isVerified ? "Verified" : "Not verified",
      icon: FiShield,
    },
    {
      label: "Customer ID",
      value: customerId || "Not available",
      icon: FiKey,
    },
  ];

  const actions = [
    {
      title: "My Orders",
      description: "View your purchases and track deliveries.",
      icon: FiPackage,
      label: "View orders",
      onClick: () => navigate("/orders"),
    },
    {
      title: "My Cart",
      description: "Review your selected styles before checkout.",
      icon: FiShoppingBag,
      label: "View cart",
      onClick: () => navigate("/cart"),
    },
    {
      title: "Change Password",
      description: "Keep your account secure with a strong password.",
      icon: FiLock,
      label: showPasswordForm ? "Close form" : "Update password",
      onClick: () => setShowPasswordForm((value) => !value),
    },
  ];

  const passwordFields = [
    {
      label: "Current password",
      value: currentPassword,
      setter: setCurrentPassword,
      visible: showCurrent,
      toggle: () => setShowCurrent((value) => !value),
      autoComplete: "current-password",
    },
    {
      label: "New password",
      value: newPassword,
      setter: setNewPassword,
      visible: showNew,
      toggle: () => setShowNew((value) => !value),
      autoComplete: "new-password",
    },
    {
      label: "Confirm new password",
      value: confirmPassword,
      setter: setConfirmPassword,
      visible: showConfirm,
      toggle: () => setShowConfirm((value) => !value),
      autoComplete: "new-password",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#202020]">
      <div className="max-w-6xl w-[92%] mx-auto py-8 sm:py-12 lg:py-16">
        {/* Page heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <p className="text-[10px] tracking-[0.32em] uppercase text-gray-500 mb-3">
              NITRA / My Account
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Welcome back, {displayName.split(" ")[0]}
            </h1>
            <p className="text-sm text-gray-500 mt-3">
              Manage your personal details, orders and account security.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white px-5 py-3 text-sm hover:bg-black hover:text-white hover:border-black transition w-full sm:w-auto"
          >
            <FiLogOut size={16} />
            Sign out
          </button>
        </div>

        {/* Profile overview */}
        <section className="bg-white border border-gray-200 rounded-sm overflow-hidden">
          <div className="h-1 bg-black" />

          <div className="p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-[76px] h-[76px] shrink-0 rounded-full bg-[#f0f0f0] border border-gray-200 flex items-center justify-center">
              <span className="text-3xl font-semibold">
                {displayName.charAt(0).toUpperCase()}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold">{displayName}</h2>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs ${
                    isVerified
                      ? "bg-green-50 text-green-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {isVerified ? (
                    <FiCheckCircle size={13} />
                  ) : (
                    <FiAlertCircle size={13} />
                  )}
                  {isVerified ? "Email verified" : "Email not verified"}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-2 break-all">
                {user.email}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                NITRA member
              </p>
            </div>

            <div className="sm:text-right sm:border-l sm:border-gray-100 sm:pl-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Account
              </p>
              <p className="font-medium mt-2 text-sm">
                {isVerified ? "Active" : "Verification needed"}
              </p>
            </div>
          </div>
        </section>

        {/* Account shortcuts */}
        <section className="mt-10">
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
              Your account
            </p>
            <h2 className="text-xl font-semibold mt-2">
              Quick access
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  type="button"
                  key={action.title}
                  onClick={action.onClick}
                  className="group bg-white border border-gray-200 rounded-sm p-5 sm:p-6 text-left hover:border-black hover:-translate-y-0.5 transition duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
                      <Icon size={20} />
                    </div>

                    <FiArrowRight
                      size={18}
                      className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition"
                    />
                  </div>

                  <h3 className="font-semibold mt-5">{action.title}</h3>
                  <p className="text-sm leading-6 text-gray-500 mt-2 min-h-[48px]">
                    {action.description}
                  </p>

                  <span className="inline-block text-xs font-medium mt-5 border-b border-gray-300 pb-1 group-hover:border-black">
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Change password */}
        {showPasswordForm && (
          <section className="mt-8 bg-white border border-gray-200 rounded-sm overflow-hidden">
            <div className="flex items-center justify-between gap-4 p-5 sm:p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <FiLock size={18} />
                </div>
                <div>
                  <h2 className="font-semibold">Change password</h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Choose a password with at least 8 characters.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowPasswordForm(false)}
                aria-label="Close password form"
                className="p-2 text-gray-500 hover:text-black"
              >
                <FiX size={20} />
              </button>
            </div>

            <form
              onSubmit={handleChangePassword}
              className="p-5 sm:p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {passwordFields.map((field) => (
                  <div key={field.label}>
                    <label className="block text-sm font-medium mb-2">
                      {field.label}
                    </label>

                    <div className="relative">
                      <input
                        type={field.visible ? "text" : "password"}
                        autoComplete={field.autoComplete}
                        required
                        minLength={
                          field.label === "Current password" ? undefined : 8
                        }
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        className="w-full border border-gray-200 bg-gray-50 px-3 py-3 pr-11 text-sm outline-none focus:border-black focus:bg-white transition"
                      />

                      <button
                        type="button"
                        onClick={field.toggle}
                        aria-label={
                          field.visible ? "Hide password" : "Show password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                      >
                        {field.visible ? (
                          <FiEyeOff size={17} />
                        ) : (
                          <FiEye size={17} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
                <button
                  type="submit"
                  disabled={changingPassword}
                  className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {changingPassword
                    ? "Updating password..."
                    : "Save new password"}
                </button>

                <p className="text-xs text-gray-400">
                  Your current password is required to confirm this change.
                </p>
              </div>
            </form>
          </section>
        )}

        {/* Personal information */}
        <section className="mt-10">
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
              Account details
            </p>
            <h2 className="text-xl font-semibold mt-2">
              Personal information
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm divide-y divide-gray-100">
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-3 sm:gap-6 px-5 sm:px-6 py-5"
                >
                  <div className="flex items-center gap-3 text-gray-500">
                    <Icon size={16} />
                    <span className="text-sm">{item.label}</span>
                  </div>

                  <p className="text-sm font-medium break-all sm:pl-2">
                    {item.value || "Not available"}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Security note */}
        <section className="mt-8 flex items-start gap-3 border border-gray-200 bg-white p-5 sm:p-6">
          <FiShield size={20} className="shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold">Your security matters</h3>
            <p className="text-sm text-gray-500 leading-6 mt-1">
              Never share your password or verification codes. If you
              notice unusual activity, update your password immediately.
            </p>
          </div>
        </section>

        <footer className="text-center pt-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
            NITRA · Style for men, women & kids
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Profile;
