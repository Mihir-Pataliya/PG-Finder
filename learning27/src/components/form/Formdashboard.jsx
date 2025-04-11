import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Formdashboard = () => {
  const [role, setRole] = useState(""); // Role state to toggle fields

  // useForm Setup
  const {register,handleSubmit,formState: { errors },} = useForm();

  // Form Submission
 

  const submitHandler = async (data) => {
    try {
        const res = await axios.post("/pg/addtopg", data);
        console.log("Response:", res.data);
        alert("Form submitted successfully!");
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to submit the form.");
    }
};

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#007bff" }}>
        PG Registration Form
      </h2>

     
      <div style={{ marginBottom: "15px" }}>
  <label htmlFor="role" style={{ fontWeight: "bold" }}>Register as:</label>
  
  <select
    {...register("role", { required: "Role is required" })}
    value={role}
    onChange={(e) => setRole(e.target.value)}
    style={inputStyle} >
    <option value="">Select Role</option>
    <option value="owner">Owner</option>
    <option value="user">User</option>
  </select>

  
  <p style={{ color: "red", marginTop: "5px" }}>
    {errors.role?.message}
  </p>
</div>


     
      <form onSubmit={handleSubmit(submitHandler)}>
       
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ fontWeight: "bold" }}>
            Full Name:
          </label>
          <input
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
            placeholder="Enter your full name"
            style={inputStyle}
          />
          <p style={{ color: "red", marginTop: "5px" }}>{errors.fullName?.message}</p>
        </div>

       
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ fontWeight: "bold" }}>
            Email Address:
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              }
            })}
            placeholder="Enter your email"
            style={inputStyle}
          />
          <p style={{ color: "red", marginTop: "5px" }}>{errors.email?.message}</p>
        </div>

       
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="phone" style={{ fontWeight: "bold" }}>
            Phone Number:
          </label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            placeholder="Enter your phone number"
            style={inputStyle}
          />
          <p style={{ color: "red", marginTop: "5px" }}>{errors.phone?.message}</p>
        </div>

        
        {role === "owner" && (
  <>
    
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor="propertyName" style={{ fontWeight: "bold" }}>
        Property Name:
      </label>
      <select
        {...register("propertyName", { required: "Property Name is required" })}
        style={inputStyle}
      >
        <option value="">Select Property Type</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Plot">Plot</option>
      </select>
    
      <p style={{ color: "red", marginTop: "5px" }}>
        {errors.propertyName?.message}
      </p>
    </div>

    
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor="rooms" style={{ fontWeight: "bold" }}>
        Number of Rooms:
      </label>
      <input
        type="number"
        {...register("numberOfrooms", { required: "Number of Rooms is required" })}
        placeholder="Enter number of rooms"
        style={inputStyle}
      />
      <p style={{ color: "red", marginTop: "5px" }}>
        {errors.numberOfrooms?.message}
      </p>
    </div>
  </>
)}

      
        {role === "user" && (
          <>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="budget" style={{ fontWeight: "bold" }}>Budget (per month in ₹):</label>
              <input
                type="number"
                {...register("budget", { required: "Budget is required" })}
                placeholder="Enter your budget"
                style={inputStyle}
              />
              <p style={{ color: "red", marginTop: "5px" }}>{errors.budget?.message}</p>
            </div>
          </>
        )}

        
        <div style={{ marginBottom: "15px" }}>
          <input type="checkbox" {...register("agree", { required: "You must agree to the terms." })} />
          <label htmlFor="agree" style={{ marginLeft: "5px" }}>
            I agree to the terms and conditions.
          </label>
          <p style={{ color: "red", marginTop: "5px" }}>{errors.agree?.message}</p>
        </div>

        
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};


const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

