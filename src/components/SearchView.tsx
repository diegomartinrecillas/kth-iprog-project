import React from 'react';
import Searchbar from './Searchbar';
import BookGrid from './BookGrid';

const SearchView = () => {
	return (
		<div className="search-view">
			<div className="container">
				<div className="spacing" />
				<Searchbar />
				<div className="spacing spacing_lg" />
				<div className="text-label text-label_lg">LATEST LISTINGS</div>
			</div>
			<div className="container search-view__books">
				<div className="spacing spacing--medium" />
				<BookGrid />
			</div>
		</div>
	);
};

export default SearchView;
