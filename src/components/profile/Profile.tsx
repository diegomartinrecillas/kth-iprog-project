import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/User.context';

import Avatar from '../avatar/Avatar';
import styles from './Profile.module.scss';
import { RequestStatus } from '../../api';

const Profile = () => {
	const { signedIn, user, signOut } = useContext(UserContext);

	return (
		<div className={styles.profile}>
			<div className="d-flex align-items-center">
				{signedIn ? (
					<div className="d-flex align-items-center">
						<Avatar src={user.avatar} />
						<div className="spacing spacing-h_xs" />
						<i className="fa fa-chevron-down" />
					</div>
				) : (
					<div>sign in</div>
				)}
			</div>
			<div className={styles.dropdown}>
				<div className={styles.links}>
					<a>My books</a>
					<a onClick={signOut}>Sign out</a>
					<div className={styles.separator} />
					<a className="text-danger">Remove account</a>
				</div>
			</div>
		</div>
	);
};

export default Profile;
