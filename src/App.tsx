import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AppProvider } from './contexts/App.context';
import Home from './pages/home/Home';
import Edit from './pages/edit/Edit';

const App = () => {
	return (
		<Router>
			<AppProvider>
				<div className="container app">
					<Route path="/" exact component={Home} />
					<Route path="/edit" exact component={Edit} />
				</div>
			</AppProvider>
		</Router>
	);
};

export default App;
