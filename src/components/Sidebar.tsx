import React, { FunctionComponent } from 'react';
import Logo from './Logo';
import SidebarSelects from './SidebarSelects';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="spacing" />
			<Logo />
			<div className="spacing spacing_lg" />
			<SidebarSelects />
			<div className="spacing" />
		</div>
	);
};

export default Sidebar;
