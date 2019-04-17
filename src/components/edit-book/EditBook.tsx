import React from 'react';

import Form from '../form/Form';

const EditBook = () => {
	return (
		<>
			<div className="container">
				<div className="d-flex">
					<div className="text-label text-label_lg">EDIT BOOK</div>
					<div className="spacing-h" />
					<a className="text-danger font-weight-bold">
						<i className="fas fa-trash mr-2" />
						Remove book
					</a>
				</div>
				<div className="spacing spacing--medium" />
				<Form />
			</div>
			<div className="spacing spacing--large" />
		</>
	);
};

export default EditBook;
