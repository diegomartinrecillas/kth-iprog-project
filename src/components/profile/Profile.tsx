import React, { useState } from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
	const [dropdown, setDropdown] = useState();

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};

	return (
		<div className={styles.profile}>
			<div className="d-flex align-items-center">
				<div className={styles.image} />
				<div className="spacing spacing-h_xs" />
				<i
					className={dropdown ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
					onClick={toggleDropdown}
				/>
			</div>
			{dropdown && (
				<div className={styles.dropdown}>
					<div className="row">
						<a href="" className="col-md-12">
							My books
						</a>
						<a href="" className="col-md-12">
							Sign out
						</a>
						<a href="" className="col-md-12">
							Delete account
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
