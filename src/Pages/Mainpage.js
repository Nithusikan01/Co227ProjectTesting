import React, { useState, useEffect } from "react";
import "./MainPage.css";
import AppBar from "../components/Appbar/Appbar";
import TitleBar from "../components/Titlebar/Titlebar.js";
import SideBar from "../components/Sidebar/Sidebar.js";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./RoutesConfig"; // Import the RoutesConfig component
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
      <div className="content" style={{ minHeight: `${contentHeight}px` }}>
        <BrowserRouter>
          <TitleBar />
          <AppBar />
          <SideBar />
          <div className="routes-container">
            <RoutesConfig />
          </div>
        </BrowserRouter>
        <div className="footer-conatiner">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainPage;
