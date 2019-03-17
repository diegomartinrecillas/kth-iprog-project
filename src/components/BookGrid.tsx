import React from 'react';
import BookItem from './BookItem';

const books: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const BookGrid = () => {
	return (
		<div className="book-grid">
			<div className="row justify-content-between medium-gutters">
				{books.map(book => (
					<div className="col-sm-12 col-md-4 margin-bottom-col" key={book}>
						<BookItem />
					</div>
				))}
			</div>
		</div>
	);
};

export default BookGrid;
