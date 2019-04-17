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

	const content = (
		<div className={`${styles.book}`}>
			<img className={`${styles.cover}`} src={book.coverPhoto} />
			<div className="spacing spacing_sm" />
			<div className="spacing spacing_xs" />
			<div className="d-flex">
				<Price price={book.price} />
			</div>
			<small>{book.author}</small> <br />
			<b>{book.title}</b>
		</div>
	);

	if (!editable) {
		return (
			<Link to={{ ...location, pathname: `book/${book.id}` }}>{content}</Link>
		);
	}

	return (
		<Link to={{ ...location, pathname: `edit/${book.id}` }}>{content}</Link>
	);
};

export default withRouter(BookItem);
