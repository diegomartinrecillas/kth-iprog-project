import React, { useContext } from 'react';
import { AppContext } from '../../contexts/App.context';

const ResetTitle = () => {
	const { resetTitle } = useContext(AppContext);

	return <button onClick={resetTitle}>RESET</button>;
};

export default ResetTitle;
