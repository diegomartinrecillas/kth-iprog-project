import React, { useState, useContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import qs from 'query-string';

import { useAvailableProgrammes } from '../../hooks/useAvailableProgrammes';
import { RequestStatus } from '../../api';
import { SearchContext } from '../../contexts';

import styles from './Selects.module.scss';
import { Programme } from '../../models/Programme';
import { Course } from '../../models/Course';

const Selects = (props: RouteComponentProps) => {
	const { history } = props;
	const { search } = useContext(SearchContext);
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
			{programmes.length > 0 && !courses.length && (
				<>
					<div className="text-label">PROGRAMMES</div>
					<div className="spacing spacing_xs" />
				</>
			)}
			{programmes &&
				!courses.length &&
				programmes.map((programme: Programme, index: number) => {
					return (
						<p
							className="link"
							key={index}
							onClick={_ => {
								setCourses(programme.courses);
								// update the search params to reflect the search state and redirect to the home page
								history.push({
									search: qs.stringify({
										...qs.parse(location.search),
										programme_id: programme.id,
									}),
									pathname: '/',
								});
								search({ programmeId: programme.id.toString() });
							}}
						>
							{programme.name}
						</p>
					);
				})}

			{courses.length > 0 && (
				<>
					<div className="text-label">COURSES</div>
					<div className="spacing spacing_xs" />
				</>
			)}

			{courses &&
				courses.map((course: Course, index: number) => {
					return (
						<p
							className="link"
							key={index}
							onClick={_ => {
								// update the search params to reflect the search state and redirect to the home page
								history.push({
									search: qs.stringify({
										...qs.parse(location.search),
										course_id: course.id,
									}),
									pathname: '/',
								});
								search({ courseId: course.id.toString() });
							}}
						>
							{course.name}
						</p>
					);
				})}

			{courses.length > 0 && (
				<span>
					<div className="spacing spacing--medium" />
					<div className="back-button">
						<a
							onClick={() => {
								// update the search params to reflect the search state and redirect to the home page
								history.push({
									search: qs.stringify({
										...qs.parse(location.search),
										course_id: '',
									}),
									pathname: '/',
								});
								search({ courseId: '', programmeId: '' });
								setCourses([]);
							}}
						>
							<i className="fas fa-arrow-left" /> <span>Back</span>
						</a>
					</div>
				</span>
			)}
		</div>
	);
};

export default withRouter(Selects);
