import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from "react-toastify";

export const Signup = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submithandler = async (data) => {

    console.log(data);

    // Fix: Assign role from form data
    //const role = data.role;
    
   // data.roleId = role === "User" ? "67c66524b8d2637663cbc81e" : "67ea0ac1dc18a202a3cf4081";

    try { 
      const res = await axios.post("/user",data);
      console.log(res); 
      console.log(res.data); 

      if (res.status === 201) {
        toast.success('User signup successfully !!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else {
        toast.error('Already Signup!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch(error) {
      toast.error('Something went wrong!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }); 
      console.error("error", error);
    }   
  };

  const ValidationSchema = {
    namevalidator: { required: { value: true, message: "Firstname is required" } },
    Lastnamevalidator: { required: { value: true, message: "Lastname is required" } },
    emailvalidator: { required: { value: true, message: "Email is required" } },
    agevalidator: { 
      required: { value: true, message: "Age is required" },
      min: { value: 18, message: "Min age is 18" },
      max: { value: 60, message: "Max age is 60" } 
    },
    passwordvalidator: { required: { value: true, message: "Password is required" ,minlength: { value: 5, message: "Password must be at least 5 characters" },
    maxLength: { value: 20, message: "Password cannot exceed 20 characters" }} },
    contactvalidator: { 
      required: { value: true, message: "Contact is required" },
      pattern: { value: /^[6-9]{1}[0-9]{9}$/, message: "Invalid contact number" }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: '15px', color: 'black' }}>Sign Up</h1>
        <form onSubmit={handleSubmit(submithandler)}>

          <div className="form-group">
            <label>Select Role</label>
            <select {...register("roleId", { required: "Role is required" })}>
              <option value="">Select Role</option>
              <option value="67c66524b8d2637663cbc81e">User</option>
              <option value="67ea0ac1dc18a202a3cf4081">Owner</option>
            </select>
            <span className="error">{errors.role?.message}</span>
          </div>

          <div style={fieldStyle}>
            <label>First Name:</label>
            <input 
              type="text"
              placeholder="Enter First Name"
              {...register("FirstName", ValidationSchema.namevalidator)}
              style={inputStyle}
            />
            <span style={errorStyle}>{errors.FirstName?.message}</span>
          </div>

          <div style={fieldStyle}>
            <label>Last Name:</label>
            <input 
              type="text"
              placeholder="Enter Last Name"
              {...register("Lastname", ValidationSchema.Lastnamevalidator)}
              style={inputStyle}
            />
            <span style={errorStyle}>{errors.Lastname?.message}</span>
          </div>

          <div style={fieldStyle}>
            <label>Email:</label>
            <input 
              type="email"
              placeholder="Enter Email"
              {...register("email", ValidationSchema.emailvalidator)}
              style={inputStyle}
            />
            <span style={errorStyle}>{errors.email?.message}</span>
          </div>

          <div style={fieldStyle}>
            <label>Age:</label>
            <input 
              type="number"
              placeholder="Enter Age"
              {...register("Age", ValidationSchema.agevalidator)}
              style={inputStyle}
            />
            <span style={errorStyle}>{errors.Age?.message}</span>
          </div>

          <div style={fieldStyle}>
            <label>Password:</label>
            <input 
              type="password"
              placeholder="Enter Password"
              {...register("password", ValidationSchema.passwordvalidator)}
              style={inputStyle}
            />
            <span style={errorStyle}>{errors.password?.message}</span>
          </div>

          <div style={fieldStyle}>
            <label>Contact:</label>
            <input 
              type="text"
              placeholder="Enter Contact"
              {...register("contact", ValidationSchema.contactvalidator)}
              style={inputStyle}
            />
            <span style={errorStyle}>{errors.contact?.message}</span>
          </div>

          {/** Fixed Submit Button Placement */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <input 
              type="submit"
              value="Sign Up"
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = 'black'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
            />
          </div>
          <div style={{ marginTop: '15px' }}>
  <p style={{ fontSize: '14px' }}>
    Already have an account?{" "}
    <a href="/login" style={{ color: "#667eea", textDecoration: "none" }}>
      Login here
    </a>
  </p>
</div>

        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

// 🔹 Reusable Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(to right, #6a5acd, aqua)',
};

const cardStyle = {
  background: 'white',
  padding: '20px',  
  borderRadius: '10px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center'
};

const fieldStyle = {
  marginBottom: '15px',
  textAlign: 'left'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box' 
};

const errorStyle = {
  color: 'red',
  fontSize: '12px',
  height: '14px', 
  display: 'block'
};

const buttonStyle = {
  width: '100%',
  maxWidth: '200px',
  padding: '12px',
  fontSize: '16px',
  backgroundColor: '#667eea',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
  display: 'block',
  margin: '10px auto'
};
