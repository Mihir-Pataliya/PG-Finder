import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from "react-toastify";

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate()

  const submitHandler = async(data) => {
    const res = await axios.post("/user/login", data)
    console.log(res.data)

    
    if(res.status===200){
    toast.success('Login successfull !!', {
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

localStorage.setItem('id', res.data.data._id)
console.log(res.data.data)
localStorage.setItem('role', res.data.data.roleId.name)
console.log(res.data.data.roleId.name)


setTimeout(() => {
  if (res.data.data.roleId.name === "student") {
    navigate("/form/Home");
  }else if (res.data.data.roleId.name === "owner") {
    navigate("/user/Home");
  }
  else if (res.data.data.roleId.name === "admin") {
    navigate("/admin/Home");
  }
}, 4000);
}
else{
    toast.success('something went wrong !!', {
        position: "top-left",
     autoClose: 5000,
      hideProgressBar: false,
     closeOnClick: false,
     pauseOnHover: true,
     draggable: true,
      progress: undefined,
     theme: "dark",
    transition: Bounce,

});
};
}

  // const handleForgotPassword = () => {
  //   alert("Redirecting to Forgot Password page...");
  //   // Add React Router navigation if needed.
  // };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Login</h1>
        <ToastContainer/>
        <form onSubmit={handleSubmit(submitHandler)}>
          {/* Username Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email :</label>
            <input 
              type="text" 
              placeholder="Email" 
              {...register("email", { required: "Email is required" })} 
              style={styles.input} 
            />
            <span style={styles.error}>{errors.email?.message}</span>
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password :</label>
            <input 
              type="password" 
              placeholder="Password" 
              {...register("password", { required: "Password is required", minLength: { value: 5, message: "Password must be at least 5 characters" },
                maxLength: { value: 20, message: "Password cannot exceed 20 characters" }
                
               })} 
              style={styles.input} 
            />
            <span style={styles.error}>{errors.password?.message}</span>
          </div>

          {/* Submit Button */}
          <div>
            <input type="submit" value="Login" style={styles.button} />
          </div>

          {/* Forgot Password Link */}
          <div style={styles.forgotPassword}>
            <Link to="/forgetpassword" style={styles.link}>
              Forgot Password?
            </Link>
          </div>

          <div style={styles.forgotPassword}>
          <Link to="/signup" style={styles.link}>
          Don’t have an account? Sign Up
         </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

// Extracted CSS styles for better readability
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(to right, #667eea, #764ba2)"
  },
  formContainer: {
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center"
  },
  heading: { marginBottom: "20px" },
  inputGroup: { marginBottom: "20px" },
  label: { marginRight: "8px" },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  },
  error: { color: "red" },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "bold"
  },
  forgotPassword: { marginTop: "12px" },
  link: {
    fontSize: "14px",
    color: "#667eea",
    textDecoration: "none",
    cursor: "pointer"
  }
};

export default Login;
