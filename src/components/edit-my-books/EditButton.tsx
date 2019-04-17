import React from 'react';

import styles from './EditButton.module.scss';

const EditButton = () => {
	return (
		<div className={styles.button}>
			<i className={'fas fa-edit'} />
			Edit
		</div>
	);
};

export default EditButton;
