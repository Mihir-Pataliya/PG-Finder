import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';


export const UpdateMyPg = () => {
    const id = useParams().id;
    const [states, setstates] = useState([])
    const [cities, setcities] = useState([]);
    const [areas, setareas] = useState([])
   
    const getallstate=async()=>{
        const res=await axios.get("/state/getallstate")
        console.log(res.data);
        setstates(res.data.data)
    }

    const getCityByStateId = async (id) => {
        const res = await axios.get("city/getcitybystate/" + id);
        console.log("city response...", res.data);
        setcities(res.data.data);
      };

      const getAreaByCityId = async (id) => {
        const res = await axios.get("/area/getareabycity/" + id);
        console.log(res.data)
        setareas(res.data.data);
      };
    

      
    useEffect(()=>{
             getallstate()
            
    },[])

    const {register,handleSubmit}=useForm()

    
    const submitHandler = async (data) => {
        try {
            data.userId = localStorage.getItem("id");
            if (data._id) delete data._id;

            const res = await axios.put(`/pg/updatePg/${id}`, data);
           
            console.log(res.data);
        } catch (error) {
            console.error("Error updating:", error);
        }
    };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        <h1>Add Pg</h1>
        <form onSubmit={handleSubmit(submitHandler)} style={{ 
            display: "inline-block", textAlign: "left", 
            backgroundColor: "#f9f9f9", padding: "20px", 
            borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "400px"
        }}>

    <div>
          <label style={{ fontWeight: "bold" }}>pgName</label>
          <input type="text" {...register("pgName")} style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px" }}></input>
    </div>

    <div>
          <label style={{ fontWeight: "bold" }}>ownerName</label>
          <input type="text" {...register("ownerName")} style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px" }}></input>
    </div>

    <div>
        <label style={{ fontWeight: "bold" }}>SELECT state</label>
         <select {...register("stateId")} onChange={(event)=>{getCityByStateId(event.target.value)}} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <option>Select State</option>
                {
                    states?.map((state)=>{
                        return<option value={state._id}>{state.name}</option>
                    })
                }
        </select>
    </div>

    <div>
           <label style={{ fontWeight: "bold" }}>SELECT CITY</label>
           <select {...register("cityId")} onChange={(event)=>{getAreaByCityId(event.target.value)}} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}>
                <option>Select city</option>
                {
                    cities?.map((city)=>{
                        return<option value={city._id}>{city.name}</option>
                    })
                }
        </select>
    </div>

    <div>
        <label style={{ fontWeight: "bold" }}>Select Area</label>
        <select {...register("areaId")} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <option>Select Area</option>
            {
                areas?.map((area)=>{
                    return<option value={area._id}>{area.name}</option>
                })
            }
        </select>
    </div>


    <div>
        <label style={{ fontWeight: "bold" }}>contactNumber</label>
        <input type="number" {...register("contactNumber")} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}></input>
    </div>
    

 

    <div>
        <label style={{ fontWeight: "bold" }}>rent</label>
        <input type="number" {...register("rent")} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}></input>
    </div>

    <div>
        <label style={{ fontWeight: "bold" }}>facilities</label>
        <input type="text" {...register("facilities")} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}></input>
    </div>

     
    <div>
        <label style={{ fontWeight: "bold" }}>address</label>
        <input type="text" {...register("address")} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}></input>
    </div>



    <div className="mb-3">
                <label className="form-label">pgURL</label>
                <input type="text" className="form-control" {...register("pgURL")} />
              </div>


    <div>
        <input type="submit" value="update" style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "10px", marginTop: "15px", fontSize: "16px", cursor: "pointer", fontWeight: "bold", width: "100%", borderRadius: "5px", transition: "background 0.3s" }} 
            onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}>
        </input>
    </div>

    </form>
    </div>
  )
}
