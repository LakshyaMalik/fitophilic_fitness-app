import React from "react";
import "./navbar.css";
import {Link} from 'react-router-dom';
import { CiBowlNoodles , CiDumbbell , CiUser } from "react-icons/ci";
import { IoWaterSharp } from "react-icons/io5";
export const Navbar = () =>{

    return(
        <div className="navbar">
            <div className="link">
                <Link to="/home"><IoWaterSharp size={32}/>  Watercount</Link>
                <Link to="/workout"><CiDumbbell size={32}/>  Workout</Link>
                <Link to="/diet"><CiBowlNoodles size={32}/>  Diet</Link>
                <Link to="/you"><CiUser size={32}/>  You</Link>
            </div>
        </div>
    );
};