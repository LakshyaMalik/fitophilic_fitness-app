import React, { useState, useEffect } from "react";
import './you.css';

export const You = () => {
  const [name, setName] = useState('Lakshya Malik');
  const [age, setAge] = useState(20);
  const [email, setEmail] = useState('light4403@gmail.com');
  const [score, setScore] = useState(0);
  const [weight, setWeight] = useState(75);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(10);

  const heightCm = (heightFeet * 30.48) + (heightInches * 2.54);
  const bmi = (weight / ((heightCm / 100) ** 2)).toFixed(2);

  const healthy = () => {
    if(bmi<19){
      return(<p className="red">Underweight!</p>);
    }
    else if(bmi>=19 && bmi<25){
      return(<p className="green">Healthy</p>);
    }
    else if(bmi>25 && bmi<30){
      return(<p className="orange">Overweight!</p>);
    }
    else if(bmi>30){
      return(<p className="red">Obesse!</p>);
    }
  }

  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    if (storedScore !== null) {
      setScore(parseInt(storedScore));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  return (
    <div className="you">
      <div className="profile">
        <h2>{name}</h2>
        <p>Age: 
        <input type="number" value={age} onChange={(e) => setWeight(e.target.value)} /></p>
        <p>Email: {email}</p>
        <p>Points: {score}</p>
        <p>
          Weight: 
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /> kg
        </p>
        <p>
          Height:
          <input type="number" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} /> ft
          <input type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} /> in
        </p>
        <p>BMI: {bmi}</p>
        <h3>{healthy()}</h3>
        {/* <button onClick={incrScore}>Increase Score</button> */}
      </div>
    </div>
  );
}
