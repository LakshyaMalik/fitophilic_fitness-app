import React, { useState } from "react";
import "./headbar.css";
import logo from "./logo.png";
import {Link} from 'react-router-dom';
import {MdList , MdCalendarMonth , MdOutlineDirectionsRun} from "react-icons/md";
import { BsFillHeartPulseFill ,BsQuestionCircle} from "react-icons/bs";
import {  CiLogin,} from "react-icons/ci";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className={`menu ${menuOpen ? "open" : ""}`}>
       <div className="mebtn">
        <Link to="/bps" className="menopt"><BsFillHeartPulseFill/></Link>
        <Link to="/schedule" className="menopt"><MdCalendarMonth/></Link>
        <Link to="/calorie" className="menopt"><MdOutlineDirectionsRun/></Link>
        <Link to="/" className="menopt"><CiLogin/></Link>
        <Link to="/help" className="menopt"><BsQuestionCircle/></Link>
       </div>
      </nav>
      <button className="menu-toggle button" onClick={handleMenuClick}><MdList/>
      </button>
    </header>
  );
};

export default Header;
