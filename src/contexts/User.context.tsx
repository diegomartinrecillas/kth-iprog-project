import React, { useMemo, PropsWithChildren, useState } from 'react';
import { User } from '../models/User';

export interface UserContextValue {
	uuid: string;
	username: string;
	loggedIn: boolean;
	token: string;
	setUser: (data: User) => void;
}

export const UserContext = React.createContext<UserContextValue>(null);

export const UserConsumer = UserContext.Consumer;

export const UserProvider = (props: PropsWithChildren<{}>) => {
	const [uuid, setUuid] = useState<string>();
	const [username, setUsername] = useState<string>();
	const [loggedIn, setLoggedIn] = useState<boolean>();
	const [token, setToken] = useState<string>();

	const contextValue = useMemo(
		(): UserContextValue => ({
			uuid,
			username,
			loggedIn,
			token,
			setUser: data => {
				setUsername(data.username);
				setUuid(data.uuid);
				setUuid(data.uuid);
			},
		}),
		[uuid]
	);

	return (
		<UserContext.Provider value={contextValue}>
			{props.children}
		</UserContext.Provider>
	);
};
