import React from 'react';

const Searchbar = () => {
	return (
		<div className="searchbar">
			<div className="row medium-gutters align-items-center">
				<div className="col-7">
					<div className="searchbar__form-group">
						<i className="far fa-search" />
						<input type="text" name="search" id="search" placeholder="Search" />
					</div>
				</div>
				<div className="col-5">
					<div className="row justify-content-end medium-gutters align-items-center">
						<div className="col-auto">
							<div className="d-flex">
								<a href="">
									<i className="fas fa-bookmark" />
								</a>
								<div className="spacing-h spacing-h--small" />
								<a href="">
									<i className="fas fa-bell" />
								</a>
							</div>
						</div>
						<div className="col-auto">
							<div className="searchbar searchbar__separator" />
						</div>
						<div className="col-auto">
							<div className="searchbar searchbar__profile-image" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Searchbar;
