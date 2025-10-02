import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import souled from "../../assets/souled-logo.png";

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
    setErrors({ ...errors, [e.target.name]: "" }); // clear error for this input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // clear previous errors

    try {
      await axios.post(
        "https://kczjvhkd-4000.inc1.devtunnels.ms/api/v1/auth/signUp",
        data
      );
      navigate("/"); // redirect after success
    } catch (err) {
      const newErrors = {};
      if (err.response && err.response.data) {
        const res = err.response.data;

        // If backend sends errors as object { field: message }
        if (res.errors && typeof res.errors === "object") {
          Object.keys(res.errors).forEach((key) => {
            newErrors[key] = res.errors[key];
          });
        } 
        // If backend sends single message string
        else if (res.message && typeof res.message === "string") {
          const msg = res.message.toLowerCase();

          // Map keywords to input fields
          if (msg.includes("username")) newErrors.username = "Username is required";
          if (msg.includes("email")) newErrors.email = "Email is required";
          if (msg.includes("phone") || msg.includes("mobile")) newErrors.phone_number = "Phone number is required or invalid";
          if (msg.includes("password") && !msg.includes("match")) newErrors.confirm_password = "Passwords do not match";
          if (msg.includes("password") && !msg.includes("match")) newErrors.password = "Password is required";

          // fallback for any other general error
          if (Object.keys(newErrors).length === 0) {
            newErrors.general = res.message;
          }
        }

        setErrors(newErrors);
      } else {
        setErrors({ general: "Network error. Please try again later." });
      }
    }
  };

  return (
    <div className="p-10 box-border">
      <div className="w-full h-screen bg-white flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-2/5 bg-white border border-gray-300 rounded-md p-8"
        >
          <img className="h-10 mb-4 justify-self-center" src={souled} alt="" />
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
            className={`w-full border p-2 rounded-md ${errors.username ? "border-red-500" : "border-gray-300"}`}
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
            className={`w-full border p-2 rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
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
            className={`w-full border p-2 rounded-md ${errors.password ? "border-red-500" : "border-gray-300"}`}
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
            className={`w-full border p-2 rounded-md ${errors.confirm_password ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.confirm_password && <p className="text-red-500 text-sm mt-1">{errors.confirm_password}</p>}

          {/* Phone Number */}
          <label className="block text-left mt-4">Mobile Number</label>
          <input
            name="phone_number"
            type="tel"
            placeholder="Mobile Number*"
            value={data.phone_number}
            onChange={handleInputChange}
            className={`w-full border p-2 rounded-md ${errors.phone_number ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>}

          {/* General error */}
          {errors.general && <p className="text-red-500 text-sm mt-4 text-center">{errors.general}</p>}

          <button type="submit" className="bg-red-500 w-full p-2 mt-6 rounded-md text-white">
            Sign Up
          </button>

          <Link to={"/"}>
            <p className="text-gray-600 mt-3">
              Already a Customer?{" "}
              <span className="text-red-500 hover:underline cursor-pointer">Login</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
