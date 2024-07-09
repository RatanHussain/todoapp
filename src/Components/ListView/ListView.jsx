/** @format */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

function ListView({ todo, toggleSelect, toggleComplete }) {
	return (
		<ListGroupItem className='d-flex align-items-center bg-light'>
			<input
				type='checkbox'
				id={todo.id}
				checked={todo.isSelected}
				onChange={() => toggleSelect(todo.id)}
			/>
			<div className='mx-3'>
				<h4>{todo.text}</h4>
				<p>{todo.time}</p>
			</div>
			<Button
				className='ms-auto'
				color={todo.isComplete ? 'danger' : 'success'}
				onClick={() => toggleComplete(todo.id)}>
				{todo.isComplete ? 'Completed' : 'Running'}
			</Button>
		</ListGroupItem>
	);
}

ListView.prototype = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default function ListViewCall({ todo }) {
	return (
		<ListGroup>
			<ListView todo={todo}/>
		</ListGroup>
	);
}
