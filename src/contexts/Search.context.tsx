import React, { useMemo, PropsWithChildren, useState } from 'react';
import { NetworkService, RequestStatus } from '../api/';
import { Book } from '../models/Book';

export interface SearchContextValue {
	query: string;
	results: Book[];
	status: RequestStatus;
	search: (query: string) => void;
}

export const SearchContext = React.createContext<SearchContextValue>(null);

export const SearchConsumer = SearchContext.Consumer;

export const SearchProvider = (props: PropsWithChildren<{}>) => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);
	const [status, setStatus] = useState(RequestStatus.IDLE);

	const contextValue = useMemo(
		(): SearchContextValue => ({
			query,
			results,
			status,
			search: queryString => {
				setQuery(queryString);
				setStatus(RequestStatus.LOADING);
				NetworkService.searchListedBooks(queryString)
					.then(response => {
						setResults(response.data.map((book: any) => new Book(book)));
						setStatus(RequestStatus.SUCCESS);
					})
					.catch(() => setStatus(RequestStatus.ERROR));
			},
		}),
		[status]
	);

	return (
		<SearchContext.Provider value={contextValue}>
			{props.children}
		</SearchContext.Provider>
	);
};
