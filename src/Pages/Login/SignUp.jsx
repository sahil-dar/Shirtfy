import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import souled from "../../assets/souled-logo.png";

const SignUp = () => {
  const Navigate = useNavigate();

  const [data, setData] = useState({
    phone_number: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({}); // store backend validation errors

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // clear old errors

    try {
      const response = await axios.post(
        "http://192.168.1.3:4000/api/v1/auth/signUp",
        data
      );

      console.log("Success:", response.data);
      Navigate("/");

    } catch (err) {
      if (err.response && err.response.data) {
        // ✅ Assuming backend sends { errors: { field: "message", ... } }
        if (err.response.data.errors) {
          setErrors(err.response.data.errors);
        } else if (err.response.data.message) {
          // fallback for single error message
          alert(err.response.data.message);
        }
      }
    }
  };

  return (
    <>
    <div className="p-10 box-border">
    <div className="w-full h-screen bg-white flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="w-2/5 bg-white border border-gray-300 rounded-md p-8"
      >
        <img className="h-10 mb-4 justify-self-center" src={souled} alt="" />
        <h1 className="font-bold text-lg mb-6 text-center">SignUp with The Souled Store</h1>

        {/* Username */}
        <label className="block text-left">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Username*"
          value={data.username}
          onChange={handleInputChange}
          className={`w-full border p-2 rounded-md focus:outline-red-500 ${
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
          className={`w-full border p-2 rounded-md focus:outline-red-500 ${
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
          className={`w-full border p-2 rounded-md focus:outline-red-500 ${
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
          placeholder="Confirm password*"
          value={data.confirm_password}
          onChange={handleInputChange}
          className={`w-full border p-2 rounded-md focus:outline-red-500 ${
            errors.confirm_password ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.confirm_password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirm_password}
          </p>
        )}

        {/* Phone Number */}
        <label className="block text-left mt-4">Mobile Number</label>
        <input
          name="phone_number"
          type="tel"
          placeholder="Mobile Number*"
          value={data.phone_number}
          onChange={handleInputChange}
          className={`w-full border p-2 rounded-md focus:outline-red-500 ${
            errors.phone_number ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.phone_number && (
          <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>
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
    </>
  );
};


export default SignUp;
