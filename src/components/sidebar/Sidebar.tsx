import React from 'react';
import Logo from '../logo/Logo';
import Selects from '../selects/Selects';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
	return (
		<div className={`${styles.sidebar} container`}>
			<div className="spacing" />
			<div className="d-flex" />
			<Logo />
			<span className="d-none d-lg-block">
				<div className="spacing spacing_lg" />
				<Selects />
				<div className="spacing" />
			</span>
		</div>
	);
};

export default Sidebar;
