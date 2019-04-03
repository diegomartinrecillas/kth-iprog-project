import React from 'react';

import BookInfo from '../book-info/BookInfo';
import Seller from '../seller/Seller';

import styles from './ViewBook.module.scss';

const ViewBook = () => {
	return (
		<div className="container">
			<div className="spacing" />
			<div className={styles.heading}>Arquitecture / course</div>
			<div className="spacing spacing_md" />
			<div className="d-flex">
				<div className="row medium-gutters">
					<div className="col-7">
						<BookInfo />
					</div>
					<div className="col-3">
						<Seller />
					</div>
				</div>
			</div>
			<div className="spacing" />
		</div>
	);
};

export default ViewBook;
