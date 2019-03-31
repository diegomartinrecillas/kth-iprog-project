import React from 'react';
import styles from './Searchbar.module.scss';
import { Link } from 'react-router-dom';

const Searchbar = () => {
	return (
		<div className={styles.searchbar}>
			<div className="row medium-gutters align-items-center">
				<div className="col-7">
					<div className={styles['form-group']}>
						<i className="far fa-search" />
						<input type="text" name="search" id="search" placeholder="Search" />
					</div>
				</div>
				<div className="col-5">
					<div className="row justify-content-end medium-gutters align-items-center">
						<div className="col-auto">
							<div className="d-flex">
								<Link to="/edit">
									<i className="fas fa-plus" />
								</Link>
								<div className="spacing-h spacing-h_sm" />
								<a href="">
									<i className="fas fa-bookmark" />
								</a>
								<div className="spacing-h spacing-h_sm" />
								<a href="">
									<i className="fas fa-bell" />
								</a>
							</div>
						</div>
						<div className="col-auto">
							<div className={styles.separator} />
						</div>
						<div className="col-auto">
							<div className={styles['profile-image']} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Searchbar;
