import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AppProvider } from './contexts/App.context';
import Home from './pages/home/Home';

const App = () => {
	return (
		<Router>
			<AppProvider>
				<div className="container app">
					<Home />
				</div>
			</AppProvider>
		</Router>
	);
};

export default App;
