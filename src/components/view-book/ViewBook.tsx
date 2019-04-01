import React from 'react';

import BookInfo from '../book-info/BookInfo';
import Seller from '../seller/Seller';

const ViewBook = () => {
	return (
		<div>
			<div>
				<BookInfo />
			</div>
			<div>
				<Seller />
			</div>
		</div>
	);
};

export default ViewBook;
