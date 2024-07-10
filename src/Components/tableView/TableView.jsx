/** @format */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, ListGroup, ListGroupItem, Row, Table } from 'reactstrap';

function List({ todo, toggleSelect, toggleComplete }) {
	return (
		<tr>
			<td>
				<input
					type='checkbox'
					id={todo.id}
					checked={todo.isSelected}
					onClick={() => toggleSelect(todo.id)}
				/>
			</td>
			<td>
				<p>{todo.time.toDateString()}</p>
			</td>
			<td>
				<h4>{todo.text}</h4>
			</td>
			<td>
				<Button
					className='ms-auto py-1'
					color={todo.isComplete ? 'denger' : 'success'}
					onClick={() => toggleComplete(todo.id)}>
					{todo.isComplete ? 'Completed' : 'Running'}
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
				{todo.map((todo) => (
					<List
						todo={todo}
						toggleSelect={toggleSelect}
						toggleComplete={toggleComplete}
					/>
				))}
			</tbody>
		</Table>
	);
}
