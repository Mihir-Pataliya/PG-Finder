import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./assets/css/adminlte.css";
import "./assets/css/adminlte.min.css";

import { UserSidebar } from "./components/layout/UserSidebar";
import { Userdashboard } from "./components/user/Userdashboard";
import { Login } from "./components/common/Login";
import { Signup } from "./components/common/Signup";
import { FormSidebar } from "./components/layout/FormSidebar";
import { Formdashboard } from "./components/form/Formdashboard";

import { ContactUsForm } from "./components/form/ContactUsForm";
import axios from 'axios';
import { Property } from "./components/form/Property";
import PrivateRoutes from "./hooks/PrivateRoutes";
import HomePage from "./components/common/Home";
import { Addpg } from "./components/form/Addpg";
import { ViewMyPg } from "./components/form/ViewMyPg";
import { UpdateMyPg } from "./components/form/UpdateMyPg";

import AboutPage from "./components/common/About";
import { Searchpg } from "./components/form/Searchpg";
// import { Property1 } from "./components/user/Property1";
import PGDetails from "./components/user/PgDetails";
import { ForgetPassword } from "./components/common/Forgotpassword";
import { ResetPassword } from "./components/common/ResetPassword";

import  { AdminSidebar } from "./components/layout/AdminSidebar";
import Dashboard from "./components/admin/Dashboard";
import LandingPage from "./components/common/Landingpage";
import PgList from "./components/admin/PgList";
import { ViewownerPg } from "./components/user/ViewownerPg";
import AdminProtected from "./components/admin/Adminprotected";

function App() {

  axios.defaults.baseURL = "http://localhost:3000"

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
      <div className="app-wrapper">
        <Routes>

        
              {/* <FormSidebar />   */}
              {/* <HomePage />      */}
              <Route path="/" element={<LandingPage/>} />
            
          <Route path="/user" element={<UserSidebar/>}>
            <Route path="dashboard" element={<Userdashboard />} />
            {/* <Route path="property1" element={<Property1 />} /> */}
            <Route path="property" element={<Property />} />
            <Route path="Addpg" element={<Addpg />} />
            <Route path="pg/details/:id" element={<PGDetails />} />
            <Route path="ViewMypg" element={<ViewownerPg />} />
            <Route path="updatepg/:id" element={<UpdateMyPg />} />
            <Route path="About" element={<AboutPage/>} />
            <Route path="Home" element={<HomePage />} />
          </Route>
         

          {/* Private Routes for Authenticated Users */}
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/form" element={<FormSidebar />}>
              <Route path="dashboard" element={<Formdashboard />} />
              <Route path="property" element={<Property />} />
              <Route path="Home" element={<HomePage />} />
              <Route path="Addpg" element={<Addpg />} />
              <Route path="ViewMypg" element={<ViewMyPg />} />
              <Route path="updatepg/:id" element={<UpdateMyPg />} />
              <Route path="contact" element={<ContactUsForm />} />
              <Route path="searchpg" element={<Searchpg />} />
              <Route path="About" element={<AboutPage/>} />
            </Route>

          
            <Route path="/admin" element={<AdminSidebar/>}>
              <Route path="dashboard" element={<Dashboard/>} />
              <Route path="search" element={<Searchpg/>} />
              <Route path="property" element={<Property/>} />
              <Route path="PgList" element={<PgList/>} />
              <Route path="Home" element={<HomePage />} />
              <Route path="About" element={<AboutPage/>} />
              <Route path="Adminprotected" element={<AdminProtected/>} />


            </Route>

            <Route path="/pg-contact" element={<ContactUsForm />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path="/resetpassword/:token" element={<ResetPassword/>}/>

        </Routes>
      </div>
    </div>
  );
}


export default App;
