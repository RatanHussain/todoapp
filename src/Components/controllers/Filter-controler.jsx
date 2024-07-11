/** @format */

import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default function FilterControler({ clickHandler }) {
	return (
		<ButtonGroup>
			<Button color='success' onClick={() => clickHandler('all')}>All</Button>
			<Button color='success' onClick={() => clickHandler('running')}>Running</Button>
			<Button color='success' onClick={() => clickHandler('completed')}>Completed</Button>
		</ButtonGroup>
	);
}
