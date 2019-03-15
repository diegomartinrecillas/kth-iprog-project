import React, { useEffect } from 'react';

import { AppProvider } from '../../contexts/App.context';
import NetworkService from '../../api/NetworkService';

import Title from '../title/Title';
import InputTitle from '../title/InputTitle';
import ResetTitle from '../title/ResetTitle';

import styles from './App.module.scss';

const App = () => {
	useEffect(() => {
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
	}, []);

	return (
		<AppProvider>
			<div className={styles.app}>
				<header className={styles.header}>
					<Title />
					<InputTitle />
					<ResetTitle />
				</header>
			</div>
		</AppProvider>
	);
};

export default App;
