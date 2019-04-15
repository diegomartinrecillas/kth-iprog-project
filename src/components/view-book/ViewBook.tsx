import React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';

import { useBook } from '../../hooks/useBook';

import BookInfo from '../book-info/BookInfo';
import Seller from '../seller/Seller';

import styles from './ViewBook.module.scss';
import { RequestStatus } from '../../api';

interface MatchParams {
	bookId: string;
}

const ViewBook = (props: RouteComponentProps<MatchParams>) => {
	const { match, location } = props;
	const [book, status] = useBook(match.params.bookId);
	const { student, programme, course } = book;

	const renderBook = () => {
		switch (status) {
			case RequestStatus.IDLE:
			case RequestStatus.LOADING: {
				return <div>loading...</div>;
			}
			case RequestStatus.SUCCESS: {
				return (
					<>
						<div className={styles.heading}>
							{programme.name} / {course.name}
						</div>
						<div className="spacing" />
						<div className="d-flex">
							<div className="row no-gutters">
								<div className="col-8">
									<BookInfo book={book} />
								</div>
								<div className="col-4">
									<Seller student={student} />
								</div>
							</div>
						</div>
					</>
				);
			}
			case RequestStatus.ERROR: {
				return <div>error</div>;
			}
		}
	};

	return (
		<div className="container">
			<div className={styles.back}>
				<Link to={{ ...location, pathname: '/' }}>
					<i className="fas fa-arrow-left" /> <span>Back to search</span>
				</Link>
			</div>
			<div className="spacing spacing_sm" />

			{renderBook()}
			<div className="spacing" />
		</div>
	);
};

export default withRouter(ViewBook);
