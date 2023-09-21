import React, { useState,useEffect } from "react";
import './MainPage.css';
import AppBar from "../components/Appbar/Appbar";
import TitleBar from "../components/Titlebar/Titlebar.js";
import SideBar from "../components/Sidebar/Sidebar.js";
import Home from "./Home/Home";
import About from "./About EEU/About EEU";
import Development from "../Pages/Development/Development";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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
                    <Route path="/Development" element={<Development/>}/>
                    <Route path="/PresentStaffNew" element={<PresentStaffNew/>}/>
                    <Route path="/PastStaffNew" element={<PastStaffNew/>}/>
                    <Route path="/GES" element={<GES/>}/>
                    <Route path="/PastStaffForm" element={<PastStaffForm/>}/>
                    <Route path="/PresentStaffForm" element={<PresentStaffForm/>}/>
                </Routes>
                
            </BrowserRouter>
            <Footer />
        </div>
    </>
  
    );
  }
  
  export default MainPage;