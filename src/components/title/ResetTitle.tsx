import React, { FunctionComponent, memo } from 'react';
import { AppContext, AppContextValue } from '../../contexts/App.context';
import { withContext } from '../../utils/withContext';

interface OwnProps {
	label?: string;
}

interface ContextProps {
	resetTitle: AppContextValue['resetTitle'];
}

type Props = OwnProps & ContextProps;

// memoization example
const ResetTitle: FunctionComponent<Props> = memo(
	(props: Props) => <button onClick={props.resetTitle}>{props.label}</button>,
	() => true // now that we are getting the context as props we can memoize it to avoid unnessesary renders
);

ResetTitle.defaultProps = {
	label: 'Reset',
};

const mapContextToProps = (context: AppContextValue): ContextProps => ({
	resetTitle: context.resetTitle,
});

export default withContext<AppContextValue, OwnProps>(
	AppContext,
	mapContextToProps
)(ResetTitle);
