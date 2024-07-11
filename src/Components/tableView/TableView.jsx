/** @format */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, ListGroup, ListGroupItem, Row, Table } from 'reactstrap';

function List({ todos, toggleSelect, toggleComplete }) {
	return (
		<tr>
			<td>
				<input
					type='checkbox'
					id={todos.id}
					checked={todos.isSelected}
					onClick={() => toggleSelect(todos.id)}
				/>
			</td>
			<td>
				<p>{todos.time.toDateString()}</p>
			</td>
			<td>
				<h4>{todos.text}</h4>
			</td>
			<td>
				<Button
					className='ms-auto py-1'
					color={todos.isComplete ? 'danger' : 'success'}
					onClick={() => toggleComplete(todos.id)}>
					{todos.isComplete ? 'Completed' : 'Running'}
				</Button>
			</td>
		</tr>
	);
}

List.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default function TableView({ todo, toggleSelect, toggleComplete }) {
	return (
		<Table>
			<thead>
				<tr>
					<th>#</th>
					<th>Date</th>
					<th>Text</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{todo.map((todos) => (
					<List
						key={todo.id}
						todos={todos}
						toggleSelect={toggleSelect}
						toggleComplete={toggleComplete}
					/>
				))}
			</tbody>
		</Table>
	);
}
