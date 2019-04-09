import React, { useContext } from 'react';

import { SearchContext } from '../../contexts/Search.context';
import BookItem from '../book-item/BookItem';

const Books = () => {
	const { results } = useContext(SearchContext);

	return (
		<div className="book-grid">
			<div className="row justify-content-between medium-gutters">
				{results.map((book, index) => (
					<div className="col-sm-12 col-md-3 margin-bottom-col" key={index}>
						<BookItem book={book} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Books;
