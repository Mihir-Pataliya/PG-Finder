import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const sectionStyle = {
        backgroundColor: "#fff",
        borderRadius: "15px",
        padding: "40px",
        marginTop: "20px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        textAlign: "center"
    };

    const featureStyle = {
        display: "flex",
        gap: "20px",
        marginTop: "20px"
    };

    const cardStyle = {
        backgroundColor: "#4CAF50",
        color: "#fff",
        borderRadius: "10px",
        padding: "20px",
        width: "30%",
        textAlign: "center",
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)"
    };

    return (
        <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", backgroundColor: "#f0f8ff", minHeight: "100vh" }}>
            
            {/* Welcome Section */}
            <div style={{
                backgroundColor: "#1E88E5",
                color: "#fff",
                padding: "60px 20px",
                textAlign: "center",
                borderRadius: "15px"
            }}>
                <h1>🌍 Discover Your Ideal PG with PG Finder</h1>
                <p style={{ fontSize: "18px", marginTop: "10px" }}>
                    Finding the perfect PG shouldn’t be stressful. We simplify your search with trusted listings, verified accommodations, and user-friendly features — ensuring you feel at home, away from home.  
                </p>
            </div>

            {/* What Makes Us Special */}
            <div style={sectionStyle}>
                <h2>💫 What Makes PG Finder Special?</h2>
                <div style={featureStyle}>
                    <div style={cardStyle}>
                        <h3>🔒 Verified & Secure</h3>
                        <p>All PGs are verified to ensure you experience a safe and comfortable stay.</p>
                    </div>

                    <div style={cardStyle}>
                        <h3>💼 Professional Support</h3>
                        <p>Our dedicated team is available 24/7 to assist you with your queries.</p>
                    </div>

                    <div style={cardStyle}>
                        <h3>📊 Transparent Pricing</h3>
                        <p>No hidden charges! Find budget-friendly PGs that suit your needs.</p>
                    </div>
                </div>
            </div>

            {/* How PG Finder Works Section */}
            <div style={sectionStyle}>
                <h2>🛠️ How PG Finder Works?</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", textAlign: "left" }}>
                    <div style={{ backgroundColor: "#FFCA28", padding: "20px", borderRadius: "10px", color: "#000" }}>
                        <h3>🔎 Step 1: Search & Filter</h3>
                        <p>Filter PGs based on budget, location, and facilities.</p>
                    </div>

                    <div style={{ backgroundColor: "#8BC34A", padding: "20px", borderRadius: "10px", color: "#fff" }}>
                        <h3>📋 Step 2: Compare Listings</h3>
                        <p>Compare features like Wi-Fi, meals, and security to pick your ideal PG.</p>
                    </div>

                    <div style={{ backgroundColor: "#42A5F5", padding: "20px", borderRadius: "10px", color: "#fff" }}>
                        <h3>📞 Step 3: Contact Owners</h3>
                        <p>Get direct contact details of PG owners and schedule visits easily.</p>
                    </div>

                    <div style={{ backgroundColor: "#F4511E", padding: "20px", borderRadius: "10px", color: "#fff" }}>
                        <h3>✅ Step 4: Finalize Your Stay</h3>
                        <p>Confirm your booking with secure payment options and enjoy your new home!</p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div style={{
                backgroundColor: "#1E88E5",
                color: "#fff",
                textAlign: "center",
                padding: "30px",
                marginTop: "30px",
                borderRadius: "15px"
            }}>
                <h2>📩 Need Help Finding a PG?</h2>
                <p>Our team is here to guide you every step of the way.</p>
                <Link to="/form/contact" style={{
                    backgroundColor: "#FFEB3B",
                    color: "#1E88E5",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}>
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default AboutPage;
