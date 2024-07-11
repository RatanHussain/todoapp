/** @format */

import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default function FilterControler({ clickHandler,filtered }) {
	return (
		<ButtonGroup>
			<Button color={filtered === 'all' ? 'danger' : 'success'} onClick={() => clickHandler('all')}>All</Button>
			<Button color={filtered === 'running' ? 'danger' : 'success'} onClick={() => clickHandler('running')}>Running</Button>
			<Button color={filtered === 'completed' ? 'danger' : 'success'} onClick={() => clickHandler('completed')}>Completed</Button>
		</ButtonGroup>
	);
}
