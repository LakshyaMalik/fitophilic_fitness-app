import React, { useState } from "react";
import "./workout.css";
import { exerciseList } from "./exercise";


const Workout = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [exercises, setExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState(0);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    let start = 0;
    let end = 0;
    switch (day) {
      case "mon":
        start = 1;
        end = 7;
        break;
      case "tue":
        start = 7;
        end = 14;
        break;
      case "wed":
        start = 14;
        end = 20;
        break;
      case "thu":
        start = 19;
        end = 22;
        break;
      case "fri":
        start = 23
        end = 23;
        break;
      case "sat":
        start = 3;
        end = 11;
        break;
      case "sun":
        start = 17;
        end = 22;
        break;
      default:
        break;
    }
    if (start && end) {
      setExercises(exerciseList.slice(start, end));
      setCurrentExercise(0);
    }
    const daysContainer = document.querySelector('.days-container');
    daysContainer.style.display = 'none';
  };



  const handleDoneClick = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      return "You are all done for today keep up!";
    }
  };

  const getDayMessage = () => {
    switch (selectedDay) {
      case "fri":
        return "Today is your rest day!";
      default:
        return "Today's exercises:";
        
    }
  };

  return (
    <div className="workout">
      <div className="days-container">
        <div className="dropdown">
          <button className="dropbtn"></button>
          
          <div className="dropdown-content">
            <button className="sbtn" onClick={() => handleDayClick("mon")}>Mon</button>
            <button className="sbtn" onClick={() => handleDayClick("tue")}>Tue</button>
            <button className="sbtn" onClick={() => handleDayClick("wed")}>Wed</button>
            <button className="sbtn" onClick={() => handleDayClick("thu")}>Thu</button>
            <button className="sbtn" onClick={() => handleDayClick("fri")}>Fri</button>
            <button className="sbtn" onClick={() => handleDayClick("sat")}>Sat</button>
            <button className="sbtn" onClick={() => handleDayClick("sun")}>Sun</button>
          </div>
        </div>
      </div>
      <div className="exercise-container">
        {selectedDay ? (
          <div>
            <h2>{getDayMessage()}</h2>
            <div className="exercise-list">
              {exercises.length > 0 ? (
                <div className="exercise">
                  <h3>{exercises[currentExercise].name}</h3>
                  <h3>{exercises[currentExercise].reps}</h3>
                  <img src={exercises[currentExercise].img} alt={exercises[currentExercise].name} />
                  <button className="sbtn" onClick={handleDoneClick}>Done</button>
                </div>
              ) : (
                <div className="greet">No exercises for today!</div>
              )}
            </div>
          </div>
        ) : (

          <div className="gbox">
            <div className="greet">Lets Start todays workout!</div>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Workout;
