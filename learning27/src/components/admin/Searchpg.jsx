import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const Searchpg = () => {
    const { register, handleSubmit } = useForm();
    const [pgResults, setPgResults] = useState([]);
    const [error, setError] = useState('');
    const [cities, setCities] = useState([]);
    const [areas, setAreas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCities = async () => {
        try {
            const res = await axios.get('/city/getallcity');
            setCities(res.data.data);
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    const getAreasByCity = async (cityId) => {
        try {
            const res = await axios.get(`/area/getareabycity/${cityId}`);
            setAreas(res.data.data);
        } catch (error) {
            console.error("Error fetching areas:", error);
        }
    };

    useEffect(() => {
        getCities();
    }, []);

    const submitHandler = async (data) => {
        setIsLoading(true);
        try {
            const res = await axios.post('/search/searchpg', data);
            if (res.status === 200) {
                setPgResults(res.data.data);
                setError('');
            }
        } catch (error) {
            setError('No PG found with the selected criteria');
            setPgResults([]);
        }
        setIsLoading(false);
    };

    return (
        <div style={{ 
            padding: '20px', 
            maxWidth: '1200px', 
            margin: '50px auto', 
            backgroundColor: 'lightblue', 
            borderRadius: '10px', 
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' 
        }}>
            <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>🔎 Search PG Form</h2>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>City:</label>
                    <select 
                        {...register("cityId")} 
                        onChange={(e) => getAreasByCity(e.target.value)} 
                        style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }} 
                        required
                    >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option key={city._id} value={city._id}>{city.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Area:</label>
                    <select 
                        {...register("areaId")} 
                        style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
                    >
                        <option value="">Select Area</option>
                        {areas.map((area) => (
                            <option key={area._id} value={area._id}>{area.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Rent (Max):</label>
                    <input
                        type="number"
                        {...register("rent")}
                        placeholder="Enter Maximum Rent"
                        style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
                    />
                </div>

                <button 
                    type="submit" 
                    style={{ 
                        width: '100%', 
                        backgroundColor: '#4CAF50', 
                        color: 'white', 
                        padding: '10px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer', 
                        marginTop: '10px', 
                        fontSize: '18px' 
                    }}
                >
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}

            <div style={{ marginTop: '20px' }}>
                <h3 style={{ textAlign: 'center', color: '#4CAF50' }}>🏠 PG Search Results</h3>
                {pgResults?.map((pg) => (
                    <div key={pg._id} 
                        style={{ 
                            backgroundColor: '#f9f9f9', 
                            padding: '15px', 
                            margin: '10px 0', 
                            borderRadius: '10px', 
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
                        }}
                    >
                        <strong style={{ color: '#333' }}>{pg.pgName}</strong> - ₹{pg.rent} <br />
                        🏙️ City: {pg.cityId.name} | 📍 Area: {pg.areaId.name} <br />
                        📞 Contact: {pg.contactNumber || 'N/A'}
                    </div>
                ))}
            </div>
        </div>
    );
};
