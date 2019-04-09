import React, { useContext } from 'react';

import BookItem from '../book-item/BookItem';
import { Book } from '../../models/Book';

interface Props {
	books: Book[];
}

const Books = (props: Props) => {
	const { books } = props;
	return (
		<div className="book-grid">
			<div className="row justify-content-between medium-gutters">
				{books.map((book, index) => (
					<div className="col-sm-12 col-md-3 margin-bottom-col" key={index}>
						<BookItem book={book} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Books;
