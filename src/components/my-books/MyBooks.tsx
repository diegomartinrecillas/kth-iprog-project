import React from 'react';

import EditButton from '../edit-my-books/EditButton';
import Books from '../books/Books';
import styles from './MyBooks.module.scss';

const MyBooks = () => {
	const books = [1, 2, 3, 4];
	return (
		<div className={`${styles.books} container`}>
			<div className="text-label text-label_lg">MY BOOKS</div>
			<div className="spacing spacing--medium" />
			<Books books={books} />
			<div>
				<EditButton />
			</div>
		</div>
	);
};

export default MyBooks;
