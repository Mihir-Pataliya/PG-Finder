import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const Addpg = () => {
    const [states, setstates] = useState([])
    const [cities, setcities] = useState([]);
    const [areas, setareas] = useState([])

    const getallstate = async () => {
        const res = await axios.get("/state/getallstate")
        setstates(res.data.data)
    }

    const getCityByStateId = async (id) => {
        const res = await axios.get("city/getcitybystate/" + id);
        setcities(res.data.data);
    };

    const getAreaByCityId = async (id) => {
        const res = await axios.get("/area/getareabycity/" + id);
        setareas(res.data.data);
    };

    useEffect(() => {
        getallstate()
    }, [])

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submitHandler = async (data) => {
        const userId = localStorage.getItem("id")
        data.userId = userId;

        const formData = new FormData();
        formData.append("pgName", data.pgName);
        formData.append("ownerName", data.ownerName);
        formData.append("address", data.address);
        formData.append("stateId", data.stateId);
        formData.append("cityId", data.cityId);
        formData.append("areaId", data.areaId);
        formData.append("rent", data.rent);
        formData.append("image", data.image[0]);
        formData.append("userId", data.userId);
        formData.append("contactNumber", data.contactNumber);
        formData.append("facilities", data.facilities);

        const res = await axios.post("/pg/addWithFile", formData)
        navigate("/user/ViewMypg")
    }

    return (
        <div style={{
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div>
                <h1 style={{ color: "#fff", marginBottom: "20px" }}>Add PG</h1>

                <form onSubmit={handleSubmit(submitHandler)} style={{
                    display: "inline-block",
                    textAlign: "left",
                    backgroundColor: "#ffffff",
                    padding: "30px",
                    borderRadius: "15px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                    width: "400px"
                }}>

                    <div>
                        <label style={{ fontWeight: "bold" }}>pgName</label>
                        <input type="text" {...register("pgName")} style={inputStyle}></input>
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold" }}>ownerName</label>
                        <input type="text" {...register("ownerName")} style={inputStyle}></input>
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold" }}>SELECT state</label>
                        <select {...register("stateId")} onChange={(event) => { getCityByStateId(event.target.value) }} style={inputStyle}>
                            <option>Select State</option>
                            {states?.map((state) => (
                                <option value={state._id}>{state.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold" }}>SELECT CITY</label>
                        <select {...register("cityId")} onChange={(event) => { getAreaByCityId(event.target.value) }} style={inputStyle}>
                            <option>Select city</option>
                            {cities?.map((city) => (
                                <option value={city._id}>{city.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold" }}>Select Area</label>
                        <select {...register("areaId")} style={inputStyle}>
                            <option>Select Area</option>
                            {areas?.map((area) => (
                                <option value={area._id}>{area.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold" }}>contactNumber</label>
                        <input type="number" {...register("contactNumber")} style={inputStyle}></input>
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold" }}>rent</label>
                        <input type="number" {...register("rent")} style={inputStyle}></input>
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold" }}>facilities</label>
                        <input type="text" {...register("facilities")} style={inputStyle}></input>
                    </div>

                    <div>
                        <label style={{ fontWeight: "bold" }}>address</label>
                        <input type="text" {...register("address")} style={inputStyle}></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">PgUrl</label>
                        <input type="file" {...register("image")}></input>
                    </div>

                    <div>
                        <input type="submit" style={{
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            padding: "12px",
                            marginTop: "15px",
                            fontSize: "18px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            width: "100%",
                            borderRadius: "8px",
                            transition: "background 0.3s"
                        }}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#388E3C"}
                            onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"}
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}

// Input Style for cleaner code
const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "2px solid #4CAF50",
    borderRadius: "8px",
    marginBottom: "15px",
    transition: "border 0.3s",
    outline: "none"
};
