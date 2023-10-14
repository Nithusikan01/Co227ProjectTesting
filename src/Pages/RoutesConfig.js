import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Development from "../Pages/Development/Development";
import PresentStaffNew from "./Staff/presentStaffNew";
import PastStaffNew from "./Staff/pastStaffNew";
import GES from "../Pages/4_General_Elective_Subjects/Front-End/GES";
import AddPastStaff from "../Admin/Past Staff CRUD/pastStaffAdd";
import AddPresentStaff from "../Admin/Present Staff CRUD/presentStaffAdd";
import LogIn from "../components/Login/LoginSignup";
import PastStaffCRUD from "../Admin/Past Staff CRUD/PastStaffCrud";
import PresentStaffCRUD from "../Admin/Present Staff CRUD/PresentStaffCrud";
import ContactUs from "../Pages/ContactUs/ContactUs";
import EditPresentStaff from "../Admin/Present Staff CRUD/PresentStaffEdit";
import EditPastStaff from "../Admin/Past Staff CRUD/PastStaffEdit";

import LoginTest from "../Pages/LogIn/Login";
import RegisterTest from "../Pages/LogIn/Register"




const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Development" element={<Development/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/PresentStaffNew" element={<PresentStaffNew/>} />
      <Route path="/PastStaffNew" element={<PastStaffNew/>} />
      <Route path="/GES" element={<GES/>} />
      <Route path="/AddPastStaff" element={<AddPastStaff />} />
      <Route path="/AddPresentStaff" element={<AddPresentStaff />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/PastStaffCRUD" element={<PastStaffCRUD />} />
      <Route path="/PresentStaffCRUD" element={<PresentStaffCRUD />} />
      <Route path="/EditPresentStaff/:id" element={<EditPresentStaff/>} />
      <Route path="/EditPastStaff/:id" element={<EditPastStaff/>} />

      <Route path="/LoginTest" element={<LoginTest />} />
      <Route path="/RegisterTest" element={<RegisterTest />} />
  </Routes>
  );
};

export default RoutesConfig;
