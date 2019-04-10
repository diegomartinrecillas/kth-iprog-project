import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import Price from '../price/Price';
import { useBook } from '../../hooks/useBook';

import styles from './BookInfo.module.scss';

interface MatchParams {
	bookId: string;
}

const BookInfo = (props: RouteComponentProps<MatchParams>) => {
	const { match } = props;
	const [book, status] = useBook(match.params.bookId);

	return (
		<div className="row">
			<div className="col-auto">
				<img className={`${styles.cover}`} src={book.coverPhoto} />
			</div>
			<div className="col">
				<div className={styles.edition}>{book.releaseYear}</div>
				<div className={styles.title}>{book.title}</div>
				<div className={styles.author}>By {book.author}</div>
				<div className="mt-3">
					<Price price={book.price} newPrice={book.newPrice} />
				</div>
				<div className={styles.description}>{book.personalDescription}</div>
				<div className={styles.description}>{book.description}</div>
			</div>
		</div>
	);
};

export default withRouter(BookInfo);
