import React, { useMemo, PropsWithChildren, useState } from 'react';
import { NetworkService, RequestStatus } from '../api/';
import { Book } from '../models/Book';

interface SearchParams {
	query?: string;
	programmeId?: string;
	courseId?: string;
}

export interface SearchContextValue {
	query: string;
	programmeId: string;
	courseId: string;
	results: Book[];
	status: RequestStatus;
	search: (params: SearchParams) => void;
}

export const SearchContext = React.createContext<SearchContextValue>(null);

export const SearchConsumer = SearchContext.Consumer;

export const SearchProvider = (props: PropsWithChildren<{}>) => {
	const [query, setQuery] = useState('');
	const [programmeId, setProgrammeId] = useState('');
	const [courseId, setCourseId] = useState('');
	const [results, setResults] = useState([]);
	const [status, setStatus] = useState(RequestStatus.IDLE);

	const contextValue = useMemo(
		(): SearchContextValue => ({
			query,
			programmeId,
			courseId,
			results,
			status,
			search: params => {
				setStatus(RequestStatus.LOADING);
				NetworkService.searchListedBooks(
					params.query != null ? params.query : query,
					params.programmeId != null ? params.programmeId : programmeId,
					params.courseId != null ? params.courseId : courseId
				)
					.then(response => {
						setResults(response.data.map((book: any) => new Book(book)));
						setStatus(RequestStatus.SUCCESS);
					})
					.catch(() => setStatus(RequestStatus.ERROR));
				params.query != null && setQuery(params.query);
				params.programmeId != null && setProgrammeId(params.programmeId);
				params.courseId != null && setCourseId(params.courseId);
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
