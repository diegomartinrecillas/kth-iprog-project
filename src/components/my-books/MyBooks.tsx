import React, { useContext } from 'react';
import { RequestStatus } from '../../api';

import EditButton from '../edit-my-books/EditButton';
import Books from '../books/Books';
import styles from './MyBooks.module.scss';
import { SearchContext } from '../../contexts/Search.context';

const MyBooks = () => {
	const { results, status } = useContext(SearchContext);

	const renderResults = () => {
		switch (status) {
			case RequestStatus.IDLE:
			case RequestStatus.LOADING: {
				return <div>loading...</div>;
			}
			case RequestStatus.SUCCESS: {
				return results.length > 0 ? (
					<Books books={results} />
				) : (
					<div>You don't have any books listed.</div>
				);
			}
			case RequestStatus.ERROR: {
				return <div>error</div>;
			}
		}
	};

	return (
		<div className={`${styles.books} container`}>
			<div className="text-label text-label_lg">MY BOOKS</div>
			<div className="spacing spacing--medium" />
			{renderResults()}
		</div>
	);
};

export default MyBooks;
