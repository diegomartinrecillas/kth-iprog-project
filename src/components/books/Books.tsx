import React from 'react';
import BookItem from '../book-item/BookItem';

interface Props {
	books: number[];
}

const Books = (props: Props) => {
	const { books } = props;
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

export default Books;
