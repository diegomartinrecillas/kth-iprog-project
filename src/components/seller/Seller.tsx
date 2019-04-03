import React from 'react';

import styles from './Seller.module.scss';

const Seller = () => {
	return (
		<div className="d-flex flex-column">
			<div className={`${styles.seller} d-flex flex-column`}>
				<div className="d-flex mb-3">
					<div className={styles.profile} />
					<div className="ml-3 mr-3">
						<div className={styles.name}>John Walton</div>
						<div className={styles.location}>Kista, Stockholm</div>
					</div>
				</div>
				<div className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ipsa
					dignissimos nesciunt quaerat suscipit fugiat non ea blanditiis quam.
				</div>
			</div>
			<div>
				<button className={`btn ${styles.messenger}`}>
					<div className={styles.icon}>
						<i className="fab fa-facebook-messenger" />
					</div>
					<div>
						<div className={styles.title}>Contact seller</div>
						<div className={styles.legend}>Chat with John</div>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Seller;
