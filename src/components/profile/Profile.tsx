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
					<b>{user.fullName}</b>
					<div className={styles.separator} />
					<a className="mt-2 font-weight-medium" onClick={signOut}>
						<i className="far fa-sign-out mr-2" />
						Sign out
					</a>
					<a className="text-danger font-weight-medium">
						<i className="far fa-trash text-danger mr-2" />
						Remove account
					</a>
				</div>
			</div>
			<div className="spacing d-lg-none" />
		</div>
	);
};

export default Profile;
