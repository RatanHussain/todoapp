/** @format */

import React from 'react';
import ListView from '../ListView/ListView';


export default function MainTodo() {
	return (
		<div>
			<h1>index file</h1>
			<ListView todo={ todo } />
		</div>
	);
}

let todo = {
	id: '234524',
	text: 'alarm',
	desctiption: '3 to 4',
	time: '34:43',
	isComplete: false,
	isSelected: false,
};
