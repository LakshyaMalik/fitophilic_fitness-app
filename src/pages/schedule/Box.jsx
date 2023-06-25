import React from 'react';
import Items from './Items';
import './schedule.css';

export default function Box(props) {
    const items = props.data.map(
        (SingleData, key) => {
            return <Items removeHandler={props.removeHandler} key={key} id={key} item={SingleData.item}/>
        }
    )
    return (
    <div className='BOX'>
        {items}
   </div>
    )
}
