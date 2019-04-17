import React from 'react';

import Price from '../price/Price';
import { Book } from '../../models/Book';
import styles from './BookInfo.module.scss';

interface Params {
	book: Book;
}

const BookInfo = (props: Params) => {
	const { book } = props;

	return (
		<div className="row special-gutters">
			<div className="col-auto">
				<img className="cover" src={book.coverPhoto} />
			</div>
			<div className="col">
				<div className={styles.edition}>{book.releaseYear}</div>
				<div className={styles.title}>{book.title}</div>
				<div className={styles.author}>By {book.author}</div>
				<div className="mt-3">
					<Price price={book.price} newPrice={book.newPrice} />
				</div>
				<div className={styles.description}>{book.description}</div>
			</div>
		</div>
	);
};

export default BookInfo;
