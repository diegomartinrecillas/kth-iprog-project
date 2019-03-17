import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
	<div className="logo">
		<Link to="/">
			<div className="row no-gutters align-items-center">
				<div className="col-3">
					<img src={require('../static/images/kth.png')} alt="KTH" />
				</div>
				<div className="col-9">
					<img
						className="logo__rundbok"
						src={require('../static/images/rundbok-logo-black.svg')}
						alt="Rundbok"
					/>
				</div>
			</div>
		</Link>
	</div>
);

export default Logo;
