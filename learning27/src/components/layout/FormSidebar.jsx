import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FormNavbar } from "./FormNavbar";

export const FormSidebar = () => {
  return (
    <>
      <FormNavbar />
      <aside
        className="app-sidebar bg-dark shadow"
        style={{
          width: "260px",
          height: "100vh",
          color: "#fff",
          padding: "20px",
        }}
        data-bs-theme="dark"
      >
        <div
          className="sidebar-brand"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/701/546/small/pg-letter-logo-isolated-on-white-background-vector.jpg"
            alt=""
            style={{
              width: "60px",
              borderRadius: "50%",
            }}
          />
          <span className="brand-text fw-bold fs-4">PG Finder</span>
        </div>

        <div
          style={{
            overflowY: "auto",
            maxHeight: "calc(100vh - 150px)",
          }}
        >
          <nav className="mt-2">
            <ul className="nav sidebar-menu flex-column" role="menu" style={{ listStyle: "none", padding: 0 }}>
              
              <li className="nav-item menu-open">
                <Link to="/form/dashboard" className="nav-link active" 
                style={{ 
                  color: "#fff", 
                  padding: "10px 15px", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "12px",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#555")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}>
                  <i className="nav-icon bi bi-house-door" style={{ fontSize: "20px" }} />
                  <p>Registration Form</p>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/form/property" className="nav-link">
                  <i className="nav-icon bi bi-person-circle" style={{ fontSize: "20px" }} />
                  <p>Property Form</p>
                </Link>
              </li> */}

              
              {/* <li className="nav-item">
                <Link to="/form/Addpg" className="nav-link">
                  <i className="nav-icon bi bi-plus-square" style={{ fontSize: "20px" }} />
                  <p>Addpg</p>
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="/form/ViewMyPg" className="nav-link">
                  <i className="nav-icon bi bi-eye" style={{ fontSize: "20px" }} />
                  <p>ViewPG</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/form/Searchpg" className="nav-link">
                  <i className="nav-icon bi bi-search" style={{ fontSize: "20px" }} />
                  <p>SearchPG</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/form/contact" className="nav-link">
                  <i className="nav-icon bi bi-envelope" style={{ fontSize: "20px" }} />
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
};
