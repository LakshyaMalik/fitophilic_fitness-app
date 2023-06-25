import { useEffect, useState } from "react";
import './schedule.css';
import Box from "./Box";
import Input from "./Input";

function Schedule() {
  const [todo,setToDo] = useState([]);

  const removeToDo = (id) => {
    console.log(id);
    const newtodo = todo.filter(
      (d, key) => {
        if (key !== id){
          return true;
        }else {
          return false;
        }
      }
    )
    setToDo(newtodo);
  }

  const addToDoHandler = (item) => {
  
    setToDo(
      [
        ...todo,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  return (
    <div className="bg">
      <div className="boc"> <div className="wht">Make Your Own Plan</div> 
        <Input handler={addToDoHandler}/>
        <Box data={todo} removeHandler = {removeToDo}/>
      </div>
    </div>
  );
}
export default Schedule;