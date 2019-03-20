import React, { useContext, Context } from 'react';

/**
 * Always prefer HOOKs over HOCs! Only use case for this is when we want to memoize part of a context.
 * Due to current limitations in the Context API there is no way easily subscribe to a slice of it's
 * state, so any change in the context value will result in a rerender of all connected components!
 */
export function withContext<T, P = {}>(
	context: Context<T>,
	mapContextToProps?: (context: T) => Partial<T>
): (
	WrappedComponent: (props: any) => JSX.Element
) => (props: P) => JSX.Element {
	return WrappedComponent => (props: P) => {
		const contextValue = useContext(context);
		const contextPartial = mapContextToProps
			? mapContextToProps(contextValue)
			: contextValue;
		props = { ...props, ...contextPartial };
		return <WrappedComponent {...props} />;
	};
}
