import React from 'react';

import { UserProvider } from './contexts';
import Router from './router/Router';
import Home from './pages/home/Home';

const App = () => {
	return (
		<Router>
			<UserProvider>
				<div className="container app">
					<Home />
				</div>
			</UserProvider>
		</Router>
	);
};

export default App;
