import React from 'react';
import Searchbar from './Searchbar';
import BookGrid from './BookGrid';

const SearchView = () => {
	return (
		<div className="search-view">
			<div className="container">
				<div className="spacing" />
				<Searchbar />
				<div className="spacing spacing--large" />
				<div className="text-label text-label--large">LATEST LISTINGS</div>
			</div>
			<div className="container search-view__books">
				<div className="spacing spacing--medium" />
				<BookGrid />
			</div>
		</div>
	);
};

export default SearchView;
