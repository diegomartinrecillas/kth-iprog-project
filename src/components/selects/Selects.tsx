import React, { useState } from 'react';
import { useAvailableProgrammes } from '../../hooks/useAvailableProgrammes';
import { RequestStatus } from '../../api';

import styles from './Selects.module.scss';
import { number } from 'prop-types';
import { Programme } from '../../models/Programme';
import { Course } from '../../models/Course';

interface Props {
	programmes?: Programme[];
	courses?: Course[];
}

const Selects = (props: Props) => {
	const [programmes, programmesStatus] = useAvailableProgrammes();
	const [courses, setCourses] = useState([]);

	if (
		programmesStatus === RequestStatus.IDLE ||
		programmesStatus === RequestStatus.LOADING ||
		!courses
	) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.selects}>
			{programmes.length > 0 && (
				<>
					<div className="text-label">PROGRAMMES</div>
					<div className="spacing spacing_xs" />
				</>
			)}
			{programmes &&
				programmes.map((programme: Programme, index: number) => {
					return (
						<p
							className="link"
							key={index}
							onClick={event => {
								setCourses(programme.courses);
							}}
						>
							{programme.name}
						</p>
					);
				})}

			{courses.length > 0 && (
				<>
					<div className="spacing spacing--medium" />
					<div className="text-label">COURSES</div>
					<div className="spacing spacing_xs" />
				</>
			)}

			{courses &&
				courses.map((course: Course, index: number) => {
					return (
						<p className="link" key={index}>
							{course.name}
						</p>
					);
				})}
		</div>
	);
};

export default Selects;
