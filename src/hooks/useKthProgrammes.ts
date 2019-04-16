import { useState, useEffect } from 'react';
import { NetworkService, RequestStatus } from '../api';
import { KthProgramme } from '../models/KthProgramme';

export const useProgrammes = () => {
	const [programmes, setProgrammes] = useState([]);
	const [status, setStatus] = useState(RequestStatus.IDLE);

	useEffect(() => {
		setStatus(RequestStatus.LOADING);
		NetworkService.getProgrammes()
			.then(data => {
				setProgrammes(data);
				setStatus(RequestStatus.SUCCESS);
			})
			.catch(() => setStatus(RequestStatus.ERROR));
	}, []);
	return [programmes, status] as [KthProgramme[], RequestStatus];
};
