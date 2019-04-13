import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = (props: RouteComponentProps) => {
	const { location } = props;

	return (
		<Link to={{ ...location, pathname: '/' }}>
			<div className={styles.logo}>
				<span className="d-flex align-items-center">
					<span>
						<img
							className={styles.school}
							src={require('../../static/images/kth.png')}
							alt="KTH"
						/>
					</span>
					<span>
						<img
							className={styles.rundbok}
							src={require('../../static/images/rundbok-logo-black.png')}
							alt="Rundbok"
						/>
					</span>
				</span>
			</div>
		</Link>
	);
};

export default withRouter(Logo);
