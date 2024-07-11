/** @format */

import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default function BulkControler({
	clearSelected,
	clearCompleted,
	reset,
}) {
	return (
		<ButtonGroup>
			<Button color='success' onClick={clearSelected}>Clear Selected</Button>
			<Button color='success' onClick={clearCompleted}>Clear Completed</Button>
			<Button color='success' onClick={reset}>Reset</Button>
		</ButtonGroup>
	);
}
