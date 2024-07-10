/** @format */

import React, { useState } from 'react';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';

export default function CreateTodos({ todoObject }) {
    let [todos, setTodos] = useState({
        text: '',
        description: ''
    })
	let changHandler = (e) => {
		let oldTodo = { ...todos };
		let name = e.target.name;
		let value = e.target.value;
		oldTodo[name] = value;
		setTodos(oldTodo);
	};
	let submitHandler = (e) => {
		e.preventDefault();
		todoObject(todos);
		setTodos({ text: '', description: '' });
	};

	return (
		<Form onSubmit={submitHandler}>
			<FormGroup>
				<Label>Text here</Label>
				<Input
					className='form-control'
					name='text'
					value={todos.text}
					onChange={changHandler}
				/>
			</FormGroup>
			<FormGroup>
				<Label>Description</Label>
				<Input
					type='textarea'
					className='form-control'
					name='description'
					value={todos.description}
					onChange={changHandler}
				/>
			</FormGroup>
			<Button className='bg-success' type='submit'>Create Todo</Button>
		</Form>
	);
}
