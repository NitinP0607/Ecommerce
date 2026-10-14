
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } =
    useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);

  const saveToken = (value) => {
    setToken(value);
    localStorage.setItem("token", value);
    toast.success("Email verified successfully!");
    navigate("/");
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (step === "signup-otp") {
        const response = await axios.post(
          backendUrl + "/api/user/verify-signup-otp",
          { email, otp }
        );

        if (response.data.success) {
          saveToken(response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else if (step === "forgot-email") {
        const response = await axios.post(
          backendUrl + "/api/user/forgot-password",
          { email }
        );

        if (response.data.success) {
          toast.success(response.data.message);
          setStep("reset-password");
        } else {
          toast.error(response.data.message);
        }
      } else if (step === "reset-password") {
        const response = await axios.post(
          backendUrl + "/api/user/reset-password",
          { email, otp, newPassword }
        );

        if (response.data.success) {
          toast.success("Password changed successfully. Please log in.");
          setPassword("");
          setOtp("");
          setNewPassword("");
          setStep("form");
          setCurrentState("Login");
        } else {
          toast.error(response.data.message);
        }
      } else if (currentState === "Sign Up") {
        const response = await axios.post(
          backendUrl + "/api/user/register",
          { name, email, password }
        );

        if (response.data.success) {
          toast.success(response.data.message);
          setStep("signup-otp");
          setOtp("");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(
          backendUrl + "/api/user/login",
          { email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/user/resend-signup-otp",
        { email }
      );

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Unable to resend OTP"
      );
    }
  };

  const resetFlow = () => {
    setStep("form");
    setOtp("");
    setNewPassword("");
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">
          {step === "signup-otp"
            ? "Verify Email"
            : step === "forgot-email"
            ? "Forgot Password"
            : step === "reset-password"
            ? "Reset Password"
            : currentState}
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {step === "form" && (
        <>
          {currentState === "Sign Up" && (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="Enter your name"
              required
            />
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Enter your email"
            required
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Enter your password"
            minLength={8}
            required
          />

          <div className="w-full flex justify-between text-sm mt-[-8px]">
            {currentState === "Login" ? (
              <p
                onClick={() => setStep("forgot-email")}
                className="cursor-pointer hover:underline"
              >
                Forgot password?
              </p>
            ) : (
              <span />
            )}

            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("Sign Up")}
                className="cursor-pointer"
              >
                Create account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer"
              >
                Login here
              </p>
            )}
          </div>
        </>
      )}

      {step === "signup-otp" && (
        <>
          <p className="text-sm text-gray-600 text-center">
            We have sent a 6-digit verification code to
            <br />
            <span className="font-medium text-gray-800">{email}</span>
          </p>

          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            pattern="[0-9]{6}"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            className="w-full px-3 py-3 border border-gray-800 text-center tracking-[0.5em] text-xl"
            placeholder="------"
            aria-label="Six-digit verification code"
            required
          />

          <button
            type="button"
            onClick={resendOtp}
            className="text-sm underline cursor-pointer"
          >
            Resend OTP
          </button>

          <button
            type="button"
            onClick={resetFlow}
            className="text-sm cursor-pointer"
          >
            Back to signup
          </button>
        </>
      )}

      {step === "forgot-email" && (
        <>
          <p className="text-sm text-gray-600 text-center">
            Enter your registered email to receive a password reset OTP.
          </p>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Enter your registered email"
            required
          />

          <button
            type="button"
            onClick={resetFlow}
            className="text-sm cursor-pointer"
          >
            Back to login
          </button>
        </>
      )}

      {step === "reset-password" && (
        <>
          <p className="text-sm text-gray-600 text-center">
            Enter the OTP sent to {email} and choose a new password.
          </p>

          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            pattern="[0-9]{6}"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            className="w-full px-3 py-3 border border-gray-800 text-center tracking-[0.5em] text-xl"
            placeholder="------"
            aria-label="Password reset OTP"
            required
          />

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Enter new password"
            minLength={8}
            autoComplete="new-password"
            required
          />

          <button
            type="button"
            onClick={async () => {
              try {
                const response = await axios.post(
                  backendUrl + "/api/user/forgot-password",
                  { email }
                );

                if (response.data.success) {
                  toast.success("Please check your email for the OTP.");
                } else {
                  toast.error(response.data.message);
                }
              } catch (error) {
                toast.error(
                  error.response?.data?.message || "Unable to resend OTP"
                );
              }
            }}
            className="text-sm underline cursor-pointer"
          >
            Resend reset OTP
          </button>
        </>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer disabled:opacity-60"
      >
        {loading
          ? "Please wait..."
          : step === "signup-otp"
          ? "Verify OTP"
          : step === "forgot-email"
          ? "Send Reset OTP"
          : step === "reset-password"
          ? "Reset Password"
          : currentState === "Login"
          ? "Sign in"
          : "Send Verification OTP"}
      </button>
    </form>
  );
};

export default Login;
