import React from 'react'
import { Navbar } from './Navbar'
import { Link, Outlet } from 'react-router-dom'



export const UserSidebar = () => {
  return (
    <>
            <Navbar></Navbar>
            
            <aside
                className="app-sidebar bg-body-secondary shadow"
                data-bs-theme="dark"
            >
                <div className="sidebar-brand">

                    <a href="./index.html" className="brand-link">

                        <img
                            src="https://c8.alamy.com/comp/2AJYMY3/initial-letter-pg-logo-design-vector-template-pg-letter-logo-design-2AJYMY3.jpg"
                            alt=""
                            className="brand-image opacity-75 shadow"
                        />

                        <span className="brand-text fw-light">Owner</span>

                    </a>

                </div>

                <div
                    className=""
                    data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
                    tabIndex={-1}
                    style={{
                        marginRight: "-16px",
                        marginBottom: "-16px",
                        marginLeft: 0,
                        top: "-8px",
                        right: "auto",
                        left: "-8px",
                        width: "calc(100% + 16px)",
                        padding: 8,
                    }}
                >
                    <nav className="mt-2">

                        <ul
                            className="nav sidebar-menu flex-column"
                            data-lte-toggle="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item menu-open">
                                {/* <a href="#" className="nav-link active">
                                    <i className="nav-icon bi bi-speedometer" />
                                    <p>
                                        Dashboard
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </a> */}
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        {/* <a href="./index.html" className="nav-link active">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>Home</p>
                                        </a> */}
                                    </li>

                                    
              
                                </ul>
                            </li>
                           
              
{/* 
              <li className="nav-item">
                <Link to="/user/property" className="nav-link">
                  <i className="nav-icon bi bi-envelope" style={{ fontSize: "20px" }} />
                  <p>property</p>
                </Link>
              </li> */}


              <li className="nav-item">
                <Link to="/user/Addpg" className="nav-link">
                  <i className="nav-icon bi bi-envelope" style={{ fontSize: "20px" }} />
                  <p>Addpg</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/user/ViewMypg" className="nav-link">
                  <i className="nav-icon bi bi-envelope" style={{ fontSize: "20px" }} />
                  <p>ViewMypg</p>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">
                  <i className="nav-icon bi bi-envelope" style={{ fontSize: "20px" }} />
                  <p>Dashboard</p>
                </Link>
              </li> */}

                            



                            <li className="nav-item">
                                {/* <a href="#" className="nav-link">
                                    <i className="nav-icon bi bi-box-seam-fill" />
                                    <p>
                                        Widgets
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </a> */}
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./widgets/small-box.html" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>Small Box</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./widgets/info-box.html" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>info Box</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./widgets/cards.html" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>Cards</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </nav>
                </div>
            </aside>
            <main className='app-main'>
                <Outlet></Outlet>
            </main>

        </>
  )
}
