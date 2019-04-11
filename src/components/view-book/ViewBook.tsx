import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { useBook } from '../../hooks/useBook';

import BookInfo from '../book-info/BookInfo';
import Seller from '../seller/Seller';

import styles from './ViewBook.module.scss';
import { RequestStatus } from '../../api';

interface MatchParams {
	bookId: string;
}

const ViewBook = (props: RouteComponentProps<MatchParams>) => {
	const { match } = props;
	const [book, status] = useBook(match.params.bookId);
	const { student, programme, course } = book;

	if (status === RequestStatus.IDLE || status === RequestStatus.LOADING) {
		return <div>loading...</div>;
	}

	if (status === RequestStatus.ERROR) {
		return <div>error</div>;
	}

	return (
		<div className="container">
			<div className={styles.heading}>
				{programme.name} / {course.name}
			</div>
			<div className="spacing spacing_md" />
			<div className="d-flex">
				<div className="row">
					<div className="col-8">
						<BookInfo book={book} />
					</div>
					<div className="col-4">
						<Seller student={student} />
					</div>
				</div>
			</div>
			<div className="spacing" />
		</div>
	);
};

export default withRouter(ViewBook);
