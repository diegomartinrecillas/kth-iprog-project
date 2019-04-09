import React from 'react';
import InputField from '../input-field/InputField';
import Button from '../button/Button';
import styles from './Form.module.scss';

interface Props {
	add?: boolean;
}

const Form = (props: Props) => {
	const { add } = props;
	return (
		<div className={styles.form}>
			<div className="row">
				<div className="col">
					<div className={styles.cover} />
				</div>
				<div className="col-lg-9 col-sm-12">
					<div className="row">
						<div className="col-lg-8 col-sm-12">
							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField name="Programme" type="text" />
								</div>

								<div className="col-md-6">
									<InputField name="Course" type="text" />
								</div>
							</div>

							<div className="spacing" />

							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField name="Title" type="text" />
								</div>

								<div className="col-md-6">
									<InputField name="Author" type="text" />
								</div>
							</div>

							<div className="spacing" />

							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField name="Price" type="number" />
								</div>

								<div className="col-md-6">
									<InputField name="New Price" type="number" />
								</div>
							</div>

							<div className="spacing" />

							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField name="Release Year" type="number" />
								</div>

								<div className="col-md-6">
									<InputField name="Collect location" type="text" />
								</div>
							</div>

							<div className="spacing" />

							<InputField name="Description" type="textarea" />
						</div>
						<div className="col-lg-4">
							<InputField name="Personal description" type="textarea" />

							<div className="spacing" />

							<Button
								text={add ? 'Add book' : 'Edit book'}
								icon={add ? 'plus' : 'edit'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
