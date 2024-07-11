/** @format */

import React from 'react';
import { Label, CustomInput } from 'reactstrap';

export default function ViewControler({view, ViewHandler }) {
	return (
		<div>
			<Label className='me-4'>
				<input className='me-1'
					type='radio'
					value='list'
					name='view'
					onChange={ViewHandler}
					id={'listView'}
					checked={view === 'list'}
                />
                List View
			</Label>
			<Label className='me-4'>
				<input className='me-1'
					type='radio'
					value='table'
					name='view'
					onChange={ViewHandler}
					id={'tableView'}
					checked={view === 'table'}
                />
                Table View
			</Label>
		</div>
	);
}
