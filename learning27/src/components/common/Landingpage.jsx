import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const styles = {
        container: {
            width: '100vw',
            height: '100vh',
            margin: 0,
            padding: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: 'center',
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        subtitle: {
            fontSize: '1.5rem',
            marginBottom: '30px',
            maxWidth: '650px',
            padding: '0 15px',
        },
        buttons: {
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        button: {
            padding: '14px 30px',
            fontSize: '1rem',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            border: 'none',
        },
        loginBtn: {
            backgroundColor: '#ffffff',
            color: '#333',
        },
        signupBtn: {
            backgroundColor: '#ff9800',
            color: '#fff',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to PG Finder 🏠</h1>
            <p style={styles.subtitle}>
                Discover verified PGs in your city with modern facilities, affordable rent, and safe environments. Start your search now!
            </p>
            <div style={styles.buttons}>
                <Link to="/login" style={{ ...styles.button, ...styles.loginBtn }}>Login</Link>
                <Link to="/signup" style={{ ...styles.button, ...styles.signupBtn }}>Sign Up</Link>
            </div>
        </div>
    );
};

export default LandingPage;
