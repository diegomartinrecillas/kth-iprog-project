import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AppProvider } from '../../contexts/App.context';
import NetworkService from '../../api/NetworkService';
import Home from '../pages/Home';

import Title from '../title/Title';
import InputTitle from '../title/InputTitle';
import ResetTitle from '../title/ResetTitle';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	useEffect(() => {
		/*
		const programmes = NetworkService.getProgrammes();
		const courses = NetworkService.getCourses();

		const programme = NetworkService.getProgrammeByCode('TIMTM');
		const course = NetworkService.getCourseByCode('ME3502');

		const books = NetworkService.searchForBooks('Astrid Lindgren');
		const book = NetworkService.getBookById('gJkuDwAAQBAJ');

		console.log(programmes.then(data => console.log(data)));
		console.log(courses.then(data => console.log(data)));
		console.log(programme.then(data => console.log(data)));
		console.log(course.then(data => console.log(data)));
		console.log(books.then(data => console.log(data)));
		console.log(book.then(data => console.log(data)));
		*/
	}, []);

	return (
		<Router>
			<AppProvider>
				<div className="container app">
					<Route path="/" exact component={Home} />
				</div>
			</AppProvider>
		</Router>
	);
};

export default App;
