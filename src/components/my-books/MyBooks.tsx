import React from 'react';

import EditButton from '../edit-my-books/EditButton';
import Books from '../books/Books';
import styles from './MyBooks.module.scss';

const MyBooks = () => {
	return (
		<div className={`${styles.books} container`}>
			<div className="text-label text-label_lg">MY BOOKS</div>
			<div className="spacing spacing--medium" />
			<Books />
		</div>
	);
};

export default MyBooks;
