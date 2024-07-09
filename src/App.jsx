/** @format */

import React from 'react';
import MainTodo from './Components/todos/MainTodo';
import { Row, Col, Container } from 'reactstrap';

export default function App() {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<MainTodo/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
