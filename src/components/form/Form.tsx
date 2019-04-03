import React from 'react';
import InputField from '../input-field/InputField';
import Button from '../button/Button';
import styles from './Form.module.scss';

const Form = () => {
	return (
		<div className="container">
			<div className="spacing spacing--medium" />
			<div className={styles.form}>
				<div className="d-flex flex-row">
					<div className={styles.cover} />
					<div className="spacing-h spacing-h--large" />
					<div className="d-flex flex-row">
						<div className="spacing-h spacing-h--medium" />
						<div className="d-flex flex-column">
							<div className="d-flex flex-row">
								<InputField name="Programme" type="text" />
								<div className="spacing-h spacing-h--medium" />
								<InputField name="Course" type="text" />
							</div>
							<div className="spacing spacing--medium" />
							<div className="d-flex flex-row">
								<InputField name="Title" type="text" />
								<div className="spacing-h spacing-h--medium" />
								<InputField name="Author" type="text" />
							</div>
							<div className="spacing spacing--medium" />
							<div className="d-flex flex-row">
								<InputField name="Price" type="number" />
								<div className="spacing-h spacing-h--medium" />
								<InputField name="New Price" type="number" />
							</div>
							<div className="spacing spacing--medium" />
							<div className="d-flex flex-row">
								<InputField name="Release Year" type="number" />
								<div className="spacing-h spacing-h--medium" />
								<InputField name="Collect location" type="text" />
							</div>
							<div className="spacing spacing--medium" />
							<InputField name="Description" type="textarea" />
						</div>
						<div className="spacing-h spacing-h--medium" />
						<div className="d-flex flex-column justify-content-between">
							<InputField name="Personal description" type="textarea" />
							<Button text="Add Book" icon="plus" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
