import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const featureStyle = {
        display: "flex",
        gap: "20px",
        marginTop: "20px"
    };

    const cardStyle = {
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "30%",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };

    return (
        <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", backgroundColor: "#eef2f7", minHeight: "100vh" }}>
            
            {/* Logo and Welcome Section */}
            <div style={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                padding: "50px 20px",
                textAlign: "center",
                borderRadius: "10px"
            }}>
                <h1>🏠 PG Finder</h1>
                <p style={{ fontSize: "18px", marginTop: "10px" }}>
                    Your One-Stop Solution to Find Affordable, Comfortable, and Safe PG Accommodations.
                </p>
            </div>

            {/* About PG Finder Section */}
            <h2 style={{ marginTop: "30px", textAlign: "center" }}>✨ Why Choose PG Finder?</h2>
            <div style={featureStyle}>
                <div style={cardStyle}>
                    <h3>Affordable Prices</h3>
                    <p>We help you find budget-friendly PGs without compromising on quality and comfort.</p>
                </div>

                <div style={cardStyle}>
                    <h3>Comfort & Convenience</h3>
                    <p>Enjoy amenities like Wi-Fi, laundry, and home-cooked meals for a stress-free stay.</p>
                </div>

                <div style={cardStyle}>
                    <h3>Prime Locations</h3>
                    <p>Our listings cover PGs near popular colleges, offices, and transport hubs.</p>
                </div>
            </div>

            {/* Facilities Section */}
            <h2 style={{ marginTop: "40px", textAlign: "center" }}>🏠 Facilities We Offer</h2>
            <ul style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                padding: "0",
                marginTop: "15px",
                textAlign: "center"
            }}>
                <li style={cardStyle}>📶 Free Wi-Fi</li>
                <li style={cardStyle}>🍱 Healthy Food</li>
                <li style={cardStyle}>🚿 Laundry Service</li>
                <li style={cardStyle}>🚗 Parking Area</li>
                <li style={cardStyle}>💪 Gym Facility</li>
                <li style={cardStyle}>🔒 24/7 Security</li>
                <li style={cardStyle}>🧹 Clean & Hygienic Environment</li>
                <li style={cardStyle}>📞 Emergency Support</li>
            </ul>

            {/* CTA Section */}
            <div style={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
                marginTop: "30px",
                borderRadius: "10px"
            }}>
                <h2>Find Your Ideal PG Today!</h2>
                <p>Join thousands of happy residents who found their perfect stay with PG Finder.</p>
                <Link to="/signup"
                style={{
                    backgroundColor: "#fff",
                    color: "#4CAF50",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    cursor: "pointer"
                }}>
                    Get Started
                 </Link>

            </div>
        </div>
    );
};

export default HomePage;
