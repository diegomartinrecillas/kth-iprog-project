import React from 'react';

import Avatar from '../avatar/Avatar';

import styles from './Seller.module.scss';
import { Student } from '../../models/Student';

interface Props {
	student: Student;
	personalDescription: string;
}

const Seller = (props: Props) => {
	const { student, personalDescription } = props;
	return (
		<div className="d-flex flex-column">
			<div className={`${styles.seller} d-flex flex-column`}>
				<div className="d-flex">
					<Avatar src={student.avatar} />
					<div className="ml-3 mr-3">
						<div className={styles.name}>{student.fullName}</div>
						<div className={styles.location}>{student.location}</div>
					</div>
				</div>
				{personalDescription && (
					<div className="mt-3">
						<div className={styles.location}>{personalDescription}</div>
					</div>
				)}
			</div>
			<div>
				<a className={styles.messenger} href={`mailto:${student.email}`}>
					<button className="btn">
						<div className={styles.icon}>
							<i className="fas fa-paper-plane" />
						</div>
						<div>
							<div className={styles.title}>Contact seller</div>
							<div className={styles.legend}>Chat with {student.firstName}</div>
						</div>
					</button>
				</a>
			</div>
		</div>
	);
};

export default Seller;
