import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/User.context';

import Avatar from '../avatar/Avatar';
import styles from './Profile.module.scss';
import { RequestStatus } from '../../api';

const Profile = () => {
	const [dropdown, setDropdown] = useState();
	const { signedIn, user, signOut } = useContext(UserContext);

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};

	return (
		<div className={styles.profile}>
			<div className="d-flex align-items-center">
				{signedIn ? (
					<>
						<Avatar src={user.avatar} />
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
						<div className={`${styles.item} col-md-12`}>My books</div>
						<div className={`${styles.item} col-md-12`} onClick={signOut}>
							Sign out
						</div>
						<div className={`${styles.item} col-md-12`}>Delete account</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
