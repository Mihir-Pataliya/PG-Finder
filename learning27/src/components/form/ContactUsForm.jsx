import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

export const ContactUsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {
        try {
            const res = await axios.post("contact/addcontact", data);
            console.log("Response:", res.data);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to submit the form.");
        }
    };

    return (
        <div style={{
            display: "flex",
            height: "100vh",
            background: "linear-gradient(135deg, #6e8efb, #a777e3)",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: "350px",
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
                <h1 style={{ textAlign: "center", color: "#6e8efb" }}>Contact Us</h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label style={{ fontWeight: "bold", display: "block" }}>Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            style={inputStyle}
                        />
                        {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold", display: "block" }}>Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "Invalid email format"
                                }
                            })}
                            style={inputStyle}
                        />
                        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold", display: "block" }}>Message</label>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            rows="4"
                            style={inputStyle}
                        ></textarea>
                        {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold", display: "block" }}>Phone</label>
                        <input
                            type="number"
                            {...register("phone", { required: "Phone is required" })}
                            style={inputStyle}
                        />
                        {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            style={submitButtonStyle}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

// Input Style
const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxSizing: "border-box",
};

// Error Style
const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "5px"
};

// Submit Button Style
const submitButtonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#6e8efb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px"
};
