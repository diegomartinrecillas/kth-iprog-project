import React from 'react';
import Logo from '../logo/Logo';
import Selects from './selects/Selects';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
	return (
		<div className={`${styles.sidebar} container`}>
			<div className="spacing" />
			<Logo />
			<div className="spacing spacing_lg" />
			<Selects />
			<div className="spacing" />
		</div>
	);
};

export default Sidebar;
