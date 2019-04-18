import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import { SearchContext } from '../../contexts';

const Logo = () => {
	const { search } = useContext(SearchContext);
	return (
		<Link
			to={'/'}
			onClick={() =>
				search({
					query: '',
					programmeId: '',
					courseId: '',
				})
			}
		>
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

export default Logo;
