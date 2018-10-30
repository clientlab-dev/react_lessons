//import macKeys from "./vendor/macKeys.js";


import ReactDOM from 'react-dom';
import React from 'react';



import ToDoList from "../components/ToDoList/ToDoList/ToDoList";


//debugger;

window.toDoList = "";


window.toDoList = ReactDOM.render(
		<ToDoList />,
		document.getElementById('app')
	);


