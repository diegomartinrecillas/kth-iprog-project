import React, { useMemo, PropsWithChildren, useState } from 'react';
import { NetworkService, RequestStatus } from '../api/';
import { User } from '../models/User';
import history from '../router/history';

export interface UserContextValue {
	user: User;
	signedIn: boolean;
	status: NetworkService;
	signIn: (facebookToken: string) => void;
	signOut: () => void;
	refresh: () => void;
	shouldRefresh: { refresh: boolean };
}

export const UserContext = React.createContext<UserContextValue>(null);

export const UserConsumer = UserContext.Consumer;

export const UserProvider = (props: PropsWithChildren<{}>) => {
	const storedUser = localStorage.getItem('user');
	const [shouldRefresh, setRefresh] = useState({ refresh: false });
	const [user, setUser] = useState<User>(new User(JSON.parse(storedUser)));
	const [signedIn, setSignedIn] = useState(storedUser ? true : false);
	const [status, setStatus] = useState(
		storedUser ? RequestStatus.SUCCESS : RequestStatus.IDLE
	);

	const contextValue = useMemo(
		(): UserContextValue => ({
			user,
			status,
			signedIn,
			signIn: facebookToken => {
				setStatus(RequestStatus.LOADING);
				NetworkService.signIn(facebookToken)
					.then(response => {
						setUser(new User(response));
						setSignedIn(true);
						setStatus(RequestStatus.SUCCESS);
						localStorage.setItem('user', JSON.stringify(response));
					})
					.catch(() => setStatus(RequestStatus.ERROR));
			},
			signOut: () => {
				localStorage.removeItem('user');
				setStatus(RequestStatus.LOADING);
				history.push('/');
				NetworkService.signOut(user.rundbokToken)
					.then(response => {
						setUser(null);
						setSignedIn(false);
						setStatus(RequestStatus.SUCCESS);
					})
					.catch(() => setStatus(RequestStatus.ERROR));
			},
			refresh: () => setRefresh({ refresh: true }),
			shouldRefresh,
		}),
		[status, shouldRefresh]
	);

	return (
		<UserContext.Provider value={contextValue}>
			{props.children}
		</UserContext.Provider>
	);
};
