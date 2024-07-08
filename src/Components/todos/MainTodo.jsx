/** @format */

import React from 'react';
import ListView from '../ListView/ListView';


export default function MainTodo() {
	return (
		<div>
			<h1>index file</h1>
			<ListView/>
		</div>
	);
}

let todo = {
	text: 'alarm',
	id: '234524',
	desctiption: '3 to 4',
	time: '34:43',
	isComplete: false,
	isSelected: false,
};
