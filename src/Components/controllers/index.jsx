/** @format */

import React from 'react';
import SearchPanel from './SearchPanel';
import { Col, Row } from 'reactstrap';
import FilterControler from './Filter-controler';
import BulkControler from './bulk-controler';
import ViewControler from './view-controler';

export default function SearchControl({
	turms,
	handleSearch,
	toggleForm,
	clearSelected,
	clearCompleted,
	reset,
	view,
	ViewHandler,
	clickHandler,
}) {
	return (
		<div>
			<SearchPanel
				turms={turms}
				handleSearch={handleSearch}
				toggleForm={toggleForm}
			/>
			<Row className='my-4'>
				<Col md={{ size: 4 }}>
					<FilterControler clickHandler={clickHandler} />
				</Col>
				<Col md={{ size: 4 }}>
					<ViewControler view={view} ViewHandler={ViewHandler} />
				</Col>
				<Col md={{ size: 4 }}>
					<BulkControler
						clearSelected={clearSelected}
						clearCompleted={clearCompleted}
						reset={reset}
					/>
				</Col>
			</Row>
		</div>
	);
}
