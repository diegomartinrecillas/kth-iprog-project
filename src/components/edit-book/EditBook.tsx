import React from 'react';

import Form from '../form/Form';

const EditBook = () => {
	return (
		<>
			<div className="container">
				<div className="text-label text-label_lg">EDIT BOOK</div>
				<div className="spacing spacing--medium" />
				<Form />
			</div>
			<div className="spacing spacing--large" />
		</>
	);
};

export default EditBook;
