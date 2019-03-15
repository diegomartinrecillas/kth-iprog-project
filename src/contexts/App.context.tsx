import React, { useReducer, PropsWithChildren } from 'react';

export enum AppActionType {
	'SET',
	'RESET',
}

interface IAppAction {
	type: AppActionType;
	title?: string;
}

interface IAppState {
	readonly title: string;
}

const initialState: IAppState = {
	title: 'Hello World',
};

interface IAppContext {
	title: string;
	setTitle: (title: string) => void;
	resetTitle: () => void;
}

const reducer = (state: IAppState, action: IAppAction) => {
	switch (action.type) {
		case AppActionType.SET:
			return { ...state, title: action.title };
		case AppActionType.RESET:
			return { ...initialState };
		default:
			return state;
	}
};

export const AppContext = React.createContext<IAppContext>(null);

export const AppConsumer = AppContext.Consumer;

export const AppProvider = (props: PropsWithChildren<{}>) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const getValue = (): IAppContext => ({
		title: state.title,
		setTitle: (title: string) => dispatch({ type: AppActionType.SET, title }),
		resetTitle: () => dispatch({ type: AppActionType.RESET }),
	});

	return (
		<AppContext.Provider value={getValue()}>
			{props.children}
		</AppContext.Provider>
	);
};
