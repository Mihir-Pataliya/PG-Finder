import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        {/* Sidebar toggle */}
        <button className="btn btn-primary me-3" data-lte-toggle="sidebar">
          <i className="bi bi-list fs-4"></i>
        </button>

        {/* Brand name */}
        <a className="navbar-brand fw-bold" href="#">
          PG Finder
        </a>

        {/* Navbar items */}
        <ul className="navbar-nav d-flex flex-row align-items-center ms-auto gap-3">
          {/* Search Icon */}
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="bi bi-search fs-5"></i>
            </a>
          </li>
          
          <li className="nav-item">
              <Link
                className="nav-link"
                to="/user/About"
                style={linkStyle}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                About
              </Link>
            </li>

            <li className="nav-item active">
                          <Link
                            className="nav-link"
                            to="/user/Home"
                            style={linkStyle}
                            onMouseEnter={hoverEnter}
                            onMouseLeave={hoverLeave}
                          >
                            Home
                          </Link>
                        </li>
          

          

          {/* Notifications */}
          {/* <li className="nav-item dropdown">
            <a className="nav-link text-white position-relative" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-bell-fill fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                3
              </span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end shadow">
              <li><h6 className="dropdown-header">Notifications</h6></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-envelope me-2" /> New message</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-people me-2" /> New request</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark me-2" /> New report</a></li>
            </ul>
          </li> */}

          {/* User Profile */}
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white d-flex align-items-center" href="#" data-bs-toggle="dropdown">
              <img
                src="https://i.pravatar.cc/40?img=12"
                className="rounded-circle me-2"
                alt="User"
                width="32"
                height="32"
              />
              <span className="d-none d-md-inline">Alex</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end shadow">
              <li className="dropdown-header text-center">
                <strong>Alex Pierce</strong><br />
                <small className="text-muted">Web Developer</small>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </li> */}

          
        </ul>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  transition: "background 0.3s",
  textDecoration: "none"
};

const hoverEnter = (e) => e.target.style.background = "#388E3C";
const hoverLeave = (e) => e.target.style.background = "transparent";
