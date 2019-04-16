import { useState, useEffect, Dispatch } from 'react';
import { NetworkService, RequestStatus } from '../api/';
import { KthCourse } from '../models/KthCourse';

export const useCourses = () => {
	const [courses, setCourses] = useState<KthCourse[]>();
	const [status, setStatus] = useState(RequestStatus.IDLE);
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (!query) return;
		setStatus(RequestStatus.LOADING);
		NetworkService.getCourses(query)
			.then(data => {
				setCourses(data['searchHits'].map((hit: any) => hit.course));
				setStatus(RequestStatus.SUCCESS);
			})
			.catch(() => setStatus(RequestStatus.ERROR));
	}, [query]);
	return [courses, status, setQuery] as [
		KthCourse[],
		RequestStatus,
		Dispatch<React.SetStateAction<string>>
	];
};
