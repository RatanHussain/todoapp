/** @format */

import React, { useState } from 'react';
import ListViewCall from '../ListView/ListView';
import TableView from '../tableView/TableView';
import CreateTodos from '../form/form';
import SearchControl from '../controllers';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import nextId from 'react-id-generator';

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
	]);
	let [isOpenTodoFrom, setIsOpenTodoForm] = useState(false);
	let [searchTurm, setSearchTurm] = useState();

	let toggleComplete = () => {};
	let toggleSelect = () => {};
	let handleSearch = () => {};
	let toggleForm = () => {
		setIsOpenTodoForm(!isOpenTodoFrom);
	};
	let todoObject = (todoObj) => {
		todoObj.id = nextId()
		todoObj.time = new Date()
		todoObj.isComplete = false
		todoObj.isSelected = false

		let readyTodos = [todoObj, ...todo]
		setTodo(readyTodos)
		console.log(todoObj.id)

	}

	return (
		<div>
			<h1 className='display-3 text-center my-5'>Stack Todos</h1>
			<SearchControl
				turms={searchTurm}
				handleSearch={handleSearch}
				toggleForm={toggleForm}
			/>
			<ListViewCall
				todo={todo}
				toggleSelect={toggleSelect}
				toggleComplete={toggleComplete}
			/>
			<TableView
				todo={todo}
				toggleSelect={toggleSelect}
				toggleComplete={toggleComplete}
			/>

			<Modal isOpen={isOpenTodoFrom} toggle={toggleForm}>
				<ModalHeader toggle={toggleForm}></ModalHeader>
				<ModalBody>
					<CreateTodos todoObject={todoObject} />
				</ModalBody>
			</Modal>
		</div>
	);
}
