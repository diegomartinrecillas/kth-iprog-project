import React from 'react';
import Searchbar from './searchbar/Searchbar';
import Books from '../books/Books';
import stlyes from './Search.module.scss';

const Search = () => {
	const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<div className={stlyes.search}>
			<div className="container">
				<div className="spacing" />
				<Searchbar />
				<div className="spacing spacing_lg" />
				<div className="text-label text-label_lg">LATEST LISTINGS</div>
			</div>
			<div className={`${stlyes.books} container`}>
				<div className="spacing spacing--medium" />
				<Books books={books} />
			</div>
		</div>
	);
};

export default Search;
