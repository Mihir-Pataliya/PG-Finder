import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export const Property = () => {
    const [states, setstates] = useState([])
    const [cities, setcities] = useState([]);
    const [areas, setareas] = useState([])
    const [categories, setCategories] = useState([]);

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

    const getallcategory = async () => {
        try {
            const res = await axios.get("/category/getallcategory");
            setCategories(res.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        getallstate()
        getallcategory()
    }, [])

    const { register, handleSubmit } = useForm()
    const submitHandler = async (data) => {
        const userId = localStorage.getItem("id")
        data.userId = userId;
        const res = await axios.post("/property/addproperty", data)
        console.log(res.data)
    }

    const inputStyle = {
        width: "100%",
        padding: "10px",
        border: "2px solid #4CAF50",
        borderRadius: "8px",
        marginBottom: "15px",
        transition: "border 0.3s",
        outline: "none"
    };

    const labelStyle = {
        fontWeight: "bold",
        color: "#4CAF50",
        marginBottom: "5px",
        display: "block"
    };

    const formStyle = {
        display: "inline-block",
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        width: "400px"
    };

    return (
        <div 
            style={{ 
                textAlign: "center", 
                fontFamily: "Arial, sans-serif", 
                padding: "40px",
                backgroundColor: "yellow"  // Light green background added here
            }}
        >
            <h1 style={{ color: "#4CAF50", marginBottom: "20px" }}>Property Details</h1>
            <form onSubmit={handleSubmit(submitHandler)} style={formStyle}>

                <div>
                    <label style={labelStyle}>Name</label>
                    <input type="text" {...register("name")} style={inputStyle}></input>
                </div>

                <div>
                    <label style={labelStyle}>Address</label>
                    <input type="text" {...register("address")} style={inputStyle}></input>
                </div>

                <div>
                    <label style={labelStyle}>Select State</label>
                    <select {...register("stateId")} onChange={(e) => getCityByStateId(e.target.value)} style={inputStyle}>
                        <option>Select State</option>
                        {states?.map((state) => (
                            <option key={state._id} value={state._id}>{state.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Select City</label>
                    <select {...register("cityId")} onChange={(e) => getAreaByCityId(e.target.value)} style={inputStyle}>
                        <option>Select City</option>
                        {cities?.map((city) => (
                            <option key={city._id} value={city._id}>{city.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Select Area</label>
                    <select {...register("areaId")} style={inputStyle}>
                        <option>Select Area</option>
                        {areas?.map((area) => (
                            <option key={area._id} value={area._id}>{area.name}</option>
                        ))}
                    </select>
                </div>

                <div>
    <label style={labelStyle}>Property Type</label>
    <select {...register("type", { required: true })} style={inputStyle}>
        <option value="">Select Property Type</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Plot">Plot</option>
    </select>
</div>

                <div>
                    <label style={labelStyle}>Price</label>
                    <input type="number" {...register("price")} style={inputStyle}></input>
                </div>

                <div>
                    <label style={labelStyle}>Size</label>
                    <input type="number" {...register("size")} style={inputStyle}></input>
                </div>

                <div>
                    <label style={labelStyle}>Bedrooms</label>
                    <input type="number" {...register("bedrooms")} style={inputStyle}></input>
                </div>

                <div>
                    <label style={labelStyle}>Bathrooms</label>
                    <input type="number" {...register("bathrooms")} style={inputStyle}></input>
                </div>

                <div>
                    <label style={labelStyle}>Amenities</label>
                    <input type="text" {...register("amenities")} style={inputStyle}></input>
                </div>

                <div>
                    <label style={labelStyle}>Description</label>
                    <input type="text" {...register("description")} style={inputStyle}></input>
                </div>

                <div>
                    <label style={labelStyle}>Year Built</label>
                    <input type="number" {...register("yearBuilt")} style={inputStyle}></input>
                </div>

                <div>
                    <label style={labelStyle}>Status</label>
                    <select {...register("status")} style={inputStyle}>
                        <option value="Available">Available</option>
                        <option value="Sold">Sold</option>
                        <option value="Rented">Rented</option>
                    </select>
                </div>



                <div>
                    <label style={labelStyle}>furnishType</label>
                    <select {...register("furnishType")} style={inputStyle}>
                        <option value="Fully Furnished">Fully Furnished</option>
                        <option value="Semi-Furnished">Semi-Furnished</option>
                        <option value="Unfurnished">Unfurnished</option>
                    </select>
                </div>


                <div>
                    <label style={labelStyle}>Select Category</label>
                    <select {...register("categoryId")} style={inputStyle}>
                        <option>Select Category</option>
                        {categories?.map((category) => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <input
                        type="submit"
                        style={{
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
    )
}
