import React, { Component } from 'react';
import NetworkService from './api/NetworkService';

class App extends Component {
	public componentWillMount() {
		const programmes = NetworkService.getProgrammes();
		// const courses = NetworkService.getCourses();
		// return { programmes, courses };
	}
	public render() {
		return (
			<div>
				RundBok <br />
				An amazing service...
			</div>
		);
	}
}

export default App;
