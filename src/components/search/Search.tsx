import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';

import { RequestStatus } from '../../api';

import { SearchContext } from '../../contexts/Search.context';

import Searchbar from '../searchbar/Searchbar';
import Books from '../books/Books';
import ViewBook from '../view-book/ViewBook';
import EditBook from '../edit-book/EditBook';
import MyBooks from '../my-books/MyBooks';
import AddBook from '../add-book/AddBook';

import styles from './Search.module.scss';

const Search = () => {
	const { results, status } = useContext(SearchContext);

	const renderResults = () => {
		switch (status) {
			case RequestStatus.IDLE:
			case RequestStatus.LOADING: {
				return <div>loading...</div>;
			}
			case RequestStatus.SUCCESS: {
				return results.length > 0 ? (
					<Books books={results} />
				) : (
					<div>no results</div>
				);
			}
			case RequestStatus.ERROR: {
				return <div>error</div>;
			}
		}
	};

	return (
		<div className={styles.search}>
			<div className="container">
				<div className="spacing" />
				<Searchbar />
				<div className="spacing spacing_lg" />
			</div>

			<Switch>
				<Route exact path="/">
					{({ match }) =>
						match && (
							<div className={`${styles.books} container`}>
								<div className="text-label text-label_lg">LATEST LISTINGS</div>
								<div className="spacing spacing--medium" />
								{renderResults()}
							</div>
						)
					}
				</Route>

				<Route path="/book/:bookId" component={ViewBook} />
				<Route path="/edit/:bookId" component={EditBook} />

				<Route path="/add" component={AddBook} />

				<Route path="/mybooks" component={MyBooks} />
			</Switch>
		</div>
	);
};

export default Search;
