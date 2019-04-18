import React, { useContext, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Form from '../form/Form';
import { UserContext, SearchContext } from '../../contexts';
import { RequestStatus, NetworkService } from '../../api';
import { useBook } from '../../hooks/useBook';

interface MatchParams {
	bookId: string;
}

const EditBook = (props: RouteComponentProps<MatchParams>) => {
	const { match, history } = props;
	const { user } = useContext(UserContext);
	const { search } = useContext(SearchContext);
	const [status, setStatus] = useState(RequestStatus.IDLE);
	const [book, bookStatus] = useBook(match.params.bookId);

	const removeBook = () => {
		setStatus(RequestStatus.LOADING);

		NetworkService.removeBook(user.rundbokToken, match.params.bookId)
			.then(() => {
				search({});
				history.push('/my-books');
				setStatus(RequestStatus.SUCCESS);
			})
			.catch(() => setStatus(RequestStatus.ERROR));
	};

	return (
		<>
			<div className="container">
				<div className="d-flex">
					<div className="text-label text-label_lg">EDIT BOOK</div>
					<div className="spacing-h" />
					{(() => {
						switch (status) {
							case RequestStatus.IDLE: {
								return (
									<a
										onClick={removeBook}
										className="text-danger font-weight-bold"
									>
										<i className="fas fa-trash mr-2" />
										Remove book
									</a>
								);
							}
							case RequestStatus.LOADING: {
								return <div>loading...</div>;
							}
							case RequestStatus.ERROR: {
								return <div>error</div>;
							}
						}
					})()}
				</div>
				<div className="spacing spacing--medium" />
				{bookStatus === RequestStatus.SUCCESS && (
					<Form book={book.getBookUpload()} />
				)}
			</div>
			<div className="spacing spacing--large" />
		</>
	);
};

export default withRouter(EditBook);
