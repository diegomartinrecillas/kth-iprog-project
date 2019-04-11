import React, { useContext, ChangeEvent } from 'react';
import styles from './Searchbar.module.scss';
import { Link } from 'react-router-dom';

import { SearchContext } from '../../contexts/Search.context';
import Login from '../login/Login';
import Profile from '../profile/Profile';

const Searchbar = () => {
	const context = useContext(SearchContext);

	let timer: ReturnType<typeof setTimeout>;

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			context.search(value);
			timer = null;
		}, 500);
	};

	const isLogin = true;

	return (
		<div className={styles.searchbar}>
			<div className="row medium-gutters align-items-center">
				<div className="col">
					<div className={styles['form-group']}>
						<i className="far fa-search" />
						<input
							onChange={handleSearch}
							type="text"
							name="search"
							id="search"
							placeholder="Search"
						/>
					</div>
				</div>
				<div className="col">
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
						<div className="col-auto">{isLogin ? <Profile /> : <Login />}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Searchbar;
