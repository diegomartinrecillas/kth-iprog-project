import React, { useState } from 'react';
import { useProgrammes } from '../../../hooks/useProgrammes';

import styles from './Selects.module.scss';

interface Props {
	programmes?: any;
	courses?: any;
}

const Selects = (props: Props) => {
	const programmes = useProgrammes();
	const [courses, setCourses] = useState([]);

	if (!programmes || !courses) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.selects}>
			<a href="">Handpicked</a>
			<div className="spacing spacing_sm" />
			<a className="active" href="">
				Latest Listings
			</a>
			<div className="spacing spacing_lg" />
			<div className="text-label">PROGRAMMES</div>
			<div className="spacing spacing_xs" />
			<select
				className="sidebar-selects__custom-select custom-select"
				id="programme-select"
			>
				{programmes &&
					programmes.map((programme: any, index: number) => {
						return (
							<option key={index} value="">
								{programme.title.en}
							</option>
						);
					})}
			</select>
			<div className="spacing spacing--medium" />
			<div className="text-label">COURSES</div>
			<div className="spacing spacing_xs" />
			<select
				className={`${styles['custom-select']} custom-select`}
				id="programme-select"
			>
				{courses &&
					courses.map((course: any, index: number) => {
						return (
							<option key={index} value="">
								{course.name}
							</option>
						);
					})}
			</select>
		</div>
	);
};

export default Selects;
