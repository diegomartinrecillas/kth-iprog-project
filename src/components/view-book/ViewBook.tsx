import React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';

import { useBook } from '../../hooks/useBook';

import BookInfo from '../book-info/BookInfo';
import Seller from '../seller/Seller';

import styles from './ViewBook.module.scss';
import { RequestStatus } from '../../api';
import Spinner from '../spinner/Spinner';

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
				return <Spinner />;
			}
			case RequestStatus.SUCCESS: {
				return (
					<>
						<div className={styles.heading}>
							{programme.name} / {course.name}
						</div>
						<div className="spacing" />
						<div className="d-flex">
							<div className="row special-gutters">
								<div className="col-xl-8">
									<BookInfo book={book} />
								</div>
								<div className="col-sm-6 col-xl-4">
									<div className="spacing d-xl-none" />
									<Seller
										personalDescription={book.personalDescription}
										student={student}
									/>
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
			<div className="back-button">
				<Link to={{ ...location, pathname: '/' }}>
					<i className="fas fa-arrow-left" /> <span>Latest books</span>
				</Link>
			</div>
			<div className="spacing spacing_medium" />

			{renderBook()}
			<div className="spacing" />
		</div>
	);
};

export default withRouter(ViewBook);
