import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // clear token or auth info
    navigate("/Login"); // redirect to Login page
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
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/admin/Home"
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
                to="/admin/About"
                style={linkStyle}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                About
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-link"
                to="/Login"
                style={linkStyle}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                Login
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                className="nav-link"
                to="/Signup"
                style={linkStyle}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                Signup
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Right-aligned Logout Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            className="nav-link"
            onClick={handleLogout}
            style={{
              background: "transparent",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
              borderRadius: "8px"
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

// Shared styles
const linkStyle = {
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  transition: "background 0.3s",
  textDecoration: "none"
};

const hoverEnter = (e) => e.target.style.background = "#388E3C";
const hoverLeave = (e) => e.target.style.background = "transparent";