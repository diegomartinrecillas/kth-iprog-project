import { useState, useEffect } from 'react';
import { NetworkService, RequestStatus } from '../api';
import { Programme } from '../models/Programme';

export const useAvailableProgrammes = () => {
	const [programmes, setProgrammes] = useState();
	const [status, setStatus] = useState(RequestStatus.IDLE);

	useEffect(() => {
		setStatus(RequestStatus.LOADING);
		NetworkService.getAvailableProgrammes()
			.then(data => {
				setProgrammes(data);
				setStatus(RequestStatus.SUCCESS);
			})
			.catch(() => setStatus(RequestStatus.ERROR));
	}, []);
	return [programmes, status] as [Programme[], RequestStatus];
};
