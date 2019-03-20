import React, { useContext, Context } from 'react';

export function withContext<T, P = {}>(
	context: Context<T>,
	mapContextToProps?: (context: T) => Partial<T>
): (
	WrappedComponent: (props: any) => JSX.Element
) => (props: P) => JSX.Element {
	return WrappedComponent => (props: P) => {
		const contextValue = useContext(context);
		const contextPartial = mapContextToProps(contextValue);
		props = { ...props, ...contextPartial };
		return <WrappedComponent {...props} />;
	};
}
