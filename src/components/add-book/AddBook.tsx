import React from 'react';

import Form from '../form/Form';

const AddBook = () => {
	return (
		<>
			<div className="container">
				<div className="spacing spacing--large" />
				<div className="text-label text-label--large">ADD BOOK</div>
			</div>
			<Form />
			<div className="spacing spacing--large" />
		</>
	);
};

export default AddBook;
