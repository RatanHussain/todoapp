/** @format */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

function ListView({ todos, toggleSelect, toggleComplete }) {
	return (
		<ListGroupItem className='d-flex align-items-center bg-light'>
			<input
				type='checkbox'
				id={todos.id}
				checked={todos.isSelected}
				onChange={() => toggleSelect(todos.id)}
			/>
			<div className='mx-3'>
				<h4>{todos.text}</h4>
				<p>{todos.time.toDateString()}</p>
			</div>
			<Button
				className='ms-auto'
				color={todos.isComplete ? 'danger' : 'success'}
				onClick={() => toggleComplete(todos.id)}>
				{todos.isComplete ? 'Completed' : 'Running'}
			</Button>
		</ListGroupItem>
	);
}

ListView.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default function ListViewCall({ todo, toggleSelect, toggleComplete }) {
	return (
		<ListGroup>
			{todo.map((todos, i) => (
				<ListView
					key={todos.id}
					todos={todos}
					toggleSelect={toggleSelect}
					toggleComplete={toggleComplete}
				/>
			))}
		</ListGroup>
	);
}

ListViewCall.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};
