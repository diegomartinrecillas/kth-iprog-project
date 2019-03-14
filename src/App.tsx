import React, { Component } from 'react';
import NetworkService from './api/NetworkService';

class App extends Component {
	public componentWillMount() {
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
