import React, { useState, useRef } from "react";

export default function App() {
  const [tasks, setTask] = useState(['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6', 'Task7',]);
  const inpRef = useRef();

  const addTaskHandler = () => {
    const data = inpRef.current.value;
    inpRef.current.value = "";
    setTask(
      [
        ...tasks, // spread
        data
      ]
    )
  }
  const removeItemHandler = (index) => {
    // console.log("index",index);
    const currentTasks = [...tasks];
    currentTasks.splice(index, 1);
    setTask(currentTasks);
  }

  const taskList = tasks.map(
    (task, index) => {
      return <Item index={index} removeItemHandler={removeItemHandler} key={index} data={task} />
    }
  )

  return (
    <div className="container mt-2">
      <div className="d-flex gap-2">
        <input ref={inpRef} type="text" placeholder="Enter task here..." className="form-control" />
        <button onClick={addTaskHandler} className="btn btn-primary">Add</button>
      </div>
      <ul className="list-unstyled">
        {
          tasks.length == 0
            ? <h6 className="text-center my-2">Add your first task here</h6>
            : taskList
        }

      </ul>
    </div>
  )
}


const Item = (props) => {
  return <li className="postion-relative my-3 shadow-sm p-2 rounded bg-secondary text-white">{props.data}
    <span
      onClick={() => props.removeItemHandler(props.index)}
      style={
        {
          cursor: "pointer",
          right: 100,

        }
      } className="position-absolute  fa fa-times"></span>
  </li>
}