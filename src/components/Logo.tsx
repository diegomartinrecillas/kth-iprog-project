import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
	<Link to="/">
		<div className="logo">
			<span className="d-flex align-items-center">
				<span>
					<img
						className="logo__school"
						src={require('../static/images/kth.png')}
						alt="KTH"
					/>
				</span>
				<span>
					<img
						className="logo__rundbok"
						src={require('../static/images/rundbok-logo-black.png')}
						alt="Rundbok"
					/>
				</span>
			</span>
		</div>
	</Link>
);

export default Logo;
