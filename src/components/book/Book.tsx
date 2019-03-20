import React from 'react';
import styles from './Book.module.scss';

const BookItem = () => {
	return (
		<div className={styles.book}>
			<div className={styles.cover} />
			<div className="spacing spacing_sm" />
			<b>Lorem ipsum dolor</b> <br />
			<small>Lorem ipsum dolor sit amore imum</small>
		</div>
	);
};

export default BookItem;
