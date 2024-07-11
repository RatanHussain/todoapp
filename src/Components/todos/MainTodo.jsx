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
			isSelected: false,
		},
	]);
	let [view, setView] = useState('list');
	let [isOpenTodoFrom, setIsOpenTodoForm] = useState(false);
	let [searchTurm, setSearchTurm] = useState('');

	let toggleComplete = (e) => {
		let todos = [...todo];
		let updated = todos.find((i) => i.id === e);
		updated.isComplete = !updated.isComplete;

		setTodo(todos);
	};
	let toggleSelect = (e) => {
		let todos = [...todo];
		let updated = todos.find((i) => i.id === e);
		updated.isSelected = !updated.isSelected;
		setTodo(todos);
	};

	let handleSearch = (e) => {
		setSearchTurm(e);
	};
	let toggleForm = () => {
		setIsOpenTodoForm(!isOpenTodoFrom);
	};
	let todoObject = (todoObj) => {
		todoObj.id = nextId();
		todoObj.time = new Date();
		todoObj.isComplete = false;
		todoObj.isSelected = false;

		let readyTodos = [todoObj, ...todo];
		setTodo(readyTodos);
		console.log(todoObj.id);
	};
	let ViewHandler = (e) => {
		let name = e.target.value;
		setView(name);
	};

	let [filtered, setFiltered] = useState('all');

	let clickHandler = (e) => {
		setFiltered(e);
	};

	let makeFilter = (todo) => {
		if (filtered === 'running') {
			return todo.filter((value) => !value.isComplete);
		} else if (filtered === 'completed') {
			return todo.filter((value) => value.isComplete);
		} else {
			return todo;
		}
	};

	let searchResults = () => {
		let newTodos = todo.filter((value) =>
			value.text.toLowerCase().includes(searchTurm.toLowerCase())
		);
		return newTodos;
	};

	let getView = () => {
		let updated = searchResults();
		updated = makeFilter(updated);
		return view === 'list' ? (
			<ListViewCall
				todo={updated}
				toggleSelect={toggleSelect}
				toggleComplete={toggleComplete}
			/>
		) : (
			<TableView
				todo={updated}
				toggleSelect={toggleSelect}
				toggleComplete={toggleComplete}
			/>
		);
	};

	let clearSelected = () => {
		let todos = [...todo];
		let updated = todos.filter((value) => value.isSelected === false);
		setTodo(updated);
	};
	let clearCompleted = () => {
		let todos = [...todo];
		let updated = todos.filter((value) => value.isComplete === false);
		setTodo(updated);
	};
	let reset = () => {
		setFiltered('all');
		setView('list');
		setIsOpenTodoForm(false);
		setSearchTurm('');
	};

	return (
		<div>
			<h1 className='display-3 text-center my-5'>Stack Todos</h1>
			<SearchControl
				turms={searchTurm}
				handleSearch={handleSearch}
				toggleForm={toggleForm}
				view={view}
				ViewHandler={ViewHandler}
				clickHandler={clickHandler}
				clearSelected={clearSelected}
				clearCompleted={clearCompleted}
				reset={reset}
				filtered={filtered}
			/>
			{getView()}

			<Modal isOpen={isOpenTodoFrom} toggle={toggleForm}>
				<ModalHeader toggle={toggleForm}></ModalHeader>
				<ModalBody>
					<CreateTodos todoObject={todoObject} />
				</ModalBody>
			</Modal>
		</div>
	);
}
