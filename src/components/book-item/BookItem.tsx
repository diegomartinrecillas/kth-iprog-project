import React from 'react';
import Price from '../price/Price';
import EditButton from '../edit-my-books/EditButton';
import styles from './BookItem.module.scss';

interface Props {
	editable?: boolean;
}

const BookItem = ({ editable = false }: Props) => {
	let editButton = null;
	if (editable) {
		editButton = <EditButton />;
	}
	return (
		<div className={styles.book}>
			<div className={styles.cover} />
			<div className="spacing spacing_sm" />
			<div className="spacing spacing_xs" />
			<Price price={80} />
			{editButton}
			<div className="spacing spacing_xs" />
			<b>Lorem ipsum dolor</b> <br />
			<small>Lorem ipsum dolor sit amore imum</small>
		</div>
	);
};

export default BookItem;
