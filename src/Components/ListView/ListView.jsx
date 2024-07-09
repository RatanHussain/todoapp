/** @format */

import React from 'react';
import { Button, ListGroupItem } from 'reactstrap';

export default function ListView({ todo, toggleSelect , toggleComplete}) {
	return (
		<ListGroupItem className='d-flex align-items-center'>
			<input
				type='checkbox'
				id={todo.id}
				checked={todo.isSelected}
				onChange={() => toggleSelect(todo.id)}
			/>
			<div className='mx-3'>
				<h4>{todo.text}</h4>
				<p>{ todo.time }</p>
			</div>
			<Button className='ms-auto' color={todo.isComplete ? "danger" : 'success'} onClick={() => toggleComplete(todo.id)}>{ todo.isComplete ? 'Completed' : 'Running' }</Button>
		</ListGroupItem>
	);
}
