import React, { useMemo, PropsWithChildren, useState } from 'react';
import { NetworkService, RequestStatus } from '../api/';

import { User } from '../models/User';

export interface UserContextValue {
	user: User;
	signedIn: boolean;
	status: NetworkService;
	signIn: (facebookToken: string) => void;
	signOut: () => void;
}

export const UserContext = React.createContext<UserContextValue>(null);

export const UserConsumer = UserContext.Consumer;

export const UserProvider = (props: PropsWithChildren<{}>) => {
	const [user, setUser] = useState<User>(null);
	const [signedIn, setSignedIn] = useState(false);
	const [status, setStatus] = useState(RequestStatus.IDLE);

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
					})
					.catch(() => setStatus(RequestStatus.ERROR));
			},
			signOut: () => {
				setStatus(RequestStatus.LOADING);
				NetworkService.signOut(user.rundbokToken)
					.then(response => {
						setUser(null);
						setSignedIn(false);
						setStatus(RequestStatus.SUCCESS);
					})
					.catch(() => setStatus(RequestStatus.ERROR));
			},
		}),
		[status]
	);

	return (
		<UserContext.Provider value={contextValue}>
			{props.children}
		</UserContext.Provider>
	);
};
