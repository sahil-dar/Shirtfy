import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import souled from "../../assets/souled-logo.png";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // remove previous error as soon as user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // clear previous errors

    try {
      const res = await axios.post(
        "https://kczjvhkd-4000.inc1.devtunnels.ms/api/v1/auth/signUp",
        data
      );

      console.log("SignUp Successful:", res.data);
      Navigate("/");

    } catch (err) {
      console.log("Raw error:", err);

      // ✅ create empty object to store errors
      const newErrors = {};

      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.err ||
        "Server error";

      // ✅ if backend sends "Missing required fields" error
      if (
        typeof errorMessage === "string" &&
        errorMessage.toLowerCase().includes("missing required fields")
      ) {
        if (errorMessage.toLowerCase().includes("username")) {
          newErrors.username = "Username is required!";
        }
        if (errorMessage.toLowerCase().includes("email")) {
          newErrors.email = "Email is required!";
        }
        if (errorMessage.toLowerCase().includes("password")) {
          newErrors.password = "Password is required!";
        }
        if (errorMessage.toLowerCase().includes("confirm_password")) {
          newErrors.confirm_password = "Confirm password is required!";
        }
        if (errorMessage.toLowerCase().includes("phone_number")) {
          newErrors.phone_number = "Phone number is required!";
        }

      } else {
        console.log("Backend Error Message:", errorMessage);

        if (errorMessage.includes("Password and confirm password do not match")) {
          newErrors.password = errorMessage;
          newErrors.confirm_password = errorMessage;
        }

        // For other backend errors (like user already exists, etc.)
        newErrors.general = errorMessage;
      }

      // ✅ finally set all errors at once
      setErrors(newErrors);
    }
  };

  return (
    <div className="p-28 box-border">
      <div className="w-full h-screen bg-white flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-2/5 bg-white border border-gray-300 rounded-md p-8"
        >
          <img className="h-10 mb-4 justify-self-center" src={souled} alt="logo" />
          <h1 className="font-bold text-lg mb-6 text-center">
            SignUp with The Souled Store
          </h1>

          {/* Username */}
          <label className="block text-left">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username*"
            value={data.username}
            onChange={handleInputChange}
            className={`w-full border p-2 rounded-md ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}

          {/* Email */}
          <label className="block text-left mt-4">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email ID*"
            value={data.email}
            onChange={handleInputChange}
            className={`w-full border p-2 rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}

          {/* Password */}
          <label className="block text-left mt-4">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Create password*"
            value={data.password}
            onChange={handleInputChange}
            className={`w-full border p-2 rounded-md ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}

          {/* Confirm Password */}
          <label className="block text-left mt-4">Confirm Password</label>
          <input
            name="confirm_password"
            type="password"
            placeholder="Confirm Password*"
            value={data.confirm_password}
            onChange={handleInputChange}
            className={`w-full border p-2 rounded-md ${
              errors.confirm_password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-sm mt-1">{errors.confirm_password}</p>
          )}

          {/* Phone Number */}
          <label className="block text-left mt-4">Mobile Number</label>
          <input
            name="phone_number"
            type="tel"
            placeholder="Mobile Number*"
            value={data.phone_number}
            onChange={handleInputChange}
            className={`w-full border p-2 rounded-md ${
              errors.phone_number ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>
          )}

          {/* General backend errors */}
          {errors.general && (
            <p className="text-red-500 text-sm mt-2">{errors.general}</p>
          )}

          <button
            type="submit"
            className="bg-red-500 w-full p-2 mt-6 rounded-md text-white"
          >
            Sign Up
          </button>

          <Link to={"/"}>
            <p className="text-gray-600 mt-3">
              Already a Customer?{" "}
              <span className="text-red-500 hover:underline cursor-pointer">
                Login
              </span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
