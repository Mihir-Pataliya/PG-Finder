import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    const res = await axios.post("/user/forgotpassword", data );

    alert("password forget successfully");
  };
  return (
    <div>
      <h1>email COMPONENT</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>email</label>

          <input
            type="text"
            {...register("email")}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};