/** @format */

import React, { useState } from 'react';
import ListViewCall from '../ListView/ListView';


export default function MainTodo() {
	let [todo, setTodo] = useState([
		{
			id: '234524',
			text: 'alarm',
			desctiption: '3 to 4',
			time: new Date(),
			isComplete: false,
			isSelected: true,
		},
		{
			id: '234555524',
			text: 'alar55m',
			desctiption: '3 to 4',
			time: new Date(),
			isComplete: false,
			isSelected: true,
		},
		{
			id: '234555524',
			text: 'alar55m',
			desctiption: '3 to 4',
			time: new Date(),
			isComplete: false,
			isSelected: true,
		},
		{
			id: '234555524',
			text: 'alar55m',
			desctiption: '3 to 4',
			time: new Date(),
			isComplete: false,
			isSelected: true,
		},
		{
			id: '234555524',
			text: 'alar55m',
			desctiption: '3 to 4',
			time: new Date(),
			isComplete: false,
			isSelected: true,
		},
	])

	let toggleComplete = () => {

	}
	let toggleSelect = () => {

	}





	return (
		<div>
			<h1 className='display-3 text-center my-5'>Stack Todos</h1>
			<ListViewCall todo={todo} toggleSelect={toggleSelect} toggleComplete={ toggleComplete} />
		</div>
	);
}
