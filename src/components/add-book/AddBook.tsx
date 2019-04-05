import React from 'react';

import Form from '../form/Form';

const AddBook = () => {
	return (
		<>
			<div className="container">
				<div className="text-label text-label_lg">ADD BOOK</div>
				<div className="spacing spacing--medium" />
				<Form />
			</div>
		</>
	);
};

export default AddBook;
