import React, { useState } from "react";
import './KanbanBoard.css';
import { ArrowBack, ArrowForward, Delete } from "@mui/icons-material";


export default function KanbanBoard(props) { 

	let [tasks, setTasks] = React.useState([
		{ name: '1', stage: 0 },
		{ name: '2', stage: 0 },
	])

	let [stagesNames, setStagesNames] = React.useState(['Backlog', 'To Do', 'Ongoing', 'Done']);


	let stagesTasks = [];
	for (let i = 0; i < stagesNames.length; ++i) {
		stagesTasks.push([]);
	}
	for (let task of tasks) {
		const stageId = task.stage;
		stagesTasks[stageId].push(task);
	}

	
	function createTask() {
		const taskName = document.getElementById('create-task-input').value;
		if (taskName) {
			setTasks([...tasks, { name: taskName, stage: 0 }]);
		}
	}

	function deleteTask(task) {
		setTasks(tasks.filter(t => t.name !== task.name));
	}

	function forwardTask(task){
		const taskIndex = tasks.findIndex(t => t.name === task.name);
		const taskStage = tasks[taskIndex].stage;
		if(taskStage < stagesNames.length-1){
			tasks[taskIndex].stage = taskStage+1;
			setTasks([...tasks]);
		}
	}

	function backwardTask(task){
		const taskIndex = tasks.findIndex(t => t.name === task.name);
		const taskStage = tasks[taskIndex].stage;
		if(taskStage > 0){
			tasks[taskIndex].stage = taskStage-1;
			setTasks([...tasks]);
		}
	}
	

	return (
		<div className="mt-20 layout-column justify-content-center align-items-center">
			<section className="mt-50 layout-row align-items-center justify-content-center">
				<input id="create-task-input" type="text" className="large" placeholder="New task name" data-testid="create-task-input" />
				<button type="submit" className="ml-30" data-testid="create-task-button" onClick={createTask}>Create task</button>
			</section>

			<div className="mt-50 layout-row">
				{stagesTasks.map((tasks, i) => {
					return (
						<div className="card outlined ml-20 mt-0" key={`${i}`}>
							<div className="card-text">
								<h4>{stagesNames[i]}</h4>
								<ul className="styled mt-50" data-testid={`stage-${i}`}>
									{tasks.map((task, index) => {
										return <li className="slide-up-fade-in" key={`${i}${index}`}>
											<div className="li-content layout-row justify-content-between align-items-center">
												<span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
												<div className="icons">
													{
														task.stage === 0 ?
															<button className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-back`} disabled>
																{/* <i className="material-icons">arrow_back</i> */}
                                                                <ArrowBack/>
															</button>
															:
															<button className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-back`} onClick={()=>backwardTask(task)}>
																<ArrowBack style={{color:"yellowgreen"}}/>
															</button>
													}
													{
														task.stage === stagesNames.length-1 ?
															<button className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-forward`} disabled>
																<ArrowForward/>
															</button>
															:
															<button className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-forward`} onClick={()=>forwardTask(task)}>
																<ArrowForward style={{color:"green"}}/>
															</button>
													}
													<button className="icon-only danger x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-delete`} onClick={()=>deleteTask(task)}>
														<Delete style={{color:"red"}}/>
													</button>
												</div>
											</div>
										</li>
									})}
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

// function KanbanBoard() {

//     let [tasks, setTasks] = useState([
//         {
//             stage: 0,
//             name: "Task 1",
//         },
//         {
//             stage: 0,
//             name: "Task 2",
//         }
//     ]);

//     let [createTaskInput, setCreateTaskInput] = useState("");

//     let [stages, setStages] = useState(['Backlog', 'To Do', 'In Progress', 'Done']);

//     let stagesTasks = [];

//     for (let stage in stages) {
//         stagesTasks.push([]);
//     }

//     for (let i = 0; i < tasks.length; i++) {
//         stagesTasks[tasks[i].stage].push(tasks[i]);
//     }

//     function createTask() {
//         if (createTaskInput === "") {
//             alert("Please enter a task name");
//             return;
//         }
//         let newTask = {
//             stage: 0,
//             name: createTaskInput,
//         }
//         setTasks([...tasks, newTask]);
//     }
//     return (
//         <div>
//             <div className='flexbox-container'>
//                 <input type='text' id='create-task-input' className='create-task-input' placeholder='New Task Name' onChange={(event) => setCreateTaskInput(event.target.value)} />
//                 <button id='create-task-button' type='submit' onClick={createTask} className='create-task-button'>Create Task</button>
//             </div>
//             <div className='mt-50 layout-row flexbox-container'>
//                 {
//                     stagesTasks.map((stagesTask, index) => {
//                         return (
//                             <div className="card" key={index}>
//                                 <div className="card-text">
//                                     <h4>{stages[index]}</h4>
//                                     <ul className="styled mt-50 ul">
//                                         {
//                                             stagesTask.map((task, i) => {
//                                                 return (
//                                                     <div className="layout-row justify-content-between align-items-center flexbox-container">
//                                                         <li className="li-content slide-up-fade-in" key={`${index}+${i}`}>{task.name}</li>
//                                                         {
//                                                             index===0?
//                                                                 <button className="disabled">{ArrowBack}</button>
//                                                                 :
//                                                                 <button >{ArrowBack}</button>
//                                                         }
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </ul>
//                                 </div>
//                             </div>
//                         );
//                     })
//                 }
//             </div>
//         </div>
//     );
// }

// export default KanbanBoard;