import React, { useMemo, PropsWithChildren, useState } from 'react';

export interface AppContextValue {
	title: string;
}

export const AppContext = React.createContext<AppContextValue>(null);

export const AppConsumer = AppContext.Consumer;

export const AppProvider = (props: PropsWithChildren<{}>) => {
	const [state, setState] = useState({
		title: 'Rundbok',
	});
	const contextValue = useMemo(
		(): AppContextValue => ({
			title: state.title,
		}),
		[state.title]
	);

	return (
		<AppContext.Provider value={contextValue}>
			{props.children}
		</AppContext.Provider>
	);
};
