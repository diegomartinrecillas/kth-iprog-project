import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';

const Home = () => {
	return (
		<div>
			<div className="row">
				<div className="col-lg-3 border-right">
					<Sidebar />
				</div>
				<div className="col-lg-9">
					<Search />
				</div>
			</div>
		</div>
	);
};

export default Home;
