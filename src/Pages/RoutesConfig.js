import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Development from "../Pages/Development/Development";
import PresentStaffNew from "./Staff/presentStaffNew";
import PastStaffNew from "./Staff/pastStaffNew";
import GES from "../Pages/4_General_Elective_Subjects/Front-End/GES";
import AddPastStaff from "./Staff/pastStaffForm";
import AddPresentStaff from "../Pages/Staff/presentStaffForm";
import LogIn from "../components/Login/LoginSignup";
import PastStaffCRUD from "../Admin/Past Staff CRUD/PastStaffCrud";
import PresentStaffCRUD from "../Admin/Present Staff CRUD/PresentStaffCrud";
import condtactUs from "../Pages/ContactUs/ContactUs";
import ContactUs from "../Pages/ContactUs/ContactUs";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Development" element={<Development />} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/PresentStaffNew" element={<PresentStaffNew />} />
      <Route path="/PastStaffNew" element={<PastStaffNew />} />
      <Route path="/GES" element={<GES />} />
      <Route path="/AddPastStaff" element={<AddPastStaff />} />
      <Route path="/AddPresentStaff" element={<AddPresentStaff />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/PastStaffCRUD" element={<PastStaffCRUD />} />
      <Route path="/PresentStaffCRUD" element={<PresentStaffCRUD />} />
    </Routes>
  );
};

export default RoutesConfig;
