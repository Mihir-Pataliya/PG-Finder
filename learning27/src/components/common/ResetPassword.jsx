import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
    const token = useParams().token;
    const navigate = useNavigate(); // Import useNavigate
    const { register, handleSubmit } = useForm();

    const submitHandler = async (data) => {
        try {
            const obj = {
                token: token,
                password: data.password
            };
            const res = await axios.post("/user/resetpassword", obj);
            console.log(res.data);

            // If the password reset is successful, navigate to the login page
            alert("Password reset successful! Redirecting to login...");
            navigate("/login");  // Redirect to login page
        } catch (error) {
            console.error("Error resetting password:", error);
            alert("Failed to reset password. Please try again.");
        }
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit(submitHandler)} style={{
                display: "inline-block",
                textAlign: "left",
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                width: "400px"
            }}>
                <div>
                    <label style={{ fontWeight: "bold" }}>New Password</label>
                    <input 
                        type='password' 
                        {...register("password", { required: true })} 
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginTop: "5px",
                            border: "1px solid #ccc",
                            borderRadius: "5px"
                        }}
                    />
                </div>
                <div>
                    <input 
                        type='submit' 
                        value="Reset Password"
                        style={{
                            backgroundColor: "#28a745",
                            color: "white",
                            border: "none",
                            padding: "10px",
                            marginTop: "15px",
                            fontSize: "16px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            width: "100%",
                            borderRadius: "5px",
                            transition: "background 0.3s"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}
                    />
                </div>
            </form>
        </div>
    );
};
