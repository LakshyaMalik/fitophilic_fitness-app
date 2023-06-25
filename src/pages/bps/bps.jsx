import React, { useState } from 'react';
import './bps.css';
export const BPS = () => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [message, setMessage] = useState('');

  const handleSystolicChange = (event) => {
    setSystolic(event.target.value);
  }

  const handleDiastolicChange = (event) => {
    setDiastolic(event.target.value);
  }

  const handleBloodSugarChange = (event) => {
    setBloodSugar(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (systolic >= 90 && systolic <= 120 && diastolic >= 60 && diastolic <= 80 && bloodSugar >= 70 && bloodSugar <= 140) {
      setMessage('Your blood pressure and blood sugar readings are normal!');
    } else {
      setMessage('Your blood pressure and/or blood sugar readings are not within normal ranges. Please consult your doctor.');
    }
  }

  return (
    <div className="bpm">
      <h1 className="h1">Blood Pressure and Blood Sugar Meter</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="text" htmlFor="systolic">Systolic Blood Pressure:</label>
          <input type="number" id="systolic" onChange={handleSystolicChange} value={systolic} required />
        </div>
        <div className="input-container">
          <label className="text" htmlFor="diastolic">Diastolic Blood Pressure:</label>
          <input type="number" id="diastolic" onChange={handleDiastolicChange} value={diastolic} required />
        </div>
        <div className="input-container">
          <label className="text" htmlFor="blood-sugar">Blood Sugar:</label>
          <input type="number" id="blood-sugar" onChange={handleBloodSugarChange} value={bloodSugar} required />
        </div>
        <button className='bptn' type="submit">Submit</button>
      </form>
      <p className='diag'>{message}</p>
    </div>
  );
};

