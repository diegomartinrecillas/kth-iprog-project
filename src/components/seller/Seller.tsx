import React from 'react';

import styles from './Seller.module.scss';
import { Student } from '../../models/Student';

interface Props {
	student: Student;
}

const Seller = (props: Props) => {
	const { student } = props;
	return (
		<div className="d-flex flex-column">
			<div className={`${styles.seller} d-flex flex-column`}>
				<div className="d-flex mb-3">
					<img className={styles.profile} src={student.avatar} />
					<div className="ml-3 mr-3">
						<div className={styles.name}>{student.fullName}</div>
						<div className={styles.location}>{student.location}</div>
					</div>
				</div>
			</div>
			<div>
				<a
					className={styles.messenger}
					target="_blank"
					href={`mailto:${student.email}`}
				>
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
