import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';

import { RequestStatus } from '../../api';

import { SearchContext } from '../../contexts/Search.context';

import PrivateRoute from '../private-route/PrivateRoute';

import Searchbar from '../searchbar/Searchbar';
import Books from '../books/Books';
import ViewBook from '../view-book/ViewBook';
import EditBook from '../edit-book/EditBook';
import MyBooks from '../my-books/MyBooks';
import AddBook from '../add-book/AddBook';

import styles from './Search.module.scss';
import Spinner from '../spinner/Spinner';
import { UserContext } from '../../contexts';

const Search = () => {
	const { results, status } = useContext(SearchContext);
	const { signedIn } = useContext(UserContext);

	const renderResults = () => {
		switch (status) {
			case RequestStatus.IDLE:
			case RequestStatus.LOADING: {
				return <Spinner />;
			}
			case RequestStatus.SUCCESS: {
				return results.length > 0 ? (
					<Books books={results} />
				) : (
					<div>We couldn't find the book you were looking for</div>
				);
			}
			case RequestStatus.ERROR: {
				return <div>error</div>;
			}
		}
	};

	return (
		<div className="book-list">
			<div className="container">
				<div className="spacing" />
				<Searchbar />
				<div className="spacing spacing_lg d-none d-xl-block" />
				<div className="spacing d-xl-none" />
			</div>

			<Switch>
				<Route exact path="/">
					{({ match }) =>
						match && (
							<div className="books-list container">
								<div className="text-label text-label_lg">Latest books</div>
								<div className="spacing spacing--medium" />
								{renderResults()}
							</div>
						)
					}
				</Route>

				<Route path="/book/:bookId" component={ViewBook} />

				<PrivateRoute
					path="/edit/:bookId"
					component={EditBook}
					isAuthenticated={signedIn}
				/>
				<PrivateRoute
					path="/add"
					component={AddBook}
					isAuthenticated={signedIn}
				/>
				<PrivateRoute
					path="/my-books"
					component={MyBooks}
					isAuthenticated={signedIn}
				/>
			</Switch>
		</div>
	);
};

export default Search;
