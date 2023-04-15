import { useState } from "react";

function KanbanBoard() {
    
    let [tasks, setTasks] = useState([
        {
            stage:0,
            name:"Task 1",
        },
        {
            stage:0,
            name:"Task 2",
        }
    ]);

    let [createTaskInput, setCreateTaskInput] = useState("");

    function createTask() {
        if(createTaskInput === "") {
            alert("Please enter a task name");
            return;
        }
        let newTask = {
            stage:0,
            name:createTaskInput,
        }
        setTasks([...tasks, newTask]);
    }
    return (
        <div className='flexbox-container'>
            <input type='text' id='create-task-input' className='create-task-input' placeholder='New Task Name' onChange={(event)=>setCreateTaskInput(event.target.value)}/>
            <button id='create-task-button' type='submit' onClick={createTask} className='create-task-button'>Create Task</button>
        </div>
    );
}

export default KanbanBoard;