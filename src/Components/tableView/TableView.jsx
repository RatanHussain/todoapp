/** @format */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

function List({ todo, toggleSelect, toggleComplete }) {
	return (
		<div>
			<ListGroupItem>
				<input
					type='checkbox'
					id={todo.id}
					checked={todo.isSelected}
					onClick={() => toggleSelect(todo.id)}
				/>
				<div className='mx-3'>
					<h4>{todo.text}</h4>
					<p>{todo.time.toDateString()}</p>
				</div>
				<Button
					className='ms-auto'
					color={todo.isComplete ? 'denger' : 'success'}
					onClick={() => toggleComplete(todo.id)}>
					{todo.isComplete ? 'Completed' : 'Running'}
				</Button>
			</ListGroupItem>
		</div>
	);
}

List.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default function TableView({ todo, toggleSelect, toggleComplete }) {
	return (
		<div>
			<ListGroup>
				{todo.map((todo) => (
					<List />
				))}
			</ListGroup>
		</div>
	);
}
