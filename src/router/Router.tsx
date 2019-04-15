import React, { PropsWithChildren } from 'react';
import { Router as ReactRouter } from 'react-router-dom';
import history from './history';

const Router = (props: PropsWithChildren<{}>) => {
	return <ReactRouter history={history}>{props.children}</ReactRouter>;
};

export default Router;
