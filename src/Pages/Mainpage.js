import React, { useState,useEffect } from "react";
import './MainPage.css';
import AppBar from "../components/Appbar/Appbar";
import TitleBar from "../components/Titlebar/Titlebar.js";
import SideBar from "../components/Sidebar/Sidebar.js";
import Home from "./Home/Home";
import About from "./About EEU/About EEU";
import ContactUs from "./ContactUs/ContactUs";
import Development from "../Pages/Development/Development";
import PresentStaff from "../Pages/Staff/presentStaff";
import PastStaff from "../Pages/Staff/PastStaff";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyForm from "./Staff/FomDataAdd";
import PresentStaffNew from "./Staff/presentStaffNew";
import PastStaffNew from "./Staff/pastStaffNew";
import GES from "../Pages/4_General_Elective_Subjects/Front-End/GES";
import PastStaffForm from "./Staff/pastStaffForm";
import PresentStaffForm from "../Pages/Staff/presentStaffForm";
import Footer from "../components/Footer/footer";

function MainPage() {
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
        setContentHeight(document.documentElement.scrollHeight);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial adjustment on page load

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (  
    <>
        <div className="content">
            <BrowserRouter>
                <TitleBar/>
                <AppBar/>
                <SideBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About EEU" element={<About/>}/>
                    <Route path="/ContactUs" element={<ContactUs/>}/>
                    <Route path="/Development" element={<Development/>}/>
                    <Route path="/PresentStaff" element={<PresentStaff/>}/>
                    <Route path="/PastStaff" element={<PastStaff/>}/>
                    <Route path="/MyForm" element={<MyForm/>}/>
                    <Route path="/PresentStaffNew" element={<PresentStaffNew/>}/>
                    <Route path="/PastStaffNew" element={<PastStaffNew/>}/>
                    <Route path="/GES" element={<GES/>}/>
                    <Route path="/PastStaffForm" element={<PastStaffForm/>}/>
                    <Route path="/PresentStaffForm" element={<PresentStaffForm/>}/>
                </Routes>
            </BrowserRouter>
        </div>

        <div
            className="footer"
            style={{
                position: contentHeight < window.innerHeight ? "absolute" : "static"
            }}
        >
        <Footer />
        </div>
    </>
  
    );
  }
  
  export default MainPage;