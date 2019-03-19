import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import SearchView from '../SearchView';

const Home = () => {
	return (
		<div>
			<div className="row">
				<div className="col-lg-4 border-right">
					<Sidebar />
				</div>
				<div className="col-lg-8">
					<SearchView />
				</div>
			</div>
		</div>
	);
};

export default Home;
