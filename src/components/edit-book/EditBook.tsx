import React from 'react';

import Form from '../form/Form';
import styles from './EditBook.module.scss';

const EditBook = () => {
	return (
		<div className="editbook-view">
			<div className="container">
				<div className="spacing spacing--large" />
				<div className="text-label text-label--large">EDIT BOOK</div>
			</div>
			<div className="container">
				<div className="spacing spacing--medium" />
				<div className={styles.form}>
					<div className="d-flex flex-row">
						<div className={styles.cover} />
						<div className="spacing-h spacing-h--large" />
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditBook;
