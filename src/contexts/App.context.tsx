import React, { useReducer, useMemo, PropsWithChildren, useState } from 'react';

export enum AppActionType {
	'SET',
	'RESET',
}

interface AppAction {
	type: AppActionType;
	title?: string;
}

interface AppState {
	readonly title: string;
}

const initialState: AppState = {
	title: 'Hello World',
};

const reducer = (state: AppState, action: AppAction) => {
	switch (action.type) {
		case AppActionType.SET:
			return { ...state, title: action.title };
		case AppActionType.RESET:
			return { ...initialState };
		default:
			return state;
	}
};

export interface AppContextValue {
	title: string;
	setTitle: (title: string) => void;
	resetTitle: () => void;
}

export const AppContext = React.createContext<AppContextValue>(null);

export const AppConsumer = AppContext.Consumer;

export const AppProvider = (props: PropsWithChildren<{}>) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const contextValue = useMemo(
		(): AppContextValue => ({
			title: state.title,
			setTitle: (title: string) => dispatch({ type: AppActionType.SET, title }),
			resetTitle: () => dispatch({ type: AppActionType.RESET }),
		}),
		[state.title]
	);

	return (
		<AppContext.Provider value={contextValue}>
			{props.children}
		</AppContext.Provider>
	);
};
