import { useState, useEffect } from 'react';
import { NetworkService, RequestStatus } from '../api/';
import { Book } from '../models/Book';

export const useBook = (bookId: string) => {
	const [book, setBook] = useState(new Book(null));
	const [status, setStatus] = useState(RequestStatus.IDLE);

	useEffect(() => {
		setStatus(RequestStatus.LOADING);
		NetworkService.getBookById(bookId)
			.then(data => {
				setBook(new Book(data));
				setStatus(RequestStatus.SUCCESS);
			})
			.catch(() => setStatus(RequestStatus.ERROR));
	}, []);
	return [book, status] as [Book, RequestStatus];
};
