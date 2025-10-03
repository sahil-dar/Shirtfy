import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import souled from "../../assets/souled-logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    phone_number: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({}); 

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error for this field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // clear previous errors

    try {
      await axios.post(
        "https://kczjvhkd-4000.inc1.devtunnels.ms/api/v1/auth/signUp",
        data
      );

      toast.success("Signup successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);

    } catch (err) {
      if (err.response && err.response.data) {
        const res = err.response.data;

        // If backend sends errors as object { field: message }
        if (res.errors && typeof res.errors === "object") {
          setErrors(res.errors);
          toast.error("Please fix the highlighted errors.");
        } 
        // If backend sends only a single message
        else if (res.message) {
          setErrors({ general: res.message });
          toast.error(res.message);
        }
      } else {
        toast.error("Network error. Please try again.");
      }
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
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}

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
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

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
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

          {/* Confirm Password */}
          <label className="block text-left mt-4">Confirm Password</label>
          <input
            name="confirm_password"
            type="password"
            placeholder="Confirm password*"
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

          {/* General Error */}
          {errors.general && (
            <p className="text-red-500 text-sm mt-4 text-center">{errors.general}</p>
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

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default SignUp;
