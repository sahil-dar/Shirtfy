import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import souled from "../../assets/souled-logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [data, setData] = useState({
    phone_number: "",
    username:"",
    email:"",
    password:"",
    confirm_password:""
  })
  const [error, setError] = useState([]);
  
 const handleInputChange = (e) => {
  setData({...data, [e.target.name]: e.target.value })
 }

   // useEffect to display errors one by one
 useEffect(() => {
  if (Array.isArray(error) && error.length > 0) {
    toast.dismiss();

    error.forEach((errorMsg, index) => {
      setTimeout(() => {
        toast.error(errorMsg, {
          toastId: `validation-error-${errorMsg}`,
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }, index * 300);
    });

    const clearTimer = setTimeout(() => setError([]), error.length * 300 + 1000);
    return () => clearTimeout(clearTimer);
  }
}, [error]);

const handleSubmit = async (e) => {
  e.preventDefault();

  try{
    axios.post(
      "https://kczjvhkd-4000.inc1.devtunnels.ms/api/v1/auth/signUp", data
    )
    if(err.response && err.response.data){
      const res = err.response.data
      console.log(res)

      if (res.err ){
        if(typeof res.err === "string"){
          
          if(errorMessgae.toLowerCase().includes("missing required field")){
            toast.error("provide all crediantials")
          }
        }
      }
    }
  }catch(err){
    console.log("Error response data:", err);
    setError(err.response)
  }
}


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
              className="w-full border p-2 rounded-md border-gray-300"
            />

            {/* Email */}
            <label className="block text-left mt-4">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email ID*"
              value={data.email}
              onChange={handleInputChange}
              className="w-full border p-2 rounded-md border-gray-300"
            />

            {/* Password */}
            <label className="block text-left mt-4">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create password*"
              value={data.password}
              onChange={handleInputChange}
              className="w-full border p-2 rounded-md border-gray-300"
            />

            {/* Confirm Password */}
            <label className="block text-left mt-4">Confirm Password</label>
            <input
              name="confirm_password"
              type="password"
              placeholder="Confirm password*"
              value={data.confirm_password}
              onChange={handleInputChange}
              className="w-full border p-2 rounded-md border-gray-300"
            />

            {/* Phone Number */}
            <label className="block text-left mt-4">Mobile Number</label>
            <input
              name="phone_number"
              type="tel"
              placeholder="Mobile Number*"
              value={data.phone_number}
              onChange={handleInputChange}
              className="w-full border p-2 rounded-md border-gray-300"
            />

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
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={0}
          preventDuplicates={false}
        />
      </div>
    );
  };

  export default SignUp;
