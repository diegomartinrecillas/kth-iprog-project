import React, { useContext, useEffect, ChangeEvent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import qs from 'query-string';
import styles from './Searchbar.module.scss';

import { SearchContext } from '../../contexts/Search.context';

const Searchbar = (props: RouteComponentProps) => {
	const { search, query } = useContext(SearchContext);
	const { history, location } = props;

	useEffect(() => {
		// get the current search param value for 'query'
		const initialQuery = (qs.parse(location.search).query as string) || '';
		// if there's no 'query' search param defined, set it to ''
		!initialQuery &&
			history.replace({ search: qs.stringify({ query: initialQuery }) });
		// initial search depending of the iniitial search params
		search(initialQuery);
	}, []);

	let timer: ReturnType<typeof setTimeout>;

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		// debounce the input change by 300ms
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			// update the search params to reflect the search state and redirect to the home page
			history.push({ search: qs.stringify({ query: value }), pathname: '/' });
			search(value);
			timer = null;
		}, 300);
	};

	return (
		<div className={styles.searchbar}>
			<div className="row medium-gutters align-items-center">
				<div className="col-7">
					<div className={styles['form-group']}>
						<i className="far fa-search" />
						<input
							onChange={handleSearch}
							type="text"
							name="search"
							id="search"
							placeholder="Search"
							defaultValue={query}
						/>
					</div>
				</div>
				<div className="col-5">
					<div className="row justify-content-end medium-gutters align-items-center">
						<div className="col-auto">
							<div className="d-flex">
								<Link to="/add">
									<div className="d-flex align-items-center">
										<i className="fas fa-plus" />
										<div className="spacing-h spacing-h_xs" />
										add button
									</div>
								</Link>
							</div>
						</div>
						<div className="col-auto">
							<div className={styles.separator} />
						</div>
						<div className="col-auto">
							<Link to="/mybooks">
								<div className={styles['profile-image']} />
							</Link>
						</div>
						<div className="col-auto">
							<i className="fas fa-angle-down" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Searchbar);
