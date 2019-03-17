import React, { useContext } from 'react';
import { AppContext } from '../../contexts/App.context';

const Title = () => {
	const { title } = useContext(AppContext);
	return <div>{title}</div>;
};

export default Title;
