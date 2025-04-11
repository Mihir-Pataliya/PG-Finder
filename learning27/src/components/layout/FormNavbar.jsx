import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const FormNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // or any login state
    navigate('/Login');
  };

  return (
    <div style={{
      background: "black",
      width: "100%",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"
    }}>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* Centered Links */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <ul className="navbar-nav" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/form/Home"
                style={linkStyle}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/form/About"
                style={linkStyle}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Right-aligned Logout */}
        <div>
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.background = "#d32f2f"}
            onMouseLeave={(e) => e.target.style.background = "transparent"}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

// Shared style functions
const linkStyle = {
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  transition: "background 0.3s",
  textDecoration: "none"
};

const hoverEnter = (e) => e.target.style.background = "#388E3C";
const hoverLeave = (e) => e.target.style.background = "transparent";