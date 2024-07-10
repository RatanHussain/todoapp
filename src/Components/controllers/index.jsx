/** @format */

import React from 'react';
import SearchPanel from './SearchPanel';

export default function SearchControl({ turms, handleSearch, toggleForm }) {
	return (
		<SearchPanel
			turms={turms}
			handleSearch={handleSearch}
			toggleForm={toggleForm}
		/>
	);
}
