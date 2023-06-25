import React, { useState } from 'react';
import './schedule.css';
import {FaTrash} from "react-icons/fa";

export default function Items(props) {
    const [done, setDone] = useState(true);
    return (
    <div className='item'>
        <div>
            <span className='propitem'>
                {props.time}
            </span>
            <span className={`${done === true ? 'cancel' : 'slate-item'}`}>
                {props.item}
            </span>
        </div>
        <div onClick={() => props.removeHandler(props.id)}>
            <FaTrash className='trash'/>
        </div>
    </div>
    )
}
