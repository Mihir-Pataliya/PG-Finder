import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PGDetails = () => {
    const { id } = useParams();
    const [pg, setPg] = useState(null);

    useEffect(() => {
        const fetchPGDetails = async () => {
            try {
                const res = await axios.get(`/pg/getpgbyId/${id}`);
                console.log("API Response:", res.data); // Debugging
                setPg(res.data.data); 
            } catch (error) {
                console.error("Error fetching PG details:", error);
            }
        };
        fetchPGDetails();
    }, [id]);
    if (!pg) return <h2>Loading...</h2>;

    return (
        <div style={{ textAlign: "center" }}>
            <h2>{pg.pgName}</h2>
            <img src={pg.pgURL} alt="PG" style={{ height: 200, width: 300 }} />
            <p><strong>City:</strong> {pg.cityId.name}</p>
            <p><strong>Area:</strong> {pg.areaId.name}</p>
            <p><strong>Facilities:</strong>{pg.facilities}</p>
            <p><strong>Rent:</strong> ₹{pg.rent}</p>
        </div>
    );
};

export default PGDetails;
