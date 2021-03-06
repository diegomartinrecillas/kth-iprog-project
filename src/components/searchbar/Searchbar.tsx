import React, { useContext, useEffect, ChangeEvent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import qs from 'query-string';
import styles from './Searchbar.module.scss';

import { SearchContext, UserContext } from '../../contexts';
import Login from '../login/Login';
import Profile from '../profile/Profile';
import { RequestStatus } from '../../api';
import Spinner from '../spinner/Spinner';

const Searchbar = (props: RouteComponentProps) => {
	const { search, query } = useContext(SearchContext);
	const { signedIn, status } = useContext(UserContext);
	const { history, location } = props;

	useEffect(() => {
		// get the current search param value for 'query'
		const initialQuery = (qs.parse(location.search).query as string) || '';
		const programmeId =
			(qs.parse(location.search).programme_id as string) || '';
		const courseId = (qs.parse(location.search).course_id as string) || '';
		// if there's no 'query' search param defined, set it to ''
		(!initialQuery || !programmeId || !courseId) &&
			history.replace({
				search: qs.stringify({
					query: initialQuery,
					programme_id: programmeId,
					course_id: courseId,
				}),
			});
		// initial search depending of the iniitial search params
		search({ query: initialQuery, programmeId, courseId });
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
			history.push({
				search: qs.stringify({ ...qs.parse(location.search), query: value }),
				pathname: '/',
			});
			search({
				query: value,
			});
			timer = null;
		}, 300);
	};

	const renderBarItems = () => {
		switch (status) {
			case RequestStatus.LOADING: {
				return <Spinner />;
			}
			case RequestStatus.SUCCESS: {
				return (
					<>
						{signedIn && (
							<>
								<div className="col-auto">
									<div className="d-flex">
										<Link to="/my-books">
											<div className="d-flex align-items-center text-button-font">
												<i className="fas fa-books" />
												<div className="spacing-h spacing-h_xs" />
												My books
											</div>
										</Link>
										<div className="spacing-h" />
										<Link to="/add">
											<div className="d-flex align-items-center text-button-font">
												<i className="fas fa-plus" />
												<div className="spacing-h spacing-h_xs" />
												Add book
											</div>
										</Link>
									</div>
								</div>
								<div className="col-auto d-none d-lg-block">
									<div className={styles.separator} />
								</div>
							</>
						)}
					</>
				);
			}
			case RequestStatus.ERROR: {
				return <div className="col-auto">error</div>;
			}
		}
	};

	return (
		<div className={styles.searchbar}>
			<div className="row medium-gutters align-items-center flex-lg-row-reverse">
				<div className="col-lg-8">
					<div className="row justify-content-lg-end flex-column-reverse flex-lg-row medium-gutters align-items-lg-center">
						{renderBarItems()}
						{/* this needs to be hidden (and not conditionally rendered) due to the way the Facebook Auth call is done by the component */}
						<div
							hidden={
								// status === RequestStatus.IDLE ||
								status === RequestStatus.LOADING
							}
							className="col-auto"
						>
							{signedIn ? <Profile /> : <Login />}
						</div>
					</div>
				</div>
				{location.pathname === '/' && (
					<div className="col-lg-4">
						<div className="spacing d-lg-none" />
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
				)}
			</div>
		</div>
	);
};

export default withRouter(Searchbar);
