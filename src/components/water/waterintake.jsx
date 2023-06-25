import React, { useState }from "react";
import "./waterintake.css";

const Waterintake = () => {
    const [count, setCount] = useState(0);
    const [previousDays, setPreviousDays] = useState([]);
  
    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };
  
    const save = () => {
      const countStr = count.toString();
      setCount(0);
  
      if (count < 8) {
        setPreviousDays((prevDays) => [...prevDays, { count: countStr, color: "red" }]);
      } else {
        setPreviousDays((prevDays) => [...prevDays, { count: countStr, color: "green" }]);
      }
    };
  
    const clearPreviousDays = () => {
      setPreviousDays([]);
    };
  
    return (
        <div className="water">
          <p> Drink 9 glasses of water daily </p>
      <div className="container">
        <h1>Today</h1>
        <h2 id="count-el">{count}</h2>
        <button className="cbtnw" id="increment-btn" onClick={increment}>
        +
        </button>
        <button className="cbtnw" id="save-btn" onClick={save}>
          Day Over
        </button>
        <p>Previous day's trackings:</p>
        <div className="previous-day-container">
          {previousDays.map((day, index) => (
            <div key={index} className={`previous-day previous-day-${day.color}`}>
              {day.count}
            </div>
          ))}
        </div>
        <button className="cbtnw" id="clr-btn" onClick={clearPreviousDays}>Clear Previous Days</button>
      </div>
        </div>
    );
  };
 
         

export default Waterintake;