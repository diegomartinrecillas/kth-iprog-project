import React from 'react';
import Price from '../price/Price';
import styles from './BookItem.module.scss';

const BookItem = () => {
	return (
		<div className={styles.book}>
			<div className={styles.cover} />
			<div className="spacing spacing_sm" />
			<div className="spacing spacing_xs" />
			<Price price={80} newPrice={450} />
			<div className="spacing spacing_xs" />
			<b>Lorem ipsum dolor</b> <br />
			<small>Lorem ipsum dolor sit amore imum</small>
		</div>
	);
};

export default BookItem;
