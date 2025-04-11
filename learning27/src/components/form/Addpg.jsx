import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Addpg = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [areas, setAreas] = useState([]);

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    // Fetch all states
    const getAllStates = async () => {
        try {
            const res = await axios.get("/state/getallstate");
            if (res.data && res.data.data) {
                setStates(res.data.data);
            } else {
                console.error("Invalid state data format:", res.data);
            }
        } catch (error) {
            console.error("Error fetching states:", error);
        }
    };

    // Fetch cities based on selected state
    const getCityByStateId = async (id) => {
        try {
            const res = await axios.get(`/city/getcitybystate/${id}`);
            if (res.data && res.data.data) {
                setCities(res.data.data);
            } else {
                console.error("Invalid city data format:", res.data);
            }
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    // Fetch areas based on selected city
    const getAreaByCityId = async (id) => {
        try {
            const res = await axios.get(`/area/getareabycity/${id}`);
            if (res.data && res.data.data) {
                setAreas(res.data.data);
            } else {
                console.error("Invalid area data format:", res.data);
            }
        } catch (error) {
            console.error("Error fetching areas:", error);
        }
    };

    useEffect(() => {
        getAllStates();
    }, []);

    const submitHandler = async (data) => {
        try {
            const userId = localStorage.getItem("id");
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
            formData.append("Roomtype", data.Roomtype);
            formData.append("Availability", data.Availability);

            const res = await axios.post("/pg/addWithFile", formData);
            console.log("PG added successfully:", res.data);
            navigate("/user/ViewMyPg");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div style={containerStyle}>
            <div>
                <h1 style={headingStyle}>Add PG</h1>

                <form onSubmit={handleSubmit(submitHandler)} style={formStyle}>
                    <FormField label="PG Name" type="text" register={register("pgName")} />
                    <FormField label="Owner Name" type="text" register={register("ownerName")} />
                    
                    <div>
                        <label style={labelStyle}>Select State</label>
                        <select
                            {...register("stateId")}
                            onChange={(e) => getCityByStateId(e.target.value)}
                            style={inputStyle}
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state._id} value={state._id}>{state.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>Select City</label>
                        <select
                            {...register("cityId")}
                            onChange={(e) => getAreaByCityId(e.target.value)}
                            style={inputStyle}
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city._id} value={city._id}>{city.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>Select Area</label>
                        <select {...register("areaId")} style={inputStyle}>
                            <option value="">Select Area</option>
                            {areas.map((area) => (
                                <option key={area._id} value={area._id}>{area.name}</option>
                            ))}
                        </select>


                        
                    </div>

                    <FormField label="Contact Number" type="number" register={register("contactNumber")} />
                    <FormField label="Rent" type="number" register={register("rent")} />
                    <FormField label="Facilities" type="text" register={register("facilities")} />
                    <FormField label="Address" type="text" register={register("address")} />
                    <FormField label="Room Type" type="number" register={register("Roomtype")} />
                    <div>
    <label style={{ fontWeight: "bold" }}>Availability</label>
    <select {...register("Availability")} style={inputStyle}>
        <option value="">Select Availability</option>
        <option value="Vacant">Vacant</option>
        <option value="Occupied">Occupied</option>
        <option value="Few Slots Left">Few Slots Left</option>
    </select>
</div>
                    <div className="mb-3">
                        <label className="form-label" style={labelStyle}>PG Image</label>
                        <input type="file" {...register("image")} style={inputStyle} />
                    </div>

                    <input type="submit" value="Add PG" style={submitButtonStyle} />
                </form>
            </div>
        </div>
    );
};

// Reusable input field component
const FormField = ({ label, type, register }) => (
    <div>
        <label style={labelStyle}>{label}</label>
        <input type={type} {...register} style={inputStyle} />
    </div>
);

// Styles
const containerStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const headingStyle = {
    color: "#fff",
    marginBottom: "20px",
};

const formStyle = {
    display: "inline-block",
    textAlign: "left",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    width: "400px",
};

const labelStyle = {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "2px solid #4CAF50",
    borderRadius: "8px",
    marginBottom: "15px",
    transition: "border 0.3s",
    outline: "none",
};

const submitButtonStyle = {
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
    transition: "background 0.3s",
};
