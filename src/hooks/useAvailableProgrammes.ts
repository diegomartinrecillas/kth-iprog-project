import { useState, useEffect, useContext } from 'react';
import { NetworkService, RequestStatus } from '../api';
import { Programme } from '../models/Programme';
import { UserContext } from '../contexts';

export const useAvailableProgrammes = () => {
	const { shouldRefresh } = useContext(UserContext);
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
	}, [shouldRefresh]);
	return [programmes, status] as [Programme[], RequestStatus];
};
