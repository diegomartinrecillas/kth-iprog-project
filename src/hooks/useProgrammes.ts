import { useState, useEffect } from 'react';
import { NetworkService, RequestStatus } from '../api/';

export const useProgrammes = () => {
	const [programmes, setProgrammes] = useState();
	const [status, setStatus] = useState(RequestStatus.IDLE);

	useEffect(() => {
		setStatus(RequestStatus.LOADING);
		NetworkService.getProgrammes()
			.then(data => {
				setProgrammes(data.programmes);
				setStatus(RequestStatus.SUCCESS);
			})
			.catch(() => setStatus(RequestStatus.ERROR));
	}, []);

	return [programmes, status];
};
