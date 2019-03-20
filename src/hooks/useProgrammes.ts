import { useState, useEffect } from 'react';
import NetworkService from '../api/NetworkService';

export const useProgrammes = () => {
	const [programmes, setProgrammes] = useState();

	useEffect(() => {
		NetworkService.getProgrammes()
			.then(data => setProgrammes(data.programmes))
			.catch(); // TODO: handle error
	}, []);

	return programmes;
};
