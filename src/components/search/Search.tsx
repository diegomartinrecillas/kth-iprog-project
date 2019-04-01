import React from 'react';
import { Route, Switch } from 'react-router';

import Searchbar from '../searchbar/Searchbar';
import Books from '../books/Books';
import ViewBook from '../view-book/ViewBook';
import EditBook from '../edit-book/EditBook';

import stlyes from './Search.module.scss';

const Search = () => {
	const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<div className={stlyes.search}>
			<div className="container">
				<div className="spacing" />
				<Searchbar />
				<div className="spacing spacing_lg" />
			</div>

			<Switch>
				<Route exact path="/">
					{({ match }) =>
						match && (
							<div className={`${stlyes.books} container`}>
								<div className="text-label text-label_lg">LATEST LISTINGS</div>
								<div className="spacing spacing--medium" />
								<Books books={books} />
							</div>
						)
					}
				</Route>

				<Route path="/edit/:id" component={EditBook} />

				<Route path="/:id" component={ViewBook} />
			</Switch>
		</div>
	);
};

export default Search;
