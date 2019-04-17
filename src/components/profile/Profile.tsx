import React, { useState, useContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { UserContext } from '../../contexts/User.context';

import Avatar from '../avatar/Avatar';
import styles from './Profile.module.scss';
import { RequestStatus, NetworkService } from '../../api';

const Profile = (props: RouteComponentProps) => {
	const { history } = props;
	const { signedIn, user, signOut } = useContext(UserContext);
	const [status, setStatus] = useState(RequestStatus.IDLE);
	const { rundbokToken } = user;

	const deleteAccount = () => {
		setStatus(RequestStatus.LOADING);
		NetworkService.removeStudent(rundbokToken)
			.then(response => {
				history.replace('/');
				setStatus(RequestStatus.SUCCESS);
			})
			.catch(() => {
				setStatus(RequestStatus.ERROR);
			});
	};

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
					<a onClick={deleteAccount} className="text-danger font-weight-medium">
						<i className="far fa-trash text-danger mr-2" />
						Remove account
					</a>
				</div>
			</div>
			<div className="spacing d-lg-none" />
		</div>
	);
};

export default withRouter(Profile);
