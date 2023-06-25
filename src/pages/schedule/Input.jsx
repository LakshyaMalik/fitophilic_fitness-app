import React, { useRef } from 'react';
import './schedule.css';
import {RiAddFill} from "react-icons/ri";

export default function Input(props) {
    const inputBox = useRef();
return (
    <div className='input'>
        <input type="text" placeholder='Add exercise here' className='tag' ref={inputBox}/>
        <div className='prophand' onClick={() => {
            props.handler(inputBox.current.value)
            inputBox.current.value = "";
        } }>
            <RiAddFill/>
        </div>
    </div>
    )
}