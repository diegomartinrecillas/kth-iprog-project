import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/User.context';

import Avatar from '../avatar/Avatar';
import styles from './Profile.module.scss';

const Profile = () => {
	const [dropdown, setDropdown] = useState();
	const { loggedIn } = useContext(UserContext);

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};

	return (
		<div className={styles.profile}>
			<div className="d-flex align-items-center">
				{loggedIn ? (
					<>
						<Avatar src="foo" />
						<div className="spacing spacing-h_xs" />
						<i
							className={dropdown ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
							onClick={toggleDropdown}
						/>
					</>
				) : (
					<div>sign in</div>
				)}
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
