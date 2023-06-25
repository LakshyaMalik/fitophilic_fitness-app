import React, { useState } from 'react';
import './calorie.css';

export const Calories = () => {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState({ hours: 0, minutes: 0 });
  const [weight, setWeight] = useState(70);
  const [burnt, setBurnt] = useState(0);

  const calculateBurnt = () => {
    const distanceInKm = distance / 1000;
    const timeInHrs = time.hours + time.minutes / 60;
    const caloriesPerKmPerKg = 0.7;
    const burnt = distanceInKm * timeInHrs * weight * caloriesPerKmPerKg;
    setBurnt(burnt);
  };

  const handleDistanceChange = event => {
    setDistance(parseInt(event.target.value));
  };

  const handleTimeChange = event => {
    const { value, name } = event.target;
    setTime({ ...time, [name]: parseInt(value) });
  };

  const handleWeightChange = event => {
    setWeight(parseInt(event.target.value));
  };

  return (
    <div className="cal">
      <label className="ttl" htmlFor="distance">
        Distance (m):{' '}
      </label>
      <input type="number" id="distance" onChange={handleDistanceChange}
        value={distance}
      />
      <br />
      <>
      
      <label className='time ttl' htmlFor="hours">
        Time :{' '} hrs
      </label>
      <input
        type="number" className='time ttl' name="hours" onChange={handleTimeChange}
        value={time.hours}
      />
      <label className='ttl time' htmlFor="minutes">
        {' '} min
      </label>
      <input
        type="number" className='time' name="minutes"  onChange={handleTimeChange}
        value={time.minutes}
      />
      </>
      <br />
      <label className="ttl" htmlFor="weight">
        Weight (kg):{' '}
      </label>
      <input
        type="number"
        id="weight"
        onChange={handleWeightChange}
        value={weight}
      />
      <br />
      <button className="calcbtn" onClick={calculateBurnt}>
        Calculate Calories Burnt
      </button>
      <br />
      <p className="diag">Calories Burnt: {burnt.toFixed(2)}</p>
    </div>
  );
};
