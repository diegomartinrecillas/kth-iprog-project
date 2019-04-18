import React, { useEffect, useState, useContext } from 'react';
import { RequestStatus, NetworkService } from '../../api';

import Books from '../books/Books';
import { UserContext } from '../../contexts';
import { Book } from '../../models/Book';
import Spinner from '../spinner/Spinner';

const MyBooks = () => {
	const { user } = useContext(UserContext);
	const token = user && user.rundbokToken;
	const [status, setStatus] = useState(RequestStatus.IDLE);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		if (!user) return;
		NetworkService.getStudentBooks(token)
			.then(response => {
				setBooks(response.data.map((book: any) => new Book(book)));
				setStatus(RequestStatus.SUCCESS);
			})
			.catch(() => setStatus(RequestStatus.ERROR));
	}, [user]);

	const renderResults = () => {
		switch (status) {
			case RequestStatus.IDLE:
			case RequestStatus.LOADING: {
				return <Spinner />;
			}
			case RequestStatus.SUCCESS: {
				return books.length > 0 ? (
					<Books editable={true} books={books} />
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
		<div className="books-list container">
			<div className="text-label text-label_lg">MY BOOKS</div>
			<div className="spacing spacing--medium" />
			{renderResults()}
		</div>
	);
};

export default MyBooks;
