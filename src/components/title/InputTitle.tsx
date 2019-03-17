import React, { useContext } from 'react';
import { AppContext } from '../../contexts/App.context';

const InputTitle = () => {
	const { title, setTitle } = useContext(AppContext);
	return (
		<input value={title} onChange={e => setTitle(e.currentTarget.value)} />
	);
};

export default InputTitle;
