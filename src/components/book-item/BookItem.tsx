import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Price from '../price/Price';
import EditButton from '../edit-my-books/EditButton';
import styles from './BookItem.module.scss';
import { Book } from '../../models/Book';

interface Props extends RouteComponentProps {
	book: Book;
	editable?: boolean;
}

const BookItem = (props: Props) => {
	const { book, editable, location } = props;

	return (
		<Link to={{ ...location, pathname: `book/${book.id}` }}>
			<div className={styles.book}>
				<img className={`${styles.cover}`} src={book.coverPhoto} />
				<div className="spacing spacing_sm" />
				<div className="spacing spacing_xs" />
				<Price price={book.price} />
				{editable && <EditButton />}
				<div className="spacing spacing_xs" />
				<b>{book.title}</b> <br />
				<small>{book.author}</small>
			</div>
		</Link>
	);
};

export default withRouter(BookItem);
