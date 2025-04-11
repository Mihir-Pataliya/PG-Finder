import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CustLoader } from '../common/CustLoader';

export const ViewMyPg = () => {
    const [pgList, setPgList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPG, setSelectedPG] = useState(null);

    const getAllPgs = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get('/pg/getallpg'); // 🔁 Now fetching all PGs
            setPgList(res.data.data);
        } catch (err) {
            alert("Failed to load PGs");
        }
        setIsLoading(false);
    };

    const handleViewDetails = async (pg) => {
        setSelectedPG(pg);
        try {
            await axios.put(`/dashboard/increment-view/${pg._id}`);
        } catch (error) {
            console.error("Failed to increment view count:", error.message);
        }
    };

    useEffect(() => {
        getAllPgs();
    }, []);

    return (
        <div 
            style={{ 
                minHeight: "100vh", 
                padding: "20px",
                background: "linear-gradient(to right, #4b6cb7, #182848)", 
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            {isLoading && <CustLoader />}
            <h2 className="text-center text-white mb-4">Available PGs</h2>

            <div 
                className="container p-3 rounded shadow-lg" 
                style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.9)", 
                    border: "4px solid #ffffff",
                    borderRadius: "15px"
                }}
            >
                <table className="table table-hover table-bordered text-center bg-white shadow">
                    <thead style={{ background: "#333", color: "white" }}>
                        <tr>
                            <th>PG Name</th>
                            <th>Image</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pgList.map((pg) => (
                            <tr key={pg._id}>
                                <td className="align-middle">{pg.pgName}</td>
                                <td>
                                    <img 
                                        className="rounded shadow-sm"
                                        style={{ height: 100, width: 100, objectFit: "cover", border: "2px solid #666" }} 
                                        src={pg.pgURL} 
                                        alt="PG" 
                                    />
                                </td>
                                <td className="align-middle">{pg.cityId.name}</td> 
                                <td className="align-middle">
                                    <button 
                                        onClick={() => handleViewDetails(pg)} 
                                        className="btn btn-primary btn-sm"
                                        style={{ borderRadius: "5px" }}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedPG && (
                <div 
                    className="container mt-4 p-4 rounded shadow-lg text-white" 
                    style={{ 
                        maxWidth: "600px",
                        background: "rgba(255, 255, 255, 0.15)", 
                        border: "3px solid white",
                        borderRadius: "15px",
                        backdropFilter: "blur(10px)"
                    }}
                >
                    <h3 className="text-center text-warning">PG Details</h3>
                    <div className="text-center">
                        <img 
                            src={selectedPG.pgURL} 
                            alt="PG" 
                            className="rounded mb-3" 
                            style={{ width: "100%", height: "250px", objectFit: "cover", border: "2px solid white" }}
                        />
                    </div>
                    <p><strong>🏠 PG Name:</strong> {selectedPG.pgName}</p>
                    <p><strong>🌍 State:</strong> {selectedPG.stateId.name}</p>
                    <p><strong>🏙️ City:</strong> {selectedPG.cityId.name}</p>
                    <p><strong>📍 Area:</strong> {selectedPG.areaId.name}</p>
                    <p><strong>🔧 Facilities:</strong> {selectedPG.facilities}</p>
                    <p><strong>💰 Rent:</strong> ₹{selectedPG.rent}</p>
                    <p><strong>🛏️ Room Type:</strong> {selectedPG.Roomtype}</p>
                    <p><strong>🟢 Availability:</strong> {selectedPG.Availability}</p>
                    <p><strong>👀 Views:</strong> {selectedPG.views}</p>
                </div>
            )}
        </div>
    );
};
